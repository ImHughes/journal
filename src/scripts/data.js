function getData (){
    const el = document.querySelector(".jEntry")
    el.innerHTML = "";
    return fetch("http://localhost:3000/entries")
    .then(response => response.json())
}

