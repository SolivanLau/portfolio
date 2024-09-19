// INPUT LABEL INTERACTION SYSTEM

// USER EXPERIENCE
// // on click, the user will be able to access their text input
// // the label will above (will not inhibit text)
// // the label will change in font size as well

// 3 interacted html elements

// inputContainer: using label so when clicked, it can also affect the input
// input: need to know if the active element on page is input
// label: moving from placeholder area to 

const inputChildren = document.querySelectorAll('.inputChild')


const inputActive = (input, labelSibling) => {
    const inputVal = input.value.length

    if (document.activeElement === input || inputVal > 0) {

        // adding animation  class to labelPlaceholder
        labelSibling.classList.add('labelToTop')
    } else {
        labelSibling.classList.remove('labelToTop')
    }
}

const inputLabelHandler = () => {
    inputChildren.forEach(child => {
        inputActive(child, child.nextElementSibling);
    });
}

export default inputLabelHandler;
