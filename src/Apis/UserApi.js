import axios from 'axios';
const api = "https://localhost:7046/api/";

export const UserApi = class {

    static Login({ username, password }) {
        return axios.post(`${api}Accounts/login`, {
            Parameters: `${username};${password}`
        })
    }

    static SignUp({username, password, confirmPassword}) {
        return axios.post(`${api}Accounts`, {
            Parameters: `${username};${password};${confirmPassword}`
        })
    }
};
