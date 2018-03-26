var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js/dist');
var APP_DIR = path.resolve(__dirname, 'js/src');

var config = {
  entry: {
    'plugins/paragraphseditor/plugin': APP_DIR + '/plugins/paragraphseditor/plugin.js',
    'plugins/paragraphseditor_assets/plugin': APP_DIR + '/plugins/paragraphseditor_assets/plugin.js',
    'plugins/paragraphseditor_toolbar/plugin': APP_DIR + '/plugins/paragraphseditor_toolbar/plugin.js',
    'plugins/paragraphseditor_toolbox/plugin': APP_DIR + '/plugins/paragraphseditor_toolbox/plugin.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  plugins: [
  ],
  module : {
    rules: [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-class-properties']
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: APP_DIR,
            }  
          }
        ]
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    drupal: 'Drupal',
    backbone: 'Backbone',
    ckeditor: 'CKEDITOR',
    underscore: '_',
    'widget-binder': 'Drupal.paragraphs_editor ? Drupal.paragraphs_editor.WidgetBinder : null',
    widgetfilter: 'Drupal.ckeditor_widgetfilter',
  }
};

module.exports = config;
