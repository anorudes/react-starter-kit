import fs from './utils/fs';
import pkg from '../package.json';

/**
 *
 */
async function copy() {
  await fs.copyDir('src/server/public', 'build/public');
  await fs.writeFile('./build/package.json', JSON.stringify({
    private: true,
    engines: pkg.engines,
    dependencies: pkg.dependencies,
    scripts: {
      start: 'node server.js',
    },
  }, null, 2));
}

export default copy;
