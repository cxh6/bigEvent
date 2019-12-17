// 用来进行文章操作处理的接口
var article = {
    // --------------设置getCategory方法，用来进行分类数据展示功能
    getCategory: function (options) {
        $.ajax({
            url: GET_CATEGORY,
            success: function (res) {
                // console.log(res);
                // 判断是否响应成功
                if (res.code === 200) {
                    options.success(res);
                }
            }
        });
    },
    // ----------------设置addCate方法，用来进行新增分类数据
    addCate: function (options) {
        $.ajax({
            type: 'POST',
            url: ADD_CATE,
            data: $("form").serialize(),//可以将表单数据处理为 名=值&名=值&...
            success: function (res) {
                // console.log(res);
                // 判断是否响应成功
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        });
    },
    // ---------------设置editCate方法，用来进行编辑文章类别功能
    // *********************************
    editCate: function (options) {
        $.ajax({
            type: 'POST',
            url: EDIT_CATE,
            data: $("form").serialize(),
            success: function (res) {
                // console.log(res);
                // 判断是否响应成功
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        });
    },
    // **************************
    // -------------------设置delCate方法，分类数据删除功能
    delCate: function (options) {
        $.ajax({
            type: 'POST',
            url: DEL_CATE,
            data: {
                id: options.data.id
            },
            success: function (res) {
                // console.log(res);
                // 判断是否响应成功
                if (res.code === 200) {
                    options.success();
                }
            }
        });
    }
};