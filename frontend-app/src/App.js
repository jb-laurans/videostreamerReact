import styled from 'styled-components';
import Videos from './Components/Videos'
import { useGlobalContext } from './context/global';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import VideoPlayer from './Components/VideoPlayer';
import { useState } from 'react';
import Upload from './Components/Upload';
import Button from './Components/Button';
import Login from './Components/Login';


function App() {
  const [modal, setModal,  isAuthenticated, setIsAuthenticated] = useState(false)
  
  const handleLogin = () => {
    // Ton code d'authentification ici, par exemple avec Firebase
    // Après la connexion réussie, mets à jour l'état isAuthenticated
    
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Ton code de déconnexion ici
    // Après la déconnexion réussie, mets à jour l'état isAuthenticated
    setIsAuthenticated(false);
  };


  return (
    <BrowserRouter>
    <AppStyled className="App">
      <div className="login-button-container">
        <Link to="/login">
          <Button name="Login" bg="#1e90ff" />
        </Link>
        {/* Pour tester on bascule comme ça en attendant d'avoir un système d'auth qui bascule la valeur de isAuthenticated */}
        {!isAuthenticated && (
        
  <div className="upload">
    <Link to="/upload">
      <Button
        name="Upload"
        icon={<i className="fas fa-plus"></i>}
        onClick={() => setModal(true)}
        bg="#1e90ff"
        style={{ border: '1px solid red', backgroundColor: 'yellow' }}
      />
    </Link>
  </div>
)}
      </div>
      {modal && <Upload />}
      <h1>Video Uploader</h1>
      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/videos/:id" element={<VideoPlayer />} />
      </Routes>
      {modal && <div className="overlay" onClick={() => setModal(false)}></div>}
    </AppStyled>
  </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1{
    color: #fff;
    background: linear-gradient(to right, #00b894 40%,#705DF2 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .upload{
    display: flex;
    justify-content: flex-start;
  }
`;

export default App;
