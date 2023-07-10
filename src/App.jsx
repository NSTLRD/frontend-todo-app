
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponent from './components/ListTodoComponent'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import TodoComponent from './components/TodoComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'

function App() {


  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/**http://localhost:8008 */}
      <Route path='/' element={<LoginComponent />} />
      {/**http://localhost:8008/todos */}
      <Route path='/todos' element={<ListTodoComponent />} />
      {/**http://localhost:8008/add-todo */}
      <Route path='/add-todo' element={<TodoComponent />} />
      {/**http://localhost:8008/update-todo/1 */}
      <Route path='/update-todo/:id' element={<TodoComponent />} />
      {/**http://localhost:8008/register */}
      <Route path='/register' element={<RegisterComponent />} />
      {/**http://localhost:8008/login */}
      <Route path='/login' element={<LoginComponent />} />
    </Routes>
     <FooterComponent />
     </BrowserRouter>
    </>
  )
}

export default App
