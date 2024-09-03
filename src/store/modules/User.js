export default {
    state:{
        userInfo:{
            id:'',
        }
    },
    getters:{
        getUserId:state => {
            return state.userInfo.id;
        },
    },
}