import './notFound.css';
import fourOfour from '../../images/404.png';

const NotFound = () => (
  <div className="category-secion not-found">
    <img src={fourOfour} alt="404" />
    <span className="engineer-emoji"> 🕵️‍♂️ </span>
  </div>
);

export default NotFound;
