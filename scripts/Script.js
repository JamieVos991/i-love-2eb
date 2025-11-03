// Selecteer alle knoppen met een data-attribuut 'data-sprint'
const knoppen = document.querySelectorAll("button[data-sprint]");
const sprints = document.querySelectorAll(".sprint");

knoppen.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Haal de waarde van het 'data-sprint' attribuut op (dit geeft de index van de sprint aan)
    const index = btn.dataset.sprint;

    // Verwijder bij alle sprint elementen de class 'active'
    sprints.forEach((s) => s.classList.remove("active"));

    // Voeg de class 'active' toe aan de sprint met de opgegeven index
    sprints[index].classList.add("active");
  });
});

// Zorg ervoor dat standaard de eerste sprint actief is bij het laden van de pagina
sprints[0].classList.add("active");
