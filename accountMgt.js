"use strict";
import { success } from "./libs/response-lib";
//import moment from "moment";
//const moment = require('moment');
import uuid from "uuid";
//moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
module.exports = {
  listAccount: (event, context, callback) => {
    callback(
      null,
      success({
        account_list: [
          {
            user_id: "07332859e75edb92b1ef009",
            username: "user01",
            first_name: "user01",
            last_name: "plant01",
            display_name: "user01",
            description: "user01 for test",
            email: "user01@gmail.com",
            phone: "0800-120-1202",
            role_id: "06222859e75edb92b1ab111",
            role_name: "IT",
            active_status: 1,
            online: 0,
            last_login: "2018-07-17 12:00:00",
            retry_for_login: 0,
            photo_filename: "user01.jpg",
            photo_url: "10.135.2.3/account/photo/user01.jpg",
            photo_preview_url: "10.135.2.3/account/photo/user01_preview.jpg"
          },
          {
            user_id: "07332859e75edb92b1ef010",
            username: "user02",
            first_name: "user02",
            last_name: "plant02",
            display_name: "user02",
            description: "user02 for test",
            email: "user02@gmail.com",
            phone: "0800-120-1203",
            role_id: "06222859e75edb92b1ab112",
            role_name: "IT",
            active_status: 0,
            online: 0,
            last_login: "2018-07-17 12:00:00",
            retry_for_login: 0,
            photo_filename: "user02.jpg",
            photo_url: "10.135.2.3/account/photo/user01.jpg",
            photo_preview_url: "10.135.2.3/account/photo/user01_preview.jpg"
          }
        ]
      })
    );
  },
  findRoleAccount: (event, context, callback) => {
    const roleId = event.pathParams.role_id;
    callback(
      null,
      success({
        account_list: [
          {
            user_id: "07332859e75edb92b1ef009",
            username: "user01",
            first_name: "user01",
            last_name: "plant01",
            display_name: "user01",
            description: "user01 for test",
            email: "user01@gmail.com",
            phone: "0800-120-1202",
            role_id: roleId,
            role_name: "IT",
            active_status: 1,
            online: 0,
            last_login: "2018-07-17 12:00:00",
            retry_for_login: 0,
            photo_filename: "user01.jpg",
            photo_url: "10.135.2.3/account/photo/user01.jpg",
            photo_preview_url: "10.135.2.3/account/photo/user01_preview.jpg"
          },
          {
            user_id: "07332859e75edb92b1ef010",
            username: "user02",
            first_name: "user02",
            last_name: "plant02",
            display_name: "user02",
            description: "user02 for test",
            email: "user02@gmail.com",
            phone: "0800-120-1203",
            role_id: roleId,
            role_name: "IT",
            active_status: 0,
            online: 0,
            last_login: "2018-07-17 12:00:00",
            retry_for_login: 0,
            photo_filename: "user02.jpg",
            photo_url: "10.135.2.3/account/photo/user01.jpg",
            photo_preview_url: "10.135.2.3/account/photo/user01_preview.jpg"
          }
        ]
      })
    );
  },
  findUserAccount: (event, context, callback) => {
    const userId = event.pathParams.user_id;
    callback(
      null,
      success({
        user_id: userId,
        username: "user01",
        first_name: "user01",
        last_name: "plant01",
        display_name: "user01",
        description: "user01 for test",
        email: "user01@gmail.com",
        phone: "0800-120-1202",
        role_id: "06222859e75edb92b1ab111",
        role_name: "IT",
        active_status: 1,
        online: 0,
        last_login: "2018-07-17 12:00:00",
        retry_for_login: 0,
        photo_filename: "user01.jpg",
        photo_url: "10.135.2.3/account/photo/user01.jpg",
        photo_preview_url: "10.135.2.3/account/photo/user01_preview.jpg"
      })
    );
  },
  createAccount: (event, context, callback) => {
    let data = JSON.parse(event.body);
    delete data.password;
    delete data.phone;
    callback(null, {
      results: {
        status: "OK",
        status_code: 200,
        status_msg: "Create Success",
        user_id: uuid.v1(),
        username: data.username,
        ...data,
        role_name: "IT",
        photo_url: "10.135.2.3/account/photo/user01.jpg",
        photo_preview_url: "10.135.2.3/account/photo/user01_preview.jpg",
        created_time: Date.now()
      }
    });
  },
  updateAccount: (event, context, callback) => {
    const userId = event.pathParams.user_id;
    let data = JSON.parse(event.body);
    delete data.password;
    callback(null, {
      results: {
        status: "OK",
        status_code: 200,
        status_msg: "Update Success",
        user_id: userId,
        ...data,
        photo_preview_url: "10.135.2.3/account/photo/user01_preview.jpg",
        updated_time: Date.now()
      }
    });
  },
  deleteAccount: (event, context, callback) => {
    const userId = event.pathParams.user_id;
    callback(
      null,
      success({
        results: {
          status: "OK",
          status_code: "200",
          status_msg: "Delete Success",
          user_id: userId,
          updated_time: Data.now()
        }
      })
    );
  }
};
