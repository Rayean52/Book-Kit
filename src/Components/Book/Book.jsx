import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
    const { image, bookName, bookId, rating, yearOfPublishing, category, tags, publisher } = singleBook;
    return (
        <Link to={`/booksDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-5">
                <figure className="bg-base-200 p-3">
                    <img
                        className=" w-4/12 "
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="flex justify-around gap-x-5 items-center my-3">
                    {
                        tags.map((tag, index) => <p key={index} >{tag}</p>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p className="font-semibold">Book by : {publisher}</p>
                    <div className="border-t-1 border-dashed"></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<IoStarHalf /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;