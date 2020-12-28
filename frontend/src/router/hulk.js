import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = {auth: true}
const platformName = "Hulk admin platform"
export default {
    path: '/hulk',
    name: platformName,
    meta,
    redirect: {name: 'index'},
    component: layoutHeaderAside,
    children: (pre => [
        {
            path: `push-notification`,
            name: `${pre}/pushnotification`,
            component: _import('hulk/pushnotification/index'),
            meta: {...meta, title: `Push Notification`}
        },
        {
            path: `deployconfig`,
            name: `${pre}/deployconfig`,
            component: _import('hulk/deployconfig/index'),
            meta: {...meta, title: `Deploy Config`}
        },
        {
            path: `deployuploadgroovy`,
            name: `${pre}/deployuploadgroovy`,
            component: _import('hulk/deployuploadgroovy/index'),
            meta: {...meta, title: `Deploy Upload Groovy`}
        },
        {
            path: `deployreloadcontainer`,
            name: `${pre}/deployreloadcontainer`,
            component: _import('hulk/deployserviceversion/index'),
            meta: {...meta, title: `Deploy Reload Container`}
        },
        {
            path: `deployrecord`,
            name: `${pre}/deployrecord`,
            component: _import('hulk/deployrecord/index'),
            meta: {...meta, title: `Deploy Records`}
        },
        {
            path: `deployuploadweb`,
            name: `${pre}/deployuploadweb`,
            component: _import('hulk/deployuploadweb/index'),
            meta: {...meta, title: `Deploy Upload Web`}
        },
        {
            path: `gcMemory`,
            name: `${pre}/gcMemory`,
            component: _import('hulk/gcMemory/index'),
            meta: {...meta, title: `GCMemory`}
        },
        {
            path: `gcRepair`,
            name: `${pre}/gcRepair`,
            component: _import('hulk/gcRepair/index'),
            meta: {...meta, title: `GCRepair`}
        },
        {
            path: `serverLogs`,
            name: `${pre}/serverLogs`,
            component: _import('hulk/serverLogs/index'),
            meta: {...meta, title: `Server Logs`}
        },
        {
            path: `transactions`,
            name: `${pre}/transactions`,
            component: _import('hulk/transactions/index'),
            meta: {...meta, title: `Transactions`}
        },
        {
            path: `versions`,
            name: `${pre}/versions`,
            component: _import('hulk/versions/index'),
            meta: {...meta, title: `Version Management`}
        }

    ])('hulk-admin-')
}
