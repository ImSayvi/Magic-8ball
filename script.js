function giveAnswer() {
    const questionArea = document.getElementById("questionArea").value;
    const warning = document.getElementById("warning");
    const isQuestionMark = questionArea.slice(-1)
    const questionMark = "?"



    if (questionArea == "") {
        warning.textContent = "Musisz zadać pytanie"
        answerField.textContent= ""

    } else {
        if (isQuestionMark == questionMark) {

            warning.textContent = ""
            const answerField = document.getElementById("answerField");
            const answers = [
                "Tak.",
                "Nie.",
                "Nie możemy przewidzieć teraz.",
                "Zapytaj ponownie później.",
                "Prawdopodobnie.",
                "Nie licz na to.",
                "Nie wiem, spróbuj ponownie.",
                "Skoncentruj się i zapytaj ponownie.",
                "Na pewno nie.",
                "Bardzo prawdopodobne.",
                "Nie interesuj się bo kociej mordy dostaniesz",
                "A chuj cie to",
                "Nie zesraj sie",
                "Twoja stara"]

            const chooseRandomAnswer = answers[Math.floor(Math.random() * answers.length)];

            answerField.innerText = chooseRandomAnswer

        } else {
            warning.textContent = "Pytanie musi mieć znak zapytania!"
            answerField.textContent= ""
        }

    }

}