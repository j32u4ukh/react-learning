function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function loginHandler(){
    console.log('Handle login')
}

function registerHandler(){
    console.log('Handle register')
}

export default function LoginRegisterPage(props){
    const type = capitalizeFirstLetter(props.type)
    const isRegisterPage = type === 'Register'

    return (
        <div>
            <h1>{type} Page</h1>
            {isRegisterPage && 
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
            {isRegisterPage && 
            (
                <div>
                    <label htmlFor="confirm">
                        Confirm password: <input type="password" id="confirm" />
                    </label>
                </div>
            )}
            <button onClick={isRegisterPage ? registerHandler : loginHandler}>
                {isRegisterPage ? "註冊" : "登入"}
            </button>
        </div>
    );
}