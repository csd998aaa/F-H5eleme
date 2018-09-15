import { getAsyncComponent } from './utils/getAsyncComponent';

const App = getAsyncComponent(() => import('./App'));
const Home = getAsyncComponent(() => import('./containers/Home'));
const Found = getAsyncComponent(() => import('./containers/Found'));
const Order = getAsyncComponent(() => import('./containers/Order'));
const Mine = getAsyncComponent(() => import('./containers/Mine'));
const Login = getAsyncComponent(() => import('./containers/Login'))


const routeConfig = [

    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '',
                component: Home,
                exact: true
            },
            {
                path: 'found',
                component: Found
            },
            {
                path: 'order',
                component: Order
            },
            {
                path: 'mine',
                component: Mine
            }
        ]
    }
]

export default routeConfig;