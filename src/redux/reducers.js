const formList = [];

export default function rootReducer(state = {formList},action){
   switch(action.type){
       case "ADD_CARD":
           return {
            //    ...state.formList,
               formList:state.formList.concat(action.content)
           }
    default:
        return state;
   }
}