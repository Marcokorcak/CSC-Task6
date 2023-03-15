import Container from '../components/Container';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


const Book = () => {

    
        const[bookInfo,setBookInfo] = useState({ id: {} });

        const {id} = useParams();

        const fetchDetails = () => {
            fetch(`https://api.matgargano.com/api/books/${id}`)
            .then(res => res.json())
            .then (data => setBookInfo(data))
        };

        useEffect(() => {
            fetchDetails();
        }, []);


        if(bookInfo !==null) {
            return (<Container>


<div class="center">

            <p class='c'>
                {bookInfo.title}
                </p>
                <p class='b'>
                By {bookInfo.author}
                </p>
            <img class ='a'
                src={bookInfo.imageURL}
                alt="image"
            />
            <div className="p-4">
                <p class='a'>
                The publisher is {bookInfo.publisher}
                </p>
                <p class='a'>
                It was published on {bookInfo.year} 
                </p>
                <p class='a'>
                It is {bookInfo.pages} pages
                </p>
                <p class='a'>
                It was released in {bookInfo.country}
                </p>
               
            </div>
        </div>
            </Container>)
        }
        

    }

export default Book;