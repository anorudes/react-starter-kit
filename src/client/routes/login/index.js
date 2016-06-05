import AuthLayout from 'client/components/AuthLayout/AuthLayout';
import Login from './Login';

export default {

  path: '/login',

  action() {
    return (
      <AuthLayout
        heading="Войти в"
        welcome="Рады снова Вас видеть"
      >
        <Login />
      </AuthLayout>
    );
  },

};
