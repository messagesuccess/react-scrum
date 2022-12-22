import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { Space, Table, Dropdown } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
    getProjectListAsync,
    projectSelector
} from '../../redux/slice/project.js'
//星星点击事件
const changeIconColor = (record) => {
       const list ={
        ...record,
        star:!record.star
       }
   
}
const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          编辑
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          删除
        </a>
      ),
      key: '1',
    }
  ];
const columns = [
    {

        title: '收藏',
        dataIndex: 'star',
        render: (text, record) => (
            <div onClick={() => changeIconColor(record)}>
                <StarOutlined
                    style={{ color: text ? '#dfd50c' : '', fontSize: 20 }}
                />
            </div>
        ),


        width: '8%'
    },
    {
        title: '名称',
        dataIndex: 'name',
        width: '32%',

        render: (text) => <Link to='/project/1/kanban'>{text}</Link>,

        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3
        }
    },
    {
        title: '部门',
        dataIndex: 'branch',
        width: '16%'
    },
    {
        title: '创建人',
        dataIndex: 'person',
        width: '16%'
    },
    {
        title: '创建时间',
        dataIndex: 'time',
        width: '16%'
    },
    {
        title: '',
        render: (text) => (
            <Dropdown
            menu={{
                items
            }}
            >
                <a onClick={(e) => e.preventDefault()} href="javascript">
                    <Space>...</Space>

                </a>
            </Dropdown>
        ),
        dataIndex: 'dot',
        width: '8%'
    }
]


export default function ProjectTable() {
    const data = useSelector(projectSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProjectListAsync())
    }, [])

    return (
        <div className="projectTable">
            <Space
                align="center"
                style={{
                    marginBottom: 16
                }}
            ></Space>
            <Table
                pagination={{ defaultPageSize: 10 }}
                // scroll={{ y: 390 }}

                loading={data.loading}
                columns={columns}
                dataSource={data.data}

               
            />
        </div>
    )
}
