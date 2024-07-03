const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});

const keyDownMapper = {
    "a": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "b": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "c": () => handleMouseDown(keys[4]),
    "d": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "e": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "f": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "g": () => handleMouseDown(keys[11]),
    "h": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "9": () => handleMouseDown(keys[15]),
    "j": () => handleMouseDown(keys[16]),
    "k": () => handleMouseDown(keys[17]),
    "-": () => handleMouseDown(keys[18]),
    "l": () => handleMouseDown(keys[19]),
    "+": () => handleMouseDown(keys[20]),
    "m": () => handleMouseDown(keys[21]),
    "*": () => handleMouseDown(keys[22]),
    "n": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
    "a": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "b": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "c": () => handleMouseUp(keys[4]),
    "d": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "e": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "f": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "g": () => handleMouseUp(keys[11]),
    "h": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "j": () => handleMouseUp(keys[16]),
    "k": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "l": () => handleMouseUp(keys[19]),
    "+": () => handleMouseUp(keys[20]),
    "m": () => handleMouseUp(keys[21]),
    "*": () => handleMouseUp(keys[22]),
    "n": () => handleMouseUp(keys[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});
