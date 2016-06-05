import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './ErrorPage.pcss';

function ErrorPage({ error }, context) {
  let title = 'Ошибка';
  let content = 'Извините, но что-то пошло не так, заходите позже.';
  let errorMessage = null;
  const status = error.status;

  if (error.status === 404) {
    title = 'Страница не найдена';
    content = 'Извините, страницу которую вы хотите посмотреть не существует.';
  } else if (process.env.NODE_ENV !== 'production') {
    errorMessage = <pre className={s.stacktrace}>{error.stack}</pre>;
  }

  context.setTitle(title);

  return (
    <div className={s.root}>
      <div className={s.inner}>
        <h1 className={s.status}>{status}</h1>
        <h2 className={s.title}>{title}</h2>
        <p className={s.content}>{content}</p>
        {errorMessage}
      </div>
    </div>
  );
}

ErrorPage.propTypes = { error: PropTypes.object.isRequired };
ErrorPage.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(ErrorPage);
