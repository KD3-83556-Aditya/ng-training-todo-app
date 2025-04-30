import React from 'react';
const todos = [
    {user: 'User 1', status: 'Completed', due:'13/10/2025', priority:'Low', Comment:'task complete' },
    {user: 'User 2', status: 'Completed', due:'13/10/2025', priority:'Low', Comment:'task complete' },
    {user: 'User 3', status: 'Completed', due:'13/10/2025', priority:'Low', Comment:'task complete' },
    {user: 'User 4', status: 'Completed', due:'13/10/2025', priority:'Low', Comment:'task complete' }
]
const TodoList = () =>{
    return(
        <div className='task-card'>
            <div className='task-header'>
                <div className='task-title'>
                    Tasks
                </div>
                <div className='task-action'>
                    <div>New Task</div>
                    <div>Refresh</div>
                </div>
            </div>
            <table className='todo-table'>
                <thead>
                <tr>
                    <th></th>
                    <th>Assigned To</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Comments</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map((todo, id)=>(
                        <tr key={id}>
                            <td><input type="checkbox" /></td>
                            <td>{todo.user}</td>
                            <td>{todo.status}</td>
                            <td>{todo.due}</td>
                            <td>{todo.priority}</td>
                            <td>{todo.Comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;


