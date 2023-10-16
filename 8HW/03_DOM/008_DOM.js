document.addEventListener("DOMContentLoaded", function () {
    const ul = document.querySelector("#list");
    const firstBtn = document.querySelector("#firstBtn");
    const lastBtn = document.querySelector("#lastBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const prevBtn = document.querySelector("#prevBtn");
    const addEndBtn = document.querySelector("#addEndBtn");
    const deleteStartBtn = document.querySelector("#deleteStartBtn");
    const deleteEndBtn = document.querySelector("#deleteEndBtn");
    const deleteMidBtn = document.querySelector("#deleteMidBtn");
    const addStartBtn = document.querySelector("#addStartBtn");

    let selectedElement = null;

    firstBtn.addEventListener("click", function () {
        selectElement(ul.firstElementChild);
    });

    lastBtn.addEventListener("click", function () {
        selectElement(ul.lastElementChild);
    });

    nextBtn.addEventListener("click", function () {
        const nextElement = selectedElement.nextElementSibling || ul.firstElementChild;
        selectElement(nextElement);
    });

    prevBtn.addEventListener("click", function () {
        const prevElement = selectedElement.previousElementSibling || ul.lastElementChild;
        selectElement(prevElement);
    });

    addEndBtn.addEventListener("click", function () {
        const newElement = createListElement("Новий елемент");
        ul.appendChild(newElement);
    });

    deleteStartBtn.addEventListener("click", function () {
        if (ul.firstElementChild) {
            ul.removeChild(ul.firstElementChild);
        }
    });

    deleteEndBtn.addEventListener("click", function () {
        if (ul.lastElementChild) {
            ul.removeChild(ul.lastElementChild);
        }
    });

    deleteMidBtn.addEventListener("click", function () {
        if (selectedElement && ul.contains(selectedElement)) {
            ul.removeChild(selectedElement);
        }
    });

    addStartBtn.addEventListener("click", function () {
        const newElement = createListElement("Новий елемент");
        ul.prepend(newElement);
    });

    function selectElement(element) {
        if (selectedElement) {
            selectedElement.classList.remove("select");
        }
        if (element) {
            element.classList.add("select");
        }
        selectedElement = element;
    }

    function createListElement(text) {
        const li = document.createElement("li");
        li.innerText = text;
        return li;
    }
});
