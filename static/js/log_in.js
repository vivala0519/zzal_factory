function log_in() {
    $.ajax({
        type: "POST",
        url: "/log_in",
        data: {id_give: $('#id-input').val(), pw_give: $('#pw-input').val()},
        success: function (response) {
            if (response['result'] == 'success') {
                // 로그인이 정상적으로 되면, 토큰을 받아온다
                // 이 토큰을 mytoken이라는 키 값으로 쿠키에 저장
                $.cookie('mytoken', response['token']);

                alert('로그인 완료!')
                window.location.href = '/'
            } else {
                // 로그인이 안되면 에러메시지를 띄웁니다.
                alert(response['msg'])
            }
        }
    })
}