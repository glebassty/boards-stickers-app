import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

export class Board extends Model {
  declare id: number;
  declare title: string;
}

Board.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "Board" }
);
