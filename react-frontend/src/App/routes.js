import Main from './pages/Main';
import Bible from './pages/Bible';
import Life from './pages/Life';
import SearchResult from './pages/SearchResult/SearchResult';
import ContentDetail from './pages/ContentDetail';
import Create from './pages/Create';
import NewMain from './pages/NewMain';
import NewYeramdri from './pages/NewYeramdri';
import NewContents from './pages/NewContents/index.jsx';
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
        path: '/new-main/yeramdri',
        component: NewYeramdri
    },
    {
        path: '/new-main/contents',
        component: NewContents
    },
    {
        path: '/new-main/open-contents',
        component: NewOpenContents
    },
    {
        path: '/new-main',
        component: NewMain
    },
];

export default routes;