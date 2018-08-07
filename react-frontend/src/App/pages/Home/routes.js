import Main from './pages/Main';
import Bible from './pages/Bible';
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
];

export default routes;
