function checkForm(exercise, form) {
    var failed = false;
    for (var i = 0; i < exercise.form.length; i++) {
        var input = form.elements[i].value;
        var answer = exercise.form[i].answer;
        
        if (typeof answer == "string") {
            answer = answer.toLowerCase();
            input = input.toLowerCase();
        }

        if (input != answer) {
            form.innerHTML =
                toHtml("b", ["style='color: indianred;'"], "Invalid answer! Refresh the page to try again!");

            failed = true;
            break;
        }
    }

    if (!failed)
        form.innerHTML = toHtml("b", ["style='color: #4CAF50;'"], "Correct! Show this scrren to an instructor to receive credit! [Code: " + exercise.finish_code + "]");
}