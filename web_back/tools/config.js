// - config.js中用来保存网站中的一些配置信息
//   - 例如，所有的接口地址，都可以统一保存在这个文件中
// - 下面的这些保存配置信息的变量最好避免被其他代码不小心修改了
//   - 可以将变量名书写为全大写的形式
//   - 命名的多个部分使用“_”连接（下划线命名法）

var BASE_URL = 'http://localhost:8000';//通过变量来保存地址
// 后续的接口地址都基于基地址拼接即可
var LOGIN = BASE_URL + '/admin/login';  //用户登录接口
var LOGOUT = BASE_URL + '/admin/logout';//用户退出接口
var GET_USER = BASE_URL + '/admin/getuser';//用户基本信息接口
var GETUSER_INFO = BASE_URL + '/admin/userinfo_get';//用户信息接口
var GET_CATEGORY = BASE_URL + '/admin/category_search';//获取分类数据接口
var ADD_CATE = BASE_URL + '/admin/category_add';//新增分类数据接口
var EDIT_CATE = BASE_URL + '/admin/category_edit';//编辑文章类别接口
var DEL_CATE = BASE_URL + '/admin/category_delete';//分类数据删除接口