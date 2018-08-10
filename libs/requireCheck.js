export function checkReq(require, body) {
    let fail = {
        "status": false,
        "status_code": "500"
    };
    const success = {
        "status": true,
        "status_code": "200"
    };
    for (var i = 0; i < require.length; i++) {
        if (!body[require[i]])
            return Object.assign(fail, {
                "status_msg": require[i] + " is reqired."
            });
    }
    return success;
}