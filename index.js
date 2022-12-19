/* eslint-disable no-useless-escape */
import metaversefile from 'metaversefile';
const { useApp, useWorld, useLocalPlayer, useActivate, useLoaders, usePhysics, useCleanup } =
  metaversefile;
const baseUrl = import.meta.url.replace(/(\/)[^\/\\]*$/, '$1');

export default e => {
  const app = useApp();
  const physics = usePhysics();

  const minScale = 0;
  const maxScale = 2;
  const minPosition = 0;
  const maxPosition = 2;
  const lerpTime = 0.5;
  const lerpScale = (a, b, t) => a + (b - a) * t;
  const lerpPosition = (a, b, t) => a + (b - a) * t;

  const activated = false;

  app.name = 'NXS-001 HelperBot';

  window.openInWebaverse = item => {
    console.log('openInWebaverse: ', item);
    console.log('item url: ', item.url);
    metaversefile.createAppAsync({
      start_url: item.url,
      position: [app.position.x + Math.random() * 1, 0, app.position.z + Math.random() * 1],
    }).then(newApp => {
      useWorld().appManager.importApp(newApp);
    });
  };

  window.setCurrentTradeId = id => {
    console.log('setCurrentTradeId: ', id);
    app.setComponent('trade', { id });
  };

  let reactAdded = false;

  const addReact = async () => {
    if (reactAdded) return;
    reactAdded = true;
    {
      const u = `${baseUrl}/trade.react`;
      reactApp = await metaversefile.createAppAsync({
        start_url: u,
      });
      if (!live) {
        reactApp.destroy();
        return;
      }
      // reactApp.rotation.y = Math.PI / 2;
      reactApp.scale.set(0, 0, 0);
      app.add(reactApp);
      reactApp.updateMatrixWorld();
    }
  };

  const activateCb = async activated => {
    const wearComponent = app.getComponent('wear');
    const tradeComponent = app.getComponent('trade');

    console.log('wearComponent: ', wearComponent);
    console.log('tradeComponent: ', tradeComponent);

    if (tradeComponent) {
      window.tradeId = tradeComponent.id;
      console.log('set window.tradeId: ', window.tradeId);
    }

    addReact(app);

    const startTime = Date.now();
    let currentTime = 0;
    const timer = setInterval(() => {
      if (!reactApp) return;
      currentTime = Date.now();
      const time = (currentTime - startTime) / 1000;
      const scale = lerpScale(
        activated ? minScale : maxScale,
        activated ? maxScale : minScale,
        time / lerpTime,
      );
      reactApp.scale.set(scale, scale, scale);
      reactApp.position.set(0, maxPosition, reactApp.position.z);
      if (time > lerpTime) {
        const finalScale = activated ? maxScale : minScale;
        reactApp.scale.set(finalScale, finalScale, finalScale);
        clearInterval(timer);
      }
      reactApp.updateMatrixWorld();

      // if the player walks more than 5 meters away from the console, deactivate it
      const player = useLocalPlayer();
      const distance = player.position.distanceTo(app.position);
      if (distance > 2) {
        activated = false;
        reactApp.scale.set(minScale, minScale, minScale);
        reactApp.updateMatrixWorld();
        // stop the timer
        clearInterval(timer);
      }
    }, 1000 / 60);
  };

  app.addEventListener('activate', e => {
    activateCb && activateCb(true);
  });

  app.addEventListener('wearupdate', e => {
    if (!e.wear) {
      activateCb && activateCb(false);
    }
  });

  // add an event listener for the 'wear' event

  let live = true;
  let reactApp = null;
  const physicsIds = [];
  e.waitUntil(
    (async () => {
      const u = `${baseUrl}HelperBot.glb`;
      let o = await new Promise((resolve, reject) => {
        const { gltfLoader } = useLoaders();
        gltfLoader.load(u, resolve, function onprogress() { }, reject);
      });
      if (!live) {
        o.destroy();
        return;
      }
      app.glb = o;
      o = o.scene;
      app.add(o);

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
