// Function to open the letter when the envelope is clicked
function openLetter() {
    document.querySelectorAll('.step').forEach((step) => step.classList.add('hidden'));
    document.getElementById('step-final').classList.remove('hidden');
    document.querySelector('.envelope').style.animation = 'none'; // Remove the wiggle animation
    startTypewritingEffect(); // Trigger the typewriting effect
}

// Function to play background music
const playButton = document.getElementById('playButton');
const bgMusic = document.getElementById('bgMusic');

playButton.addEventListener('click', function() {
    bgMusic.play();
    playButton.style.display = 'none';
});

// Function to handle the typewriter effect for the confession letter
function startTypewritingEffect() {
    const confessionText = `Hi Ivy my idle!
     I know we've only been talking for a while, but I just wanted to let you know how much you mean to me 🤞
    EVERYTHING ABOUT YOU JUST MAKES ME FEEL SO HAPPY <33 hehe, you always make me laugh, and I find genuine happiness talking to you 💛
    
    I LOVE YOUR EYES, SMILE AND YOU'RE JUST AMAZING OVERALL 😙🤍
    
    Was wondering if....
    Can I court you? 😊😊
     
    hihi 
    Love, Marcus`;

    const typewriter = document.getElementById('typewriter');
    let index = 0;

    function type() {
        if (index < confessionText.length) {
            typewriter.innerHTML += confessionText.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed
        } else {
            document.getElementById('yes-no-question').classList.remove('hidden');
        }
    }

    type();
}

// Function to handle clicking "Yes" - goes to the last page
function goToLastPage() {
    document.getElementById('step-final').classList.add('hidden');
    document.getElementById('step-end').classList.remove('hidden');
}

// Function to move the "No" button and make the "Yes" button more attractive
let yesButtonScale = 1; // Variable to track the scale of the "Yes" button
function moveNoButton() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    // Move the "No" button to a random position on the screen
    const randomX = Math.floor(Math.random() * 300) - 150; // Random X position
    const randomY = Math.floor(Math.random() * 200) - 100; // Random Y position

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`; // Move "No" button to a new position

    // Make the "Yes" button more attractive by increasing its size and glowing effect
    yesButtonScale += 0.1; // Increase scale with each "No" click
    if (yesButtonScale <= 1.5) {
        yesButton.style.transform = `scale(${yesButtonScale})`; // Increase the size with each click
    }
    yesButton.style.boxShadow = `0 0 20px rgba(40, 167, 69, 0.8)`; // Add glowing effect

    // Prevent further clicking on the "No" button
    noButton.disabled = true;
    setTimeout(() => {
        noButton.disabled = false; // Re-enable "No" button after the movement
    }, 500); // Re-enable after half a second to avoid excessive clicking
}

// Function to handle the "Yes" button click
function enableYesButton() {
    document.getElementById('yes-button').classList.add('attract');
}

