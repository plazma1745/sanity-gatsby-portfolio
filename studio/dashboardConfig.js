export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f25c537ffe148083b80ea4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xtuwtbz6',
                  apiId: '3c5a876a-1db7-494a-a827-7579a3b27d14'
                },
                {
                  buildHookId: '61f25c534a49e27acf53793e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-esr9hudt',
                  apiId: 'b74b46fc-777c-449e-b2e9-a80ac57ad647'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plazma1745/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-esr9hudt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
