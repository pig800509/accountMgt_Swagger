"use strict";
import { success } from "./libs/response-lib";
//import uuid from "uuid";

module.exports = {
  listRoles: (event, context, callback) => {
    callback(
      null,
      success({
        role_list: [
          {
            role_id: "06222859e75edb92b1ab111",
            role_name: "IT",
            display_name: "IT",
            description: "IT for Site A",
            active_status: 1,
            used: 0,
            num_of_users: 0,
            permission_settings: {}
          },
          {
            role_id: "06222859e75edb92b1ab112",
            role_name: "IT",
            display_name: "IT2",
            description: "IT for Site B",
            active_status: 1,
            used: 0,
            num_of_users: 0,
            permission_settings: {}
          }
        ]
      })
    );
  },
  findRole: (event, context, callback) => {
    const roleId = event.pathParams.role_id;
    callback(
      null,
      success({
        role_id: roleId,
        role_name: "IT",
        display_name: "IT",
        description: "IT for Site A",
        active_status: 1,
        used: 0,
        num_of_users: 0,
        permission_settings: {}
      })
    );
  }
};
