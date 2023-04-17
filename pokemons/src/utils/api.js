export function apiGet(url) {
    return fetch(url) //fce for send REQ to url
        .then(async response => {
            if (response.ok) { //if 200-299, it returns json data as a Promise
                return await response.json(); //await until promise is ready :)
            } else {
                const errorMessage = await response.text();
                return Promise.reject(new Error(errorMessage));
            }
        })
}