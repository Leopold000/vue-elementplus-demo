//放置所有的请求接口地址

const url = 'https://meituan.thexxdd.cn/apit/'

const urls = class{
    static m(){
        //注册接口
        const register = `${url}register`
        //登陆接口
        const login = `${url}login`
        //用户列表
        const pulluserlist = `${url}pulluserlist`
        //获取桌号
        const gettable = `${url}gettable`
        //获取订单
        const obtainorder = `${url}obtainorder`
        //获取详细菜单
        const vieworder = `${url}vieworder`
        //图片上传接口
        const uploadres = `${url}uploadres`
        //获取菜品类目
        const obtaincate = `${url}obtaincate`
        //获取菜品单位
        const obtainunit = `${url}obtainunit`
        //添加菜品单位
        const dishunit = `${url}dishunit`
        //提交菜品
        const putdishes = `${url}putdishes`
        //获取菜品数据
        const obtaindishes = `${url}obtaindishes`
        //下架菜品
        const fromsale = `${url}fromsale`
        //编辑菜品
        const editdishes = `${url}editdishes`
        //提交员工数据
        const addem = `${url}addem`
        //获取员工数据
        const getemployees = `${url}getemployees`
        //修改员工离职状态
        const modifyresi = `${url}modifyresi`
        //删除员工
        const deleteemp = `${url}deleteemp`
        //数据分析
        const analysis = `${url}analysis`
        //折线图的更新数据
        const switchcate = `${url}switchcate`
      
        return{
            register,
            login,
            pulluserlist,
            gettable,
            obtainorder,
            vieworder,
            uploadres,
            obtaincate,
            obtainunit,
            dishunit,
            putdishes,
            obtaindishes,
            fromsale,
            editdishes,
            addem,
            getemployees,
            modifyresi,
            deleteemp,
            analysis,
            switchcate
        }
    }
}

export default urls