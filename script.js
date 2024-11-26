
const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');
document.body.appendChild(popupContainer);

let clickCount = 0;


function createPopup(message) {

    if (popupContainer.childElementCount >= 5) {
        return;
    }

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;

    popupContainer.appendChild(popup);


    requestAnimationFrame(() => {
        popup.classList.add('visible');
    });


    setTimeout(() => {
        removePopup(popup);
    }, 2000);
}

// Function to remove a popup
function removePopup(popup) {
    popup.classList.add('exiting'); 
    
    popup.addEventListener('transitionend', () => {
        popup.remove();
    });
}

const spotifyButton = document.querySelector('.spotify');
spotifyButton.addEventListener('click', () => {
    clickCount++;

    if (clickCount > 10) {
        createPopup("🚫 bro, I said I didn't link it. chill.");
    } else {
        createPopup("🚫 No Spotify linked");
    }
});
