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