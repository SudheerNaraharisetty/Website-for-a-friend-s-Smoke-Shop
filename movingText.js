function createMovingText() {
    const textBackground = document.getElementById('textBackground');
    const text = "617 Smoke Shop";
    const numTexts = 20;

    for (let i = 0; i < numTexts; i++) {
        const textElement = document.createElement('div');
        textElement.className = 'moving-text';
        textElement.textContent = text;
        textElement.style.top = `${Math.random() * 100}%`;
        textElement.style.left = `${Math.random() * 100}%`;

        const direction = Math.floor(Math.random() * 4);
        let animation;
        switch (direction) {
            case 0: // Right
                animation = 'moveRight 20s linear infinite';
                break;
            case 1: // Left
                animation = 'moveLeft 20s linear infinite';
                break;
            case 2: // Down
                animation = 'moveDown 20s linear infinite';
                break;
            case 3: // Up
                animation = 'moveUp 20s linear infinite';
                break;
        }
        textElement.style.animation = animation;

        textBackground.appendChild(textElement);
    }
}

document.addEventListener('DOMContentLoaded', createMovingText);

