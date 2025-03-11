window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    // Increase canvas size to make the whole scene bigger
    canvas.width = 600;
    canvas.height = 400;

    // Store the refresh intervals
    let porridgeInterval, toppingInterval, bowlShapeInterval, ornamentInterval;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw plate (side view, deeper bowl shape)
        drawBowlShape();

        // Draw porridge (dots, organic pile shape)
        drawPorridge();

        // Draw toppings
        drawToppings();

        // Draw ornaments on the plate
        drawOrnaments();
    }

    function drawBowlShape() {
        ctx.fillStyle = "#ffffff"; // Plate color
        ctx.beginPath();
        ctx.moveTo(120, 300); // Left side of the plate
        ctx.lineTo(480, 300); // Right side of the plate
        ctx.lineTo(510, 230); // Steeper right outer curve for depth
        ctx.lineTo(90, 230);  // Steeper left outer curve for depth
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#888"; // Plate outline color
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    function drawPorridge() {
        const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];

        // Draw porridge as small random dots forming an organic pile
        for (let i = 0; i < 400 + Math.random() * 150; i++) {
            ctx.fillStyle = porridgeColors[Math.floor(Math.random() * porridgeColors.length)];
            let x = 180 + Math.random() * 240; // Random horizontal placement of dots
            let y = 240 + Math.random() * 60; // Keep the porridge dots in the right vertical range
            // Randomize the pile to be more organic
            if (y > 240 && y < 260) x += Math.random() * 50; // Pile lower half (denser dots)
            if (y > 260 && y < 280) x += Math.random() * 30; // Pile upper half (less dense dots)
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function drawToppings() {
        const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513"];
        
        // Randomly draw 5 toppings with a bigger size
        for (let i = 0; i < 5; i++) {
            ctx.fillStyle = toppingColors[Math.floor(Math.random() * toppingColors.length)];
            let x = 200 + Math.random() * 200;
            let y = 210 + Math.random() * 40; // Make toppings sit above the porridge

            // Randomize topping size
            let size = Math.random() * 10 + 8;  // Topping size slightly bigger
            
            ctx.beginPath();
            let shape = Math.floor(Math.random() * 4);
            
            if (shape === 0) { // Round
                ctx.arc(x, y, size, 0, Math.PI * 2);
            } else if (shape === 1) { // Oval
                ctx.ellipse(x, y, size, size * 0.7, 0, 0, Math.PI * 2);
            } else if (shape === 2) { // Half-circle
                ctx.arc(x, y, size, 0, Math.PI);
            } else { // Banana shape (curved oval)
                ctx.ellipse(x, y, size, size * 0.6, Math.PI / 4, 0, Math.PI * 2);
            }
            
            ctx.fill();
        }
    }

    function drawOrnaments() {
        // Draw random ornaments or designs on the plate to give it more decoration
        const ornamentColors = ["#ffd700", "#ff6347", "#4682b4", "#32cd32", "#8a2be2"];
        const ornaments = [
            { x: 150, y: 290, size: 10 },
            { x: 220, y: 295, size: 8 },
            { x: 350, y: 290, size: 9 },
            { x: 400, y: 300, size: 12 },
            { x: 470, y: 295, size: 7 }
        ];

        ornaments.forEach(ornament => {
            ctx.fillStyle = ornamentColors[Math.floor(Math.random() * ornamentColors.length)];
            ctx.beginPath();
            ctx.arc(ornament.x, ornament.y, ornament.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // Initialize random refresh rates for different elements
    function startRandomRefresh() {
        porridgeInterval = setInterval(drawPorridge, Math.random() * 3000 + 1000); // Porridge refresh rate between 1s - 4s
        toppingInterval = setInterval(drawToppings, Math.random() * 4000 + 1000);  // Topping refresh rate between 1s - 5s
        bowlShapeInterval = setInterval(drawBowlShape, Math.random() * 5000 + 2000);  // Bowl shape refresh rate between 2s - 7s
        ornamentInterval = setInterval(drawOrnaments, Math.random() * 6000 + 2000);  // Ornament refresh rate between 2s - 8s
    }

    // Run immediately and start random refreshes
    draw();
    startRandomRefresh();
};
