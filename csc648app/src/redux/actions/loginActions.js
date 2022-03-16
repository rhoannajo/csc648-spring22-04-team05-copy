import axios from 'axios'


const validateLogin = (email, password) => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {

        // call backend
        const res = await axios.get(`/api/login?email=${email}&password=${password}`);
        console.log("THIS WORKED")
        
        console.log(res.data)
        if(res.data){
            dispatch({
                type: 'login',
                payload: email
            })
        }
        else{
            dispatch({
                type: "false"
            })
        }

    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

export {validateLogin}