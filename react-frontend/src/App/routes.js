import Main from './pages/Main';
import Bible from './pages/Bible';
import Life from './pages/Life';
import SearchResult from './pages/SearchResult/SearchResult';
import ContentDetail from './pages/ContentDetail';
import Create from './pages/Create';
import NewMain from './pages/NewMain';
import NewYeramdri from './pages/NewYeramdri';
import NewContents from './pages/NewContents/index.jsx';
import NewContentDetail from './pages/NewContentDetail/index.jsx';
import NewOpenContents from './pages/NewOpenContents';

const routes = [{
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
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/temp/yeramdri',
        component: NewYeramdri
    },
    {
        path: '/temp/contents/:id',
        component: NewContentDetail
    },
    {
        path: '/temp/contents',
        component: NewContents
    },
    {
        path: '/temp/open-contents',
        component: NewOpenContents
    },
    {
        path: '/temp',
        component: NewMain
    },
];

export default routes;