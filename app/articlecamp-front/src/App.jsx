import { useRef, useState } from 'react';
import './App.css';
import NumberPad from './components/NumberPad';
import { STATUS } from './constant';
import { Provider } from "./context";

function App() {
  const [input, setInput] = useState('0')
  const [result, setResult] = useState('')
  const status = useRef(STATUS.NUMBER);

  const contextValue = {
    input,
    setInput,
    result,
    setResult,
    status
  };

  return (
    <div className="container">
      <p className="title">Calcualtor</p>
      
      {/* 顯示輸入的數字及運算結果 */}
      <section className="panel">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </section>

      {/* 數字鍵盤: 共用 contextValue 當中的變數 */}
      <Provider value={contextValue}>
        <NumberPad />
      </Provider>
    </div>
  )
}

export default App
