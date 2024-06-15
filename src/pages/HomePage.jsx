import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {updateCount} from '../store/reducers/todoList';
import { addTask } from '../store/reducers/todoList';


function HomePage() {
  const[dailyTask,setDailyTask] = useState('')
  const dispatch = useDispatch();
  const count = useSelector((state)=>state?.todoList?.count) 
  const newTask = useSelector((state)=>state?.todoList.todoListData)

  console.log(count)
  const handleCount = () => {
    dispatch(updateCount(5))
  }

  const handleTask = () =>{
    dispatch(addTask(dailyTask))
  }

  return (
    <>
      <div>
        count:{count}
      </div>
      <button onClick={()=> {handleCount()}}>Update Count</button>

      <dl>
        <dt>Enter your Task</dt>
        <dd>
          <input 
             type='text'
             onChange={(e)=>setDailyTask(e.target.value)}
          />   
        </dd>
      </dl>
      <button onClick={handleTask}>Submit Task</button>
      <div>
         Technology : <ul>
            {
              newTask.map((task)=>{
                return <li>{task}</li>
              })
            }
         </ul>
      </div>

    </>
  )
}

export default HomePage
