import { useState } from 'react';
import { capitalizeFirstLetter } from '../utils';


export default function CreateEditPage(props){
    const type = capitalizeFirstLetter(props.type)
    const isEdit = type === 'Edit'
    const [content, setContent] = useState(isEdit ? 'Hello world' : '');

    function onChangeHandler(e){
        setContent(e.target.value)
    }
    
    return (
        <div>
            <h1>{type} Page</h1>
            <div>
                <label htmlFor="content">
                    Content: <input type="text" id="content" value={content}
                    onChange={onChangeHandler}/>
                </label>  
            </div> 
        </div>
    );
}