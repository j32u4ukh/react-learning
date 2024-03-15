
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectUser } from "../store/slice/user";
import { capitalizeFirstLetter } from '../utils';

export default function LoginRegisterPage(props){
    const type = capitalizeFirstLetter(props.type)
    const states = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isRegister = type === 'Register'
    console.log(`isLogined: ${states.isLogined}, user: ${JSON.stringify(states.user)}`);
    const text = localStorage.getItem('text')
    console.log(`text: ${text}`)

    function loginHandler(){
        console.log('Handle login')
        dispatch(login({ id: new Date().getTime(), name: 'King' }));
        localStorage.setItem('text', 'miko')
        navigate('/register');
    }

    function registerHandler(){
        console.log('Handle register')
        // dispatch(logout());
        navigate('/login');
    }

    return (
        <div>
            <h1>{type} Page</h1>
            {isRegister && 
            (
                <div>
                    <label htmlFor="name">
                        Name: <input type="text" id="name" />
                    </label>
                </div>
            )}
            <div>
                <label htmlFor="email">
                    Email: <input type="text" id="email" />
                </label>  
            </div> 
            <div>
                <label htmlFor="password">
                    Password: <input type="password" id="password" />
                </label>
            </div>
            {isRegister && 
            (
                <div>
                    <label htmlFor="confirm">
                        Confirm password: <input type="password" id="confirm" />
                    </label>
                </div>
            )}
            <button onClick={isRegister ? registerHandler : loginHandler}>
                {isRegister ? "註冊" : "登入"}
            </button>
        </div>
    );
}