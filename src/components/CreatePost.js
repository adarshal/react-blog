import { useState } from "react";
import {firestore} from '../firebase'
import {useFormInput} from '../hooks'
function CreatePost() {
    const title =useFormInput("");
    const content =useFormInput("");
    const subtitle =useFormInput("");

    function handleSubmit(e){
        e.preventDefault();
        console.log('title',title);
        console.log('subtitle',subtitle);
        console.log('conr',content);
        firestore.collection('posts').add({ //create coll if not exist
            title:title.value,
            subtitle:subtitle.value,
            content:content.value,
            createdAt:new Date()

    })
    }
    




        return (
            <div className="">
                 <h1> CreatePost</h1>
                 <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Title</label>
                        {/* <input value={title} onChange={ (e)=> setTitle(e.target.value)}   /> */}
                        <input {...title}   />
                    </div>
                    <div className="form-field">
                        <label>sub Title</label>
                        <input {...subtitle} />
                    </div>
                    <div className="form-field">
                        <label>content</label>
                        <textarea {...content}></textarea> 
                    </div>
                    <button className="create-post-btn">CReate Post</button>
                 </form>
                 </div>
        )
      }
      
export default CreatePost;
  