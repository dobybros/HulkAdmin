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
        }
    ])('hulk-admin-')
}