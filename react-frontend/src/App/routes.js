import Main from './pages/Main';
import Bible from './pages/Bible';
import Life from './pages/Life';
import SearchResult from './pages/SearchResult/SearchResult'
import ContentDetail from './pages/ContentDetail'

const routes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/results',
    component: SearchResult,
  },
  {
    path: '/bible/results',
    component: SearchResult,
  },
  {
    path: '/bible/:id',
    component: ContentDetail,
  },
  {
    path: '/bible',
    component: Bible,
  },
  {
    path: '/life/results',
    component: SearchResult,
  },
  {
    path: '/life/:id',
    component: ContentDetail,
  },
  {
    path: '/life',
    component: Life,
  }
];

export default routes;
