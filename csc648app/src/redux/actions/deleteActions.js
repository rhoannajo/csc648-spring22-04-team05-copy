import axios from 'axios'


const deleteTask = () => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {

        // call backend
        const res = await axios.get(`/api/getTask/delete/:_id`)
        console.log("THIS WORKED")
        console.log(res.data)

        // call the reducer
        dispatch({
            type: "DELETE_TASK",
            payload: res.data
        })
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

export {deleteTask}