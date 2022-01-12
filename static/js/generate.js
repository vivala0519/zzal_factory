function generate() {
    let text = $("#text-area").val();
    let zzal = $("#zzalback").text();
    let color = $("#zzalcolor").text();

    let img = "";
    console.log(zzal);
    console.log(color);


    if (zzal.trim()==="이미지 선택짤" || color.trim() === "폰트 색상") {
        alert("이미지와 폰트색상을 모두 선택해주세요.")
        return;
    }
    if (text.trim() === "") {
        alert("문구를 입력해주세요.")
        return;
    }

    if (zzal==="묻고 더블로 가!") {
        img = "double";
        console.log("체크");
    } else if(zzal === "한 끗인데 5억을 태워?"){
        img = "burning";
    } else if(zzal === "신사답게 행동해") {
        img = "gentleman";
    }



    console.log(text)
    $.ajax({
        type: "POST",
        url: "/making",
        data: {img_give: img, text_give: text, color_give: color},
        success: function (response) {

            window.location.href = '/making'
        }
    })
}


$(document).ready(function(){

	$("#text-area").keyup(function(){
	$("#result").text($("#text-area").val());

	});

});

function colorSet (color) {

$(".colors").css("color", color)

}
