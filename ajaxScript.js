function handleRequest() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(request.responseText));
    }
}


var url;
url = "https://api.unsplash.com/search/photos/?query=home&client-id=16699687c75249c61e1fc25d01bf98cf97da74cb24d3c6f4a5f5e48ab82256b3";
var request = new XMLHttpRequest();
request.onreadystate = handleRequest;
request.open('GET', "url", true);
request.setRequestHeader('Authorization',"Client-ID 16699687c75249c61e1fc25d01bf98cf97da74cb24d3c6f4a5f5e48ab82256b3" );
request.send();

