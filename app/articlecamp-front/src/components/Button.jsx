import axios from 'axios';
import { useContext, useEffect } from 'react';
import { OPERATOR, STATUS } from '../constant';
import context from '../context';


export default function Button(props){
    const { input, setInput, result, setResult, status } = useContext(context);
    const value = props.value ?? ""

    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log('Send request')
          const response = await axios.get('gin-learning-net:8080/formula?value=3%20*%20(2%2B5)%20%2F%206--4');
          
          console.log(`response: ${JSON.stringify(response.data)}`)
          // setResult(response.data.answer);
        } catch (error) {
          console.error(`error: ${error}`)
        }
      };
  
      fetchData();
    }, []);

    function getType(input){
      switch(input){
        // Operator
        case "+":
        case "-":
        case "*":
        case "/":
          return 1
        // Number
        default:
          return 0
      }
    }

    function updateResult(formula){
      const value = encodeURIComponent(formula)
      const url = `0.0.0.0:8080/formula?value=${value}`
      console.log(`value: ${value}`)
      axios.get(url)
      .then((res)=>{
        // console.log(`res: ${JSON.stringify(res)}`)
        return res.data
      }).then((data)=>{
        console.log(`data: ${JSON.stringify(data)}`)
        setResult(data.answer)
        console.log(`answer: ${data.answer}`)
      }).catch((error)=>{
        console.error(`Request failed, error: ${error}`)
      })
    }

    const onClick = () => {
      switch(value){
        case "":
          return
        case OPERATOR.CLEAR:
          setInput('0')
          setResult('')
          status.current = STATUS.NUMBER
          return;
        case OPERATOR.RESULT:
          setInput(result)
          setResult('')
          status.current = STATUS.ANSWER
          return
      }

      const type = getType(value)
      const crossType = 10 * status.current + type
      switch(crossType){
        case 0:
          if(input === "0"){
            setInput(value)
          }else{
            setInput(input + value)
            updateResult(input + value)
          }
          break;
        case 1:
          if(input !== "0"){
            setInput(input + value)
          }
          break;
        case 10:
          setInput(input + value)
          updateResult(input + value)
          break;
        case 11:
          setInput(input.slice(0, -1) + value)
          break;
        case 20:
          setInput(value)
          setResult(value)
          break;
        case 21:
          setInput(input + value)
          break;
      }
      status.current = type
    }

    return (
        <button className="button" onClick={onClick}>
          <p>{value}</p>
        </button>
    )
}