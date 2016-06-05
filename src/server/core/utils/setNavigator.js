/**
 * Устанавливает global.navigator в значение по умолчанию если он отсутствует.
 * Это нужно для различных либ которым нужно знать о браузере чтобы проставлять
 * вендорные префиксы (например, `material-ui`).
 */
export default () => {
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
};
