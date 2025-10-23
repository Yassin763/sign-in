import { Link } from "react-router-dom"

function App() {
  return (
    <>
     <div className="sign_in">
      <div className="container">
        <div className="section">
          <div className="right">
            <h1>sign in</h1>
            <form action="" className="form">
              <input type="text" id="first" placeholder="First Name" name="first name" required  />
              <input type="text" id="last" placeholder="Last Name" name="last name"  required />
              <input type="email" name="email" id="email" placeholder="Email ID" required />
              <input type="tel" name="phonenumber" id="phonenumber" placeholder="Mobile No." required />
              <input type="password"  id="password" placeholder="Create Password" required />
              <Link to='/'>i have an account / Log in</Link>
              <button type="submit">sign in</button>
            </form>
          </div>
          <div className="left">
            <h2>welcome !</h2>
            <p>Register with your personal details to use all site features</p>
            <button>sign up</button>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
