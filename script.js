window.onload = function() {
    const canvas = document.getElementById("puuroCanvas");
    const ctx = canvas.getContext("2d");

    // Funktio, joka piirtää koko järjestelmän
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Määritellään lautasen muoto ja korkeus
        const plateHeight = 150 + Math.random() * 30;
        const plateWidth = 180 + Math.random() * 60;

        // Piirretään lautanen
        ctx.fillStyle = "#ffffff"; // Lautasen väri
        ctx.beginPath();
        ctx.arc(200, 240, plateWidth, 0, Math.PI, true); // Lautanen
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

    // Funktio piirtämään puuro lautaselle
    function drawPorridge(plateWidth) {
        const porridgeColors = ["#a07e58", "#9c7752", "#8f6d4a", "#a3835f", "#97795c"];

        // Piirretään puuron kasa
        ctx.beginPath();
        ctx.moveTo(120, 180);
        ctx.quadraticCurveTo(200, 140, 280, 180); // Muotoillaan puuron kasa
        ctx.lineTo(280, 220);
        ctx.quadraticCurveTo(200, 260, 120, 220); // Puuron reunat
        ctx.fi
