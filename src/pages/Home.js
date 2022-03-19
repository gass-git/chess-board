import React from 'react'
import Form from '../components/form/main'
import Layout from '../reusables/Layout'

export default function Home() {
  return <Layout title={'Welcome! Setup your game!'} element={<Form />} />
}
