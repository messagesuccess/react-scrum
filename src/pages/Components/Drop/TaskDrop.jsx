import React ,{useState}from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import classnames from 'classnames'
import { Button, Modal } from 'antd';
export default function TaskDrop(props) {
    //props 执行了两次 父组件遍历
    const task = props.task
    const list = task.task
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <Droppable droppableId={task.kanban_key} type="task">
            {(provided, snapshot) => (
                <div
                    className="task_drop_wrap"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {list.map((item, index) => (
                        <Draggable
                            key={`${task.kanban_key}_${item.name}`}
                            draggableId={`${task.kanban_key}_${item.name}`}
                            index={index}
                        >
                            {(provided, snapshot) => (
                                <div
                                    className="task_drag_wrap"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <div className="task_card">
                                        <div style={{ fontSize: 20 }}>
                                            {item.name}
                                        </div>
                                        <div
                                            className={classnames({
                                                new_task_type: true,
                                                red: item.type === 'bug',
                                                blue: item.type === 'task'
                                            })}
                                        >
                                            {item.type}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    <Button type="primary" onClick={showModal} className='new_task_btn'   ghost>
                       新建task
                    </Button>
                    <Modal
                        title="Basic Modal"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
