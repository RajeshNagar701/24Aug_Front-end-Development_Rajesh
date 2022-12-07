const studentReducer=(state='',action)=>{
    switch(action.type){
        case "ADD_STUDENT":
        return{
            ...state,
            student:[...state.student,action.payload]
        }

        case "DELETE_STUDENT":
        return{
            ...state,
            student:state.student.filter((student)=>student.studentid != action.payload)
        }


        default:
            return state;
    }

}

export default studentReducer;