function attachEventsListeners() {
    buttonsRef = Array.from(document.querySelectorAll("input[type=button]"));
    textAreaRef = Array.from(document.querySelectorAll("input[type=text]"));

    buttonsRef.forEach(button => button.addEventListener("click", clickHandler));

    function clickHandler(e) {
        let input = Number(e.currentTarget.parentElement.children[1].value);
        let unit = e.currentTarget.parentElement.children[1].id;
        daysToShow = "";
        hoursToShow = "";
        minutesToShow = "";
        secondsToShow = "";

        switch (unit) {
            case "days":
                textAreaRef[0].value = input;
                textAreaRef[1].value = input * 24;
                textAreaRef[2].value = input * 24 * 60;
                textAreaRef[3].value = input * 24 * 60 * 60
                break;
            case "hours":
                textAreaRef[0].value = input / 24;
                textAreaRef[1].value = input;
                textAreaRef[2].value = input * 60;
                textAreaRef[3].value = input * 60 * 60;
                break;
            case "minutes":
                textAreaRef[0].value = input / 60 / 24;
                textAreaRef[1].value = input / 60;
                textAreaRef[2].value = input;
                textAreaRef[3].value = input * 60;
                break;
            case "seconds":
                textAreaRef[0].value = input / 60 / 60 / 24;
                textAreaRef[1].value = input / 60 / 60;
                textAreaRef[2].value = input / 60;
                textAreaRef[3].value = input;
                break;
        }

    }
}