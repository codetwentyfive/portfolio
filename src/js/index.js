const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const cyrillic = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const hangul = 'ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
const devanagari = 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const unicodeString = '☯☮♻♲⚛⚕✝✞✟✠☥☦☧☨☩☸✡☪☫☬☭';

const alphabet = katakana + cyrillic + hangul + devanagari + latin + nums + unicodeString;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];


for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    // Draw raindrops
    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }


};

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

setInterval(draw, 30);
window.addEventListener('resize', resizeCanvas);

// Mouse Effect
const mouseEffect = (event) => {
    let mouseX, mouseY;

    // Check if it's a touch event
    if (event.touches && event.touches.length > 0) {
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
    }
    // If it's a mouse event
    else {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }

    const dropIndex = Math.floor(mouseX / fontSize);
    if (dropIndex >= 0 && dropIndex < rainDrops.length) {
        rainDrops[dropIndex] = Math.floor(mouseY / fontSize);
    }
};

// Add event listeners for both mouse and touch events


window.addEventListener('mousemove', mouseEffect);
window.addEventListener('touchstart', mouseEffect);
window.addEventListener('touchmove', mouseEffect);
window.addEventListener('touchend', mouseEffect);


