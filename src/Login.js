const Login = () => {
  return (
    <>
      <div className="frame">
        <div className="header">
          <h1>Welcome to CADS</h1>
          <p>
            To have access to the best loan in the whole state, we first need to
            get some information from you
          </p>
        </div>
        <div className="loginDetails">
          <form action="">
            <label htmlFor="name">Email address</label>
            <input
              type="text"
              placeholder="Username or Email Address"
              name="email"
              required
            />
            <label htmlFor="password">Enter your login password</label>
            <input
              type="text"
              placeholder="Enter your password"
              name="password"
              required
            />
            <div className="myButton">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
