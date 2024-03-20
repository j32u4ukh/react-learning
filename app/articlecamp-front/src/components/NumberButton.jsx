export default function NumberButton(props){
    const value = props.value ?? ""
    return (
        <button class="button">
          <p class="number">{value}</p>
        </button>
    )
}