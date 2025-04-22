import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    let { id } = useParams();
    const apiId = parseInt(id);

    const bookData = useLoaderData();
    const eachBook = bookData.find((book) => book.bookId === apiId);

    const { bookName, image, review, author } = eachBook;

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='px-4'>
                        <h1 className="text-4xl font-semibold mb-3">{bookName}</h1>
                        <p className='text-xl ml-2'>By : {author}</p>
                        <div className="divider"></div>
                        <p className="py-6">
                           <span className='text-xl font-bold'>Review : </span> {review}
                        </p>
                        <button className="btn btn-primary mr-3">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;