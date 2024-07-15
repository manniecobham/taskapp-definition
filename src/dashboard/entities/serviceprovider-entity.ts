import {
  EnumBoolean,
  ServiceProvider,
  tablePrefix,
} from "@taskmanagement/taskapp-model";
import { EntitySchema } from "typeorm";

export const serviceProviderEntity = new EntitySchema<ServiceProvider>({
  name: "serviceprovider",
  tableName: tablePrefix + "serviceProvider",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      name: "firstName",
      type: String,
    },
    lastName: {
      name: "lastName",
      type: String,
    },
    email: {
      type: String,
      nullable: true,
    },
    fullName: {
      type: String,
      nullable: true,
    },
    phoneNumber: {
      type: String,
    },
    percentage: {
      type: Number,
      default: 50,
    },
    address: {
      type: String,
    },
    postalCode: {
      type: Number,
    },
    city: {
      type: String,
    },
    iban: {
      type: String,
    },
    category: {
      type: String,
      array: true,
      nullable: true, //ToDo
    },
    bic: {
      type: String,
    },
    bankName: {
      type: String,
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
      inverseSide: "allocatedTo",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    },
    allocations: {
      type: "one-to-many",
      target: "allocation",
      inverseSide: "allocatedTo",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    },
    invoices: {
      type: "one-to-many",
      target: "invoice",
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    },
  },
});
