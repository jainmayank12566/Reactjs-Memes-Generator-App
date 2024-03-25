import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
function MemeCard(props){
    const nagivate=useNavigate();
    return(
    <Card style={{ width: '18rem',margin:"25px" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            {/* <Button onClick={()=>nagivate(`/edit/${props.img}`)} variant="primary">Edit</Button> */}
            <Button onClick={()=>nagivate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
        </Card.Body>
    </Card>
    );
}
export default MemeCard;