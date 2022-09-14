import axios from 'axios'
import { BASE_URL } from './config'

const validatePayload = (payload, schema) => {
    const body = {
        payload: payload,
        schema: schema
    }

    const request = axios.post(`${BASE_URL}/validate`, body )
    return request.then(response => response.data)
}

const exportedObject = {
    validatePayload
}

export default exportedObject