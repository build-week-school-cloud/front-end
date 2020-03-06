import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    // console.log(token);
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://cloudschoolbw.herokuapp.com/api'
    })
}

export default axiosWithAuth;