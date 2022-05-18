import { Status } from "../enum/Status";

export default interface ITask {
  id?: number,
  title: string,
  description?: string,
  status: Status,
  createdAt?: Date,
  updatedAt?: Date
};