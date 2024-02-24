
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import Explore from './components/Explore/Explore'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';

const App = () => {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path= "/" element={<Sidebar />} errorElement={<ErrorPage />}>
      <Route path='' element={<Dashboard />} />
      <Route path='explore' element={<Explore />} />
      <Route path='setting' element={<Settings />} />
    </Route>
  ))

  return (
    <div className="app-container">
      <main className="main-content">
        <RouterProvider router={router} />
      </main>    
    </div>
  );
}

export default App
