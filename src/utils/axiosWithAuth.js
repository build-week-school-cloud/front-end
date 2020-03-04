import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log("Token:", token)
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://cloudschoolbw.herokuapp.com/api/'
    })
}

export default axiosWithAuth;