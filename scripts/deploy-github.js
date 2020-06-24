const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/MaximumCrash/blackgamedevs_v2.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
