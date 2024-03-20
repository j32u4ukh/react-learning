export default function NumberButton(props){
    const {value} = props
    return (
        <button className="button" onClick={() => props.onClick(value)}>
          <p>{value}</p>
        </button>
    )
}