function musicPlayback() {
    let song = document.querySelector("#song");
    let quote = document.querySelector("blockquote");
    let giftbox = document.querySelector(".giftbox");
    let background = document.querySelector("main");
    //replace giftbox icon for first time
    if (giftbox.style.backgroundImage != "url(./resources/cake.gif)")
    {giftbox.style.backgroundImage = "url(./resources/cake.gif)"}
    //music playback handling
    if (song.paused == true) {
        //  play music, hide giftbox and display quote 
        song.play();
        quote.removeAttribute("hidden");
        giftbox.setAttribute("hidden", true);
        //change background with playback
        background.style.backgroundImage = "url(./resources/drinks.jpeg)";
    } else {
        // if playing the pause and hide quote and make giftbox visible
        song.pause();
        quote.setAttribute("hidden", true);
        giftbox.removeAttribute("hidden");
        background.style.backgroundImage = "url(./resources/ivana-cajina-HDd-NQ_AMNQ-unsplash.jpg)";
    }
}