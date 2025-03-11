window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw plate (side view, boat-like shape)
        ctx.fillStyle = "#ffffff"; // Plate color
        ctx.beginPath();
        ctx.moveTo(100, 220); // Left side of the plate
        ctx.quadraticCurveTo(200, 180, 300, 220); // Curve to make the "boat" shape
        ctx.lineTo(300, 240); // Right side of the plate
        ctx.quadraticCurveTo(200, 270, 100, 240); // Bottom curve
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#888"; // Plate outline color
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw porridge
        drawPorridge();

        // Draw toppings
        drawToppings();
    }

    function drawPorridge() {
        const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];
        
        // Porridge is a heap of small dots
        for (let i = 0; i < 300; i++) {
            ctx.fillStyle = porridgeColors[Math.floor(Math.random() * porridgeColors.length)];
            let x = 120 + Math.random() * 160;
            let y = 230 + Math.random() * 20;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawToppings() {
        const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513"];

        // Randomly draw 5 toppings
        for (let i = 0; i < 5; i++) {
            ctx.fillStyle = toppingColors[Math.floor(Math.random() * toppingColors.length)];
            let x = 140 + Math.random() * 120;
            let y = 190 + Math.random() * 10;

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

    // Run immediately and every 5 seconds
    draw();
    setInterval(draw, 5000);
};
