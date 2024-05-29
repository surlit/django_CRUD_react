import {useForm} from 'react-hook-form'
import {createTask} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'
export  function TaskFormPage() {
 const {register,handleSubmit,formState:{errors}} = useForm()
 const navigate = useNavigate()
 const params = useParams()
 console.log(params);
 const onSubmit = handleSubmit( async data=> {
    await createTask(data)
    navigate('/tasks')
}) 
  return (
    <div>
      <h1>Crea una Tarea</h1>
      <form onSubmit={onSubmit}>
          <input type="text" placeholder="title" 
            {...register('title',{required:true})}
          />
          {errors.title && <span>Title es required</span>}
          <textarea rows="3" placeholder="Description" 
            {...register('description',{required:true})}
            />
            {errors.description && <span>Description es required</span>}
          <button>Save</button>
          {params.id && <button
            onClick={() => 
            window.confirm('are you sure ')}
          >Delete</button>}
      </form>
    </div>
  )
}
