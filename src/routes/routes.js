import DefaultLayout from '~/layouts/DefaultLayout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import config from '~/config';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: '',
  },
];

export { publicRoutes };
