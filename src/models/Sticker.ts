import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { Board } from "./Board";

export class Sticker extends Model {
  declare id: number;
  declare text: string;
  declare boardId: number;
  declare layer: number;
}

Sticker.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    text: { type: DataTypes.STRING, allowNull: false },
    layer: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  },
  { sequelize, modelName: "Sticker" }
);

Board.hasMany(Sticker, { foreignKey: "boardId", onDelete: "CASCADE" });
Sticker.belongsTo(Board, { foreignKey: "boardId" });
