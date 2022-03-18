import React from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Game from './pages/Game'
import Results from './pages/Results'

export default function Layout() {
  return (
    <Container className='mt-5'>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </Container>
  )
}
