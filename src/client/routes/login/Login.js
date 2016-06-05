import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Login.pcss';
import Input from '../../components/Input/Input';

const title = 'Войти';

const propTypes = {};

const contextTypes = {
  setTitle: PropTypes.func.isRequired,
};

const Login = (
  props,
  { setTitle },
) => {
  setTitle(title);

  return (
    <form
      className={s.root}
    >
      <div className={s.group}>
        <label className={s.label}>Логин</label>
        <Input
          placeholder="Логин"
          size="l"
          availableWidth
        />
      </div>
      <div className={s.group}>
        <label className={s.label}>Пароль</label>
        <Input
          type="password"
          placeholder="Пароль"
          size="l"
          availableWidth
        />
      </div>
      <div className={s.group}>
        <input type="submit" className={s.submit} />
      </div>
    </form>
  );
};

Login.propTypes = propTypes;
Login.contextTypes = contextTypes;

export default withStyles(s)(Login);
