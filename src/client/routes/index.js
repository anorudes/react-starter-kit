import Layout from '../components/Layout';

// Child routes
import home from './home';
import contact from './contact';
import login from './login';
import register from './register';
import error from './error';

export default {

  path: '/',

  children: [
    home,
    contact,
    login,
    register,
    error,
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <Layout context={context}>{component}</Layout>
    );
  },

};
