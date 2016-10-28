import { Router } from 'express';
import { version } from '../../package.json';


export default ({ config }) => {
  const api = new Router();
  api.get('/', (req, res) => {
    console.log(config);
    res.json({ version, config });
  });

  return api;
};
