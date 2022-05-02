const generateButton = document.getElementById('generate-button');

//const selectButton = document.getElementById('select-button');

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getBook() {
    const dict = {
        0: 'The Giver',
        1: 'Harry Potter', 
        2: 'One of Us is Lying', 
        3: 'The Selection',
        4: 'The Fault in Our Stars',
        5: 'The Martian',
        6: 'Golden Girl'
    }
    const randomBook = dict[randomNumber(Object.keys(dict).length)];
    console.log(randomBook)
    document.getElementById('randomBook').innerHTML = randomBook;
   
}
generateButton.onclick = getBook;
