import React, {useState} from 'react';
import Wrapper from './wrapper';
import { Navigate } from 'react-router-dom';

const ProductCreate = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: React.SyntheticEvent) => {
      e.preventDefault();
        await fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            title,
            image
            })
        });
        setRedirect(true);
    };
  
    if (redirect) {
        return <Navigate to={'/admin/products'}/>
    }
    return (


  <Wrapper>
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title"
        onChange = {e => setTitle(e.target.value)} />
        
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image</label>
        <input type="text" className="form-control" id="image" 
        onChange = {e => setImage(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </Wrapper>
    );
};

export default ProductCreate;
