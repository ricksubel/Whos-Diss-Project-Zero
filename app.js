/* Planning Game Logic*/

/* PART ONE - SETUP */
// - from INTRO PAGE, user clicks (Click here to start) 
// - music cues and scene changes to title page
// - instructions appear after TITLE PAGE scene
// - player is asked to enter first name and select one of three categories

/* PART TWO - CATEGORY SELECTION */
// - three icons appear and player selects one
// after user selects category, a new scene with new music takes them to that category page/game

/* PART THREE - GAMEPLAY */
// there will be an icon in the top of the screen displaying player score (one point for each correct answer; three wrong answers = game over), pause game?, exit game? back to category selection?
// Question prompts appear with 3 answer icons (image/names to choose/click?
// Play 5 questions to become diss champ
// For each right answer you get a "cheer" (sound effect) and positive affirmation, personalized to player name. For each wrong answer, you get a "jeer" (sound effect) and negative game reply, personalized to player name.

/* PART THREE - THE END */
// if player answers incorrectly three times, they will lose game, receive final diss, and be prmompted to replay
// if player wins (answers 6-10 questions for that round), they will receive a congrats, be awarded diss champ, and be prompted to replay

/* Stretch Goals */
// Add user name for personalized messages
// increase the questions/categories



//The game start happens for all three pages at once. From category, needs to be cued by event listener. This is causing the first question of each game to not always be from that particular category!!!


// Define the game-beginning and player input (name).
let gameStart = false;
let firstQuestion = true;
console.log("Let's play Who's Diss?!");

let player = '';
let text = document.getElementsByName('input');
let input = $(text);

$('.start').click(function() {
    player = input.val();
    console.log(`Hello, ${player}!`);
    window.location = './category.html?player=' + player;
});

let query = window.location.search.substring(1); 
if (query) {
    console.log(query);
    player = query.slice(7);
    console.log(`Hello ${player}!`);
};
if (player) {
    $('#message1').text(`Hello ${player}! Select one of the categories to the right, and you will be challenged with ten questions. See if you have what it takes to become "Diss Royalty"!`)
};

// Game Questions:
const rapQuest = [
    {
        question:'Who called out Lil Kim with their 2000 track, "Bang, Bang"?',
        image: './Assets/Images/T1.jpg',
        optionA: 'Megan Thee Stallion',
        optionB: 'Foxy Brown',
        optionC: 'Missy Elliot',
        correct: 'Foxy Brown'
    },
    {
        question:'Who called out Missy Elliot and Prodigy in their 2001 track, "Takeover"?',
        image: './Assets/Images/T2.jpg',
        optionA: 'Busta Rhymes',
        optionB: 'Eminem',
        optionC: 'Jay-Z',
        correct: 'Jay-Z'
    },
    {
        question:'Who called out Jeezy in their 2012 track, "Truth"?',
        image: './Assets/Images/T3.jpg',
        optionA: 'Gucci Mane',
        optionB: 'Big Sean',
        optionC: 'Jay-Z',
        correct: 'Gucci Mane'
    },
    {
        question:'Who called out Azalea Banks in their 2012 track, "On the Edge"',
        image: './Assets/Images/T4.jpg',
        optionA: 'Angel Haze',
        optionB: 'Missy Elliot',
        optionC: 'MC Antoinette',
        correct: 'Angel Haze'
    },
    {
        question:'Who called out Ice Cube in their 1996 track, "The B*tch in Yoo"?',
        image: './Assets/Images/T5.jpg',
        optionA: 'Snoop Dogg',
        optionB: 'Common',
        optionC: 'Nate Dogg',
        correct: 'Common'
    },
    {
        question:'Who called out Drake in their 2018 track, "The Story of Adion"?',
        image: './Assets/Images/T6.jpg',
        optionA: 'Pusha-T',
        optionB: "Lil Wayne",
        optionC: '50 Cent',
        correct: 'Pusha-T'
    },
    {
        question:'Who called out their former rap group in their 1991 track, "No Vaseline"?',
        image: './Assets/Images/T7.jpg',
        optionA: 'Dr. Dre',
        optionB: 'MC Lyte',
        optionC: 'Ice Cube',
        correct: 'Ice Cube'
    },
    {
        question:'Who called out Jay-Z in their 2001 track, "Ether"?',
        image: './Assets/Images/T9.jpg',
        optionA: 'Missy Elliot',
        optionB: 'Nas',
        optionC: 'Method Man',
        correct: 'Nas'
    },
    {
        question:'Who called out Cardi B with their 2017 track,"shEther"?',
        image: './Assets/Images/T10.jpg',
        optionA: 'Remy Ma',
        optionB: 'Eve',
        optionC: 'Queen Latifah',
        correct: 'Remy Ma'
    },
    {
        question:'Who called out Biggie Smalls, Puff Daddy, and Lil Kim in their 1996 track, "Hit em Up"?',
        image: './Assets/Images/T11.jpg',
        optionA: "'Ol Dirty Bastard",
        optionB: 'Krs-One',
        optionC: '2Pac',
        correct: '2Pac'
    },
];

const celebQuest = [
    {
        question:'Who called out Katy Perry in their track, "Bad Blood"?',
        image: './Assets/Images/T13.jpg',
        optionA: 'Avril Lavingne',
        optionB: 'Madonna',
        optionC: 'Taylor Swift',
        correct: 'Taylor Swift'
    },
    {
        question:'Who called out Jordyn Woods for "breaking up my family"?',
        image: './Assets/Images/T14.jpg',
        optionA: 'Khloe Kardashian',
        optionB: 'Kim Kardashian',
        optionC: 'Amber Kardashian',
        correct: 'Khloe Kardashian'
    },
    {
        question:'Who called out Whoopi Goldberg for dissing her on the "The View"?',
        image: './Assets/Images/T15.jpg',
        optionA: 'Cate Blanchet',
        optionB: 'Bella Thorne',
        optionC: 'Bellatrix LaStrange',
        correct: 'Bella Thorne'
    },
    {
        question:'Who fired back at tv host, Sean Hannity, by stating, "...if I am an ass clown, Sean,...the you are the whole a$$ circus"?',
        image: './Assets/Images/T16.jpg',
        optionA: 'Jimmy Fallon',
        optionB: 'Jeremy Beremy',
        optionC: 'Jimmy Kimmel',
        correct: 'Jimmy Kimmel'
    },
    {
        question:'What took the mic from Taylor Swift at the 2009 Video Music Awards?',
        image: './Assets/Images/T17.jpg',
        optionA: 'Kanye West',
        optionB: 'Bruno Mars',
        optionC: 'Martha Stewart',
        correct: 'ANSWER B'
    },
    {
        question:'Who said, "I don\'t know her..." when asked about Jennifer Lopez?',
        image: './Assets/Images/T18.jpg',
        optionA: 'Queen Elizabeth',
        optionB: 'Eliza Moss',
        optionC: 'Mariah Carey',
        correct: 'Mariah Carey'
    },
    {
        question:'Who called Fast 8 costart a "candya$$"?',
        image: './Assets/Images/T19.jpg',
        optionA: 'Jason Statham',
        optionB: 'The Rock',
        optionC: 'Ludacris',
        correct: 'The Rock'
    },
    {
        question:' Who was was called out with the line,“If she were confident in her acting, she wouldn’t be trying to be Martha Stewart.”?',
        image: './Assets/Images/T20.jpg',
        optionA: 'Jennifer Anniston',
        optionB: 'Cameron Diaz',
        optionC: 'Gwyneth Paltrow',
        correct: 'wyneth Paltrowwyneth Paltrow'
    },
    {
        question:'Who called out director, Michael Bay, for being "a tyrant" on the set of Transformers?',
        image: './Assets/Images/T21.jpg',
        optionA: 'Optimus Prime',
        optionB: 'Megan Fox',
        optionC: 'Shia Labouf',
        correct: 'ANSWER B'
    },
    {
        question:'Who called out the United States for issues over gun violence in their track, "This is America"?',
        image: './Assets/Images/T22.jpg',
        optionA: 'Migos',
        optionB: 'Drake',
        optionC: 'Childish Gambino',
        correct: 'Childish Gambino'
    },
];

const authQuest = [
    {
        question:'Who called out William Faulkner with the quote, "Poor Faulkner. Does he really think big emotions come from big words?”',
        image: './Assets/Images/T9.jpg',
        optionA: 'William Shakespeare',
        optionB: 'Edgar Allen Poe',
        optionC: 'Earnest Hemingway',
        correct: 'Earnest Hemingway'
    },
    {
        question:'Who said, "“That’s not writing, that’s typing." about writer Jack Kerouac?',
        image: './Assets/Images/T10.jpg',
        optionA: 'Truman Capote',
        optionB: 'Harry Truman',
        optionC: 'Tom Clancy',
        correct: 'Truman Capote'
    },
    {
        question:'Who wrote, "... I must skin him myself: there is no bearing the driveling idiotism of the Mankin.” about John Keats?',
        image: './Assets/Images/T11.jpg',
        optionA: 'Lord Sinclair',
        optionB: 'The Lord of the Rings',
        optionC: 'Lord Byron',
        correct: 'Lord Byron'
    },
    {
        question:'Who once said Jane Austen was, "without genius, wit, or knowledge of the world."',
        image: './Assets/Images/T14.jpg',
        optionA: 'Ralph Macchio',
        optionB: 'Ralph Waldo Emerson',
        optionC: 'Ralph Lauren',
        correct: 'Ralph Waldo Emerson'
    },
    {
        question:'Who said this about Alexander Pope: “There are two ways of disliking poetry; one way is to dislike it, the other is to read Pope.”',
        image: './Assets/Images/T15.jpg',
        optionA: 'Stephen King',
        optionB: 'Mark Twain',
        optionC: 'Oscar Wilde',
        correct: 'Oscar Wilde'
    },
    {
        question:'Who said, “I don’t think Robert Browning was very good in bed."',
        image: './Assets/Images/T13.jpg',
        optionA: 'W.H. Auden',
        optionB: 'D.H. Lawrence',
        optionC: 'Lawrence Fishburne',
        correct: 'W.H. Auden'
    },
    {
        question:'Who stated, “An enthusiasm for Poe is the mark of a decidedly primitive stage of reflection.” about Edgard Allen Poe?"',
        image: './Assets/Images/T12.jpg',
        optionA: 'Ann Rice',
        optionB: 'Arthur Miller',
        optionC: 'Henry James',
        correct: 'ANSWER B'
    },
    {
        question:'Who called out James Joyce with the quote, "“I dislike Ulysses more and more — that is, I think it more and more unimportant;"',
        image: './Assets/Images/T16.jpg',
        optionA: 'Viginia Woolf',
        optionB: 'F.Scott Fitzgerald',
        optionC: 'Kurt Vonnegut',
        correct: 'Virginia Woolf'
    },
    {
        question:'Who called Ezra Pound a "A village explainer."',
        image: './Assets/Images/T17.jpg',
        optionA: 'Agatha Christie',
        optionB: 'Gertrude Stein',
        optionC: 'George Orwell',
        correct: 'Gertrude Stein'
    },
    {
        question:'Who called D.H. Lawrence\'s work, “Filth. Nothing but obscenities.”',
        image: './Assets/Images/T18.jpg',
        optionA: 'J.R.R Tolkein',
        optionB: 'J.D. Salinger',
        optionC: 'Joseph Conrad',
        correct: 'Joseph Conrad'
    },
];


let questionTracker = 0;
let userScore = 0;

// pull questions from the arrays and pushes onto the games container div
const showQuestions = (question) => {
    $('.quest-container h3').html(question.question);
    $('.quest-container img').attr('src', question.image);
    $('label[for=optionA]').html(question.optionA);
    $('label[for=optionB]').html(question.optionB);
    $('label[for=optionC]').html(question.optionC);

};

// // Check if radio selection answers are correct or not
const checkAnswers = (array) => {
    const $answer = $('input[name=answers]:checked').siblings('label').html();
    const correct = array.correct;
    if (correct === $answer) {
        userScore++;
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
    console.log(`Score: ${userScore}`);
};

// Removes previous radio selection
const $removeSelection = () => {
    $removeCheck = $('input[name=answers]:checked').prop('checked', false);
};

//If can combine these next two blocks, do it!
const $scoreImg = (score) => {
    if ( score == 0 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 1 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 2 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 3 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 4 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 5 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 6 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 7 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 8 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else if ( score == 9 ) {
        $('.score-text h2').eq(1).css('color', 'white');
    } else {
        $('.score-text h2').eq(1).css('color', 'white');
    }
};

// Display score through DOM
const $displayScore = (score) => {
    $('.score h2').eq(1).html(`${score}/10`);
    $scoreImg(score);
        if (score <= 3) {
            $('.score-message').text(`${player}...uhm, are you for real? You really should brush up on your 'diss-tory.' (That's diss + history, just in case). You are a 'Michelle', when you could be a 'Beyonce'...(or at least a 'Kelly')?`);
        } if (score > 3 && score <= 7) {
            $('.score-message').text(`Alright, alright...you did good, ${player}. Still some more work to do but your head's really in diss! If you really wanna beef, you better start cookin'!`);
        } if (score > 7 && score == 10) {
            $('.score-message').text(`You're more MVP than Jordan, more E=mc^2 than Einstein, and have more bap than Bey. But...ya still ugly! Congrats on a good game ${player}. Check out our other categories for more of diss!`);
        }
};

// If game is over, remove all questions and show score
const $gameCheck = () => {
    console.log('Game over');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.score').toggleClass('hidden');
    $('.score-message').toggleClass('hidden');
    $displayScore(userScore);
};

//initializes Rappers game from Categories page
$('.rap').click(function() {
    window.location = './rap-page.html?player=' + player;
});

// MAKE SURE THE GAME PROMPTS AFTER THE CORRECT-GAME PAGE LOADS!!!
if (gameStart === false && firstQuestion === true || player) {
    questionTracker = 0;
    userScore = 0;
    showQuestions(rapQuest[0]);
    console.log(rapQuest[0]);
    $removeSelection();
};

// Check, tally, and remove questions answered
$('.rap-button').click(function() {
    if (firstQuestion === true) {
        firstQuestion = false;
    }
    checkAnswers(rapQuest[questionTracker]);
    questionTracker++;
    if (questionTracker == 10) {
        $gameCheck();
        $('.rap-button').toggleClass('hidden');
        $('.rap-replay').toggleClass('hidden');
        $('.rap-finish').toggleClass('hidden');
    } else {
        $removeSelection();
        showQuestions(rapQuest[questionTracker]);
    }
});

// Replay the same game. Add more questions?
$('.rap-replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.rap-button').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.rap-replay').toggleClass('hidden');
    $('.rap-finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    showQuestions(rapQuest[0]);
    $removeSelection();
});

//Finish game and return to Category page
$('.rap-finish').on('click', function() { 
    window.location = './category.html?player=' + player;
});


//initializes Celeb game from Categories page
$('.celeb').on('click', function() { 
    window.location = './celeb-page.html?player=' + player;
});

//Has to occur after redirect from Categories page
if (gameStart === false && firstQuestion === true || player) {
    questionTracker = 0;
    userScore = 0;
    showQuestions(celebQuest[0]);
    console.log(celebQuest[0]);
    $removeSelection();
};


// Check, tally, and remove questions answered
$('.celeb-button').click(function() {
    if (firstQuestion === true) {
        firstQuestion = false;
    }
    checkAnswers(celebQuest[questionTracker]);
    questionTracker++;
    if (questionTracker == 10) {
        $gameCheck();
        $('.celeb-button').toggleClass('hidden');
        $('.celeb-replay').toggleClass('hidden');
        $('.celeb-finish').toggleClass('hidden');
    } else {
        $removeSelection();
        showQuestions(celebQuest[questionTracker]);
    }
});

// Replay the same game. Add more questions?
$('.celeb-replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.celeb-button').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.celeb-replay').toggleClass('hidden');
    $('.celeb-finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    showQuestions(celebQuest[0]);
    $removeSelection();
});


//Finish game and return to Category page
$('.celeb-finish').on('click', function() { 
    window.location = './category.html?player=' + player;
});


//initializes Authors game
$('.auth').on('click', function() { 
    window.location = './auth-page.html?player=' + player;
});

if (gameStart === false && firstQuestion === true || player) {
    questionTracker = 0;
    userScore = 0;
    showQuestions(authQuest[0]);
    console.log(authQuest[0]);
    $removeSelection();
};


// Check, tally, and remove questions answered
$('.auth-button').click(function() {
    if (firstQuestion === true) {
        firstQuestion = false;
    }
    checkAnswers(authQuest[questionTracker]);
    questionTracker++;
    if ( questionTracker == 10 ) {
        $gameCheck();
        $('.auth-button').toggleClass('hidden');
        $('.auth-replay').toggleClass('hidden');
        $('.auth-finish').toggleClass('hidden');
    } else {
        $removeSelection();
        showQuestions(authQuest[questionTracker]);
    }
});

// Replay the same game. Add more questions?
$('.auth-replay').click(function() {
    $('.score').toggleClass('hidden');
    $('.auth-button').toggleClass('hidden');
    $('.img').toggleClass('hidden');
    $('.questions').toggleClass('hidden');
    $('.auth-replay').toggleClass('hidden');
    $('.auth-finish').toggleClass('hidden');
    questionTracker = 0;
    userScore = 0;
    showQuestions(authQuest[0]);
    $removeSelection();
});

//Finish game and return to Category page
$('.auth-finish').on('click', function() { 
    window.location = './category.html?player=' + player;
});
