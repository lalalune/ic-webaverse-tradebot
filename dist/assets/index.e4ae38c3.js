import { C as Certificate, A as AgentError, t as toHex, l as lebDecode, P as PipeArrayBuffer, d as decode, a as Principal } from "./index.e6461292.js";
const request = async (options) => {
  const { canisterId, agent, paths } = options;
  const uniquePaths = [...new Set(paths)];
  const encodedPaths = uniquePaths.map((path) => {
    return encodePath(path, canisterId);
  });
  const status = /* @__PURE__ */ new Map();
  const promises = uniquePaths.map((path, index) => {
    return (async () => {
      var _a;
      try {
        const response = await agent.readState(canisterId, {
          paths: [encodedPaths[index]]
        });
        const cert = await Certificate.create({
          certificate: response.certificate,
          rootKey: agent.rootKey,
          canisterId
        });
        const data = cert.lookup(encodePath(uniquePaths[index], canisterId));
        if (!data) {
          console.warn(`Expected to find result for path ${path}, but instead found nothing.`);
          if (typeof path === "string") {
            status.set(path, null);
          } else {
            status.set(path.key, null);
          }
        } else {
          switch (path) {
            case "time": {
              status.set(path, decodeTime(data));
              break;
            }
            case "controllers": {
              status.set(path, decodeControllers(data));
              break;
            }
            case "module_hash": {
              status.set(path, decodeHex(data));
              break;
            }
            case "candid": {
              status.set(path, new TextDecoder().decode(data));
              break;
            }
            default: {
              if (typeof path !== "string" && "key" in path && "path" in path) {
                switch (path.decodeStrategy) {
                  case "raw":
                    status.set(path.key, data);
                    break;
                  case "leb128": {
                    status.set(path.key, decodeLeb128(data));
                    break;
                  }
                  case "cbor": {
                    status.set(path.key, decodeCbor(data));
                    break;
                  }
                  case "hex": {
                    status.set(path.key, decodeHex(data));
                    break;
                  }
                  case "utf-8": {
                    status.set(path.key, decodeUtf8(data));
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        if ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes("Invalid certificate")) {
          throw new AgentError(error.message);
        }
        if (typeof path !== "string" && "key" in path && "path" in path) {
          status.set(path.key, null);
        } else {
          status.set(path, null);
        }
        console.group();
        console.warn(`Expected to find result for path ${path}, but instead found nothing.`);
        console.warn(error);
        console.groupEnd();
      }
    })();
  });
  await Promise.all(promises);
  return status;
};
const encodePath = (path, canisterId) => {
  const encoder = new TextEncoder();
  const encode = (arg) => {
    return new DataView(encoder.encode(arg).buffer).buffer;
  };
  const canisterBuffer = new DataView(canisterId.toUint8Array().buffer).buffer;
  switch (path) {
    case "time":
      return [encode("time")];
    case "controllers":
      return [encode("canister"), canisterBuffer, encode("controllers")];
    case "module_hash":
      return [encode("canister"), canisterBuffer, encode("module_hash")];
    case "subnet":
      return [encode("subnet")];
    case "candid":
      return [encode("canister"), canisterBuffer, encode("metadata"), encode("candid:service")];
    default: {
      if ("key" in path && "path" in path) {
        if (typeof path["path"] === "string" || path["path"] instanceof ArrayBuffer) {
          const metaPath = path.path;
          const encoded = typeof metaPath === "string" ? encode(metaPath) : metaPath;
          return [encode("canister"), canisterBuffer, encode("metadata"), encoded];
        } else {
          return path["path"];
        }
      }
    }
  }
  throw new Error(`An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${path} was formatted correctly.`);
};
const decodeHex = (buf) => {
  return toHex(buf);
};
const decodeLeb128 = (buf) => {
  return lebDecode(new PipeArrayBuffer(buf));
};
const decodeCbor = (buf) => {
  return decode(buf);
};
const decodeUtf8 = (buf) => {
  return new TextDecoder().decode(buf);
};
const decodeTime = (buf) => {
  const decoded = decodeLeb128(buf);
  return new Date(Number(decoded / BigInt(1e6)));
};
const decodeControllers = (buf) => {
  const [tag, ...controllersRaw] = decodeCbor(buf);
  return controllersRaw.map((buf2) => {
    return Principal.fromUint8Array(new Uint8Array(buf2));
  });
};
export {
  encodePath,
  request
};
