import { createPortal } from 'react-dom';

import type { Movie } from '../../types/movie';

import { useEffect } from 'react';

type Props = {

  movie: Movie;

  onClose: () => void;

};

export const MovieModal = ({ movie, onClose }: Props) => {

  useEffect(() => {

    const handleEsc = (e: KeyboardEvent) => {

      if (e.key === 'Escape') onClose();

    };

    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);

  }, [onClose]);

  return createPortal(

    <div onClick={onClose}>

      <div onClick={e => e.stopPropagation()}>

        <h2>{movie.title}</h2>

        <p>{movie.overview}</p>

        <button onClick={onClose}>Close</button>

      </div>

    </div>,

    document.body

  );
}
