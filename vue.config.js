module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '//mikatalk.github.io/vector-flows/2d/'
    : `/`,
  devServer: {
    hot: false,
    liveReload: true
  }
}
