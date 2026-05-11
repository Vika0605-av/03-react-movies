
import { useEffect } from 'react';

import type { MouseEvent } from 'react';

import type { Movie } from '../../types/movie';

import css from './MovieModal.module.css';

interface MovieModalProps {

    movie: Movie;

    onClose: () => void;

}

export const MovieModal = ({

    movie,

    onClose,

}: MovieModalProps) => {

    useEffect(() => {

        document.body.style.overflow = 'hidden';

        return () => {

            document.body.style.overflow = 'auto';

        };

    }, []);

    const handleBackdropClick = (

        event: MouseEvent<HTMLDivElement>

    ) => {

        if (event.target === event.currentTarget) {

            onClose();

        }

    };

    return (

        <div

            className={css.backdrop}

            onClick={handleBackdropClick}

        >

            <div className={css.modal}>

                <img

                    className={css.image}

                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}

                    alt={movie.title}

                />

                <h2 className={css.title}>

                    {movie.title}

                </h2>

                <p>

                    Release date: {movie.release_date}

                </p>

                <p>

                    Rating: {movie.vote_average}

                </p>

                <p className={css.overview}>

                    {movie.overview}

                </p>

            </div>

        </div>

    );

};