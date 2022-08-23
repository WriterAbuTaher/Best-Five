let count = 1;

// seleceted function 
function selectedElement(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const newRow = document.createElement("tr");

    const playerNo = document.createElement("th");
    playerNo.innerText = count;
    newRow.appendChild(playerNo);

    const newPlayer = document.createElement("th");
    newPlayer.innerText = playerName;
    newRow.appendChild(newPlayer);

    const tableBody = document.getElementById("table-body");

    if (count <= 5) {
        tableBody.appendChild(newRow);
        count++
    }
    else {
        return alert("You Already Added 5 Players")
    }

    const btnNone = element;
    btnNone.setAttribute("disabled", true);
    console.log(btnNone);
}

// common function 
function inputField(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputValue.value);
    return inputFieldValue;
}

// calculate function 
document.getElementById("calculate-btn").addEventListener("click", function () {
    const tableBody = document.getElementById("table-body");
    const playerNo = parseFloat(tableBody.lastChild.children[0].innerText);

    const calculate = playerNo * inputField("player-budget");

    document.getElementById("expenses").innerText = calculate;
})

// calculate total function
document.getElementById("calculate-total-btn").addEventListener("click", function () {
    const expenses = parseFloat(document.getElementById("expenses").innerText);

    const calculateTotal = expenses + inputField("manager-value") + inputField("coach-value");

    document.getElementById("total").innerText = calculateTotal;
})