import fs from './lib/fs';

/**
 *
 */
async function clean() {
  await fs.removeDir(['.tmp', 'build/*', '!build/.git'], { dot: true });
  await fs.makeDir('build/public');
}

export default clean;
