// reused from kd
function musicPlayback() {
    let song = document.querySelector("#song");
    let quote = document.querySelector("blockquote");
    let giftbox = document.querySelector(".giftbox");
    if (song.paused == true) {
        //  play music, hide giftbox and display quote 
        song.play();
        quote.removeAttribute("hidden")
        giftbox.setAttribute("hidden", true)
    } else {
        // if playing the pause and hide quote and make giftbox visible
        song.pause();
        quote.setAttribute("hidden", true)
        giftbox.removeAttribute("hidden")
    }
}
