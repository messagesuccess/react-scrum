import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { projectApi } from '../../util/api'
const initialState = {
    data: [],
    loading: true
}
//异步action  借助thunk中间件
export const getProjectListAsync = createAsyncThunk(
    'getProjectList',
    async () => {
      
        const projectResult = await projectApi('GET', '/project')

        return projectResult.source
    }
)
const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    //两种状态
    extraReducers: {
        [getProjectListAsync.pending]: (state, res) => {
            state.loading = false
        },
        [getProjectListAsync.fulfilled]: (state, res) => {
            state.data = res.payload
        }
    }
})

export const projectSelector = (state) => {
    return state.project
}

export default projectSlice.reducer
