export const reducer =(action, state)=>{
    switch(action.type){
        case "Login" : return action.payload;


        default : return state;
    }
}