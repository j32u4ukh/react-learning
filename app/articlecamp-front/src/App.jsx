import './App.css'
import NumberButton from './components/NumberButton'

function App() {
  return (
    <div class="container">
      <p class="title">Calcualtor</p>
      
      {/* 顯示輸入的數字及運算結果 */}
      <section class="panel">
        <div class="input">0</div>
        <div class="result"></div>
      </section>

      {/* 數字鍵盤 */}
      <section class="numberPad">
        <NumberButton value="7"/>
        <NumberButton value="8"/>
        <NumberButton value="9"/>
        <button class="button">
          <p class="operator">/</p>
        </button>
        <button class="button">
          <p class="delete">AC</p>
        </button>
        <NumberButton value="4"/>
        <NumberButton value="5"/>
        <NumberButton value="6"/>
        <button class="button">
          <p class="operator">*</p>
        </button>
        <button class="button">
          <p class="backspace">⬅</p>
        </button>
        <NumberButton value="1"/>
        <NumberButton value="2"/>
        <NumberButton value="3"/>
        <button class="button">
          <p class="operator">-</p>
        </button>
        <button class="button">
          <p class="number"></p>
        </button>
        <NumberButton />
        <NumberButton value="0"/>
        <NumberButton />
        <button class="button">
          <p class="operator">+</p>
        </button>
        <button class="button">
          <p class="getResult">=</p>
        </button>
      </section>

    </div>
  )
}

export default App
