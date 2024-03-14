import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditPage(){
    const params= useParams();
    useEffect(()=>{
        console.log(`Article id: ${params.id}`)
    }, []);

    return (
        <>
            <h1>Edit Page # {params.id}</h1>
        </>
    );
}