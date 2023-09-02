import axios from 'axios';

async function getRequest(url, headers) {
    try {
        const response = await axios.get(url, { headers: headers});
        return response.data;
    } catch(error) {
        console.log(`${error.response.data.status} — ${error.response.data.detail}`);
    }
}

async function postRequest(url, data, headers) {
    try {
        const response = await axios.post(url, data, { headers: headers });
        return response.data;
    } catch (error) {
        console.log(`${error}`);
    }
}

export default {
    getRequest,
    postRequest
};