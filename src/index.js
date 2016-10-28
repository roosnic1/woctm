import express from 'express';
import swaggerMiddleware from 'swagger-express-middleware';

/* import configuration files */
import { PORT } from './config';

/* import API endpoints */
import api from './api';
const app = express();
app.use('/v1', api({ config: 'N/A' }));

// Handling all express.js errors
app.use((error, req, res, next) => { // eslint-disable-line
  res.status(error.status);
  res.send(`<h1>${error.status} Error</h1><pre>${error.message}</pre>`);
});

const listener = app.listen(process.env.PORT || PORT);
console.log(`Started cuteness API on port ${listener.address().port}`);
export default app;
