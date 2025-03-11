window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw plate (side view)
        ctx.fillStyle = "#ffffff"; // Plate color
        ctx.beginPath();
        ctx.ellipse(200, 200, 120, 30, 0, 0, Math.PI * 2); // Oval plate
        ctx.fill();
        ctx.strokeStyle = "#888"; // Plate outline color
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw toppings
        drawToppings();
    }

    function drawToppings() {
        const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513"];

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
