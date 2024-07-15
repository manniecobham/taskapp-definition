import {
  EnumBoolean,
  EnumStatus,
  EnumTaskStage,
  Task,
  tablePrefix,
} from "@taskmanagement/taskapp-model";
import { EntitySchema } from "typeorm";

export const taskEntity = new EntitySchema<Task>({
  name: "task",
  // target: Task,
  tableName: `${tablePrefix}task`,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
    ticketNumber: {
      type: String,
      unique: true,
    },
    invoicedAmount: {
      type: "decimal",
      scale: 2,
      nullable: true,
    },
    price: {
      type: "decimal",
      scale: 2,
      nullable: true,
    },
    stage: {
      type: Number,
      enum: EnumTaskStage,
      default: EnumTaskStage.created,
    },
    description: {
      type: String,
      nullable: true,
    },
    startTime: {
      type: Date,
      nullable: true,
    },
    endTime: {
      type: Date,
      nullable: true,
    },
    status: {
      type: Number,
      nullable: true,
      enum: EnumStatus,
    },
    createdAt: {
      type: "timestamptz",
      createDate: true,
    },
    updatedAt: {
      type: "timestamptz",
      updateDate: true,
    },
    deletedAt: {
      type: "timestamptz",
      deleteDate: true,
    },
    active: {
      type: Number,
      enum: EnumBoolean,
      default: EnumBoolean.true,
    },
    postalCode: {
      type: Number,
      nullable: true,
    },
    address: {
      type: String,
      nullable: true,
    },
    city: {
      type: String,
      nullable: true,
    },
    requesterFirstName: {
      type: String,
      nullable: true,
    },
    requesterLastName: {
      type: String,
      nullable: true,
    },
    requesterPhoneNo: {
      type: String,
      nullable: true,
    },
    requesterEmail: {
      type: String,
      nullable: true,
    },
    serviceProviderViewTime: {
      type: "timestamptz",
      nullable: true,
    },
  },
  relations: {
    allocatedTo: {
      type: "many-to-one",
      nullable: true,
      target: "serviceprovider",
      inverseSide: "tasks",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    },
    invoice: {
      type: "many-to-one",
      nullable: true,
      target: "invoice",
      inverseSide: "invoice",
      onDelete: "SET NULL",
      onUpdate: "NO ACTION",
    },
    deletedBy: {
      type: "many-to-one",
      target: "user",
    },
  },
});
