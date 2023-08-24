// Typing effect
const sentences = [
    "Hello!",
    "Welcome to my portfolio website",
    "My Name is Kavindu Bimsara",
    "I am Software Developer",
    "I can Develop web Application ,",
    "Pc Application",
    "And",
    "Android Application .",
    "Software engineering is a journey of continuous learning and innovation, where each line of code becomes a stepping stone toward a world of boundless possibilities."
];

const typingSpeed = 150; // Time between each character (in milliseconds)
const sentencePause = 2000; // Pause between sentences (in milliseconds)

const typedSpan = document.getElementById('typed');
const cursorSpan = document.getElementById('cursor');

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentSentence = sentences[sentenceIndex];

    if (!isDeleting && charIndex <= currentSentence.length) {
        typedSpan.textContent = currentSentence.substring(0, charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        typedSpan.textContent = currentSentence.substring(0, charIndex);
        charIndex--;
    }

    if (charIndex === currentSentence.length + 1) {
        isDeleting = true;
        setTimeout(typeText, sentencePause);
    } else if (charIndex === -1) {
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(typeText, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
}

typeText();

// Dote effect
const dotsContainer = document.querySelector('.dots-container');
const numDots = 30;

for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.transform = `scale(${Math.random()})`;
    dot.style.animationDuration = `${Math.random() * 5 + 3}s`;
    dotsContainer.appendChild(dot);
}

