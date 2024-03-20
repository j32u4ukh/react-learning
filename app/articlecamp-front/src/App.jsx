import './App.css'

function App() {
  return (
    <div class="container">
      <p class="title">Calcualtor</p>
      
      {/* 顯示輸入的數字及運算結果 */}
      <section class="panel">
        <div class="calculationInput">ggg
        </div>
        <div class="calculationResult">ggggggg
        </div>
      </section>

      {/* 數字鍵盤 */}
      <section class="numberPad">
        <button class="button">
          <p class="number">7</p>
        </button>
        <button class="button">
          <p class="number">8</p>
        </button>
        <button class="button">
          <p class="number">9</p>
        </button>
        <button class="button">
          <p class="operator">/</p>
        </button>
        <button class="button">
          <p class="delete">AC</p>
        </button>
        <button class="button">
          <p class="number">4</p>
        </button>
        <button class="button">
          <p class="number">5</p>
        </button>
        <button class="button">
          <p class="number">6</p>
        </button>
        <button class="button">
          <p class="operator">*</p>
        </button>
        <button class="button">
          <p class="backspace">⬅</p>
        </button>
        <button class="button">
          <p class="number">1</p>
        </button>
        <button class="button">
          <p class="number">2</p>
        </button>
        <button class="button">
          <p class="number">3</p>
        </button>
        <button class="button">
          <p class="operator">-</p>
        </button>
        <button class="button">
          <p class="number"></p>
        </button>
        <button class="button">
          <p class="number"></p>
        </button>
        <button class="button">
          <p class="number">0</p>
        </button>
        <button class="button">
          <p class="number"></p>
        </button>
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
