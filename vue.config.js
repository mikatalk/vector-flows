module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '//mikatalk.github.io/vector-flows/'
    : `/`,
  devServer: {
    hot: false,
    liveReload: true
  }
}
