window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    // Funktio, joka piirtää koko järjestelmän
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Määritellään lautasen muoto ja korkeus
        const plateHeight = 150 + Math.random() * 30;
        const plateWidth = 180 + Math.random() * 60;

        // Piirretään lautanen (käännetty)
        ctx.fillStyle = "#ffffff"; // Lautasen väri
        ctx.beginPath();
        ctx.arc(200, 240, plateWidth, Math.PI, 0, false); // Käännetty lautanen
        ctx.lineTo(50, 240); // Vasemman puolen viiva
        ctx.lineTo(350, 240); // Oikean puolen viiva
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#888"; // Lautasen ääriviivan väri
        ctx.lineWidth = 2;
        ctx.stroke();

        // Piirretään puuro
        drawPorridge(plateWidth);

        // Piirretään täytteet
        drawToppings();
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

    // Alustetaan piirros ja toistetaan se 1.5 sekunnin välein (puolet nopeampi)
    draw();
    setInterval(draw, 500); // Kutsutaan piirrosta 1.5 sekunnin välein
};
