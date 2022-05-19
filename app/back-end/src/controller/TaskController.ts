import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export default class TaskController {
  private service: TaskService;
  constructor() {
    this.service = new TaskService();
  };

  public getTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await this.service.getTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Algo deu errado!" });
    }
  };
}