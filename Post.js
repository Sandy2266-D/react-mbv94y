import React from 'react';
class Post extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Post!</h1>
      </div>
    );
  }
}

export default Post;

// import React from 'react';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
// export default function Post(props) {
//   const history = useHistory();
//   console.log(history);
//   const location = useLocation();
//   console.log(location);
//   const params = useParams();
//   console.log(params);
//   return (
//     <div>
//       <h1>Post!</h1>
//     </div>
//   );
// }
