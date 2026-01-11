document.getElementById('generateBtn').addEventListener('click', function() {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while(numbers.size < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        numbers.add(num);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    const container = document.getElementById('result');
    container.innerHTML = ''; // Clear previous numbers

    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = num;
        
        // Determine color range
        let range = '';
        if (num <= 10) range = '1-10';
        else if (num <= 20) range = '11-20';
        else if (num <= 30) range = '21-30';
        else if (num <= 40) range = '31-40';
        else range = '41-45';
        
        ball.setAttribute('data-range', range);
        
        // Stagger animation
        ball.style.animationDelay = `${index * 0.1}s`;
        
        container.appendChild(ball);
    });
}

const audio = document.getElementById('storyAudio');
const playBtn = document.getElementById('playStoryBtn');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸ 이야기 멈추기';
    } else {
        audio.pause();
        playBtn.textContent = '🐯 옛날 이야기 듣기';
    }
});

audio.addEventListener('ended', function() {
    playBtn.textContent = '🐯 옛날 이야기 듣기';
});
