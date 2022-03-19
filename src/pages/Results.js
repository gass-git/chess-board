import React from 'react'
import Moves from '../components/Moves'
import Layout from '../utilities/Layout'
import { Button } from 'react-bootstrap'

export default function Results() {
  return <Layout title={'Thank you! Your steps:'} element={<Moves />} />
}
