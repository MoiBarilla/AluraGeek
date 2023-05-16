let search = document.querySelectorAll(".search");

search.forEach(element => {
    element.addEventListener("input", function() {

    let isFilteredCard = document.querySelectorAll(".filter-card");
    if (this.value.length > 0) {

        for (let i = 0; i < isFilteredCard.length; i++) {
            let filteredCard = isFilteredCard[i];
            let isFilteredName = filteredCard.querySelector(".filter-name");
            let FilteredName = isFilteredName.textContent;

            let expression = new RegExp(this.value, "i");


            if (!expression.test(FilteredName)) {
                filteredCard.classList.add("none");

            } else {
                filteredCard.classList.remove("none");
            }
        }
    } else {
        for (let i = 0; i < isFilteredCard.length; i++) {
            let filteredCard = isFilteredCard[i];
            filteredCard = isFilteredCard[i]
            filteredCard.classList.remove("none");
        }
    }
});
});
