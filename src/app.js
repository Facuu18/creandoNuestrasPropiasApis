const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const genresRoutesApi = require('./routes/apiRouter/genresApiRoutes');
const moviesRoutesApi = require('./routes/apiRouter/moviesApiRoutes');
const actorsRoutesApi = require('./routes/apiRouter/actorsApiRoutes');

//Aquí pueden colocar las rutas de las APIs
// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));



//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el uso de los métodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use('/api',genresRoutesApi);
app.use('/api',moviesRoutesApi);
app.use('/api',actorsRoutesApi);


//Activando el servidor desde express
app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));
