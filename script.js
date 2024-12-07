let noClickCount = 0;
let displayedImages = [];

// Proceed to the next step
function nextStep(stepId, proceed) {
    if (!proceed) return alert("Oh, that's sad to hear! 😔");
    document.querySelectorAll('.step').forEach((step) => step.classList.add('hidden'));
    document.getElementById(stepId).classList.remove('hidden');
}

// Move the "No" button dynamically and handle interactions
function moveNoButton() {
    noClickCount++;

    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    // Randomly move "No" button
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 150 - 75;
    noButton.style.transform = `translate(${x}px, ${y}px)`;

    // Add another "No" button and grow "Yes" button
    const newNoButton = noButton.cloneNode(true);
    newNoButton.style.marginTop = "10px";
    document.getElementById('buttons-container').appendChild(newNoButton);
    yesButton.style.transform = `scale(${1 + document.getElementById('buttons-container').childElementCount * 0.1})`;

    // Show images after every 2 "No" clicks
    if (noClickCount % 2 === 0) {
        showPopOutContent();
    }
}

// Show random images spread across the screen using local files
function showPopOutContent() {
    // Limit to 5 images at a time
    const maxImages = 5;
    const existingImages = document.querySelectorAll('.popout-item');
    if (existingImages.length >= maxImages) {
        existingImages[0].remove(); // Remove the oldest image
    }

    // List of local image file paths
    const imageFiles = [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
        "img7.png",
        "img8.png",
        "img9.png",
        "img10.png",
        "img11.png",
        "img12.png",
        "img13.png",
        "img14.png",
        "img15.png",
        "img16.png"
    ];

    // Filter out already displayed images
    const remainingImages = imageFiles.filter((image) => !displayedImages.includes(image));

    if (remainingImages.length === 0) return; // Stop if all images have been shown

    // Select a random image from the remaining images
    const randomImage = remainingImages[Math.floor(Math.random() * remainingImages.length)];

    // Add the image to the displayed list
    displayedImages.push(randomImage);

    const popOutContent = document.createElement('img');
    popOutContent.src = randomImage; // Use the selected local file
    popOutContent.alt = "Pop-out Content";
    popOutContent.className = "popout-item";

    // Randomize position
    const x = Math.random() * (window.innerWidth - 200); // Adjust to prevent images from going off-screen
    const y = Math.random() * (window.innerHeight - 200);
    popOutContent.style.left = `${x}px`;
    popOutContent.style.top = `${y}px`;

    // Append to the body
    document.body.appendChild(popOutContent);
}

// Clear all pop-out items
function clearPopOutContent() {
    document.querySelectorAll('.popout-item').forEach((item) => item.remove());
}

// Proceed to the confession
function proceedConfession() {
    clearPopOutContent(); // Remove images/videos
    document.querySelectorAll('.step').forEach((step) => step.classList.add('hidden'));
    document.getElementById('step-final').classList.remove('hidden');
    document.getElementById('background-music').play();

    const confessionText = `Hey, I know this is like my third time confessing to you, and Im not sure if I even have a chance, but thats not important. What matters is that you have a chance with me. <3 Eme HAHAHA. So, yeah, this is just a yolo confession. I thought of doing something unique, and since I love comsci, why not confess this way, right?

    Youre probably thinking, “Ano ba naman tong lalake na 'to, di ba to napapagod sakin?” Well, no. HAHAHA. I like you, and honestly, I feel like Ill never move on at this point. I mean, Ive liked you since Grade 7. And remember when you joked, “Back option, lods. Pag di nag-work, balik saken”  DI KASE GANON
    
    I genuinely like you, and Im not even expecting anything in return. I just enjoy the smallest to biggest interactions (or no interaction at all) because they make my day. I know there are other guys who like you, and if you ever find someone and Im not that person, Ill still be happy for you and support you.
    
    Oh, and about that question you asked me before: “Bakit mo ba ako nagustuhan?” Remember my answer? “Di ko din alam, pero basta may psychological meaning yon.” HAHAHA.
    
    The truth is, theres no reason. And there will never be one. Because if you like or love someone for a reason, when that reason is gone, your feelings will change too. I like you without a reason. I like you because you are you.
    
    Corny, ayoko na. HAHAHA. Thats pretty much it. <3`;
    const typewriterElement = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < confessionText.length) {
            typewriterElement.textContent += confessionText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}

// Show the final page
function showFinalPage() {
    clearPopOutContent(); // Remove images/videos
    document.querySelectorAll('.step').forEach((step) => step.classList.add('hidden'));
    document.getElementById('step-end').classList.remove('hidden');
}
