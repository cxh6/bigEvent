// 使用user.js对项目中与用户操作有关的请求功能进行保存
var user = {
    // ----------------------设置login方法，用来进行登录请求操作
    login: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGIN, //将地址进行特殊处理
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                // console.log(res);
                // 4.根据响应状态进行判断
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        });
    },
    // ---------------------设置logout方法，用来进行退出操作
    logout: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    // ---------------------设置getUser方法，用来获取用户基本信息
    getUser: function (options) {
        $.ajax({
            url: GET_USER,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    // 这里的res 是 实参
                    options.success(res);
                }
            }
        });
    },
    // ---------------------设置getUserInfo方法，用来获取用户详细信息
    getUserInfo: function (options) {
        $.ajax({
            url: GETUSER_INFO,
            success: function (res) {
                // console.log(res);
                // 判断是否接收成功
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    // ------------------设置editUserInfo方法，用来将编辑用户信息发送给服务器
    editUserInfo: function (options) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/admin/userinfo_edit',
            data: options.data.fd,
            contentType: false,//不需要jQuery设置内容类型
            processData: false,//不需要jQuery进行内容处理
            success: function (res) {
                // console.log(res);
                // 判断响应是否成功
                if (res.code === 200) {
                    options.success();

                }
            }
        });
    }

};