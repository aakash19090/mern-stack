document.getElementById("wishlist_form").onsubmit = (e) => {
    e.preventDefault()

    const url = 'http://localhost:5000/form-data';

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