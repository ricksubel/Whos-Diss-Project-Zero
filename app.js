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
// increase the questions/categories

console.log("Let's play!");

// Test game functions and then add real questions
Game Questions:
const rapQuest = [
    {
        question:'INSERT QUESTION 1',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 2',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 3',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 4',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 5',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
];

const celebQuest = [
    {
        question:'INSERT QUESTION 1',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 2',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 3',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 4',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 5',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
];

const authQuest = [
    {
        question:'INSERT QUESTION 1',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 2',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 3',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 4',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
    {
        question:'INSERT QUESTION 5',
        optionA: 'ANSWER A',
        optionB: 'ANSWER B',
        optionC: 'ANSWER C',
        correct: 'CORRECT ANSWER'
    },
];

//continue looking for streamlined classes, if possible (player, game components, etc.)
class Category {
    Constructor(name, container, image, questions, audio) {
        this.name= 'name',
        this.container= 'container',
        this.image= 'image',
        this.questions= 'questions',
        this.audio= 'audio'
    }
}

// create randome question generator from above arrays

(document).ready(function(){	
$('.rap-button').click(function() { 
    window.location = 'rap-page.html';
})});
