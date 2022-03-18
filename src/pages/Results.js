import React from 'react'
import Moves from '../components/Moves'
import Layout from '../utilities/Layout'

export default function Results() {
  return <Layout title={'Thank you! Your steps:'} content={<Moves />} />
}
