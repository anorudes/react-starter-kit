import _ from 'lodash';

const sizesMap = {
  s: 'smallSize',
  m: 'mediumSize',
  l: 'largeSize',
  xl: 'xLargeSize',
};

export const sizesList = _.keys(sizesMap);

export const getSizeClassName = (size) => {
  if (!_.indexOf(_.values(sizesMap), size)) {
    /* eslint-disable no-console */
    console.warning('Uncorrect component size property, setted medium size');
    /* eslint-enable */
    return sizesMap.m;
  }

  return sizesMap[size];
};
