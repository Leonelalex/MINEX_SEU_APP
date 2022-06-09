
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
