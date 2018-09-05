import Main from './pages/Main';
import Bible from './pages/Bible';
import Life from './pages/Life';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/bible',
    component: Bible,
  },
  {
    path: '/life',
    component: Life,
  }
];

export default routes;
