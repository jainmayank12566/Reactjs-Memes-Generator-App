import MemeCard from '../components/Card';
import{getAllMemes} from '../api/memes';
import { useEffect,useState } from 'react';
function Homepage(){
    const[data,setdata]=useState(null);
    useEffect(()=>{
        getAllMemes()
        .then((val)=>{
            setdata(val.data.memes);
            console.log(val.data.memes);
        })
    },[]);
    return(
        <div>
            {data && data.map((val)=>{
                return(
                    <div key={val.id}>
                        <MemeCard img={val.url} title={val.name}/>
                    </div>
                )
            })}
        </div>
    )
}
export default Homepage;