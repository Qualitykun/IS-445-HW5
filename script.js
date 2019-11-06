const req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.onload = function() {
    const data = JSON.parse(req.response);
}

function getemail(data) {
    let temparray = []
    for (let index = 1; index < data.length; index++) {
        let object = data[index];
        let email = object.email;
        temparray.push(email);
    }
    temparray.sort();
    let list = document.getElementById('container1');
    for (let index = 0; index < temparray.length; index++) {
        let alphaemail=temparry[index];
        let newlistitem=document.createElement('li');
        let listvalue=document.createTextNode(alphaemail);
        newlistitem.appendChild(listvalue);
        list.appendChild(newlistitem);
    }
}
getemail(data);