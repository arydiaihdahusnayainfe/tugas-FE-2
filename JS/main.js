const mainPopup = document.getElementById('main-popUp');
const btnOpen = document.getElementById('openPopUp');
const btnClose = document.getElementById('closePopUp');


btnOpen.addEventListener('click', () => {
    mainPopup.style.visibility = 'visible';
});


btnClose.addEventListener('click', () => {
    mainPopup.style.visibility = 'hidden';
});
