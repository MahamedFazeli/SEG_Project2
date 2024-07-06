import "./ConfirmationPage.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

const confirmationpage = () => {
    return ( 
        <div className="container">
            <ProgressBar animated now={100}/>
            <h1>Register Complete</h1>
            <h2>You'll receive a confirmation email shortly</h2>
            <div className="button">
        <a href="/Home"><button type="button">Return to Home</button></a>
        </div>
        </div>
     );
        
}
 
export default confirmationpage;