import React, { useEffect, useState } from 'react';
import { Product } from '../admin/interfaces/Product';

const Main: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:8000/api/products');
            const data = await response.json();
            setProducts(data);
        })();
    }, []);
    
    const like = async (id: number) => {   
        const response = await fetch(`http://localhost:8000/api/products/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        const updatedProduct = await response.json();
        const updatedProducts = products.map((p: Product) => {
            if (p.id === id) {
                return updatedProduct;
            }
            return p;
        });
        setProducts(updatedProducts);
    };
    
    return (
        <main role="main">
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {products.map((p: Product) => (
                            <div className="col-md-4" key={p.id}>
                                <div className="card mh-4 shadow-sm">
                                    <img src={p.image} height="180" alt="Product" />
                                    <div className="card-body">
                                        <p className="card-text">{p.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary"
                                                onClick={() => like(p.id)}
                                                >
                                                    likes
                                                </button>
                                            </div>
                                            <small className="text-muted">{p.likes} likes</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;