import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
export default function Home(props) {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
      <h4>Hello Home</h4>
      <button onClick={() => history.goForward()}>Go Forward</button>
    </div>
  );
}
