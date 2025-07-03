import "./Form.css";

function Form() {
    return (
        <div className="form-container">
            <form>
                <h1>Login</h1>
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Submit</button>
                <div className="forgot-pass-container">
                    Forgot your password? <a href="#">Reset it here</a>
                </div>
            </form>
        </div>
    );
}

export default Form;
