window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw plate (side view) - deeper bowl
        ctx.fillStyle = "#ffffff"; // Plate color
        ctx.beginPath();
        ctx.ellipse(200, 240, 150, 50, 0, 0, Math.PI); // Deeper bowl (side view)
        ctx.fill();
        ctx.strokeStyle = "#888"; // Plate outline color
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw porridge - half-sphere mound
        drawPorridge();

        // Draw toppings
        drawToppings();
    }

    function drawPorridge() {
        const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];

        ctx.beginPath();
        ctx.arc(200, 180, 80, Math.PI, 0, true); // Half-sphere mound of porridge
        ctx.fillStyle = "#d1b09b"; // Light brown for porridge base
        ctx.fill();

        // Draw small dots for porridge
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
