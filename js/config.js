const EXERCISES = [
    {
        id: 1,
        title: "Wordsmith",
        description: "You have been given a list of words that need to be sorted before they're added to the dictionary! Write a program that will sort each word alphanumerically and outputs a string containing the sorted words.",
        code: "https://gist.github.com/camfletcher/95cf5fb25273d18775f0051d3d669123",
        skeleton: "https://gist.github.com/camfletcher/9bf0d5c6451bdf5b7ecd05cb8134241f",
        steps: [
            "Print a string containing all the inputted words, sorted alphanumerically",
            "Print a string containing the number of words in your output",
            "Print the number of words each character in the alphabet has in your output"
        ],
        examples: [
            "'book duck apple car' -> 'apple book car duck' (a words = 1, b words = 1, c words = 1, d words = 1, ...)",
            "'cream book dingo baby' -> 'baby book cream dingo' (a words = 0, b words = 2, c words = 1, d words = 0, ...)"
        ],
        form: [
            { id: 1, question: "What are the first 10 words that start with 'b'? (ex: \"wordOne wordTwo wordThree\"...)", answer: "babies back bait balance ball ban bare base baseball basketball" },
            { id: 2, question: "How many words start with an 'L'?", answer: 56 },
            { id: 3, question: "How many words start with a 'V'?", answer: 20 },
            { id: 4, question: "What word comes after 'x-ray'?", answer: "yam" },
            { id: 5, question: "What word comes after 'depend'?", answer: "depressed" }
        ],
        finish_code: "19703"
    },
    {
        id: 2,
        title: "Waste Management",
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
            { id: 3, question: "Which type of garbage was most received on Day 4? (t/r/f)", answer: "r" }
        ],
        finish_code: "19701"
    },
    {
        id: 3, 
        title: "Recursive Calculator",
        description: "NASA Scientists are calculating large strings of data using super computers. Unfortunately the application they were using broke, now they need you to write a solution to their problem.<br><br>Input looks like the following: '52223345555'...<br><br>They need you to help them calculate the hidden decimal number within that string.",
        code: "https://gist.github.com/camfletcher/5d7e9fcf45b8f500c9757a4d7bc24b57",
        skeleton: "https://gist.github.com/camfletcher/3598be991043ddf28e58c4b45dbb418f",
        steps: [
            "If a character has a repeating EVEN number, add the value of the current number to your output",
            "If a character has a repeating ODD number, subtract that value of the current number from your output",
            "If a character does NOT have a repeating character, add 1 to your output",
            "Print the calculated output"
        ],
        examples: [
            "'55567' should output: '-8' ('555' repeats 3 times, so 10 would be SUBTRACTED b/c 5 is the next character twice)",
            "'12345' should output: '4' (no repeats, so just always add 1)"
        ],
        form: [
            { id: 1, question: "What is the calculated number?", answer: 8780 }
        ],
        finish_code: "19705"
    }
];

function getExercise(id) {
    for (var i in EXERCISES) {
        var target = EXERCISES[i];

        if (target.id == id) {
            return target;
        }
    }

    return null;
}
