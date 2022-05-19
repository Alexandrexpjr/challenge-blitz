import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export default class TaskController {
  private service: TaskService;
  constructor() {
    this.service = new TaskService();
  }

  public getTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await this.service.getTasks();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ message: "Algo deu errado!" });
    }
  };

  public addTask = async (req: Request, res: Response) => {
    try {
      const createdTask = await this.service.addTask(req.body);
      return res.status(201).json(createdTask);
    } catch (error) {
      return res.status(404).json({ message: "Não existe task com este id!" });
    }
  };

  public updateStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      await this.service.changeStatus(status, Number(id));
      return res.status(201).json({ message: "OK!" });
    } catch (error) {
      return res.status(404).json({ message: "Não existe task com este id!" });
    }
  };
  
}