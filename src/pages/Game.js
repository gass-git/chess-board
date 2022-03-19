import React from 'react'
import ChessBoard from '../components/chessBoard/main'
import StepsLeft from '../components/StepsLeft'
import Layout from '../utilities/Layout'

export default function Game() {
  return <Layout title={<StepsLeft />} element={<ChessBoard />} />
}
