import "./login.css"

function Login() {
  return (
    <div className="login">
<div className="loginWrapper">
    <div className="loginleft">
        <h3 className="loginLogo">KuldeepSocial</h3>
        <div className="loginDesc">
            Connect with friends and the world around you on KuldeepSocial
        </div>
    </div>
    <div className="loginright">
        <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Passward?</span>
            <button className="loginRegisterButton">
                Create a New Account
            </button>

        </div>
    </div>

</div>
    </div>
  )
}

export default Login