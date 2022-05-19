
// 声明layui.from方法的变量为from
let form = layui.form
function getUserInfo() {
    $.ajax({
        type: "GET",
        url: "/my/userinfo",
        success: function (res) {
            if (res.status !== 0) return console.log('获取用户信息失败')
            form.val('form', res.data)
        }
    });

}
getUserInfo()

//重置
$('#reset').click(function (e) {
    e.preventDefault()
    getUserInfo()
})
$('#submit').click(function (e) {
    e.preventDefault()
    $.ajax({
        type: "POST",
        url: "/my/userinfo",
        data: form.val('form'),
        success: function (res) {
            if (res.status !== 0) return console.log('失败')
            console.log('成功')
        }
    });
})