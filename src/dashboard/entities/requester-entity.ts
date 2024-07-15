import { EnumBoolean, Requester } from "@taskmanagement/taskapp-model";
import { EntitySchema } from "typeorm";

export const requesterEntity = new EntitySchema<Requester>({
  name: "requester",
  tableName: "tbl_requester",
  // target: Requester,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
      nullable: true,
    },
    address: {
      type: String,
      nullable: true,
    },
    postalCode: {
      type: Number,
      nullable: true,
    },
    city: {
      type: String,
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
      onDelete: "NO ACTION",
    },
    allocations: {
      type: "one-to-many",
      target: "allocation",
      onUpdate: "NO ACTION",
    },
  },
});
