import "./Form.css";

function Form() {
    return (
        <div className="form-container">
            <form>
                <h1>Login</h1>
                <div className="email-container">
                    <input type="email" placeholder="E-mail" required />
                </div>
                <div className="password-container">
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">Submit</button>
                <div className="forgot-pass-container">
                    Forgot your password? <a href="#">Reset it here</a>
                </div>
            </form>
        </div>
    );
}

export default Form;
