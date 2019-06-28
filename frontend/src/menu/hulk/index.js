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
            title: 'Deploy Config ',
            icon: 'commenting'
        },
        {
            path: `${pre}deployuploadgroovy`,
            title: 'Deploy Upload Groovy ',
            icon: 'commenting'
        },
        {
            path: `${pre}deployserviceversion`,
            title: 'Deploy ServiceVersion ',
            icon: 'commenting'
        },
        {
            path: `${pre}deployreloadcontainer`,
            title: 'Deploy Reload Server ',
            icon: 'commenting'
        },
        {
            path: `${pre}deployreloadnginx`,
            title: 'Deploy Reload Nginx ',
            icon: 'commenting'
        }
    ])("/hulk/")
}
