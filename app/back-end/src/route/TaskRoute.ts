import { Router } from "express";
import TaskController from "../controller/TaskController";

const taskRoute = Router();
const taskController = new TaskController();

taskRoute.get('/', taskController.getTasks);
taskRoute.post('/', taskController.addTask);
taskRoute.put('/:id', taskController.updateStatus);
taskRoute.delete('/:id/finish', taskController.deleteTask); // rota para finalizar uma tarefa
taskRoute.delete('/:id', taskController.deleteTask); // rota para excluir uma tarefa

export default taskRoute;