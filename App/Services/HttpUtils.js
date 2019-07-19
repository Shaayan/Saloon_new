import { AsyncStorage } from "react-native"

// const BASE_URL = 'https://localhost:3000/api';
const BASE_URL = 'https://aqueous-eyrie-32373.herokuapp.com/api';


const headersFor = (token) => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    if (token) headers['Authorization'] = 'Bearer ' + token;
    return headers;
}

const handleErrors = (response) => {
    return response.json().then(responseData => {
        if (responseData.errors) {
            if (responseData.errors.indexOf('Invalid token') !== -1) {
                return AsyncStorage.removeItem('auth_token').then(() => {
                    let err = Error('Invalid auth token')
                   // Sentry.captureException(err)
                    throw err
                })
            } else {
                let err = Error(responseData.errors.join('. ') + '.')
                //Sentry.captureException(err)
                throw err
            }
        }
        return responseData

    });
}

const hitEndpoint = (method, endpoint, token, body) => {
    let headers = headersFor(token)
    let url = [BASE_URL, endpoint].join('/')
    console.log(method, '==================')
    console.log(endpoint, '==================')
    console.log(body, '==================')
    console.log(url, '==================')

    return fetch(url, { method, headers, body }).then((response) => {
        console.log(response, 'kkkkkkkkkkkkkkkk')
        return handleErrors(response)
    }).catch((err) => {
        console.log(err, 'nnnnnnnnnnnnnnnnnnn')
        if (err.message === 'Network request failed')
        //Sentry.captureException(err)
        throw err
    });
}

export const HttpUtils = {
    get: (endpoint, token) => hitEndpoint('GET', endpoint, token),
    delete: (endpoint, token) => hitEndpoint('DELETE', endpoint, token),
    post: (endpoint, data, token) => {
        console.log(endpoint, 'endPoint')
        console.log(data, 'data')
        let body = JSON.stringify(data)
        return hitEndpoint('POST', endpoint, token, body)
    },
    put: (endpoint, data, token) => {
        let body = JSON.stringify(data)
        return hitEndpoint('PUT', endpoint, token, body)
    }
}
