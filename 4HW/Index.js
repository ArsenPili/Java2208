const btn = document.getElementById(`btn`);
const userCardsSection = document.getElementById(`user-cards`);

function getInfoUser() {
   
    const name = document.getElementById(`name`).value;
    const surname = document.getElementById(`surname`).value;
    const age = document.getElementById(`age`).value;
    const telephone = document.getElementById(`telephone`).value;
    const mail = document.getElementById(`mail`).value;
    const linkIMG = document.getElementById(`linkIMG`).value;


    if (!name || !surname || !age || !telephone || !mail || !linkIMG) {
        alert(`Будь ласка, заповніть всі поля!`);
    } else {
        const userData = [name, surname, age, telephone, mail, linkIMG];
        createCards(userData);
    }
}

function createCards(userData) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    userCard.innerHTML = `
        <img src="${userData[5]}" alt="Фото користувача">
        <div class="user-info">
            <p><span>Ім'я:</span> ${userData[0]}</p>
            <p><span>Прізвище:</span> ${userData[1]}</p>
            <p><span>Вік:</span> ${userData[2]}</p>
            <p><span>Телефон:</span> <a href="tel:${userData[3]}">${userData[3]}</a></p>
            <p><span>Електронна пошта:</span> <a href="mailto:${userData[4]}">${userData[4]}</a></p>
        </div>
    `;

    userCardsSection.appendChild(userCard);
}

btn.onclick = function () {
    getInfoUser();
}
