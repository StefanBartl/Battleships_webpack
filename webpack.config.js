const path = require ( 'path' ) ;

module . exports = {
 mode: 'development',
entry : './src/index.js' ,
output : {
filename : 'bundle.js' ,
path : path . resolve ( __dirname , 'dist' ) ,
publicPath: "/Battleships/",
} ,
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
     },
    ],
},
} ;