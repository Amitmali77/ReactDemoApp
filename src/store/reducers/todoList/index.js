import { createSlice } from '@reduxjs/toolkit';
const todoListSlice = createSlice({
  name: 'todoList',
  initialState: { todoListData: [], count: 0 },
  reducers: {
    updateCount: (state, action) => {
      console.log(state,action)
      state.count = action.payload;
    },
    getTodoList: () => {
      return state.todoListData;
    },
    addTask: (state,action) => {
      state.todoListData.push(action.payload);
    },
    
  },
});
const {
   reducer,
     actions: {
      getTodoList,
      addTask,
      updateCount
     } = {}
 } = todoListSlice; 

 export { getTodoList, addTask, updateCount }

 export default reducer
