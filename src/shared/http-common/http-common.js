import axios from "axios";

export default axios.create({
    baseURL: 'https://nuevo-credito-web-api.azurewebsites.net/api/v1',
    headers: { 'Content-type': 'application/json' }
});
