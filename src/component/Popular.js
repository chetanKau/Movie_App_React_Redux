import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import ReactSimplyCarousel from 'react-simply-carousel';
import { fetchApi } from '../utils/api.js'
import { setPopular } from '../slice/movieSlice.js';


function Popular() {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const selector = useSelector((state) => state.movieSlice.popular)
    // console.log("Popular", selector);
    const dispatch=useDispatch()


    async function popularMovies() {
        const result = await fetchApi('https://api.themoviedb.org/3/movie/popular', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            }
        })

        dispatch(setPopular(result.data.results))
    }

    // console.log("Popular Movies result",selector)
    useEffect(() => {
        popularMovies()
    }, [])

    return (
        <div>

            <div className='bg-slate-400  pt-4  ' style={{ height: "110vh", width: "100%" }}>
                <span className='mb-2 p-2 rounded-md text-lg font-bold bg-slate-300'>Popular Movies</span>
                <ReactSimplyCarousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlideIndex}
                    itemsToShow={1}
                    itemsToScroll={1}
                    forwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                            alignSelf: 'center',
                            background: 'black',
                            border: 'none',
                            borderRadius: '50%',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            height: 30,
                            lineHeight: 1,
                            textAlign: 'center',
                            width: 30,
                        },
                        children: <span>{`>`}</span>,
                    }}
                    backwardBtnProps={{
                        //here you can also pass className, or any other button element attributes
                        style: {
                            alignSelf: 'center',
                            background: 'black',
                            border: 'none',
                            borderRadius: '50%',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '20px',
                            height: 30,
                            lineHeight: 1,
                            textAlign: 'center',
                            width: 30,

                        },
                        children: <span>{`<`}</span>,
                    }}
                    responsiveProps={[
                        {
                            itemsToShow: 5,
                            itemsToScroll: 1,
                            minWidth: 768,
                            backwardBtnProps: true,
                            forwardBtnProps: true,
                            swipeable: false

                        },
                    ]}
                    speed={600}
                    easing="linear"
                    autoplay
                    autoplayDelay={2000}

                >
                    {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                    {
                        selector.map((movie) => {
                            

                            return (
                                <div key={movie.id}>
                                    <div className=' grid-rows-* m-3 p-4 rounded bg-slate-600' style={{ height: "28rem", width: "16rem" }}>
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='#' />
                                        <p className=' text-lg font-bold tracking-normal text-center text-white'>{movie.original_title}</p>
                                        <p className='text-lg  tracking-normal text-center text-white'>Release Date : {movie.release_date}</p>
                                        <CircularProgressbar value={movie.vote_average} text={`${movie.vote_average}`} />;
                                    </div>
                                </div>
                            )
                        })

                    }
                </ReactSimplyCarousel>
            </div>
        </div>
    )
}

export default Popular;


