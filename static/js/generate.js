function generate() {
    let text = $("#text-area").val();
    let zzal = $("#zzalback").innerText;
    let img = "";
    console.log(zzal);

    if (zzal==="묻고 더블로 가!") {
        img = "double";
        console.log("체크");
    } else {
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