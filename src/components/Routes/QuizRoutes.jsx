import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function QuizRoutes() {
  return (
    <Routes>
      <Route path='/*' element={<h1>Not found Test!</h1>} />
      <Route path='/test' element={<h1>Test!</h1>} />
    </Routes>
  );
}
