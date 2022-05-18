import React from "react";
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
  
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = 'Field Required';
      if (!values.password) errors.password = 'Field Required';
      return errors;
    }
  });



  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <imput id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
        <div>Password:</div>
        <imput id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
        <button id="submitBtn" type="submit" onClick={() => alert("Login Successful")}>Submit</button>
      </form>
    </div>
  );
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root');
)
