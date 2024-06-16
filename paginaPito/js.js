let vid = document.getElementById("myVideo");
vid.volume = 0.2;
$(".heart").on("click", ()=>{
    const vminSize = Math.min(window.innerHeight, window.innerWidth);
    const targetSize = 50 * vminSize / 100;
    $(".heart").animate({
        width:"5000px"
    },800, ()=>{
        console.log("Hola");
    })
    $(".mensaje-para-padre").fadeIn();
    $(".oscuro").fadeIn();
})