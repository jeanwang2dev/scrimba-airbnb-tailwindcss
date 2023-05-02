import logo from '../img/logo.svg';
import headshot from '../img/avatar-ali.png';

function Hello() {
    return (
        <>
            <div className="container py-5 mx-auto">
                <img src={logo} alt="text logo" />
                <h1 className="container bg-yellow-300 mx-auto">Hello from React!</h1>
                <img src={headshot} alt="headshot of Ali" />
            </div>
            
        </>
    );
} 

export default Hello;