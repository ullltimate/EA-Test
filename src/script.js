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

const btnSendEmail = document.querySelector('.footer-search__btn');
const inputEmail = document.querySelector('.footer-search__input');
const popup = document.querySelector('.popup');
const formEmail = document.querySelector('.footer-search');
const popupTitle = document.querySelector('.popup__title');
const popupText = document.querySelector('.popup__text');
const btnOtherEvents = document.querySelector('.footer__button');
const blockEvents = document.getElementById('all-events');

formEmail.addEventListener('submit', async (e) => {
    e.preventDefault();
    let status = await submitEmail();
    showPopup(status);
})

inputEmail.addEventListener('input', () => {
    validationInput();
})

function validationInput(){
    let reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    let valid = reg.test(inputEmail.value);
    valid ? (inputEmail.style.border = "1px solid green") : (inputEmail.style.border = "1px solid red");
    if (inputEmail.style.border == "1px solid green") {
        btnSendEmail.disabled = false;
        btnSendEmail.style.background = "green";  
    }
}

async function submitEmail() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title: 'Email',
                  body: `${inputEmail.value}`,
                  userId: 1,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            });
        const result = await response.json();
        console.log(result);
        return response.ok;
    } catch (e) {
        console.log(e);
    }
}

function showPopup(status){
    if (status === true){
        popupTitle.innerText = 'SUCCESS!';
        popupText.innerText = 'You have successfully subscribed to the email newsletter';
    } else {
        popupTitle.innerText = 'ERROR!';
        popupText.innerText = 'An error has occurred! You have not subscribed to the email newsletter. Try later!';
    }
    popup.style.display = 'block';
}

function cancelPopup(elem){
    if (elem.classList.contains('popup') || elem.classList.contains('popup__img') || elem.classList.contains('popup__button')){
        popup.style.display = 'none';
        btnSendEmail.disabled = true;
        inputEmail.value = '';
        btnSendEmail.style.background = "#DF2224";
        inputEmail.style.border = `1px solid rgba(0, 0, 0, 0.8)`;
    }
}

popup.addEventListener('click', (e) => {
    cancelPopup(e.target);
})

btnOtherEvents.addEventListener('click', () => {
    blockEvents.scrollIntoView({block: "start", behavior: "smooth"});
})

const arrayAccordionButton = document.querySelectorAll('.accordion-button');
let activeButton = document.querySelector('.accordion-button__active');

for(let i = 0; i < arrayAccordionButton.length; i++){
    arrayAccordionButton[i].addEventListener('click', () => {
        arrayAccordionButton[i].classList.add('accordion-button__active');
        arrayAccordionButton[i].nextElementSibling.classList.add('accordion-body__active');
        if (activeButton) {
            activeButton.classList.remove('accordion-button__active');
            activeButton.nextElementSibling.classList.remove('accordion-body__active');
        }
        activeButton = (activeButton === arrayAccordionButton[i]) ? arrayAccordionButton[0] : arrayAccordionButton[i];
        activeButton.classList.add('accordion-button__active');
        activeButton.nextElementSibling.classList.add('accordion-body__active');
    })
}