// Open modals

document.querySelectosrAll(".card a").forEach(link => {

    link.addEventListener("click", () => {

        const modal = document.querySelector(link.getAttribute("href"));

        modal.showModal();

    });

});