import "./register.css"

function Register() {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />

            <button className="loginButton">Sign Up</button>
            
            <button className="loginRegisterButton">
                Log into Account
            </button>

        </div>
    </div>

</div>
    </div>
  )
}

export default Register