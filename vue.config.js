module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    // ? '//mikatalk.github.io/vector-flows/2d/'
    ? '/article-assets/visualize-2d-and-3d-vector-fields-with-three-js/2d/'
    : `/`,
  devServer: {
    hot: false,
    liveReload: true
  }
}
