import React, { useEffect } from 'react'
import { useState } from 'react'
import { getTodo, saveTodo, updateTodo } from '../services/TodosService'
import { useNavigate, useParams } from 'react-router-dom'

const TodoComponent = () => {

   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [completed, setCompleted] = useState(false)
   const navigate = useNavigate();
   const { id } = useParams();

 function saveOrUpdateTodo(e) {
  e.preventDefault()
  const todo = {title, description, completed}
  console.log(todo);

  if (id) {
    updateTodo (id, todo).then((response) => {
        console.log(response.data)
        navigate('/todos')
    }).catch((error) => {
        console.error(error)
    })
  }else{
    saveTodo(todo).then((response) => {
        console.log(response.data)
        navigate('/todos')
    }).catch((error) => {
        console.error(error)
    })
  }


 
}

useEffect(() => {
if(id){
    getTodo(id).then((response) => {
        console.log(response.data)
        setTitle(response.data.title)
        setDescription(response.data.description)
        setCompleted(response.data.completed)
    }).catch((error) => {
        console.error(error)
    })
}
},[id])	

function pageTitle() {
    if (id) {
        return <h2 className='text-center'>Actualizar Tarea</h2>
    }else{
        return <h2 className='text-center'>Agregar Tarea</h2>
    }
}

  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
               { pageTitle() }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Título</label>
                            <input type='text'
                                   name='title' 
                                   className='form-control'
                                   placeholder='Ingrese el título de la tarea'
                                   value={title} 
                                   onChange={(e) => setTitle(e.target.value)}>
                            </input>   
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Descripción</label>
                            <input type='text'
                                   className='form-control'
                                   name='description' 
                                   placeholder='Ingrese la descripción de la tarea'
                                   value={description} 
                                   onChange={(e) => setDescription(e.target.value)}>
                            </input>   
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Estado Completado</label>
                            <select
                                className='form-control'
                                value={completed}
                                onChange={(e) => setCompleted(e.target.value)}
                            >
                            <option value='false'>NO</option>
                            <option value='true'>YES</option>    
                                </select> 
                        </div>
                        <button className='btn btn-success' onClick={ (e) => saveOrUpdateTodo(e)}>Guardar</button>
                    </form>
                </div>
            </div>
        </div>



    </div>
  )
}


export default TodoComponent