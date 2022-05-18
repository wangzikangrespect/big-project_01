$.ajaxPrefilter(function (options) {
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // 检验若 文件头包含/my/则需加入检验头
    if (options.url.indexOf('/my/')) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        },
            options.complete = function (res) {
                if (res.responseJSON.status !== 0 || res.responseJSON.message === "身份认证失败") {
                    // 清空token
                    localStorage.removeItem('token')
                    //转到登录页面
                    location.href = '/login.html'
                }
            }


    }
    //判断若有/my/请求则加入complete函数
})