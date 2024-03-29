// AOS
AOS.init();

// loader
document.addEventListener("DOMContentLoaded", function() {
    const loadingNumber = document.querySelector("#loadingNumber");
    const loadingCircle = document.querySelector(".loading-circle");
    const loaderBox = document.querySelector(".loading-box");

    let load = 0;
    let increasing = true;

    function updateLoader() {
        if (increasing) {
            load++;
        } else {
            load--;
        }

        loadingNumber.innerHTML = load;
        loadingCircle.style.background = "conic-gradient(from 0deg at 50% 50%, rgba(111, 123, 247, 1) 0%, rgba(155, 248, 244, 1) " + load + "%, #101012 " + load + "%)";

        if (load == 100) {
            clearInterval(loaderInterval);
            setTimeout(hideLoader, 200); // 2000 milliseconds is equal to 2 seconds
        } else if (load == 0) {
            increasing = true;
        }
    }

    function hideLoader() {
        loaderBox.style.display = "none";
    }

    const loaderInterval = setInterval(updateLoader, 30); // Change interval to make it faster or slower
});

// text toggler
// Define an array of strings to be displayed and erased
const textArray = [
    "Frontend Developer.",
    "Web Designer.",
    "HTML Developer.",
    "UI Developer."
    // Add more strings as needed
];

// Initialize variables
let typeJsText = document.querySelector(".animatedText");
let stringIndex = 0; // Index of the current string in the array
let charIndex = 0; // Index of the current character in the current string
let isTyping = true; // Whether we are currently typing or erasing

function typeJs() {
    if (stringIndex < textArray.length) {
        // Check if there are more strings to display or erase
        const currentString = textArray[stringIndex];

        if (isTyping) {
            // Typing animation
            if (charIndex < currentString.length) {
                typeJsText.innerHTML += currentString.charAt(charIndex);
                charIndex++;
            } else {
                isTyping = false; // Switch to erasing mode
            }
        } else {

            setTimeout(() => {
                // Erasing animation
                if (charIndex > 0) {
                    typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
                    charIndex--;
                } else {

                    isTyping = true; // Switch back to typing mode
                    stringIndex++; // Move to the next string

                    if (stringIndex >= textArray.length) {
                        stringIndex = 0; // Reset to the beginning of the array
                    }

                    charIndex = 0; // Reset character index
                    typeJsText.innerHTML = ""; // Clear the content for the new string

                }

            }, 1000);



        }
    }
}

setInterval(typeJs, 150);

// jQuery code
$(document).ready(function () {

    // hamburger
    $(".hamburger-icon").click(function () {
        $("#sidebarNav").toggleClass("show");
    });

    // slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});