const title = document.querySelector("#title");
const author = document.querySelector("#author");
const num = document.querySelector("#num");
const submit = document.querySelector("#submit")
const right = document.querySelector("#right")
let status;
const myLibrary = [];
function Book(title, author, num, status) {
    function book(title, author, num, status) {
        this.title = title;
        this.author = author;
        this.num = num;
        this.status = status;
    }
    let kitaab = new book(title, author, num, status);
    myLibrary.push(kitaab);
    addData(kitaab);
}
document.querySelector("#submit").addEventListener("click", () => {
    const selected = document.querySelector('input[name="stat"]:checked')
    let a;
    if (selected) {
        a = selected.value;
    }
    else a = 'Not Read';
    Book(title.value, author.value, num.value, a);

})
function addData(book) {
    let div = document.createElement("div");
    div.setAttribute("class", 'same');
    for (let key in book) {
        let name;
        let div1 = document.createElement("div");
        if (key == 'status') {
            name = document.createElement('button');
            name.textContent = book[key];
            name.addEventListener('click', () => {
                if (name.textContent == 'Read') name.textContent = 'Not Read';
                else name.textContent = 'Read';
            })
        }
        else {
            name = document.createElement('p');
            name.textContent = book[key];
        }
        div1.append(name);
        div.append(div1);
    }
    let div1 = document.createElement("div");
    let btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.style.backgroundColor = 'red';
    btn.addEventListener('click', () => {
        right.removeChild(div);
    });
    div1.append(btn);
    div.appendChild(div1);
    right.appendChild(div);
}
