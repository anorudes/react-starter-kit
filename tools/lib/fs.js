import Promise from 'bluebird';
import fs from 'fs';
import mkdirp from 'mkdirp';
import ncp from 'ncp';
import del from 'del';

const copyDir = Promise.promisify(ncp);
const writeFile = Promise.promisify(fs.writeFile);
const makeDir = Promise.promisify(mkdirp);
const removeDir = del;

export default {
  copyDir,
  makeDir,
  writeFile,
  removeDir,
};
