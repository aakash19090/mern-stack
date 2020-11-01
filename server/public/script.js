document.getElementById("wishlist_form").onsubmit = (e) => {
    const url = 'http://localhost:5000/form-data';
    e.preventDefault()


    let data = new URLSearchParams();

    let form_data = new FormData(e.target);

    for(const pair of form_data){
        data.append(pair[0], pair[1]);
    }

    fetch(url,{
        method: 'POST',
        body: data,
    }).then(res => res.json())
    .then(res2 => {
        location.reload();
    })

}

deleteItem = (item) => {
    let itemVal = item.getAttribute("data-item");
    const deleteUrl = 'http://localhost:5000/remove/';
    console.log(`${deleteUrl}${itemVal}`)
    fetch(`${deleteUrl}${itemVal}`, {
        method: "delete"
    }).then(res => res.json())
    .then(data => {
        location.reload();
    })
}