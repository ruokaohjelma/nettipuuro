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
        for (let x = 0; x <= width; x++) {
            let y = 300 + Math.sin(x * frequency) * amplitude;
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    
    function drawSand() {
        const colors = ["#c2a37a", "#b49772", "#a68568", "#97785d", "#886b52"];
        for (let i = 0; i < 50; i++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            let x = 100 + Math.random() * 200;
            let y = 250 + Math.random() * 50;
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
                x: Math.random() * width,
                y: Math.random() * 100,
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
            if (fruit.x < 0 || fruit.x > width) fruit.dx *= -1;
            if (fruit.y < 0 || fruit.y > 100) fruit.dy *= -1;
            
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
