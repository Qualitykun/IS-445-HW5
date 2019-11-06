const req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.onload = function() {
    const data = JSON.parse(req.response);
    
}