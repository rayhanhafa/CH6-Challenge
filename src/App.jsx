import './App.css';
import { CarContextProvider } from './server/car';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Cars from './componentss/Cars';
import Dashboard from './componentss/Dashboard';

function App() {
  return (
    <CarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            exact path='/'
            element={
              <Dashboard></Dashboard>
            }
          />
          <Route
            exact path='/cars'
            element={
              <Cars />
            }
          />
        </Routes>
      </BrowserRouter>
    </CarContextProvider>
  );
}

export default App;
