window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    let plateWidth = 300 + Math.random() * 100;
    let plateHeight = 250 + Math.random() * 50;
    let lastPlateChangeTime = 0;
    let lastPorridgeChangeTime = 0;
    let lastToppingsChangeTime = 0;

    // Funktio, joka piirtää koko järjestelmän
    function draw() {
        const currentTime = Date.now();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Piirretään lautanen (pohja ruudun alareunassa)
        if (currentTime - lastPlateChangeTime > 1500) {
            plateWidth = 300 + Math.random() * 100;
            plateHeight = 250 + Math.random() * 50;
            lastPlateChangeTime = currentTime;
        }

        // Lautasen piirtäminen alareunaan (käännetty oikein)
        ctx.fillStyle = "#ffffff"; // Lautasen väri
        ctx.beginPath();
        ctx.arc(400, 520, plateWidth, 0, Math.PI, false); // Lautanen (pohja alhaalla)
        ctx.lineTo(100, 520); // Vasemman puolen viiva
        ctx.lineTo(700, 520); // Oikean puolen viiva
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#888"; // Lautasen ääriviivan väri
        ctx.lineWidth = 3;
        ctx.stroke();

        // Piirretään puuro (lautaselle)
        if (currentTime - lastPorridgeChangeTime > 700) {
            drawPorridge(plateWidth);
            lastPorridgeChangeTime = currentTime;
        }

        // Piirretään täytteet (puuron päälle)
        if (currentTime - lastToppingsChangeTime > 500) {
            drawToppings();
            lastToppingsChangeTime = currentTime;
        }
    }

    // Funktio täytteiden piirtämiseen
    function drawToppings() {
        const toppingColors = ["#ff0000", "#ffcc00", "#a52a2a", "#d2691e", "#8b4513", "#00ff00", "#ff69b4"];

        for (let i = 0; i < 30; i++) { // Lisää täytteitä
            ctx.fillStyle = toppingColors[Math.floor(Math.random() * toppingColors.length)];
            let x = 200 + Math.random() * 400;
            let y = 350 + Math.random() * 30; // Täytteet puuron päällä

            ctx.beginPath();
            let shape = Math.floor(Math.random() * 4);

            if (shape === 0) { // Pyöreä
                ctx.arc(x, y, Math.random() * 8 + 4, 0, Math.PI * 2);
            } else if (shape === 1) { // Soikea
                ctx.ellipse(x, y, Math.random() * 8 + 5, Math.random() * 5 + 2, 0, 0, Math.PI * 2);
            } else if (shape === 2) { // Puolipyöreä
                ctx.arc(x, y, Math.random() * 8 + 4, 0, Math.PI);
            } else { // Banaanin muotoinen
                ctx.ellipse(x, y, Math.random() * 10 + 5, Math.random() * 4 + 3, Math.PI / 4, 0, Math.PI * 2);
            }

            ctx.fill();
        }
    }

    // Funktio piirtämään epätasainen puuro lautaselle
    function drawPorridge(plateWidth) {
        const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];

        // Piirretään puuron epätasainen yläreuna
        ctx.beginPath();
        ctx.moveTo(200, 460); // Puuro alkaa lautasen vasemmalta reunalta
        for (let i = 0; i < plateWidth; i += 20) {
            let yOffset = Math.random() * 40 + 20; // Epätasaiset kumpareet
            ctx.lineTo(200 + i, 460 - yOffset);
        }
        ctx.lineTo(200 + plateWidth, 460); // Puuro menee alas
        ctx.lineTo(200, 460); // Sulkee puuron yläreunan
        ctx.fillStyle = "#d1b09b"; // Puuro värinä
        ctx.fill();

        // Satunnaiset pisteet puuron pinnalle
        for (let i = 0; i < 600; i++) { // Lisää pisteitä
            ctx.fillStyle = porridgeColors[Math.floor(Math.random() * porridgeColors.length)];
            let x = 200 + Math.random() * plateWidth;
            let y = 460 - (Math.random() * 40 + 20); // Pysytään puuron alueella
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 3 + 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Alustetaan piirros ja toistetaan se 500 ms välein (täytteet 500 ms, puuro 700 ms, lautanen 1500 ms)
    draw();
    setInterval(draw, 500); // Kutsutaan piirrosta 500 ms välein
};
</script>
