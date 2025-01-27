let prevColor = "#FFFFFF"; 
let currentColor = "#FFFFFF";

// this creates color code
function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// This set background color to the generated color and print the code
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.getElementById("clrcode").value = color;

}
// if change color button is clicked it pass color code to setbgcolor function
document.getElementById("changeColor").addEventListener("click", function () {
    prevColor = currentColor;
    currentColor = randomColor();
    setBackgroundColor(currentColor);
});
// if prev color button is clicked it pass previous color code to setbgcolor function
document.getElementById("prevColor").addEventListener("click", function () {
    const tempColor = currentColor;
    currentColor = prevColor;
    prevColor = tempColor;
    setBackgroundColor(currentColor);
});
 // initial color code
setBackgroundColor(currentColor);

