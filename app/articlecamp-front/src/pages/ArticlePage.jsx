import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArticlePage(){
    const params= useParams();    
    useEffect(()=>{
        console.log(`Article id: ${params.id}`)
    }, []);

    return (
        <>
            <h1>Article Page # {params.id}</h1>
        </>
    );
}