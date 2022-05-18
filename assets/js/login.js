$('.form-login-btn').click(function () {
    $('.form-reg').show();
    $('.form-login').hide();
})
$('.form-reg-btn').click(function () {
    $('.form-login').show();
    $('.form-reg').hide();
})

//声明layui对象的form方法为form ，然后调用verify进行正则验证
let form = layui.form

form.verify({
    pass: [
        /^[\S]{6,12}$/
        , '密码必须6到12位，且不能出现空格'
    ],
    affirm: function (value, item) {
        let pass = $('#affirm-pass').val()
        if (pass !== value) {
            return '密码需一致'
        }
    }

})

$('#reg-btn').click(function (e) {
    e.preventDefault()
    $.ajax({
        type: "post",
        url: "/api/reguser",
        data: { username: $('#reg-text').val(), password: $('#affirm-pass').val() },
        success: function (res) {
            if (res.status !== 0) return console.log(res.message)
            console.log('注册成功')
            $('.form-reg-btn').click()
        }
    });
})
$('#login-btn').click(function(e){
    e.preventDefault()
    $.ajax({
        type: "post",
        url: "/api/login",
        data: $('.form-login').serialize( ),
        success: function (res) {
            if(res.status!==0) return res.message
            console.log('登录成功')
            localStorage.setItem('token',res.token)
            location.href='/index.html'
        }
    });
})