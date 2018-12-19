import Main from './pages/Main';
import Bible from './pages/Bible';
import Life from './pages/Life';
import SearchResult from './pages/SearchResult/SearchResult'
import BibleContentPage from './pages/Bible/ContentPage'
import LifeContentPage from './pages/Life/LifeContentPage'

const routes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/bible/results',
    component: SearchResult,
  },
  {
    path: '/bible/:id',
    component: BibleContentPage,
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
    component: LifeContentPage,
  },
  {
    path: '/life',
    component: Life,
  },
];

export default routes;
