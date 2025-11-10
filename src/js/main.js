const items = document.querySelectorAll(".faq-accordion__item");
items.forEach((e) => {
    const icon = e.querySelector(".faq-accordion__question-toggle");
    const question = e.querySelector(".faq-accordion__answer");

    icon.addEventListener("click", () => {
        if (icon.alt == "Plus Icon") {
            icon.src = "./assets/images/icon-minus.svg";
            icon.alt = "Minus Icon";
            question.style.display = "block";
        } else {
            icon.src = "./assets/images/icon-plus.svg";
            icon.alt = "Plus Icon";
            question.style.display = "none";
        }
    });
});

