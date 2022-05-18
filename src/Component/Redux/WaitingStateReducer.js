import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer';
const initialState =[
    {
    id:16,
    name:"MS Dhoni",
    designation:"Captain",
    email:"Dhoni777@gmail.com"
    },
    {  id:20,
        name:"KL rahul",
        designation:"Batsman",
        email:"klrahul760@gmail.com"
    },
    {   id:24,
        name:"Rohit Sharma",
        designation:"Batsman",
        email:"RohitSh722@gmail.com"
    },
    {
      id:28,
      name:"Mohammad Shami",
      designation:"Bolwer",
      email:"Shami222@gmail.com"
      },
      {  id:32,
          name:"Virat Kohli",
          designation:"BatsMan",
          email:"Virat222@gmail.com"
      },
      {   id:36,
          name:"Sikhar dhawan",
          designation:"Batsman",
          email:"sikharDhawan22@gmail.com"
      },  
      {
        id:40,
        name:"Jaspreet Bumrah",
        designation:"Bolwer",
        email:"JasBumrah222@gmail.com"
        },
        {  id:44,
            name:"Rishabh Pant",
            designation:"Wicket Keeper",
            email:"Rpan718@gmail.com"
        },
        {   id:48,
            name:"Shreyas Iyer",
            designation:"Batsman",
            email:"SIyer22@gmail.com"
        } 
      ];
const ManageWaitingStateSlice = createSlice({
  name: 'ManageWaitingState',
  initialState,
  reducers: {
    removeFromWaiting:(state,actions)=>{
    const {index}=actions.payload;
    return produce(state,(draft)=>{
       draft.splice(index,1);
   })
      
    },
    addInWaiting:(state,actions)=>{
      const {obj}=actions.payload;
      return produce(state,(draft)=>{
         draft.push(obj);
     })
    }
  },
})
export const { removeFromWaiting,addInWaiting} = ManageWaitingStateSlice.actions
export default ManageWaitingStateSlice.reducer
