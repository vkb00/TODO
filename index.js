document.addEventListener('DOMContentLoaded', function () {
    let countList = 0;
    class ListItem {

        constructor(id, listName) {
            this.id = id;
            this.listName = listName;
        }

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
        deleteListItem.className = "deleteListItem";
        deleteListItem.type = "button";


        listItem.appendChild(checkbox);
        listItem.appendChild(p);
        listItem.appendChild(deleteListItem);
        document.querySelector("div[class=listContainer]").append(listItem);
        let el = document.querySelectorAll('.deleteListItem');
        for (let i = 0; i < el.length; i++) {
            el[i].onclick = function () {

                let removeList = el[i].parentNode;
                let temp = removeList.parentNode;

                temp.removeChild(removeList);
            };
        }
        document.getElementById('inputString').value='';
    }

    document.getElementById("inputButton").addEventListener("click", (e) => {
        addListItem();
    });
    document.querySelector('input').addEventListener('keydown', (e)=> {
        if (e.key === 'Enter') {
            addListItem();
        }
    });

});
