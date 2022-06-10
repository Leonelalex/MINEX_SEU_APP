

const getCasos = (page, items, token) => {

    const getCasosURL = `http://localhost:1000/seu/casos?page=${page}&items=${items}`;

    return new Promise ( (resolve) => {
        fetch(getCasosURL, {method: 'get', "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "Authorization": `Bearer ${token}`
        } }).then(resp => resp.json())
        .then(data => {resolve(data)})
    });

};

export {getCasos};
