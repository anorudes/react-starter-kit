import Bottle from 'bottlejs';

import Config from 'server/config';
import Logger from 'server/logger';
import Core from 'server/core';
import SSR from 'server/ssr';
import News from 'server/news';

const bottle = new Bottle();

bottle.service('Config', Config);
bottle.service('Logger', Logger, 'Config');
bottle.service('SSR', SSR, 'Config', 'Logger');
bottle.service('News', News);
bottle.service('Core', Core, 'Config', 'Logger', 'SSR', 'News');

const core = bottle.container.Core;

core.run();
