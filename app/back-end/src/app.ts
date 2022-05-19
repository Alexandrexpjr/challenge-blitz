import express from "express";
import taskRoute from "./route/TaskRoute";
class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };
    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use('/task', taskRoute);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(`Ouvindo a porta ${PORT}`);
    });
  }
}

export { App };

export const { app } = new App();
