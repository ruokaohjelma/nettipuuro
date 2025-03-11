window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    let plateWidth = 180 + Math.random() * 60;
    let plateHeight = 150 + Math.random() * 30;
    let lastPlateChangeTime = 0;
    let lastPorridgeChangeTime = 0;
    let lastToppingsChangeTime = 0;

    // Funktio, joka piirtää koko järjestelmän
    function draw() {
        const currentTime = Date.now();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Piirretään täytteet (ylhäällä)
        if (currentTime - lastToppingsChangeTime > 500) {
            drawToppings();
            lastToppingsChangeTime = currentTime;
        }

        // Piirretään puuro (täytteiden alle)
        if (currentTime - lastPorridgeChangeTime > 700) {
            drawPorridge(plateWidth);
            lastPorridgeChangeTime = currentTime;
        }

        // Muutetaan lautasen muotoa vähitellen (alhaalla)
        if (currentTime - lastPlateChangeTime > 1500) {
            plateWidth = 180 + Math.random() * 60;
            plateHeight = 150 + Math.random() * 30;
            lastPlateChangeTime = currentTime;
        }

        // Piirretään lautanen (käännetty oikein)
        ctx.fillStyle = "#ffffff"; // Lautasen väri
        ctx.beginPath();
        ctx.arc(200, 400, plateWidth, 0, Math.PI, false); // Lautanen käännetty oikein
        ctx.lineTo(50, 400); // Vasemman puolen viiva
        ctx.lineTo(350, 400); // Oikean puolen viiva
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#888"; // Lautasen ääriviivan väri
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // Funktio täytteiden piirtämiseen
    function drawToppings() {
        const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513", "#00ff00", "#ff69b4"];

        for (let i = 0; i < 20; i++) { // Lisää täytteitä
            ctx.fillStyle = toppingColors[Math.floor(Math.random() * toppingColors.length)];
            let x = 140 + Math.random() * 120;
            let y = 160 + Math.random() * 20;

            ctx.beginPath();
            let shape = Math.floor(Math.random() * 4);

            if (shape === 0) { // Pyöreä
                ctx.arc(x, y, Math.random() * 6 + 3, 0, Math.PI * 2);
            } else if (shape === 1) { // Soikea
                ctx.ellipse(x, y, Math.random() * 6 + 4, Math.random() * 3 + 2, 0, 0, Math.PI * 2);
            } else if (shape === 2) { // Puolipyöreä
                ctx.arc(x, y, Math.random() * 6 + 3, 
