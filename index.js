document.addEventListener('DOMContentLoaded', function () {
    let countList = 0;
    let listTasks = [];
    let localStorageData = JSON.parse(localStorage.getItem("listItem"));
    console.log(localStorageData);
    if((localStorageData != null) && (localStorageData !='[]')){
        countList = localStorage.getItem("countList");
        console.log(countList);
        listTasks = localStorageData;
        for(let i=0;i<listTasks.length;i++){
            addListItemFromLS(localStorageData[i]);
        }
        
    }
    function addListItemFromLS(listItemObject){
        let listItem = document.createElement('div');
        listItem.className = "listItem";
        listItem.id = listItemObject.id;
        
        let checkbox = document.createElement('input');
        checkbox.className = "checkbox";
        checkbox.type = "checkbox";
        checkbox.checked=listItemObject.checkboxValue;
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
    function addListItem() {

        let listItem = document.createElement('div');
        listItem.className = "listItem";
        listItem.id = countList;
        countList++;
        let checkbox = document.createElement('input');
        checkbox.className = "checkbox";
        checkbox.type = "checkbox";
        let p = document.createElement('p');
        p.className = "listItemName";

        p.innerHTML = document.getElementById('inputString').value;
        let deleteListItem = document.createElement('input');
        deleteListItem.id = "deleteListItem";
        deleteListItem.type = "button";


        listItem.appendChild(checkbox);
        listItem.appendChild(p);
        listItem.appendChild(deleteListItem);
        document.querySelector("div[id=listContainer]").append(listItem);
        
        let checkboxElements = document.querySelectorAll('.checkbox');
        for (let i = 0; i < checkboxElements.length; i++) {
            checkboxElements[i].onclick = function () {

                console.log(checkbox.checked);

            };
        }
        const ListItem = {
            id: listItem.id,
            checkboxValue: checkbox.checked,
            name: p.innerHTML
        }
        listTasks.push(ListItem);
        localStorage.setItem("listItem",JSON.stringify(listTasks));
        localStorage.setItem("countList",countList);
        console.log(listTasks);
        document.getElementById('inputString').value = '';
    }

    document.getElementById("inputButton").addEventListener("click", (e) => {
        addListItem();

    });
    document.getElementById("listContainer").addEventListener("click", (e) => {

        if (e.target.id === "deleteListItem") {
            let listItem = e.target.parentNode;
            let temp = listItem.parentNode;

            let index = listTasks.findIndex(item => item.id === listItem.id);
            listTasks.splice(index, 1);
            console.log(listTasks);
            console.log(listItem.id.toString());
            temp.removeChild(listItem);
            localStorage.setItem("listItem",JSON.stringify(listTasks));
        }


    });
    document.querySelector('input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addListItem();
        }
    });

});
