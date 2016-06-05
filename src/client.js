import 'babel-polyfill';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { match } from 'universal-router';
import routes from 'routes';
import history from 'core/history';

const context = {
  insertCss: styles => styles._insertCss(),
  setTitle: value => (document.title = value),
  setMeta: (name, content) => {
    // Remove and create a new <meta /> tag in order to make it work
    // with bookmarks in Safari
    const elements = document.getElementsByTagName('meta');
    Array.from(elements).forEach((element) => {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document
      .getElementsByTagName('head')[0]
      .appendChild(meta);
  },
};

let renderComplete = (state, callback) => {
  const elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);
  callback(true);

  renderComplete = (/* s */) => callback(true);
};

function render(container, state, component) {
  return new Promise((resolve, reject) => {
    try {
      ReactDOM.render(
        component,
        container,
        renderComplete.bind(undefined, state, resolve)
      );
    } catch (err) {
      reject(err);
    }
  });
}

function run() {
  const container = document.getElementById('app');

  // Make taps on links and buttons work fast on mobiles
  FastClick.attach(document.body);

  // Re-render the app when window.location changes
  const removeHistoryListener = history.listen(location => {
    match(routes, {
      path: location.pathname,
      query: location.query,
      state: location.state,
      context,
      render: render.bind(undefined, container, location.state),
    }).catch(err => console.error(err)); // eslint-disable-line no-console
  });

  addEventListener(window, 'pagehide', () => {
    removeHistoryListener();
  });
}

const domIsReady = [
  'complete',
  'loaded',
  'interactive',
].includes(document.readyState) && document.body;

// Run the application when both DOM is ready and page content is loaded
if (domIsReady) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
