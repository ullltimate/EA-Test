(function () {
    const elemDays = document.querySelector('.timer__days');
    const elemHours = document.querySelector('.timer__hours');
    const elemMinutes = document.querySelector('.timer__minutes');
    const elemSeconds = document.querySelector('.timer__seconds');
    const deadline = new Date(2023, 6, 24);

    function countdown() {
        let today = new Date();
        const differenceDate = deadline - today;
        if (differenceDate <= 0) {
            clearInterval(null);
        }
        const countDays = differenceDate > 0 ? Math.floor(differenceDate / 1000 / 60 / 60 / 24) : 0;
        const countHours = differenceDate > 0 ? Math.floor(differenceDate / 1000 / 60 / 60) % 24 : 0;
        const countMinutes = differenceDate > 0 ? Math.floor(differenceDate / 1000 / 60) % 60 : 0;
        const countSeconds = differenceDate > 0 ? Math.floor(differenceDate / 1000) % 60 : 0;
        elemDays.innerText = countDays < 10 ? '0' + countDays : countDays;
        elemHours.innerText = countHours < 10 ? '0' + countHours : countHours;
        elemMinutes.innerText = countMinutes < 10 ? '0' + countMinutes : countMinutes;
        elemSeconds.innerText = countSeconds < 10 ? '0' + countSeconds : countSeconds;
    }

    countdown();
    setInterval(countdown, 1000);
})();