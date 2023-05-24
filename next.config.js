const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/sass')],
  },
  env: {
    GRAPHQLSERVER: 'http://18.193.173.177:1339/graphql',
  },
}

// http://localhost:1339/graphql
// https://vepbitbtbadmin.herokuapp.com/graphql
// https://vepbitadmin.appspot.com/graphql