module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    // ? '//mikatalk.github.io/vector-flows/3d/'
    ? '/article-assets/visualize-2d-and-3d-vector-fields-with-three-js/3d/'
    : `/`,
  devServer: {
    hot: false,
    liveReload: true
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: !true
    }
  }
}
