import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/search/shows?q=all/${id}`)
      .then(response => {
        setSummary(response.data.summary);
      })
      .catch(error => {
        console.error('Error fetching show summary:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Show Summary</h1>
      <p>{summary}</p>
    </div>
  );
};

export default ShowSummary;
