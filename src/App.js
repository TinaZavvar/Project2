import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
// import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// import SinglePost from './pages/SinglePost';

function App() {
  return (
    <AuthProvider>
        <Container>
            <Router >
            <MenuBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/posts/:postId" element={<SinglePost />} /> */}
              </Routes>
            </Router>
        </Container>
    </AuthProvider>
  );
}

export default App;



