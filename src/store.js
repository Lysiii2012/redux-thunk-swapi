import { configureStore} from '@reduxjs/toolkit';
import swapiSlice from './features/swapiSlice/swapiSlice';

export const store = configureStore({
    reducer:{
        todos: swapiSlice,
    }
})

export default store;