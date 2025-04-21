import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import About from '../About/About';

const Home = () => {
    const allBooks = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books allBooks={allBooks}></Books>
        </div>
    );
};

export default Home;