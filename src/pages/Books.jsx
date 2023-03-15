import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Books = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = async () => {
        const url = 'https://api.matgargano.com/api/books';
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBooks(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);


    return <>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!error && loading && <div className="max-w-[230px]"><Skeleton count="10" /></div>}
        {!error && !loading && 
            <>
            <p class = 'p'>Click on any title</p>
            {books.map(book => {
                return <div key={book.id}>
                    <Link id="link_style" className='rounded-2xl w-60 transition duration-500 hover:scale-150 hover:bg-fuchsia-600 flex justify-center text-center' to={`/books/${book.id}`}>{book.title} by {book.author} <img class='s' src={book.imageURL}></img> </Link>
                </div>
            })}
            
            </>
        }

    
    </>
}

export default Books;