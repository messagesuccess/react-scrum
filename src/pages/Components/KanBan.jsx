import React from 'react'
import SearchForm from './SearchForm'
import Drop from './Drop'
export default function KanBan() {
  return (
    <div className="kanban_body">
      <SearchForm />
      <div className="drop_wrap">
        <Drop />
      </div>
    </div>
  )


}
