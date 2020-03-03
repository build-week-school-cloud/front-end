import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://'
    })
}

export default axiosWithAuth;