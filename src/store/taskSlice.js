const { createSlice } = require('@reduxjs/toolkit');


//status 0 = pending
//status 1 = active
//status 2 = done


const taskSlice = createSlice({
    name: 'task',
    initialState: [{
        id: 1,
        title: 'Do coding',
        task: 'make a todo app using react and redux',
        status: 0,

    }],
    reducers: {
        //add task
        add(state, action) {
            state.push(action.payload);
        },

        //remove task
        // removefromTask(state, action) {
        //     return state.filter((item) => item.id !== action.payload);
        // },

        //change the task status 0 to 1
        changeTaskStatusPendingtoActive(state, action) {
            const index = state.findIndex((item) => item.id === action.payload);
            state[index].status = 1;
        },
        //change the task status 1 to 2
        changeTaskStatusActivetoDone(state, action) {
            const index = state.findIndex((item) => item.id === action.payload);
            state[index].status = 2;
        }
    },

});

export const { add, changeTaskStatusPendingtoActive, changeTaskStatusActivetoDone } = taskSlice.actions;
export default taskSlice.reducer;