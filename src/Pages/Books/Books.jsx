import Book from '../../Components/Book/Book';

const Books = ({ allBooks }) => {

    return (

        <>
            <h1 className='text-4xl text-center font-semibold'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 '>
                {
                    allBooks.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </div>

        </>
    );
};

export default Books;