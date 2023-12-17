
import React, { useState } from 'react';
import axios from 'axios';


const CreateProduct = (props) => {

    const[title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

  const submitHandler=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5000/api/products",{
      title,
      price,
      description
      
    })
  .then((res)=> {
    console.log(res);
    console.log(res.data);
    setTitle("");
    setPrice("");
    setDescription("");
  })
  .catch((err)=> console.log(err));
};

  return (
    <div><header>CreateProduct</header>
    
      <form onSubmit={submitHandler}>
    <div className="form-feilds">
      <label>Title</label>
      <input onChange={(e)=> setTitle(e.target.value)}
      value = {title}
      name="title"
      type="text"
      />
    </div>
    <div className="form-feilds">
      <label>Price</label>
      <input onChange={(e)=> setPrice(e.target.value)}
      value = {price}
      name="price"
      type="number"
      />
    </div>

    <div className="form-feilds">
      <label>Description</label>
      <input onChange={(e)=> setDescription(e.target.value)}
      value = {description}
      name="description"
      type="text"
      />
    </div>

      <input type="submit"  className='submit-input' value="create"/>


    
      </form>
    
    
    
    </div>
  )
}

export default CreateProduct