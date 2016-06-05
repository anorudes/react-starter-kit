import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Link from 'client/components/Link/Link';
import s from './AuthLayout.pcss';

function AuthLayout({
  children,
  heading,
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={s.root}>
      <div className={s.inner}>
        <header className={s.header}>
          <div className={s.heading}>{heading}</div>
          <div className={s.logo}>Lappse</div>
        </header>
        <main className={s.main}>
          {children}
        </main>
        <footer className={s.footer}>
          <Link to="/">Lappse</Link> © {currentYear}.
          {' '}
          Все права защищены
        </footer>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
};

export default withStyles(s)(AuthLayout);
