var full_word = "";
let pressedKey;
const originalBg = window.getComputedStyle(document.body).backgroundColor;

document.addEventListener('keydown', function(event) {
  if (/^[a-zA-Z]$/.test(event.key)) {
    pressedKey = event.key.toUpperCase();
    console.log(pressedKey);
    full_word += pressedKey;
    if (full_word.endsWith("HOSENOEFFNER")) {
        // faster blinking: tweak these values to change speed
        const blinkCount = 6;
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
});