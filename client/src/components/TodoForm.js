import './TodoForm.css'


function TodoForm(){
    return(
        <div className="todo-container">
            <div className="new-task-title">New Task</div>
            <form className="new-task-form">
                <div className="form-group">
                    <select>
                        <option>Select User</option>
                        <option>User 1</option>
                        <option>User 2</option>
                        <option>User 3</option>
                        <option>User 4</option>
                    </select>
                </div>
                <div className="form-group">
                    <select>
                        <option>Select Status</option>
                        <option>Completed</option>
                        <option>In Progress</option>
                        <option>Not Started</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Due Date</label>
                    <input type="date" />
                </div>
                <div className="form-group">
                    <select>
                        <option>Select Priority</option>
                        <option>Low</option>
                        <option>High</option>
                        <option>Normal</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea name="description" rows="4"></textarea>
                </div>
                <div class="form-action">
                    <button type="button" className='cancel-btn'>Cancel</button>
                    <button type="submit" className='save-btn'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;