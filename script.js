window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");
    const width = 400;
    const height = 400;
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        drawPlate();
        drawSand();
        drawFruits();
    }
    
    function drawPlate() {
        ctx.strokeStyle = "#888";
        ctx.lineWidth = 2;
        ctx.beginPath();
        let amplitude = 10;
        let frequency = 0.2;
        let centerX = width / 2;
        
        for (let x = centerX - 150; x <= centerX + 150; x++) {
            let y = 280 + Math.sin((x - (centerX - 150)) * frequency) * amplitude;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(centerX - 150, 280);
        ctx.bezierCurveTo(centerX - 120, 350, centerX + 120, 350, centerX + 150, 280);
        ctx.stroke();
    }
    
    function drawSand() {
        const colors = ["#c2a37a", "#b49772", "#a68568", "#97785d", "#886b52"];
        for (let i = 0; i < 50; i++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            let x = width / 2 - 100 + Math.random() * 200;
            let y = 230 + Math.random() * 50;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 5 + 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    let fruits = [];
    function generateFruits() {
        fruits = [];
        const fruitColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513"];
        for (let i = 0; i < 5; i++) {
            fruits.push({
                x: width / 2 - 50 + Math.random() * 100,
                y: 50 + Math.random() * 50,
                color: fruitColors[Math.floor(Math.random() * fruitColors.length)],
                dx: Math.random() * 2 - 1,
                dy: Math.random() * 2 - 1
            });
        }
    }
    
    function drawFruits() {
        fruits.forEach(fruit => {
            fruit.x += fruit.dx * 3;
            fruit.y += fruit.dy * 3;
            if (fruit.x < width / 2 - 100 || fruit.x > width / 2 + 100) fruit.dx *= -1;
            if (fruit.y < 20 || fruit.y > 120) fruit.dy *= -1;
            
            ctx.fillStyle = fruit.color;
            ctx.beginPath();
            ctx.arc(fruit.x, fruit.y, Math.random() * 6 + 4, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    generateFruits();
    setInterval(draw, 100);
    setInterval(generateFruits, 3000);
};
