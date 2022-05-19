import TaskModel from "../database/models/Task";
import { Status } from "../enum/Status";
import ITask from "../interface/ITask";

export class TaskService {
  public getTasks = async ():Promise<ITask[]> => {
    const tasks = await TaskModel.findAll();
    return tasks as ITask[];
  };

  public addTask = async (task: ITask) => {
    const createdTask = await TaskModel.create({ ...task });
    return createdTask.id;
  };

  public changeStatus = async (status: Status, id: number) => {
    const updatedTask = await TaskModel.update({ status },
      { where: { id } }
    );
    return updatedTask;
  };

  public deleteTask = async (id: number) => {
    const deletedTask = await TaskModel.destroy({ where: { id } });
    return deletedTask;
  }
}