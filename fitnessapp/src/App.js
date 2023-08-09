import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width: {xl: '1488px'}}}  m= 'auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>

    </div>
  );
}

export default App;

START FROM : 3:20:00 TIME ON https://youtu.be/dyFVwXROzZk
