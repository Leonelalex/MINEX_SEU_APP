
export const GetToken = () => {

    const url = 'http://localhost:1000/seu/authenticate';

    const data = {
        "Username" : "SEU_RENAP",
        "Password" : "R3n@p_S3u"
    };

    return new Promise ((resolve) => {
            fetch(url, {method: 'post', "headers": {
            "content-type": "application/json",
            "accept": "application/json"
        }, body: JSON.stringify(data)})
        .then(resp => resp.json())
        .then(token => {resolve(token)})
    });

}
