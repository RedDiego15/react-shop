import React from 'react'
import LogoSale from '@logos/logo_yard_sale.svg';
  
function Login() {
  const form = React.useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username:formData.get('email'),
      password:formData.get('password')
    }
    console.log(form.current)
  }
    return (
      <div className="login">
        <div className="form-container">
          <img src={LogoSale} alt="logo" className="logo" />

          <form onSubmit={handleSubmit} action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="platzi@example.cm"
              className="input input-email"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />

            <input
              //onSubmit={handleSubmit}
              type="submit"
              value="Log in"
              className="primary-button login-button"
            />
            <a href="/">Forgot my password</a>
          </form>

          <button
            
            className="secondary-button signup-button"
          >
            Sign up
          </button>
        </div>
      </div>
    );
}

export {Login}