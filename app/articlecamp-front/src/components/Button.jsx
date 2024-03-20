export default function Button(props){
    const value = props.value ?? ""
    return (
        <button class="button">
          <p class="number">{value}</p>
        </button>
    )
}