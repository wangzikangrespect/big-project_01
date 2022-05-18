function userinfo() {
    $.ajax({
        type: "get",
        url: "/my/userinfo",

        success: function (res) {
            if (res.status !== 0) return console.log(res.message)
        },
    });
}
userinfo()
let layer = layui.layer
$('#userout').click(function () {
    layer.confirm('确定要对出吗?', { icon: 3, title: '提示' }, function (index) {
        //点击确定删除token
        localStorage.removeItem('token')
        //跳转到登录页面
        location.href = '/login.html'
        //关闭询问框
        layer.close(index);
    });
})
