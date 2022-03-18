import React from 'react'
import Form from '../components/form/main'
import Layout from '../utilities/Layout'

export default function Home() {
  return <Layout title={'Welcome! Setup your game!'} content={<Form />} />
}
