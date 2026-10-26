
const kf = document.getElementById("kontaktformular");
const m = document.getElementById("meldung");

kf.addEventListener("submit", function (event) { 
    event.preventDefault();
console.log("abgeschickt");

    const vorname = document.getElementById("fname").value.trim();
    const nachname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const nachricht = document.getElementById("nach").value.trim();
    if (vorname === "" || nachname==="" || email==="" || nachricht===""){
        m.textContent = "Bitte alle Felder ausfüllen";
        m.className = "fehler";
    }
    else {
        m.textContent = "Danke, wir melden uns!";
         m.className = "erfolg";
         kf.reset();

    }
 });
const menueButton = document.getElementById("menue-button");
const menue = document.getElementById("hauptmenue");

menueButton.addEventListener("click", function () {
    menue.classList.toggle("offen");
});
document.querySelectorAll("#hauptmenue a").forEach(function (link) {
    link.addEventListener("click", function () {
        menue.classList.remove("offen");
    });
});

