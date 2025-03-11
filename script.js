const canvas = document.getElementById("puuroCanvas");
const ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw plate
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(200, 200, 120, 90, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#aaa";
    ctx.stroke();

    // Draw porridge
    ctx.fillStyle = "#d2a679";
    ctx.beginPath();
    ctx.ellipse(200, 200, 70, 50, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw random toppings
    for (let i = 0; i < 6; i++) {
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        let x = 200 + Math.random() * 50 - 25;
        let y = 200 + Math.random() * 30 - 15;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Run immediately and every 5 seconds
window.onload = function() {
    draw();
    setInterval(draw, 5000);
};
