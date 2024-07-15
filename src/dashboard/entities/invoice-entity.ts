import {
  EnumBoolean,
  EnumInvoiceStage,
  Invoice,
  tablePrefix,
} from "@taskmanagement/taskapp-model";
import { EntitySchema } from "typeorm";

export const invoiceEntity = new EntitySchema<Invoice>({
  name: "invoice",
  tableName: `${tablePrefix}invoice`,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    invoiceNumber: {
      type: String,
      unique: true,
    },
    amount: {
      type: "decimal",
      nullable: true,
    },
    stage: {
      type: Number,
      enum: EnumInvoiceStage,
      nullable: true,
    },
    description: {
      type: String,
      nullable: true,
    },
    invoiceDate: {
      type: "date",
      nullable: true,
    },
    paymentDue: {
      type: "date",
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
    active: {
      type: Number,
      enum: EnumBoolean,
      default: EnumBoolean.true,
    },
  },
  relations: {
    tasks: {
      type: "one-to-many",
      target: "task",
      onDelete: "SET NULL",
      onUpdate: "NO ACTION",
    },
    serviceProvider: {
      type: "many-to-one",
      target: "serviceprovider",
      onDelete: "NO ACTION",
      onUpdate: "CASCADE",
    },
  },
});
