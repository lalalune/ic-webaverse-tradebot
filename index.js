import metaversefile from 'metaversefile';
const {
  useApp,
  useFrame,
  useActivate,
  useLoaders,
  usePhysics,
  useCleanup,
} = metaversefile;

const baseUrl = import.meta.url.replace(/(\/)[^\/\\]*$/, '$1');

export default e => {
  const app = useApp();
  const physics = usePhysics();

  app.name = 'trade-console';

  const activateCb = null;
  const frameCb = null;
  useActivate(() => {
    activateCb && activateCb();
  });
  useFrame(() => {
    frameCb && frameCb();
  });

  let live = true;
  let reactApp = null;
  const physicsIds = [];
  e.waitUntil(
    (async () => {
      const u = `${baseUrl}console.glb`;
      let o = await new Promise((accept, reject) => {
        const {gltfLoader} = useLoaders();
        gltfLoader.load(u, accept, function onprogress() {}, reject);
      });
      if (!live) {
        o.destroy();
        return;
      }
      const {animations} = o;
      o = o.scene;
      app.add(o);

      {
        const u = `${baseUrl}inventory.react`;
        reactApp = await metaversefile.createAppAsync({
          start_url: u,
        });
        if (!live) {
          reactApp.destroy();
          return;
        }
        reactApp.position.y = 2.05;
        reactApp.rotation.y = Math.PI / 2;
        reactApp.scale.set(2, 2, 2);
        app.add(reactApp);
        reactApp.updateMatrixWorld();
      }

      const physicsId = physics.addGeometry(o);
      physicsIds.push(physicsId);
    })(),
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
