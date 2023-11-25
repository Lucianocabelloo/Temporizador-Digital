let timer;
let seconds = 0;

function startTimer() {
    const inputTime = parseInt(document.getElementById('inputTime').value, 10);

    if (!isNaN(inputTime) && inputTime > 0) {
        seconds = inputTime * 60;
        timer = setInterval(updateTimer, 1000);
    } else {
        alert('Ingresa un tiempo válido en segundos.');
    }
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
    document.getElementById('timer').innerText = formattedTime;

    if (seconds === 0) {
        clearInterval(timer);
        alert('¡Tiempo agotado!');
    } else {
        seconds--;
    }
}

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}