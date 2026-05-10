
import { API_TOKEN, BASE_URL } from '../../api/token';

import  type { Movie } from '../../types/movie.ts';

export const fetchMovies = async (query: string): Promise<Movie[]> => {

  const response = await fetch(

    `${BASE_URL}/search/movie?query=${query}`,

    {
      headers: {

        Authorization: `Bearer ${API_TOKEN}`,
      },

    }

  );

  if (!response.ok) {

    throw new Error('Failed to fetch movies');

  }

  const data = await response.json();

  return data.results;
};