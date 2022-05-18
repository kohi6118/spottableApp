import { configureStore } from '@reduxjs/toolkit'
import PendingStateReducer from "./Redux/PendingStateReducer";
import WaitingStateReducer from './Redux/WaitingStateReducer';
import SelectedStateReducer from './Redux/SelectedStateReducer';
export const store = configureStore({
    reducer:{ 
    PendingStateReducer:PendingStateReducer,
    WaitingStateReducer:WaitingStateReducer,
    SelectedStateReducer:SelectedStateReducer
}});


