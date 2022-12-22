import Dropreducers from './slice/drop'
import projectReducers from './slice/project'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        drop: Dropreducers,
        project:projectReducers
    }
})

export default store
