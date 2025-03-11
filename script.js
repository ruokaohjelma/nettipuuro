const canvas = document.getElementById("tayteCanvas");
const ctx = canvas.getContext("2d");

const tayteKomponentit = {
    paaraakaineet: ["#ff0000", "#ffcc00", "#a52a2a"], // Esim. marjat, banaani, rusinat
    lisukkeet: ["#d2691e", "#8b4513", "#ffdab9"], // Esim. hunaja, pähkinät, kookos
};

let edellinenTayte = null;

function generoiTayte() {
    let uusiTayte;
    
    do {
        uusiTayte = {
            paaraakaine: tayteKomponentit.paaraakaineet[Math.floor(Math.random() * tayteKomponentit.paaraakaineet.length)],
            lisuke: tayteKomponentit.lisukkeet[Math.floor(Math.random() * tayteKomponentit.lisukkeet.length)],
        };
    } while (JSON.stringify(uusiTayte) === JSON.stringify(edellinenTayte)); // Varmistetaan, ettei tule samaa peräkkäin
    
    edellinenTayte = uusiTayte;
    piirraTayte(uusiTayte);
}

function piirraTayte(tayte) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Piirretään pääraaka-aine ympyränä
    ctx.fillStyle = tayte.paaraakaine;
    ctx.beginPath();
    ctx.arc(150, 100, 30, 0, Math.PI * 2);
    ctx.fill();
    
    // Piirretään lisuke pienempinä pisteinä
    ctx.fillStyle = tayte.lisuke;
    for (let i = 0; i < 5; i++) {
        let x = 120 + Math.random() * 60;
        let y = 80 + Math.random() * 40;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

setInterval(generoiTayte, 5000);
generoiTayte(); // Asetetaan ensimmäinen täyte