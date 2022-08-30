import webpack from 'webpack-stream'

export const js = () => {
  return (
    app.gulp
      .src(app.path.src.js, { sourcemaps: app.isDev })
      // .pipe(
      //   app.plugins.plumber(
      //     app.plugins.notify.onError({
      //       title: "JS",
      //       message: "Error: <%= error.massage %>",
      //     })
      //   )
      // )
      .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js'
        },
        module: {
          rules: [
            {
              test: /\.(sa|sc|c)ss$/i,
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    url: false,
                    importLoaders: 1,
                    sourceMap: true
                  }
                },
                'postcss-loader',
                'sass-loader'
              ]
            },
          ]
        }
      }))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream())
  );
};
