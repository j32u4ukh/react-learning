import './App.css'
import NumberPad from './components/NumberPad'

function App() {
  return (
    <div className="container">
      <p className="title">Calcualtor</p>
      
      {/* 顯示輸入的數字及運算結果 */}
      <section className="panel">
        <div className="input">0</div>
        <div className="result"></div>
      </section>

      {/* 數字鍵盤 */}
      <NumberPad />
    </div>
  )
}

export default App
