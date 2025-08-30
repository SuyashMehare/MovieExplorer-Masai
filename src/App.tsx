import { useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';

function App() {


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/account/'+import.meta.env.APP_ACCOUNT_ID, {
      headers: {
        'Authorization': "Bearer "+ import.meta.env.APP_BEARER_TOKEN
      }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((res) => console.log(res))
  }, []);

  return (
    <div className='flex flex-col'>
      <Dashboard/>
    </div>
  ) 
}

export default App
