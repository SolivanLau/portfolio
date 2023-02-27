// INPUT LABEL INTERACTION SYSTEM


// USER EXPERIENCE
// // on click, the user will be able to access their text input
// // the label will above (will not inhibit text)
// // the label will change in font size as well

// VARIABLES

const emailInputContainer = document.querySelector('#emailInputContainer')

const emailInput = document.querySelector('#emailSub')

const emailLabel = document.querySelector('#emailLabel')

// FUNCTIONS
function activeElementEval() {
    if (document.activeElement === emailInput) {
        emailLabel.classList.add('labelAnimate')
        console.log('Element has focus!');
    } else {
        console.log(`Element is not focused.`);
        emailLabel.classList.remove('labelAnimate')
    }

}

function labelAnimate() {
    console.log(document.activeElement);
    activeElementEval()

}

emailInputContainer.addEventListener('click', labelAnimate);
document.addEventListener('click', activeElementEval)


