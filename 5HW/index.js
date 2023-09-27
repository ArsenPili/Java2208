let cryptoWallet = {
    nameUser: "",
    money: {
        bitcoin: {
            name: "Bitcoin",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png",
            balance: getRandomNumber(1, 10), 
            course: 2849539.38,
        },
        ethereum: {
            name: "Ethereum",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
            balance: getRandomNumber(1, 10), 
            course: 301396.58,
        },
        stellar: {
            name: "Stellar",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Stellar_Symbol.png",
            balance: getRandomNumber(1, 10), 
            course: 4.40,
        }
    }
};

cryptoWallet.nameUser = prompt('Введіть ваше ім\'я');

const checkMoney = function () {
    let valute = document.getElementById("inp").value.toLowerCase();
    let resultContainer = document.getElementById("result");

    if (cryptoWallet.money[valute]) {
        let { name, logo, balance, course } = cryptoWallet.money[valute];
        let totalInUAH = parseInt(balance * course);

        resultContainer.innerHTML = `
            <p>Доброго дня, ${cryptoWallet.nameUser}!</p>
            <p>Ваш баланс ${name} <img style="width: 100px;height: 100px;" src="${logo}"></p>
            <p>Залишилося ${balance} монет, якщо ви сьогодні продасте їх, то отримаєте ${totalInUAH} грн</p>
        `;
    } else {
        resultContainer.textContent = "Некоректно введена криптовалюта. Спробуйте ще раз.";
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let show = document.getElementById("btn");
show.onclick = function () {
    checkMoney();
}