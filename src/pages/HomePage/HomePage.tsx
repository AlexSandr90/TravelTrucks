import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.homepage}>
      <div className={css.hero_block}>
        <h1>Campers of your dreams</h1>
        <h2>You can find everything you want in our catalog</h2>
        <Button onClick={() => navigate(`/catalog`)}>View Now</Button>
      </div>
    </div>
  );
};

export default HomePage;
