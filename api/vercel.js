import app from '../Server/app.js';

export default async (req, res) => {
  return app(req, res);
};