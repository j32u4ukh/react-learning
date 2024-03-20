import './App.css'
import Button from './components/Button'

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
        <Button value="7"/>
        <Button value="8"/>
        <Button value="9"/>
        <Button value="/"/>
        <Button value="AC"/>
        <Button value="4"/>
        <Button value="5"/>
        <Button value="6"/>
        <Button value="*"/>
        <Button value="⬅"/>
        <Button value="1"/>
        <Button value="2"/>
        <Button value="3"/>
        <Button value="-"/>
        <Button />
        <Button />
        <Button value="0"/>
        <Button />
        <Button value="+"/>
        <Button value="="/>
      </section>

    </div>
  )
}

export default App
