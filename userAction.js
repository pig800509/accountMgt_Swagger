'use strict';
import {
    success,
    failure
} from "./libs/response-lib";
import {
    checkReq
} from "./libs/requireCheck";
import uuid from "uuid";
//import * as momont from "momont";
const moment = require('moment');

module.exports = {
    login: (event, context, callback) => {
        const data = JSON.parse(event.body);
        let required_params = ["username", "password"];
        let check = checkReq(required_params, data);
        check.status === "Fail" ? callback(null, failure({
            "results": check
        })) : callback(null, success({
            "results": { ...check,
                "status_msg": "Login Success",
                "user_id": uuid.v1(),
                "token": "eyFKHFKwyfyytq87236.......",
                "updated_time": momont(Date.now()).format('YYYY-MM-DD HH:mm:ss')
            }
        }))
    },
    logout: (event, context, callback) => {
        const data = JSON.parse(event.body);
        //const userId = data.user_id;
        let required_params = ["user_id"];
        let check = checkReq(required_params, data);
        check.status === "Fail" ? callback(null, failure({
            "results": check
        })) : callback(null, success({
            "results": { ...check,
                "status_msg": "Logout Success",
                "user_id": data.user_id,
                "updated_time": momont(Date.now()).format('YYYY-MM-DD HH:mm:ss')
            }
        }))
    }
};