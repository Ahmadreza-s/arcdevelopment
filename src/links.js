export default [
  { url: '/', title: 'Home' },
  {
    url: '/services',
    title: 'Services',
    children: [
      {
        title: 'Services',
        url: '/services'
      },
      {
        title: 'Custom Software Development',
        url: '/customsoftware'
      },
      {
        title: 'Mobile App Development',
        url: '/mobileapps'
      },
      {
        title: 'Website Development',
        url: '/websites'
      }
    ]
  },
  { url: '/revolution', title: 'The Revolution' },
  { url: '/about', title: 'About Us' },
  { url: '/contact', title: 'Contact Us' },
  { url: '/estimate', title: 'Free Estimate' }
];
