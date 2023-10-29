function lockedProfile() {
    const buttonsRef = Array.from(document.getElementsByTagName("button"));
    const checkStatus = document.querySelector("input[type=radio]:checked").value;
    let user1HiddenField = document.getElementById("user1HiddenFields");

    buttonsRef.forEach(button => button.addEventListener("click", clickHandler));

    function clickHandler(e) {
        const btn = e.target;
        const profil = btn.parentElement;
        const hiddenInfo = profil.getElementsByTagName("div")[0];
        const checkStatus = profil.querySelector("input[type=radio]:checked").value;
        if (checkStatus === "unlock") {
            if (btn.textContent === "Show more") {
                hiddenInfo.style.display = "block";
                btn.textContent = "Hide it";
            }
            else if (btn.textContent === "Hide it") {
                hiddenInfo.style.display = "none";
                btn.textContent = "Show more";
            }
        }
    }
}