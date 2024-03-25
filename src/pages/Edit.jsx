import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from '../components/Text';
import {Button} from 'react-bootstrap';
import{exportComponentAsJPEG} from 'react-component-export-image';
function EditPage(){
    const[params]=useSearchParams();
    const[count,setCount]=useState(0);
    const memeRef=useRef();
    function addText(){
        setCount(count+1);
    }
    return(
        <div>
            <div style={{width:"500px", border:"2px solid yellow"}} ref={memeRef} className="mt-5 mb-5">
                <img src={params.get("url")} alt="" width="250px" />
                {Array(count).fill(0).map((e,index)=><div key={index}><Text /></div>)}
            </div>
            <button onClick={addText}>Add Text</button>
            <button variant="success" onClick={()=>exportComponentAsJPEG(memeRef)}>Save</button>
        </div>
    )
}
export default EditPage;