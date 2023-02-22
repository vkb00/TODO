document.addEventListener('DOMContentLoaded', function () {
    let countList = 0;
    let listTasks = [];
    let localStorageData = JSON.parse(localStorage.getItem("listItem"));
    console.log(localStorageData);
    if ((localStorageData != null) && (localStorageData != '[]')) {
        countList = localStorage.getItem("countList");
        console.log(countList);
        listTasks = localStorageData;
        for (let i = 0; i < listTasks.length; i++) {
            addListItem(localStorageData[i]);
        }

    }
    function addListItem(listItemObject) {
        let listItem = document.createElement('div');
        listItem.className = "listItem";
        listItem.id = listItemObject.id;

        let checkbox = document.createElement('input');
        checkbox.className = "checkbox";
        checkbox.type = "checkbox";
        checkbox.checked = listItemObject.checkboxValue;
        checkbox.addEventListener('click', (e) => {
            listItemObject.checkboxValue = checkbox.checked;
            console.log(listTasks);
            localStorage.setItem("listItem", JSON.stringify(listTasks));
        });
        let p = document.createElement('p');
        p.className = "listItemName";

        p.innerHTML = listItemObject.name;
        let deleteListItem = document.createElement('input');
        deleteListItem.id = "deleteListItem";
        deleteListItem.type = "button";


        listItem.appendChild(checkbox);
        listItem.appendChild(p);
        listItem.appendChild(deleteListItem);
        document.querySelector("div[id=listContainer]").append(listItem);
    }
    function initObjectListItem() {
        const listItem = {
            id: countList,
            checkboxValue: false,
            name: document.getElementById('inputString').value
        }
        countList++;
        return listItem;
    }
    function addListItemFromInputs(listItemObject) {

        addListItem(listItemObject);
        listTasks.push(listItemObject);
        localStorage.setItem("listItem", JSON.stringify(listTasks));
        localStorage.setItem("countList", countList);
        document.getElementById('inputString').value = '';
        console.log(listTasks);

    }
    function addDataToLS() {

    }
    function addCheckboxValue() {
        console.log('s');
    }
    document.getElementById("inputButton").addEventListener("click", (e) => {
        let listItem = initObjectListItem();
        addListItemFromInputs(listItem);

    });

    document.getElementById("listContainer").addEventListener("click", (e) => {

        if (e.target.id === "deleteListItem") {
            let listItem = e.target.parentNode;
            let temp = listItem.parentNode;
            let index = listTasks.findIndex(item => item.id == listItem.id);
            console.log(index);
            console.log(listItem.id);
            listTasks.splice(index, 1);
            temp.removeChild(listItem);
            localStorage.setItem("listItem", JSON.stringify(listTasks));
        }


    });
    document.querySelector('input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            let listItem = initObjectListItem();
            addListItemFromInputs(listItem);
        }
    });

});
