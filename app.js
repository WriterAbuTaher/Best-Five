let count = 1;

function selectedElement(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const newRow = document.createElement("tr");
    
    const playerNo = document.createElement("th");
    playerNo.innerText = count;
    newRow.appendChild(playerNo);
    
    let newPlayer = document.createElement("th");
    newPlayer.innerText = playerName;
    newRow.appendChild(newPlayer);

    const tBody = document.getElementById("tBody");

    if (count <= 5) {
        tBody.appendChild(newRow);
        count++
    }
    else {
        return alert("You Already Added 5 Players")
    }

    const btnHide = element.parentNode;
    btnHide.style.display = "none";

    const card = element.parentNode.parentNode;
    const NewBtn = document.createElement("button");
    NewBtn.classList.add("btn")
    NewBtn.classList.add("btn-disable")
    NewBtn.innerText = "Select";
    card.appendChild(NewBtn);
}

