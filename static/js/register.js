function register() {
    let id = $("#input_id").val()
    let password = $("#input_password").val()
    let password2 = $("#confirm_password2").val()


//    if (password == "") {
//        $("#help-password").text("비밀번호를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
//        $("#input-password").focus()
//        return;
//    } else if (!is_password(password)) {
//        $("#help-password").text("비밀번호의 형식을 확인해주세요. 영문과 숫자 필수 포함, 특수문자(!@#$%^&*) 사용가능 8-20자").removeClass("is-safe").addClass("is-danger")
//        $("#input-password").focus()
//        return
//    } else {
//        $("#help-password").text("사용할 수 있는 비밀번호입니다.").removeClass("is-danger").addClass("is-success")
//    }
//    if (password2 == "") {
//        $("#help-password2").text("비밀번호를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
//        $("#input-password2").focus()
//        return;
//    } else if (password2 != password) {
//        $("#help-password2").text("비밀번호가 일치하지 않습니다.").removeClass("is-safe").addClass("is-danger")
//        $("#input-password2").focus()
//        return;
//    } else {
//        $("#help-password2").text("비밀번호가 일치합니다.").removeClass("is-danger").addClass("is-success")
//    }
    $.ajax({
        type: "POST",
        url: "/register",
        data: {
            id_give: id,
            pw_give: password
        },
        success: function (response) {
            alert("회원가입을 축하드립니다!")
            window.location.replace("/")
        }
    });

}