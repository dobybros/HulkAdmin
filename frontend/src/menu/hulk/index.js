export default {
    path: '/hulk',
    title: 'Push Notification',
    icon: 'globe',
    children: ((pre) => [
        {
            path: `${pre}push-notification`,
            title: 'Push Notification ',
            icon: 'commenting'
        },
        {
            path: `${pre}deployconfig`,
            title: 'Deploy_config ',
            icon: 'commenting'
        }
        // {
        //     path: `${pre}push-notification`,
        //     title: 'Deploy_uploadGroovy ',
        //     icon: 'commenting'
        // },
        // {
        //     path: `${pre}push-notification`,
        //     title: 'Deploy_config ',
        //     icon: 'commenting'
        // },
        // {
        //     path: `${pre}push-notification`,
        //     title: 'Deploy_serviceVersion ',
        //     icon: 'commenting'
        // },
        // {
        //     path: `${pre}push-notification`,
        //     title: 'Deploy_modifyNginx ',
        //     icon: 'commenting'
        // },
        // {
        //     path: `${pre}push-notification`,
        //     title: 'Deploy_restartContainer ',
        //     icon: 'commenting'
        // }
    ])("/hulk/")
}
