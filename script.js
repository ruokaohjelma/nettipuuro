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

        // Muutetaan lautasen muotoa vähitellen
        if (currentTime - lastPlateChangeTime > 1500) {
            plateWidth = 180 + Math.random() * 60;
            plateHeight = 150 + Math.random() * 30;
            lastPlateChangeTime = currentTime;
        }

        // Piirretään lautanen (käännetty oikein)
        ctx.fillStyle = "#ffffff"; // Lautasen väri
        ctx.beginPath();
        ctx.arc(200, 240, plateWidth, 0, Math.PI, false); // Lautanen käännetty oikein
        ctx.lineTo(50, 240); // Vasemman puolen viiva
        ctx.lineTo(350, 240); // Oikean puolen viiva
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#888"; // Lautasen ääriviivan väri
        ctx.lineWidth = 2;
        ctx.stroke();

        // Piirretään puuro
        if (currentTime - lastPorridgeChangeTime > 700) {
            drawPorridge(plateWidth);
            lastPorridgeChangeTime = currentTime;
        }

        // Piirretään täytteet
        if (currentTime - lastToppingsChangeTime > 500) {
            drawToppings();
            lastToppingsChangeTime = currentTime;
        }
    }

    // Funktio piirtämään epätasainen puuro lautaselle
    function drawPorridge(plateWidth) {
        const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];

        // Piirretään puuron epätasainen yläreuna
        ctx.beginPath();
        ctx.moveTo(120, 240); // Puuro alkaa lautasen vasemmalta reunalta
        for (let i = 0; i < plateWidth; i += 20) {
            let yOffset = Math.random() * 20 + 10; // Epätasaiset kumpareet
            ctx.lineTo(120 + i, 240 - yOffset);
        }
        ctx.lineTo(120 + plateWidth, 240); // Puuro menee alas
        ctx.lineTo(120, 240); // Sulkee puuron yläreunan
        ctx.fillStyle = "#d1b09b"; // Puuro värinä
        ctx.fill();

        // Satunnaiset pisteet puuron pinnalle
        for (let i = 0; i < 400; i++) { // Lisää pisteitä
            ctx.fillStyle = porridgeColors[Math.floor(Math.random() * porridgeColors.length)];
            let x = 120 + Math.random() * plateWidth;
            let y = 240 - (Math.random() * 20 + 10); // Pysytään puuron alueella
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Funktio täytteiden piirtämiseen
    function drawToppings() {
        const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513", "#00ff00", "#ff69b4"];

        for (let i = 0; i < 20; i++) { // Lisää täytteitä
            ctx.fillStyle = toppingColors[Math.floor(Math.random() * toppingColors.length)];
            let x = 140 + Math.random() * 120;
            let y = 260 + Math.random() * 20;

            ctx.beginPath();
            let shape = Math.floor(Math.random() * 4);

            if (shape === 0) { // Pyöreä
                ctx.arc(x, y, Math.random() * 6 + 3, 0, Math.PI * 2);
            } else if (shape === 1) { // Soikea
                ctx.ellipse(x, y, Math.random() * 6 + 4, Math.random() * 3 + 2, 0, 0, Math.PI * 2);
            } else if (shape === 2) { // Puolipyöreä
                ctx.arc(x, y, Math.random() * 6 + 3, 0, Math.PI);
            } else { // Banaanin muotoinen
                ctx.ellipse(x, y, Math.random() * 8 + 4, Math.random() * 3 + 2, Math.PI / 4, 0, Math.PI * 2);
            }

            ctx.fill();
        }
    }

    // Alustetaan piirros ja toistetaan se 500 ms välein (täytteet 500 ms, puuro 700 ms, lautanen 1500 ms)
    draw();
    setInterval(draw, 500); // Kutsutaan piirrosta 500 ms välein
};
