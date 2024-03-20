export default function Button(props){
    const value = props.value ?? ""
    return (
        <button className="button">
          <p className="number">{value}</p>
        </button>
    )
}