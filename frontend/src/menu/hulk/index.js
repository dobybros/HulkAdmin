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
      path: `${pre}config`,
      title: 'Config',
      icon: 'commenting'
    },
  ])("/hulk/")
}
