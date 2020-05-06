import {createStore} from 'redux';

let initialState = [];

const todoReducer = (state,action ) => {
    switch(action.type){
        case 'Add':
            state.push(action.payload);
            break;
        case 'Delete':{

            let newState= state.filter((item,index) => {
                if(index === action.payload){
                    return false;
                }
                return true;
            });
            return newState;
        }
        case 'Mark':{

            let newState= state.map((item,index) => {
                if(index === action.payload){
                   item.status = !item.status;
                }
                return item;
            });
            return newState;
        }
    }
    return state;
};
export const store= createStore(todoReducer,initialState);

store.subscribe(() => {
    console.log('change in store', store.getState());
});
console.log('initial state', store.getState());