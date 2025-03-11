const canvas = document.getElementById("puuroCanvas");
const ctx = canvas.getContext("2d");

console.log("Script loaded, attempting to draw.");

function drawPlate() {
    console.log("Drawing plate...");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff"; // White plate
    ctx.strokeStyle = "#aaa"; // Grey outline

    // Generate a slightly irregular oval for the plate
    ctx.beginPath();
    const centerX = 200, centerY = 200;
    const radiusX = 120 + Math.random() * 15; // Slight variation in size
    const radiusY = 90 + Math.random() * 10;

    for (let angle = 0; angle <= Math.PI * 2; angle += 0.1) {
        let x = centerX + radiusX * Math.cos(angle) + Math.sin(angle * 4) * 5;
        let y = centerY + radiusY * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    drawOrnaments(centerX, centerY, radiusX, radiusY);
    drawPorridge(centerX, centerY);
}

function drawOrnaments(cx, cy, rx, ry) {
    ctx.strokeStyle = "#d4af37"; // Gold-like color for ornamentation
    ctx.lineWidth = 2;

    for (let i = 0; i < 8; i++) {
        let angle = (i / 8) * Math.PI * 2;
        let x = cx + rx * Math.cos(angle) * 0.8;
        let y = cy + ry * Math.sin(angle) * 0.8;

        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function drawPorridge(cx, cy) {
    console.log("Drawing porridge...");
    ctx.fillStyle = "#d2a679"; // Light brown porridge color

    ctx.beginPath();
    ctx.ellipse(cx, cy, 70, 50, 0, 0, Math.PI * 2);
    ctx.fill();

    drawToppings(cx, cy);
}

function drawToppings(cx, cy) {
    console.log("Adding toppings...");
    const toppings = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513"];
    ctx.fillStyle = toppings[Math.floor(Math.random() * toppings.length)];

    for (let i = 0; i < 6; i++) {
        let x = cx + (Math.random() * 60 - 30);
        let y = cy + (Math.random() * 40 - 20);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Ensure it runs immediately
window.onload = function() {
    console.log("Window loaded, starting drawing.");
    drawPlate();
    setInterval(drawPlate, 5000);
};
