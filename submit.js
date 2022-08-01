const transactionForm = document.getElementById("transactionForm")

transactionForm.addEventListener("submit", function(event){
        event.preventDefault();
        let transactionFormData = new FormData(transactionForm);
        let transactionObj = convertFormDataToObj(transactionFormData)
        saveTransactionObj(transactionObj)
        insertRowTable(transactionObj)
        transactionForm.reset();
    })
document.addEventListener("DOMContentLoaded", function(event) {
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionData"));
    transactionObjArr.forEach(function(arrayElement) {
    insertRowTable(arrayElement)
    })
})

function getNewTransactionId() {
    let lastTransactionId = localStorage.getItem("lastTransactionId") || "-1";
    let newTransactionId = JSON.parse(lastTransactionId) + 1;
    localStorage.setItem("lastTransactionId", JSON.stringify(newTransactionId));
    return newTransactionId;
}

function convertFormDataToObj(transactionFormData) {
    let typeSelector = transactionFormData.get("typeSelector");
    let description = transactionFormData.get("description");
    let price = transactionFormData.get("price");
    let category = transactionFormData.get("category");
    let transactionId = getNewTransactionId();
    return{
        "typeSelector": typeSelector,
        "description": description,
        "price": price,
        "category": category,
        "transactionId": transactionId
    }
}

function insertRowTable(transactionObj) {
        let transactionTableRef = document.getElementById("transactionTable");
        let newTypeRowRef = transactionTableRef.insertRow(-1);//ingreso una fila al final
        
        let newTypeCellRef = newTypeRowRef.insertCell(0);//ingreso una celda en la posicion(0)
        newTypeCellRef.textContent = transactionObj["typeSelector"]//le agrego un valor

        newTypeCellRef = newTypeRowRef.insertCell(1);
        newTypeCellRef.textContent = transactionObj["description"]

        newTypeCellRef = newTypeRowRef.insertCell(2);
        newTypeCellRef.textContent = transactionObj["price"]

        newTypeCellRef = newTypeRowRef.insertCell(3);
        newTypeCellRef.textContent = transactionObj["category"]

        let newDeleteCell = newTypeRowRef.insertCell(4);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar"
        newDeleteCell.appendChild(deleteButton);

        deleteButton.addEventListener("click", (event) => {
            event.target.parentNode.parentNode.remove()
        })

}

function saveTransactionObj(transactionObj) { 
    let myTransactionArray = JSON.parse(localStorage.getItem("transactionData")) || [];//obtengp el array
    myTransactionArray.push(transactionObj);//agrego un array
    //Convierto el array en JSON
    let transactionArrayJSON = JSON.stringify(myTransactionArray);
    //Guardo en formato JSON
    localStorage.setItem("transactionData", transactionArrayJSON)
}


    
 