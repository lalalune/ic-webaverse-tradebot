import * as THREE from "three";
import metaversefile from "metaversefile";
const {
  useApp,
  useFrame,
  useActivate,
  useLoaders,
  usePhysics,
  useWorld,
  useDefaultModules,
  useCleanup,
} = metaversefile;
import game from '../../game.js';

const baseUrl = import.meta.url.replace(/(\/)[^\/\\]*$/, "$1");

export default (e) => {
  const app = useApp();
  const physics = usePhysics();

  app.name = "trade-console";

  let openTradeModal = null;
  let live = false;
  useActivate(() => {
    console.log("active is alive");
    live = !live;
    console.log("active live", live);
    openTradeModal && openTradeModal(live);
  });

  let reactApp = null;
  let physicsIds = [];
  e.waitUntil(
    (async () => {
      const u = `${baseUrl}console.glb`;
      let o = await new Promise((accept, reject) => {
        const { gltfLoader } = useLoaders();
        gltfLoader.load(u, accept, function onprogress() {}, reject);
      });
      // const {animations} = o;
      o = o.scene;
      app.add(o);

      openTradeModal = async (showModal) => {
        if (showModal) {
          const getState = game.toggleTrade();
          if(getState === "server"){
            const u = `${baseUrl}trade-banner.react`;
            reactApp = await metaversefile.createAppAsync({
              start_url: u,
            });
          // } else {
          //     reactApp.destroy();
          //     return false;
            console.log(reactApp);
            reactApp.position.y = 2.1;
            reactApp.rotation.y = -1.57;
            app.add(reactApp);
            reactApp.updateMatrixWorld();
          } else if (getState === "client") {
            const u = `${baseUrl}trade-waiting-banner.react`;
            reactApp = await metaversefile.createAppAsync({
              start_url: u,
            });
          // } else {
          //     reactApp.destroy();
          //     return false;
            console.log(reactApp);
            reactApp.position.y = 2.1;
            reactApp.rotation.y = -1.57;
            app.add(reactApp);
            reactApp.updateMatrixWorld();
          }
        }
      }
      

      const physicsId = physics.addGeometry(o);
      physicsIds.push(physicsId);
    })()
  );

  useCleanup(() => {
    live = false;
    reactApp && reactApp.destroy();
    for (const physicsId of physicsIds) {
      physics.removeGeometry(physicsId);
    }
  });

  return app;
};
