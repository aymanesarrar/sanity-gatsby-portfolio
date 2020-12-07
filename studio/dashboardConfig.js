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
                  buildHookId: '5fceb62de07a5036272c4edd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hg566bjm',
                  apiId: 'a2b0b54d-4b2b-4934-88af-10bd2135adea'
                },
                {
                  buildHookId: '5fceb62de07a5034602c51db',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bndrjv6p',
                  apiId: '6f516576-f8ed-47a0-bbc8-cd514cd47711'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aymanesarrar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bndrjv6p.netlify.app',
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
