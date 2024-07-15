import { User, tablePrefix } from "@taskmanagement/taskapp-model";
import { EntitySchema } from "typeorm";

const tableName = tablePrefix + "user";
export const userEntity = new EntitySchema<User>({
  name: "user",
  tableName,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      nullable: true,
    },
    email: {
      type: String,
      nullable: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      nullable: true,
    },
    roles: {
      type: String,
      array: true,
      nullable: true,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
    updatedAt: {
      type: Date,
      updateDate: true,
    },
  },
});
