import { DataTypes, Model } from "sequelize/types";
import db from ".";
import { Status } from "../../enum/Status";

class Task extends Model {
  public id!: number;
  
  public title!: string;

  public description!: string;

  public status!: Status;
}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize: db,
  modelName: "tasks",
});

export default Task;