import Main from './pages/Main';
import Bible from './pages/Bible';
import Life from './pages/Life';
import SearchResult from './pages/Bible/SearchResult'

const routes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/bible/results',
    component: SearchResult,
    exact: true
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
