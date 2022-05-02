const generateButton = document.getElementById('generate-button');

//const selectButton = document.getElementById('select-button');

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getBook() {
    var description = ''
    var tag = ''
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
    if (randomBook == 'Harry Potter') {
        description = 'A book about a boy who is a wizard.'
        tag = 'magic, fantasy, adventure'
    } else if (randomBook == 'The Giver') {
        description = 'A book about a boy named Jonas who lives in a society free of crime and sadness and his path to uncover the secrets hidden from ordinary citizens.'
        tag = 'powers, dystopian, adventure'
        
    } else if (randomBook == 'The Selection') {
        tag = 'romance, fairytale, suspense'
        description = 'A book about a boy named Jonas who lives in a society free of crime and sadness and his path to uncover the secrets hidden from ordinary citizens.'
    } else if (randomBook == 'The Fault in Our Stars') {
        tag = 'emotional, romance, heartfelt'
        description = 'A book about a girl named Hazel who joins a cancer support groups and eventually falls in love with a boy she meets through this group named Augustus Waters.'
    } else if (randomBook == 'The Martian') {
        tag = 'science-fiction, space, fact'
        description = 'A book that details what happens when a mission to Mars goes awry and an astronaut is left to fend for himself in Mars using science and theory.'
    } else if (randomBook == 'Golden Girl') {
        tag = 'fiction, family, love'
        description = 'A book that depicts the story of author Vivan who dies in a car crash which ultimately brings her loved ones closer together'
    } else if (randomBook == 'One of Us is Lying') {
        tag = 'suspense, thriller, murder-mystery'
        description = 'A book that depicts the story of what happens when 5 people walk into detention and only 4 walk out'
    } 
    document.getElementById('description').innerHTML = description;
    document.getElementById('tag').innerHTML = tag;
   
}
generateButton.onclick = getBook;
