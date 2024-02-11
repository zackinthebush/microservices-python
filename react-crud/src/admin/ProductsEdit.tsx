import React, {useEffect, useState, PropsWithRef} from 'react';
import Wrapper from './wrapper';
import { Navigate, useParams } from 'react-router-dom';

const ProductsEdit = (props: PropsWithRef<any>) => {
  const { id } = useParams();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect, setRedirect] = useState(false);

    

    useEffect (  () => {
      (
      async () => {
      const response = await fetch(`http://localhost:8000/api/products/${id}`);
      const product = await response.json();
      setTitle (product.title);
      setImage (product.image)
      }
      )();
      },[]);



    async function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    await fetch(`http://localhost:8000/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        image
      })
    });
    setRedirect(true);
  }
  
    if (redirect) {
        return <Navigate to={'/admin/products'}/>
    }
    return (


  <Wrapper>
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title"
        defaultValue={title}
        onChange = {e => setTitle(e.target.value)} />
        
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image</label>
        <input type="text" className="form-control" id="image"
        defaultValue={image}
        onChange = {e => setImage(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    </Wrapper>
    );
};
export default ProductsEdit;
