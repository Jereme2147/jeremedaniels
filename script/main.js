let tablet = window.matchMedia("(min-width: 600px)");
let desktop = window.matchMedia("(min-width: 950px)");

$(document).ready(function() {
    if (tablet.matches) {
        $("#photo-div").html(
            `<img id="photo" src="./media/me.jpg" alt="picture of me">`
        );
    }
    if (desktop.matches) {
        $("#photo-div").html(
            `<img id="photo" src="./media/me.jpg" alt="picture of me">`
        );
    }
});
