const canvas = document.getElementById("puuroCanvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw plate (side view)
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(200, 280, 120, 30, 0, 0, Math.PI * 2); // Top edge
    ctx.fill();
    ctx.strokeStyle = "#aaa";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(80, 280); // Left edge
    ctx.lineTo(80, 310);
    ctx.lineTo(320, 310);
    ctx.lineTo(320, 280); // Right edge
    ctx.stroke();

    // Draw porridge texture
    drawPorridge();

    // Draw toppings
    drawToppings();
}

function drawPorridge() {
    const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];

    for (let i = 0; i < 500; i++) {
        ctx.fillStyle = porridgeColors[Math.floor(Math.random() * porridgeColors.length)];
        let x = 120 + Math.random() * 160;
        let y = 280 + Math.random() * 20;
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawToppings() {
    const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513"];

    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = toppingColors[Math.floor(Math.random() * toppingColors.length)];
        let x = 140 + Math.random() * 120;
        let y = 270 + Math.random() * 10;

        ctx.beginPath();
        let shape = Math.floor(Math.random() * 4);
        
        if (shape === 0) { // Round
            ctx.arc(x, y, Math.random() * 6 + 3, 0, Math.PI * 2);
        } else if (shape === 1) { // Oval
            ctx.ellipse(x, y, Math.random() * 6 + 4, Math.random() * 3 + 2, 0, 0, Math.PI * 2);
        } else if (shape === 2) { // Half-circle
            ctx.arc(x, y, Math.random() * 6 + 3, 0, Math.PI);
        } else { // Banana shape (curved oval)
            ctx.ellipse(x, y, Math.random() * 8 + 4, Math.random() * 3 + 2, Math.PI / 4, 0, Math.PI * 2);
        }
        
        ctx.fill();
    }
}

/

