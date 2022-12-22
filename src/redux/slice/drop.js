import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    kanban_data: [
        {
            kanban_key: '需求评审',
            task: [
                {
                    name: '啊实打实',
                    type: 'bug',
                    owner: 'azer',
                    task_id: '7rfjk5je4do'
                },
                {
                    name: '1234',
                    type: 'task',
                    owner: '詹姆斯'
                },
                {
                    name: '9999',
                    type: 'bug',
                    owner: 'azer'
                },
                {
                    name: '45345345',
                    type: 'bug',
                    owner: 'azer'
                }
            ]
        },
        {
            kanban_key: '开发',
            task: [
                {
                    name: 'sdfds',
                    type: 'bug',
                    owner: 'azer',
                    task_id: '8p1h1ku8i5g'
                },
                {
                    name: '123',
                    type: 'task',
                    owner: '詹姆斯',
                    task_id: 'uo7249a5cvg'
                }
            ]
        }
    ]
}
//封装的reorderLice函数是用来让拖拽的索引值的改变
function reorderLice(list, startIndex, endIndex) {
    let result = list
    let [remove] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, remove)
    return result
}
const DropSlice = createSlice({
    name: 'drop',
    initialState,
    reducers: {
        kanban_order: (state, action) => {
            //这里可以不用返回值，因为immer知道修改了原数组，即原数据，不需要返回新的state
            reorderLice(
                state.kanban_data,
                action.payload.source,
                action.payload.destination
            )
        },
        //当相同id的reducer
        task_same_order: (state, action) => {
            let kanban = state.kanban_data.find(
                (item) => action.payload.key === item.kanban_key
            )
            let task_arr = kanban.task

            reorderLice(
                task_arr,
                action.payload.source,
                action.payload.destination
            )
        },
        //当不同id的reducer
        task_diff_order: (state, action) => {
            let kanban_source_task = state.kanban_data.find(
                (item) => action.payload.key_source === item.kanban_key
            )?.task
            let kanban_destination_task = state.kanban_data.find(
                (item) => action.payload.key_destination === item.kanban_key
            )?.task
            const [a] = kanban_source_task.splice(action.payload.source, 1)
            kanban_destination_task.splice(action.payload.destination, 0, a)
        }
    }
})
//导出selector,供useSelector使用
export const kanban_selector = (state) => {
    return state.drop.kanban_data
}
//导出actions
export const {
    kanban_order,
    task_same_order,
    task_diff_order,
    add_kanban,
    add_task
} = DropSlice.actions
export default DropSlice.reducer
