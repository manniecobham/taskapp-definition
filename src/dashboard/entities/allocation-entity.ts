import {
  Allocation,
  EnumBoolean,
  EnumStatus,
  EnumTaskStage,
  tablePrefix,
} from "@taskmanagement/taskapp-model";
import { EntitySchema } from "typeorm";

export const allocationEntity = new EntitySchema<Allocation>({
  name: "allocation",
  tableName: `${tablePrefix}allocation`,
  // target: Allocation,
  columns: {
    id: {
      type: Number,
      generated: true,
      primary: true,
    },
    decision: {
      type: Number,
      enum: EnumStatus,
      nullable: true,
    },
    createdAt: {
      type: "timestamptz",
      createDate: true,
    },
    updatedAt: {
      type: "timestamptz",
      updateDate: true,
    },
    comment: {
      type: String,
      nullable: true,
    },
    stage: {
      type: Number,
      enum: EnumTaskStage,
      default: EnumTaskStage.created,
    },
    active: {
      type: Number,
      enum: EnumBoolean,
      default: EnumBoolean.true,
    },
  },
  relations: {
    allocatedTo: {
      type: "many-to-one",
      target: "serviceprovider",
      inverseSide: "allocations",
    },
    task: {
      type: "many-to-one",
      target: "task",
      inverseSide: "allocation",
      onDelete: "SET NULL",
      onUpdate: "NO ACTION",
    },
  },
});
