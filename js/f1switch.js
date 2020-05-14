$(".driver-name").click(e => {
    let drivers = $(".driver-name")
    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].src.search("-active") !== -1) {
            drivers[i].src = drivers[i].src.replace("-active","")
        }
    }
    $(".main-video")[0].src = `${e.target.getAttribute("src").replace(".png", "")}.mp4`
    e.target.src = e.target.getAttribute("src").replace(".png", "-active.png")
})

$(".menu-icon").click(e => {
    $(".main-grid").hide();
    $(".config-menu").show();
})

$(".config-ui").click(e => {
    $(".config-menu").hide();
    $(".main-grid").show();
})