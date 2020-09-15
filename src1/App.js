import React from 'react'
import Card from './components/Card'
import Album from './components/Album'

let movies = [
  {
    title: 'Good Fellas',
    plot: 'A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. Based on the book "Wiseguy" by Nicholas Pileggi.',
    poster: 'https://static.rogerebert.com/uploads/movie/movie_poster/goodfellas-1990/large_pDTuWp3jRcGbfWn0Ic6XZ0M0DwP.jpg'
  },
  {
    title: 'The Room',
    plot: "Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored of him and decides to seduce Johnny's best friend, Mark. From there, nothing will be the same again.",
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/TheRoomMovie.jpg/220px-TheRoomMovie.jpg'
  }
]

let songs = [
  {
    name: 'All Star',
    artist: 'Smash Mouth',
    poster: 'https://www.udiscovermusic.com/wp-content/uploads/2019/08/Smash-Mouth-2003-press-shot-01-CREDIT-Jay-Blakesberg-1000.jpg'
  },
  {
    name: 'Snow (Hey Oh)',
    artist: 'Red Hot Chili Peppers',
    poster: 'https://townsquare.media/site/838/files/2019/12/red-hot-chili-peppers.jpg?w=980&q=75'
  },
  {
    name: 'Bad Guy',
    artist: 'Billie Eilish',
    poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29_2.jpg'
  },
  {
    name: 'Hotel California',
    artist: 'Red Hot Chili Peppers',
    poster: 'https://townsquare.media/site/838/files/2019/12/red-hot-chili-peppers.jpg?w=980&q=75'
  },
]

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      {/* { 
        movies.map(movie => <Card movie={movie} />)
      } */}
      {
        songs.map(song => <Album song={song} />)
      }
    </>
  );
}

export default App;