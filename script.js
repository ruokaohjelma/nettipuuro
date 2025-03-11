window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the plate (side view) - deeper bowl
        ctx.fillStyle = "#ffffff"; // Plate color
        ctx.beginPath();
        ctx.arc(200, 240, 150, 0, Math.PI, true); // Deep bowl side view (ellipse with a curve)
        ctx.lineTo(50, 240); // Closing the left side of the bowl
        ctx.lineTo(350, 240); // Closing the right side of the bowl
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#888"; // Plate outline color
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw porridge - more organic shape
        drawPorridge();

        // Draw toppings
        drawToppings();
    }

    function drawPorridge() {
        const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];

        // Draw organic mound of porridge in the center of the bowl
        ctx.beginPath();
        ctx.moveTo(120, 180);
        ctx.quadraticCurveTo(200, 140, 280, 180); // Organic curve for the mound
        ctx.lineTo(280, 220);
        ctx.quadraticCurveTo(200, 260, 120, 220); // Closing the mound
        ctx.fillStyle = "#d1b09b"; // Light brown for porridge base
        ctx.fill();

        // Add random dots for porridge texture
        for (let i = 0; i < 300; i++) {
            ctx.fillStyle = porridgeColors[Math.floor(Math.random() * porridgeColors.length)];
            let x = 120 + Math.random() * 160;
            let y = 170 + Math.random() * 30; // Keeping it inside the mound area
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawToppings() {
        const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513"];

        for (let i = 0; i < 7; i++) {
            ctx.fillStyle = toppingColors[Math.floor(Math.random() * toppingColors.length)];
            let x = 140 + Math.random() * 120;
            let y = 170 + Math.random() * 10;

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

    // Run immediately and every 3 seconds
    draw();
    setInterval(draw, 3000);
};
