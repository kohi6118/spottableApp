import { createSlice } from '@reduxjs/toolkit'
import {current } from '@reduxjs/toolkit';
import produce from 'immer';
const initialState =[
    {
    id:52,
    name:"Umran Malik",
    designation:"Bolwer",
    email:"UmranMalik720@gmail.com"
    },
    {  
        id:56,
        name:"Kuldeep Yadav",
        designation:"Chainamaan",
        email:"KYadav784@gmail.com"
    },
    {   
        id:60,
        name:"Varun Chakravarthy",
        designation:"spinner",
        email:"VChakravarthy90@gmail.com"
    }, 
    {   
      id:64,
      name:"Yuzvendra Chahal",
      designation:"Spinner",
      email:"YuzvendraChahal906@gmail.com"
  }
];
const ManageSelectedStateSlice = createSlice({
  name: "ManageSelectedState",
  initialState,
  reducers: {
    removeFromSelected:(state,actions)=>{
      const {index}=actions.payload;
      state=current(state);
      return produce(state,(draft)=>{draft.splice(index,1)})
       
    },
    addInSelected:(state,actions)=>{
      state=current(state);
      const {obj}=actions.payload;
      return produce(state,(draft)=>{
         draft.push(obj);
     })
    }
  },
})
export const { removeFromSelected,addInSelected } = ManageSelectedStateSlice.actions
export default ManageSelectedStateSlice.reducer
