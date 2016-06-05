import fs from './utils/fs';

/**
 *
 */
async function clean() {
  await fs.removeDir(['.tmp', 'build/*', '!build/.git'], { dot: true });
  await fs.makeDir('build/public');
}

export default clean;
