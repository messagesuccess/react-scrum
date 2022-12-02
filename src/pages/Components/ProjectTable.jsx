import React from 'react'
import { Space, Table, Dropdown } from 'antd'
const items = [
    {
        key: '1',
        label: '编辑'
    },
    {
        key: '2',
        label: '删除'
    }
]
const columns = [
    {
        title: '',
        dataIndex: 'star',

        width: '8%'
    },
    {
        title: '名称',
        dataIndex: 'name',
        width: '32%',
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
                <a onClick={(e) => e.preventDefault()} href={true}>
                    <Space>
                        ...
                        {/* <DownOutlined /> */}
                    </Space>
                </a>
            </Dropdown>
        ),
        dataIndex: 'dot',
        width: '8%'
    }
]

const data = [
    {
        key: '1',
        name: '胡彦斌',
        branch: 32,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '2',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '3',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '4',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '5',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '6',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '7',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '8',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '9',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '10',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '11',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '12',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '13',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    },
    {
        key: '14',
        name: '胡彦祖',
        branch: 42,
        person: '西湖区湖底公园1号',
        time: '2022-12-01',
        dot: '...'
    }
]

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
        )
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows)
    }
}
export default function ProjectTable() {
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
                columns={columns}
                rowSelection={{
                    ...rowSelection
                }}
                dataSource={data}
            />
        </div>
    )
}
