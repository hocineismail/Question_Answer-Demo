import axios from 'axios';
const url = process.env.REACT_APP_DOMAIN|| 'http://localhost:4001'


export function signin(body) {
    return function(dispatch) {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const data  = {
            email: body.email,
            password: body.password
        } 
        try { 
            axios.post(`${url}/auth/login`,data, config)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    localStorage.setItem('auth-token', response.data.token);
                    localStorage.setItem('user_id', response.data.id);
                    localStorage.setItem('fullname', response.data.fullname);
                }
                let action = {
                    type: 'LOGINED_IN'
                };
                return dispatch(action);
            })
            .catch((error) => {
                console.log(error)
            })

        } catch (error) {
            
        }
    }
} 