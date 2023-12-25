// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

//CHAT GPT
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (noun && adjective && person && verb && place) {
            const story = `Once upon a time, ${person} went to ${place} carrying a ${adjective} ${noun}. Suddenly, they started to ${verb} and everyone around was amazed!`;
            storySpan.textContent = story;
        } else {
            console.log('Please fill in all the inputs!');
        }
    });

    shuffleButton.addEventListener('click', function() {
        const stories = [
            // List of different stories you want to display
            // You can modify or add more stories here
            "Story 1",
            "Story 2",
            "Story 3"
        ];

        const randomIndex = Math.floor(Math.random() * stories.length);
        storySpan.textContent = stories[randomIndex];
    });
});
