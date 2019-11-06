const xhrdata = () =>  {  
    const req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/users');
    req.onload = function() {
        const data = JSON.parse(req.response);
        console.log(data);
        getemail(data);
    }
    req.send();
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
        let alphaemail=temparray[index];
        let newlistitem=document.createElement('li');
        let listvalue=document.createTextNode(alphaemail);
        newlistitem.appendChild(listvalue);
        list.appendChild(newlistitem);
    }
}
xhrdata();

const fetchdata = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(responseData => {
        console.log(responseData);
        getusername(responseData);
    })
}

function getusername(data) {
    let temparray2 = [];
    for (let index = 0; index < data.length; index++) {
        let object = data[index];
        let username = object.username;
        temparray2.push(username);
    }
    temparray2.sort(function(a, b) {
        return a.length-b.length;
    });
    let list = document.getElementById('container2');
    for (let index = 0; index < temparray.length; index++) {
        let sorteduname=temparray[index];
        let newlistitem=document.createElement('li');
        let listvalue=document.createTextNode(sorteduname);
        newlistitem.appendChild(listvalue);
        list.appendChild(newlistitem);
    }
}
fetchdata();