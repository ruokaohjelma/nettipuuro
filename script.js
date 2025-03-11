const canvas = document.getElementById('puurocanvas');
const ctx = canvas.getContext('2d');

const plateWidth = 200;
const plateHeight = 100;
const porridgeHeight = 70;

// Värit täytteille
const toppingsColors = ['#ff6347', '#adff2f', '#ffa500', '#8a2be2', '#d2691e'];

// Funktio puurolautasen piirtämiseen
function drawPlate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Piirretään lautanen (bowl shape)
    ctx.beginPath();
    ctx.ellipse(canvas.width / 2, canvas.height - 50, plateWidth / 2, plateHeight / 2, 0, Math.PI, 2 * Math.PI);
    ctx.fillStyle = '#dcdcdc';
    ctx.fill();
    ctx.stroke();

    // Piirretään puuro (heap)
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height - 50 - porridgeHeight, plateWidth / 3, 0, Math.PI * 2);
    ctx.fillStyle = '#d3b898';
    ctx.fill();
    ctx.stroke();

    // Piirretään täytteet, jotka liikkuvat
    for (let i = 0; i < toppingsColors.length; i++) {
        const angle = Date.now() / (1000 + i * 1000) + i * Math.PI;
        const radius = plateWidth / 3 + Math.sin(angle) * 30;
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height - 50 - porridgeHeight + Math.sin(angle) * 20;

        ctx.beginPath();
        ctx.arc(x, y, 10 + Math.sin(angle) * 3, 0, Math.PI * 2);
        ctx.fillStyle = toppingsColors[i];
        ctx.fill();
        ctx.stroke();
    }

    requestAnimationFrame(drawPlate);
}

// Käynnistetään piirtäminen
drawPlate();
