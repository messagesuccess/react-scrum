import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TaskDrop from './TaskDrop'
import { useSelector, useDispatch } from 'react-redux'
import {
    kanban_selector,
    kanban_order,
    task_same_order,
    task_diff_order
} from '../../../redux/slice/drop.js'
export default function Drop() {
    const drag_data = useSelector(kanban_selector)
    //发生拖拽的回调函数
    const dispatch = useDispatch()
    const onDragEnd = (even) => {
        //if判断过多，继续优化
        if (!even.destination) {
            return
        }
        if (even.type === 'kanban') {
            dispatch(
                kanban_order({
                    source: even.source.index,
                    destination: even.destination.index
                })
            )
        }
        if (even.type === 'task') {
            if (even.destination.droppableId === even.source.droppableId) {
                dispatch(
                    task_same_order({
                        key: even.destination.droppableId,
                        source: even.source.index,
                        destination: even.destination.index
                    })
                )
            } else {
                
                dispatch(
                    task_diff_order({
                        key_source: even.source.droppableId,
                        key_destination: even.destination.droppableId,
                        source: even.source.index,
                        destination: even.destination.index
                    })
                )
            }
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
                direction="horizontal"
                droppableId="droppable-xxxx"
                type="kanban"
            >
                {(provided, snapshot) => {
                    return (
                        <div
                            className="kanban_drop_wrap"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {drag_data.map((item, index) => {
                                return (
                                    <Draggable
                                        key={item.kanban_key}
                                        draggableId={item.kanban_key}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                className="kanban_drag_wrap"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <h1>{item.kanban_key}</h1>
                                                <TaskDrop task={item} />
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )
                }}
            </Droppable>
        </DragDropContext>
    )
}
