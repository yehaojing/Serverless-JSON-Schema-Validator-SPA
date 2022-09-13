import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

const validatePayload = (payload, schema) => {
    const body = {
        payload: payload,
        schema: schema
    }

    const request = axios.post(`${baseUrl}/validate`, body )
    return request.then(response => response.data)
}

const exportedObject = {
    validatePayload
}

export default exportedObject