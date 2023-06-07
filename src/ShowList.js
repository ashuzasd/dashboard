// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const ShowList = () => {
//   const [shows, setShows] = useState([]);

//   useEffect(() => {
//     axios.get('https://api.tvmaze.com/search/shows?q=all')

//       .then(response => {
//         setShows(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching shows:', error);
//       });
//   }, []);

//   return (
//     <>
//     <div>
//       <h1>Shows</h1>
//       {shows.map(show => (
//         <div key={show.show.id}>
//           <h2>{show.show.name}</h2>
//           <p>{show.show.summary}</p>
//           <Link to={`/summary/${show.show.id}`}>
//             <button>View Summary</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//     </>
//   );
  
// };


// export default ShowList;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Card, CardContent, Button } from '@mui/material';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Shows
      </Typography>
      {shows.map((show) => (
        <Card key={show.show.id} sx={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h6" component="h2">
              {show.show.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {show.show.summary}
            </Typography>
            <Link to={`/summary/${show.show.id}`}>
              <Button variant="contained">View Summary</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShowList;
