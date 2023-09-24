import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './components/Templates/Template';
import NotFound from './components/NotFound/NotFound';
import QuizRoutes from './components/Routes/QuizRoutes';
import HtmlQuizzes from './components/quizzes/HtmlQuizzes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>Welcome!</h1>} />
      <Route path='/*' element={<NotFound />} />
      <Route element={<Template />}>
        <Route path='/quizzes' element={<QuizRoutes />} />
        <Route path='/html' element={<HtmlQuizzes />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
