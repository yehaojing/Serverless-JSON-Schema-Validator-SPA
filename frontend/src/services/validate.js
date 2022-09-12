import axios from 'axios'

const baseUrl = '/validate'

const validatePayload = (payload, schema) => {
    const body = {
        payload: payload,
        schema: schema
    }

    console.log(body)
    const request = axios.post(baseUrl, body )
    return request.then(response => response.data)
}

const exportedObject = {
    validatePayload
}

export default exportedObject