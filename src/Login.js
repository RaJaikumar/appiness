const Login = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    var username = e.target.username.value;
    var password = e.target.password.value;
    if (username === "abc" && password === "123") {
      props.history.push("/welcome");
    } else {
      prompt("INVALID");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        User Name:
        <input type="text" name="username" required />
        <br></br>
        Password:
        <input type="password" name="password" required />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
