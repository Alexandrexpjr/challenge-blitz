import TaskModel from "../database/models/Task";
import ITask from "../interface/ITask";

export class TaskService {
  public getTasks = async ():Promise<ITask[]> => {
    const tasks = await TaskModel.findAll();
    return tasks as ITask[];
  }
}