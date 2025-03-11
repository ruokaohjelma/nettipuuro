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
        
        // Porridge is a heap of small dots, but the shape is a half-circle with a straight top line
        ctx.fillStyle = "#a07e58"; // Base porridge color
        ctx.beginPath();
        ctx.arc(200, 210, 80, Math.PI, 0, false); // Half circle shape (heap of porridge)
        ctx.lineTo(120, 210); // Connect the straight line on top
        ctx.closePath();
        ctx.fill();

        // Add more details by filling with smaller dots
        for (let i = 0; i < 300; i++) {
            ctx.fillStyle = porridgeColors[Math.floor(Math.random() * porridgeColors.length)];
            let x = 120 + Math.random() * 160;
            let y = 180 + Math.random() * 40; // Keep the porridge dots in the right vertical range
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
            let y = 150 + Math.random() * 30; // Make toppings sit above the porridge

            ctx.beginPath();
 
