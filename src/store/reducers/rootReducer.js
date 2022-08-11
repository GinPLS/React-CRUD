import React from "react"
import { Switch } from "react-router"

const initState ={
    users:[
        {id: '1', name:'son'},
        {id:'2' ,name: 'nam'}
    ],
    post:[]
}

const rootReducer = (state = initState,action) => {

    switch(action.type) {
        case 'DELETE_USER':
            // console.log(action)
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state,users
            };

        case 'ADD_USER':
            let id = Math.floor(Math.random() * 1000)
            let user = {id: id,name: `ramdom- ${id}`}
            // console.log(user)
            return{
                ...state,users:[...state.users,user]
            }
        default:
            return state
    }
    
} 

export default rootReducer