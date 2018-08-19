export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-tachometer'
    },
    {
      name: 'Some Menu Item',
      icon: 'fa fa-tasks',
      children: [
        {
          name: 'Sub Menu 1',
          url: '/page1',
          icon: 'fa fa-puzzle-piece',
        },
        {
          name: 'Sub Menu 2',
          url: '/page2',
          icon: 'fa fa-terminal',
        }
      ]
    }
  ]
};
