const generateButton = document.getElementById('generate-button');

//const selectButton = document.getElementById('select-button');

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getBook() {
    const dict = {
        1: 'Harry Potter', 
        2: 'One of Us is Lying', 
        3: 'The Selection',
        4: 'The Fault in Our Stars'
    }
    const randomBook = dict[randomNumber(4)]
    return randomBook
}
generateButton.onclick = getBook