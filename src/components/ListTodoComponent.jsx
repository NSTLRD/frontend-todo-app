import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos, incompleteTodo } from '../services/TodosService'
import { useNavigate } from 'react-router-dom'

const ListTodoComponent = () => {

   //usamos el hook useState para inicializar el estado de la variable todos
   //capturamos el valor de la variable todos y la función setTodos
   //setTodos es la función que nos permite actualizar el estado de la variable todos
   //utilizamos el hook useEffect para ejecutar la función listTodos cuando se renderice el componente
   const [todos, setTodos] = useState([])

   const navigate = useNavigate();

   useEffect(() => {
    listTodos();
   },[])

   function listTodos() {
    getAllTodos().then((response) => {
        setTodos(response.data);
    }).catch((error) => {
        console.error(error);
    })
   }

   function addNewTodo() {
    navigate('/add-todo');
      
   }

   function updateTodo (id) {
    console.log(id);
    navigate(`/update-todo/${id}`);
   }

    function removeTodo (id) {
        deleteTodo (id).then((response) => {
            console.log(response.data)
            listTodos();
        }).catch((error) => {
                console.error(error)
            }
        )
    }

    function maskCompleteTodo(id){
        completeTodo (id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error)
        })
    }

    function maskInCompleteTodo (id) {
        incompleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error)
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Lista de Tareas</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Agregar Tarea</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción </th>
                        <th>Estado Completado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo =>
                           
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YES': 'NO'}</td>
                                    <td>
                                        <button className='btn btn-info btn-block btn-sm mr-2' onClick={() => updateTodo(todo.id)}>Actualizar</button>
                                        <button className='btn btn-danger btn-block btn-sm' onClick={()=> removeTodo(todo.id)} style={{marginLeft:"10px"}}>Eliminar</button>
                                        <button className='btn btn-success btn-block btn-sm' onClick={()=> maskCompleteTodo(todo.id)} style={{marginLeft:"10px"}}>Completado</button>
                                        <button className='btn btn-warning btn-block btn-sm' onClick={()=> maskInCompleteTodo(todo.id)} style={{marginLeft:"10px"}}>No Completado</button>

                                    </td>
                                </tr>
                            )
                        
                    }
                    
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ListTodoComponent