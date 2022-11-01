import * as THREE from 'three';
// import easing from './easing.js'
import metaversefile from 'metaversefile';
const {
  useApp,
  useFrame,
  useActivate,
  useLoaders,
  usePhysics,
  addTrackedApp,
  useDropManager,
  useDefaultModules,
  useCleanup,
} = metaversefile;

const baseUrl = import.meta.url.replace(/(\/)[^\/\\]*$/, '$1');

export default e => {
  const app = useApp();
  const physics = usePhysics();
  const dropManager = useDropManager();

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
        reactApp.position.y = 2;
        reactApp.rotation.y = Math.PI / 2;
        reactApp.scale.set(2, 2, 2);
        app.add(reactApp);
        reactApp.updateMatrixWorld();
      }

      const physicsId = physics.addGeometry(o);
      physicsIds.push(physicsId);

      // const mixer = new THREE.AnimationMixer(o);
      // const actions = animations.map(animationClip =>
      //   mixer.clipAction(animationClip),
      // );

      // const startOffset = 1;
      // const endOffset = 2;
      // const dropOffset = 1;
      // activateCb = () => {
      //   for (const action of actions) {
      //     action.reset();
      //     action.play();
      //     action.time = startOffset;
      //   }

      //   let timeAcc = 0;
      //   let lastUpdateTime = Date.now();
      //   let dropped = false;
      //   function animate() {
      //     const now = Date.now();
      //     const timeDiff = (now - lastUpdateTime) / 1000;
      //     lastUpdateTime = now;

      //     timeAcc += timeDiff;
      //     if (!dropped && timeAcc >= dropOffset) {
      //       const {moduleUrls} = useDefaultModules();

      //       dropManager.createDropApp({
      //         type: 'minor',
      //         start_url: moduleUrls.silk,
      //         components: [
      //           {
      //             key: 'appName',
      //             value: 'Silk',
      //           },
      //           {
      //             key: 'appUrl',
      //             value: moduleUrls.silk,
      //           },
      //         ],
      //         position: app.position.clone().add(new THREE.Vector3(0, 0.7, 0)),
      //         quaternion: app.quaternion,
      //         scale: app.scale,
      //       });

      //       dropped = true;
      //     }
      //     if (timeAcc >= endOffset) {
      //       frameCb = null;
      //     } else {
      //       mixer.update(timeDiff);
      //       mixer.getRoot().updateMatrixWorld();
      //     }
      //   }
      //   frameCb = animate;
      // };
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
