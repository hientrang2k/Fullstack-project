import bodyParser from 'body-parser';
import express from 'express';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });
// require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log('Backend nodejs is running with port: ', port);
});
