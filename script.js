window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width = 400;
    const height = canvas.height = 400;
    let time = 0;
    let showHand = false;
    let dropFruits = false;
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        drawPlate();
        if (!showHand) {
            drawSand();
            drawFruits();
        } else {
            drawHandAndPot();
            drawLightning();
        }
        time += 0.8; // Increase speed of wave animation
    }
    
    function drawPlate() {
        ctx.strokeStyle = "#888";
        ctx.lineWidth = 2;
        ctx.beginPath();
        let amplitude = 6;
        let frequency = 0.2; // Faster wave movement
        let centerX = width / 2;
        
        for (let x = centerX - 150; x <= centerX + 150; x++) {
            let y = 280 + Math.sin((x - (centerX - 150)) * frequency + time) * amplitude;
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
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            let x = width / 2 - 150 + Math.random() * 300;
            let y = 230 + Math.random() * 50;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 5 + 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    let fruits = [];
    function generateFruits() {
        fruits = [];
        for (let i = 0; i < 5; i++) {
            fruits.push({
                x: width / 2 - 100 + Math.random() * 200,
                y: dropFruits ? 0 : 100 + Math.random() * 130, // Start higher if dropping
                color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
                dx: dropFruits ? 0 : Math.random() * 2 - 1,
                dy: dropFruits ? Math.random() * 4 + 2 : Math.random() * 2 - 1
            });
        }
    }
    
    function drawFruits() {
        fruits.forEach(fruit => {
            fruit.x += fruit.dx * 3;
            fruit.y += fruit.dy * 3;
            if (!dropFruits) {
                if (fruit.x < width / 2 - 120 || fruit.x > width / 2 + 120) fruit.dx *= -1;
                if (fruit.y < 50 || fruit.y > 260) fruit.dy *= -1; // Allow falling to sand
            }
            ctx.fillStyle = fruit.color;
            ctx.beginPath();
            ctx.arc(fruit.x, fruit.y, Math.random() * 6 + 4, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    function drawHandAndPot() {
        // Draw pot
        ctx.fillStyle = "#444";
        ctx.fillRect(140, 60, 120, 80);
        ctx.strokeRect(140, 80, 120, 80);
        
        // Draw hand scooping
        ctx.fillStyle = "#f4c090";
        ctx.beginPath();
        ctx.arc(200, 100, 20, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawLightning() {
        for (let i = 0; i < 5; i++) {
            ctx.strokeStyle = `rgba(0, 0, 255, ${Math.random()})`;
            ctx.lineWidth = Math.random() * 3 + 1;
            ctx.beginPath();
            let startX = 140 + Math.random() * 120;
            let startY = 60;
            let endX = startX + Math.random() * 20 - 10;
            let endY = startY + 200 + Math.random() * 20;
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }
    }
    
    function toggleHand() {
        showHand = true;
        setTimeout(() => {
            showHand = false;
            dropFruits = !dropFruits;
            generateFruits();
        }, 10000);
    }
    
    generateFruits();
    setInterval(draw, 100);
    setInterval(toggleHand, 10000);
};
