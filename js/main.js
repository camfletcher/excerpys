function getUrlParameters(parameter, staticURL, decode) {
    var currLocation = (staticURL.length) ? staticURL : window.location.search,
        parArr = currLocation.split("?")[1].split("&");

    for (var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        
        if (parr[0] == parameter) {
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
        } else return false;
    }
}

var EXERCISES = [
    {
        id: 1,
        title: "The First Exercise",
        description: "You work at a waste management facility and your employer needs you to write a program that can be used to provide statistics about the daily intake of waste the facility receives.<br>There are 3 types of garbage: \"t\" (trash), \"r\" (recycleable), \"f\" (food).<br>Your program will be supplied an input that looks similar to \"rrftftff\" and you will have to use that input to complete the tasks mentioned below. You will have a different string of characters to represent 7 days worth of garbage collection. (If you're confused, refer to the input provided.)",
        code: "https://gist.github.com/camfletcher/eef8f1d6c93e0c949db8c1c55d845cb4",
        skeleton: "https://gist.github.com/camfletcher/3ca415e62e4f0bac1a9f41e892f934e3",
        steps: [
            "Print the number of each type of garbage that was received per day",
            "Print the most common type of trash received per day",
            "Print the sum of all the items collected for each day"
        ],
        form: [
            { id: 1, question: "How much garbage (total) was received on Day 1?", answer: 7940 },
            { id: 2, question: "How much garbage (total) was received on Day 6?", answer: 6931 },
            { id: 3, question: "Which type of garbage was most received on Day 4?", answer: "trash" }
        ],
        finish_code: 19701
    },
    {
        id: 2,
        title: "Wordsmith",
        description: "",
        code: "https://gist.github.com/camfletcher/95cf5fb25273d18775f0051d3d669123",
        skeleton: "https://google.com",
        steps: [
            "Print a string containing all the inputted words, sorted alphanumerically",
            "Print a string containing the number of words in your output",
            "Print the number of words each character in the alphabet has in your output"
        ],
        form: [
            { id: 1, question: "What are the first 10 words that start with 'b'? (ex: \"wordOne wordTwo wordThree ...\")", answer: "baby back background bacon bad bag bait bake balance bald" },
            { id: 2, question: "How many words are there total in the output?", answer: 2971 }
        ]
    }
]

function getExercise(id) {
    for (var i in EXERCISES) {
        var target = EXERCISES[i];

        if (target.id == id) {
            return target;
        }
    }

    return null;
}