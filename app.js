/* @flow */

const loadContext = (callback: (context: Object) => void) => {
  let context = require.context('./pages', true);
  if (module.hot) {
    (module: any).hot.accept(context.id, () => {
      context = require.context('./pages', true);
      callback(context);
    });
  }

  callback(context);
};

export { loadContext }; // eslint-disable-line import/prefer-default-export
