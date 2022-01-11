function generate() {
    let text = $("#text-area").val();
    console.log(text)
    $.ajax({
        type: "POST",
        url: "/making",
        data: {text_give: text},
        success: function (response) {

            window.location.href = '/making'
        }
    })
}