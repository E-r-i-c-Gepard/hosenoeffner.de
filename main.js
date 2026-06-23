var full_word = "";
var zipper = document.getElementById("zipper");
var slider = document.getElementById("slider");
var isdragging = false;
var played = false;
let pressedKey;
const originalBg = window.getComputedStyle(document.body).backgroundColor;
const min_y = zipper.getBoundingClientRect().top;
const max_y = zipper.getBoundingClientRect().bottom - slider.offsetHeight + 100;
document.addEventListener('keydown', function (event) {
    if (/^[a-zA-Z]$/.test(event.key)) {
        pressedKey = event.key.toUpperCase();
        console.log(pressedKey);
        full_word += pressedKey;
        if (full_word.endsWith("HOSENOEFFNER")) {
            // faster blinking: tweak these values to change speed
            const blinkCount = 10;
            const greenDuration = 120; // ms
            const redDuration = 120; // ms
            const cycle = greenDuration + redDuration;
            for (let i = 0; i < blinkCount; i++) {
                setTimeout(() => { document.body.style.backgroundColor = "green"; }, i * cycle);
                setTimeout(() => { document.body.style.backgroundColor = "red"; }, i * cycle + greenDuration);
            }
            // restore original background after all cycles complete
            setTimeout(() => {
                document.body.style.backgroundColor = originalBg;
                full_word = "";
            }, blinkCount * cycle);
        }
    }
    if (full_word.endsWith("MEME")) {
        window.location.href = "./pages/video.html";
    }
});
slider.addEventListener("mousedown", function () {
    isdragging = true;
})

document.addEventListener("mouseup", function () {
    isdragging = false;
})
document.addEventListener("mousemove", function (event) {
    if (isdragging) {
        slider.style.top = event.clientY + "px";

        if (event.clientY < min_y) {
            slider.style.top = min_y + "px";

        }
        if (event.clientY > max_y) {
            slider.style.top = max_y + "px";
            if (!played) {
                audio = new Audio('./sounds/Yayy.mpeg');
                audio.volume = 0.25;
                audio.play();
                played = true;
        
            }
        }
        else {
            played = false;
        }
    }
}) 