# REST APIs
<!-- https://www.section.io/engineering-education/how-to-consume-data-from-an-api-in-react/ -->
<!-- <img src="/src/assets/image-1.png" width="40%" alt="logo"/> -->
<span className="flex gap-12">
<img src="/src/assets/image.png" width="40%" alt="logo"/>
<img src="/src/assets/imdb.png" width="40%" alt="imdblogo"/>
</span>
<!-- <img src="/src/assets/imdb01.png" width="40%" alt="imdblogo"/> -->

Here's a break down of the code in a clear and understandable way.

### Home.jsx

This component represents the main search page of your React application.

1. **State Initialization**: In this part, you initialize various states using the `useState` hook. These states include:
   - `movies`: An array to store movie search results.
   - `search`: A string to store the search query.
   - `yearFilter`: A string to store the year filter (recent or oldest).
   - `imdbIdFilter`: A string to store IMDb ID filter.
   - `selectedMovie`: A variable to track the selected movie for detailed view.
   - `API_KEY`: Your API key for the OMDB API.
   - `searchUrl`: A URL constructed to fetch movie search results based on search query, year, and IMDb ID.
   - `popularMoviesUrl`: A URL to fetch popular movies.

2. **getMovies Function**: This is an asynchronous function that fetches movie data from the OMDB API based on the search criteria (search query, year filter, and IMDb ID filter). It makes an HTTP GET request using the `fetch` function and processes the response to update the `movies` state with the search results. It also includes sorting options for movies based on the year filter.

3. **Input Change Handlers**: These functions (`onInputChange`, `onYearFilterChange`, `onImdbIdFilterChange`) update their respective states (`search`, `yearFilter`, `imdbIdFilter`) as the user types or selects filter options. They also trigger a search for movies based on the current filters.

4. **handleCancel Function**: This function clears all filters and search results when the user clicks the "Cancel" button. It also resets the `selectedMovie` state to `null`.

5. **useEffect Hook**: This hook runs whenever `search`, `yearFilter`, or `imdbIdFilter` changes. It calls the `getMovies` function to fetch and update the movie search results.

6. **Rendering**: The component's render method displays the search input, filters, and search results based on the current state. It also includes a "Cancel" button to clear filters and results. If a `selectedMovie` is set, it displays the movie details using the `MovieDetail` component.

### MovieDetail.jsx

This is a separate component for displaying detailed movie information.

1. **Props**: It receives a single prop called `movie`, which is an object containing movie details.

2. **Rendering**: The component displays movie details such as the movie poster, title, year, and release date based on the `movie` prop passed to it.

### Popular Movies (Example02.jsx)

This is another example component that displays popular movies.

1. **State Initialization**: This component initializes states for `movie` (to store detailed movie information), `popularMovies` (to store a list of popular movies), and `search` (to store the search query).

2. **getMovie Function**: Similar to `getMovies` in the Home component, this function fetches detailed movie information based on the search query.

3. **getPopularMovies Function**: This function fetches a list of popular movies.

4. **Input Change Handlers**: The `onInputChange` function updates the `search` state as the user types in the search input.

5. **useEffect Hook**: The component uses the `useEffect` hook to call `getMovie` and `getPopularMovies` when the component mounts.

6. **checkResponse Function**: This function checks the response from the OMDB API and returns JSX elements based on whether a movie is found or not.

7. **Rendering**: The component's render method displays an input for searching movies, a button to trigger the search, a list of popular movies, and detailed movie information if a movie is found.

In summary, these components work together to create a movie search application. The `Home` component handles searching for movies, applying filters, and displaying results, while the `MovieDetail` component displays detailed movie information. The `Example02` component is an example of displaying popular movies. The application makes use of React state, useEffect, and fetch to interact with the OMDB API and provide a user-friendly movie search experience.
