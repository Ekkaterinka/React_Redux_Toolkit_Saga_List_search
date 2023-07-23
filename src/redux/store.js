import createSagaMiddleware from 'redux-saga';
import saga from "./saga";
import { configureStore} from "@reduxjs/toolkit";
import skillsSlice from './slices'


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    skills: skillsSlice
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga);

export default store;

