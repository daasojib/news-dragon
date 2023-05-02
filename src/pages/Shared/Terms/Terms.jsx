import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
          return (
                    <div>
                              <h2>Terms and Conditions</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit consequatur eveniet eum laudantium provident porro quidem aut earum dicta! Ad earum quis minus eligendi nisi, quae veritatis fugit sapiente.</p>
                              <p>Go back to <Link to="/register">Register</Link></p>
                    </div>
          );
};

export default Terms;