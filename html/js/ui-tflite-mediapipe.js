
$(document).ready(function () {
    localname = parseSearchParams("usr")
    $("#navuser").html(localname)
})

$(window).on("load", function () {
  oneWebMeetMediaPipe();
});

const exit = () => {
    userExit();
    location.href = '../';
}
