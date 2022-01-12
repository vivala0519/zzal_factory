function register() {
    let id = $("#input_id").val()
    let nickname = $("#nickname").val()
    let password = $("#input_password").val()
    let password2 = $("#confirm_password").val()
    let checkPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,50}$/;
    let checkEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    // 아이디 공백체크
    if (id == ""){
        $("#help_id").text("이메일을 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input_id").focus()
        return;
    } else{
        $("#help_id").remove()
    }

    // 아이디 이메일형식 체크
    if (checkEmail.test(id) == false) {
//        $("#help_id").text("이메일을 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        alert('아이디가 이메일 형식이 아닙니다.')
        return;
    }

    // 닉네임 공백 체크
    if (nickname == ""){
        $("#help_nickname").text("닉네임을 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#nickname").focus()
        return;
    } else{
        $("#help_nickname").remove()
    }

    // 비밀번호 공백 체크
    if (password == "") {
        $("#help_password").text("비밀번호를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input_password").focus()
        return;
    } else{
        $("#help_password").remove()
    }

    // 비밀번호 확인 일치 체크
    if (password != password2) {
        $("#help_password2").text("비밀번호가 일치하지 않습니다.").removeClass("is-safe").addClass("is-danger")
        $("#confirm_password").focus()
        return;
    } else  {
        $("#help_password2").remove()
    }

    // 비밀번호 형식 체크
    if (checkPassword.test(password) == false) {
        alert('비밀번호는 영문과 숫자 조합 8자 이상이어야 합니다.')
        return;
    }



    $.ajax({
        type: "POST",
        url: "/register",
        data: {
            id_give: id,
            pw_give: password,
            nickname: nickname
        },
        success: function (response) {
            if (response['result'] === 'success') {
                alert("회원가입을 축하드립니다!")
                window.location.replace("/")
            } else {
                alert("이미 존재하는 아이디입니다.")
            }


        }
    });

}