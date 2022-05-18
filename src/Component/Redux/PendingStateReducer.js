import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import produce from 'immer';
const initialState =[];
const ManagePendingStateSlice = createSlice({
  name: 'ManagependingState',
  initialState,
  reducers: {
    removeFromPending:(state,actions)=>{
      const {index}=actions.payload;
      console.log(index);
      state=current(state);
      return produce(state,(draft)=>{draft.splice(index,1)})       
    },
    addInPending:(state,actions)=>{
      state=current(state);
      const {obj}=actions.payload;
      return produce(state,(draft)=>{
         draft.push(obj);
     })
    }
  },
})
export const { removeFromPending,addInPending} = ManagePendingStateSlice.actions
export default ManagePendingStateSlice.reducer
