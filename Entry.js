// class Entry {
//     constructor(title, date){
//         this.title = title;
//         this.date = date;
//     }
// }
// class Purchase{
//     constructor(id, method){
//         this.id = id;
//         this.method = method;    
//     }
//     addEntry(book){
//         this.book.push(book);
//     }
    
//     deleteEntry(entry){
//         let index = this.entry.indexOf(entry);
//         this.entries.splice(index,1);
//     }
// }

// class customerData {
//     constructor(name, title, paymentMethod){
//         this.name = name;
//         this.title = title;
//         this.paymentMethod = paymentMethod;
//     }
//     addEntry(entry){
//         this.entry.push(entry);
//     }
//     deleteEntry(entry){
//         let index = this.entry.indexOf(entry);
//         this.entries.splice(index,1);
//     }
// }

// let entries = [];
// let entryId = 0;


// onClick('new-entry', () => {
//     DataTransferItemList.push(new Entry(entryId++, getValue('new-entry-title')));
//     drawDOM();
// });

// function onClick(id, action){
//     let element = document.getElementById(id);
//     element.addEventListener('click', action);
//     return element;
// }

// function getValue(id){
//     return document.getElementById(id).value;
// }

// function drawDOM(){
//     let entryDiv = document.getElementById('entries');
//     clearElement(entryDiv);
//     for(entries of entries){
//         let entry = createEntryTable(log);
//         let title = document.createElement('h2');
//         title.innerHTML = entry.name;
//         title.appendChild(createDeleteEntryButton(entry));
//         entryDiv.appendChild(entry);
//         entryDiv.appendChild(table);
//         for (entry of entries.members){
//             createMemberRow(entry, table, log);
//         }
//     }
// }

// function createLogRow(entry, table, log){
//     let row = table.insertRow(2);
//     row.insertCell(0).innerHTML = log.name;
//     row.insertCell(1).innerHTML = log.position;
//     let actions = row.insertCell(2);
//     actions.appendChild(createDeleteRowButton(entry, log));
// }

// function createDeleteRowButton(log, entry){
//     let btn = document.createElement('button');
//     btn.className = 'btn btn-primary';
//     btn.innerHTML = 'Delete';
//     btn.onclick = () => {
//         let index = log.entries.indexOf(entries);
//         log.entries.splice(index,1);
//         drawDOM();
//     };
//     return btn;
// }

// function createDeleteEntryButton (entry){
//     let btn = document.createElement('button');
//     btn.className = 'btn btn-primary';
//     btn.innerHTML = 'Delete Entry';
//     btn.onclick = () => {
//         let index = entries.indexOf(entry);
//         entries.splice(index,1);
//         drawDOM();
//     };
//     return btn;
// }

// function createNewEntryButton(title) {
//     let btn = document.createElement('button');
//     btn.className = 'btn btn-primary';
//     btn.innerHTML = 'Create';
//     btn.onclick = () =>{
//         entry.entries.push(new entry(getValue('name-input-${name-input}'), getValue('position-input${log.id}')));
//         drawDOM();
//     };
//     return btn;
// }
    

// function createEntryTable(entry){
//     let table = document.createElement('table');
//     table.setAttribute('class', 'table table-dark, table-striped');
//     let row = table.insertRow(0);
//     letnameColumn = document.createElement('th');
//     let positionColumn = document.createElement('th');
//     nameColumn = document.createElement('th');
//     positionColumn.innerHTML ='Position';
//     row.appendChild(nameColumn);
//     row.appendChild(positionColumn);
//     let formRow = table.insertRow(1);
//     let nameTh = document.createElement('th');
//     let positionTh = document.createElement('th');
//     let createTh = document.createElement('th');
//     let nameInput = document.createElement('input');
//     nameInput.setAttribute('id','name-input-${entry.id}');
//     nameInput.setAttribute('type', 'text');
//     nameInput.setAttribute('class', 'form-control');
//     let positionInput = document.createElement('input');
//     positionInput.setAttribute('id','position-input-${entry.id}');
//     positionInput.setAttribute('type', 'text');
//     positionInput.setAttribute('class', 'form-control');
//     let newEntrybutton = createNewMemberButton(log);
//     nameTh.appendChild(nameInput);
//     position.Th.appendChild(positionInput);
//     createTh.appendChild(newEntrybutton);
//     formRow.appendChild(nameTh);
//     formRow.appendChild(positionTh);
//     formRow.appendChild(createTh);
//     return table;
// }

// function clearElement(element){
//     while(element.firstChild){
//         element.removechild(element.firstChild);
//     }
}

