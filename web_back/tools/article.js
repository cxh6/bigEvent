// 用来进行文章操作处理的接口
var article = {
    // ---------------------------article_category.html接口
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
    },
    // ------------article.list.html页面
    // -----------------设置getArt()方法，用来请求文章数据（筛选）
    getArt: function (options) {
        $.ajax({
            url: GET_ART,
            data: {
                page: options.data.page,//分页参数
                type: options.data.type,//分类筛选参数
                state: options.data.state//状态筛选参数
            },
            success: function (res) {
                // console.log(res);
                // 判断是否响应成功
                if (res.code === 200) {
                    options.success(res);
                    // // console.log(res);
                    // // 生成结构
                    // var htmlStr = template("articleShow", res);
                    // // 放入页面中
                    // $("tbody").html(htmlStr);
                    // 
                    // // 获取到res中存在的totalPage的属性，表示本次请求数据的总页数
                    // totalPage = res.totalPage;
                    // // 需要在重新发送分页结构前进行检测，如果总页数与上次相同，没必要重新创建了
                    // if (totalPage === lastTotalPage) {
                    //     return;
                    // }
                    // // 每次重置分页结构时，记录上一次的总页数
                    // lastTotalPage = totalPage;
                    // // 如果进行了筛选，需要将旧的分页结构删除（JQ分页插件文档中提供的删除方式）
                    // $("#list").twbsPagination('destroy');

                    // // -----文章信息分页展示操作！
                    // // -点击页码，将页码发送到服务器获取新数据
                    // $("#list").twbsPagination({
                    //     totalPages: res.totalPage,
                    //     visiblePages: 7,
                    //     first: "首页",
                    //     last: "尾页",
                    //     prev: "上一页",
                    //     next: "下一页",
                    //     onPageClick: function (e, currentPage) {
                    //         // 点击页码之后，将页码发送给服务器，再请求新的数据
                    //         page = currentPage;
                    //         getArticle();
                    //         // console.log("执行了");
                    //     }
                    // });
                }
            }
        });
    },


    // ------------------设置delArticle()方法，用来进行删除文章操作
    delArticle: function (options) {
        $.ajax({
            url: DEL_ARTICLE,
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