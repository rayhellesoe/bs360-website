$(".driver-name").click(e => {
    let drivers = $(".driver-name")
    
    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].src.search("-active") !== -1) {
            drivers[i].src = drivers[i].src.replace("-active","")
        }
    }

    if (e.target.id === "lhamilton-vod") {
        $(".main-video")[0].src = `${e.target.getAttribute("src").replace(".png", "")}-vod.mp4`
    } else {
        $(".main-video")[0].src = `${e.target.getAttribute("src").replace(".png", "")}.mp4`
    }

    e.target.src = e.target.getAttribute("src").replace(".png", "-active.png")
})

$("#cam-config").click(e => {
    $("#main-section").hide();
    $(".config-menu").show();
})

// TODO: Update to use a cleaner method of switching images

$("#step1").click(e => {
    $(".config-ui").hide();
    $("#step2").show();
})

$("#step2").click(e => {
    $(".config-ui").hide();
    $("#step3").show();
})

$("#step3").click(e => {
    $(".config-ui").hide();
    $("#step4").show();
})

$("#step4").click(e => {
    $(".config-ui").hide();
    $("#step5").show();
})

$("#close-menu").click(e => {
    $(".config-ui").hide();
    $(".config-menu").hide();
    $("#main-section").show();
    $("#step1").show();
})

$(".pip-video").click(e => {
    if ($(".pip-video").hasClass("pip-full")) {
        $(".pip-video").removeClass("pip-full");
        return;
    } else {
        $(".pip-video").addClass("pip-full");
    }
})