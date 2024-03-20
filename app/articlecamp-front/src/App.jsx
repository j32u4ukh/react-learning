import { useState } from 'react'
import './App.css'
import NumberPad from './components/NumberPad'

function App() {
  const [input, setInput] = useState('0')
  const [result, setResult] = useState('')

  return (
    <div className="container">
      <p className="title">Calcualtor</p>
      
      {/* 顯示輸入的數字及運算結果 */}
      <section className="panel">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </section>

      {/* 數字鍵盤 */}
      <NumberPad />
    </div>
  )
}

export default App
