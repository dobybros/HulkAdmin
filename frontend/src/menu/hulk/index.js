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
            path: `${pre}deployreloadcontainer`,
            title: 'Deploy Reload Server ',
            icon: 'commenting'
        },
        {
            path: `${pre}deployrecord`,
            title: 'Deploy Records ',
            icon: 'commenting'
        },
        {
            path: `${pre}deployuploadweb`,
            title: 'Deploy Upload Web ',
            icon: 'commenting'
        },
        {
            path: `${pre}gcMemory`,
            title: 'GCMemory ',
            icon: 'commenting'
        },
        {
            path: `${pre}gcRepair`,
            title: 'GCRepair ',
            icon: 'commenting'
        },
        {
            path: `${pre}serverLogs`,
            title: 'Server Logs ',
            icon: 'commenting'
        },
        {
            path: `${pre}transactions`,
            title: `Transactions`,
            icon: 'commenting'
        }
    ])("/hulk/")
}
