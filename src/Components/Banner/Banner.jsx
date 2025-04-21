import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen my-15">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={'https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png'}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-primary mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;