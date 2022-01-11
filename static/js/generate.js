function generate() {
    let text = $("#text-area").val();
    let zzal = $("#zzalback").text();
    let img = "";
    console.log(zzal);

    if (zzal==="묻고 더블로 가!") {
        img = "double";
        console.log("체크");
    } else if(zzal === "한 끗인데 5억을 태워?"){
        img = "burning";
    }

    console.log(text)
    $.ajax({
        type: "POST",
        url: "/making",
        data: {img_give: img, text_give: text},
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
