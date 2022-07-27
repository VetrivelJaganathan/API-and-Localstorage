let allData = [];

let getDetails = (number) => {
    document.querySelector('.texts').value = '';
    for (let index = 1; index <= number; index++) {
        const url = `https://rickandmortyapi.com/api/character/${index}`;

        fetch(url).then((details) => {
            details.json().then((data) => {
                allData.push(data);
                localStorage.setItem("person", JSON.stringify(allData));
                display();
            })
        })
    }
}
let display = () => {
    let dipInfo = JSON.parse(localStorage.getItem("person"));
    let getInfo = dipInfo.map((Name) => {
        //console.log(Name.name);
        return `<div>Name : ${Name.name}</div><div>Status : ${Name.status}</div>`
    }).join('')
    document.querySelector('.filesData').innerHTML = getInfo;
}
