import './App.css';
import { useQuery, useMutation, useSubscription, gql } from "@apollo/client";

const getMovies = gql`
 query Query {
  queryMovies {
   movieTitle
   dateOfRelease
  }
 }
`
const addMovies = gql`
 mutation AddMovie($movieTitle: String!, $dateOfRelease: String!) {
  addMovie(movieTitle: $movieTitle, dateOfRelease: $dateOfRelease) {
   movieTitle
   dateOfRelease
  }
 }
`
const subscription = gql`
subscription NewMovie {
 newMovie {
  movieTitle
  dateOfRelease
 }  
}
`
function DisplayMovies() {
 const { loading, error, data } = useQuery(getMovies);


 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error : {error.message}</p>;

 return (
  <div className='movies'>
   {data.queryMovies.map(({id, movieTitle, dateOfRelease}) => (
    <div key={id}>
     <ul>
      <li>Name: {movieTitle}</li>
      <li>Release Date: {dateOfRelease}</li>
     </ul>
    </div>
   ))}
  </div>
 )
}


function AddMovies() {
 let titleInput, dateInput;

 const [addMovie, { loading, error }] = useMutation(addMovies);

 if (loading) return <p>Loading...</p>;
 if (error) return <p>Error: {error.message}</p>;

 return (
  <div className='form'>
   <form
    onSubmit={(e) => {
     console.log(titleInput.value, dateInput.value)
     e.preventDefault();
     addMovie({
      variables: {
       movieTitle: titleInput.value,
       dateOfRelease: dateInput.value,
      },
     });
     titleInput.value = "";
     dateInput.value = "";
    }}
   >
    <label>
     Movie Title:
     <input
      type="text"
      ref={(node) => {
       titleInput = node;
      }}
     />
    </label>
    <br />
    <label>
     Release Date:
     <input
      type="text"
      ref={(node) => {
       dateInput = node;
      }}
     />
    </label>
    <br />
    <button type="submit">Add Movie</button>
   </form>
  </div>
 );
}
function SubscriptionMovies() {
  const { loading, error, data } = useSubscription(subscription);
 
  if (loading) return <DisplayMovies/>;
  if (error) return <p>Error : {error.message}</p>;
 
  return (
   <div className='movies'>
    {data.newMovie.map(({id, movieTitle, dateOfRelease}) => (
     <div key={id}>
      <ul>
       <li>Name: {movieTitle}</li>
       <li>Release Date: {dateOfRelease}</li>
      </ul>
     </div>
    ))}
   </div>
  )
 }
function App() {
 return (
  <div className='main'>
   <div className='content'>
    <h2>My first Apollo app 🚀</h2>
    <SubscriptionMovies/>
    <AddMovies/>
   </div>
  </div>
 );
}

export default App;