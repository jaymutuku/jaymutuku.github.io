const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'public',
    {
        branch: 'main',
        repo: 'https://github.com/jaymutuku/jaymutuku.github.io.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)