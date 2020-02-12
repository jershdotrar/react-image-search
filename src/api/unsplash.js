import axios from 'axios';

export default axios.create({
    baseURL: 'https:/api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2e61aefa69d4254b5f282d2ab73526484468e8a3335e97ccf665ea82f135a4de'
    }
})