import { useEffect, useState } from 'react'
// const Parser = require('rss-parser');
import Parser from 'rss-parser';

export default function useBooks() {
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    const parser = new Parser({
        customFields: {
          item: ['book_id','book_large_image_url', 'book_description', 'average_rating'],
        }
    })
    useEffect(() => {

        parser.parseURL("https://www.goodreads.com/review/list_rss/167635284?key=IP2ehXEcg6Eshl73KF9FBurZSZDWoaTHFUquZ08qltpt_Bjz&shelf=read") 
        .then(data => data.items.map(
                item => ({
                    id: item.book_id,
                    category: 'books',
                    image: item.book_large_image_url,
                    title: item.title,
                    rating: parseFloat(item.average_rating),
                    ratingOutOf: 5,
                    description: item.book_description.replace( /(<([^>]+)>)/ig, ''),
                    link: 'https://www.goodreads.com/book/show/'+item.book_id
                })
            )
        ).then(res => setBooks(res))
        .catch(err => setError(err))
        
    }, [])
    return {books, error}
}
