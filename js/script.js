 // Create hearts effect
 function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

function resetButtons() {
    yesScale = 1;
    document.querySelectorAll(".btn-yes").forEach(btn => btn.style.transform = "scale(1)");
    document.querySelectorAll(".btn-no").forEach(btn => {
        btn.style.position = "";
        btn.style.left = "";
        btn.style.top = "";
    });
}

setInterval(createHearts, 300);

let yesScale = 1;

function moveButton(button) {

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Define movement boundaries (inside the container)
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();

    const minX = containerRect.left; // left edge of container
    const minY = containerRect.top;  // top edge of container
    const maxX = containerRect.right - buttonWidth; // right edge - button width
    const maxY = containerRect.bottom - buttonHeight; // bottom edge - button height

    // Random position within the safe area
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;

    button.style.position = "absolute"; // relative to page
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // Grow YES button
    yesScale = Math.min(yesScale + 0.15, 5);
    document.querySelectorAll(".btn-yes").forEach(btn => {
        btn.style.transform = `scale(${yesScale})`;
    });
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');

    resetButtons();   // reset both buttons

    triggerConfetti();
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');

    resetButtons();   // reset again

    triggerConfetti();
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.whatsapp-btn').style.display = 'inline-block';
    triggerConfetti();
    
    // Additional confetti for the final celebration
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
