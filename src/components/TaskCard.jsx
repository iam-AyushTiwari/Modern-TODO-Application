import React from 'react'
import "./TaskCard.css"
import Tag from "./Tag"

const TaskCard = () => {
  return (
    <article className="task_card">
        <p className="task_text">
            This is sample text.
        </p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
                <Tag tagName="HTML" />
                <Tag tagName="CSS" />
            </div>
            <div className="task_delete">
            🗑️
            </div>
        </div>
    </article>
  )
}

export default TaskCard