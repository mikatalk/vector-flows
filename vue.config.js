module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '//mikatalk.github.io/vector-flows/3d/'
    : `/`,
  devServer: {
    hot: false,
    liveReload: true
  }
}
