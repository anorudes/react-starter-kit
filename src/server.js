import Bottle from 'bottlejs';

import Config from 'config';
import Logger from 'server/utils/logger';
import Core from 'server/index.js';
import SSR from 'server/ssr';

import News from 'server/routes/news';

const bottle = new Bottle();

bottle.service('Config', () => Config);
bottle.service('Logger', Logger, 'Config');
bottle.service('SSR', SSR, 'Config', 'Logger');
bottle.service('News', News);
bottle.service('Core', Core, 'Config', 'Logger', 'SSR', 'News');

const core = bottle.container.Core;

core.run();
