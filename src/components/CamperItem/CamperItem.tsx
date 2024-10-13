import css from './CamperItem.module.css';
import icons from '../../img/icons.svg';
import Button from '../Button/Button';
import { Camper } from '../../types/camper';
import FeaturesLabel from '../FeaturesLabel/FeaturesLabel';
import { useNavigate } from 'react-router-dom';

const CamperItem = ({ camper }: { camper: Camper }) => {
  const { gallery, name, price, rating, location, description, id } = camper;
  const navigate = useNavigate();

  const handleOpenDetails = () => {
    navigate(`/campers/${id}`);
  };

  return (
    <div className={css.camper_item__wrap}>
      <img className={css.img} src={gallery[0].thumb} alt={name} />
      <div className={css.info_block}>
        <div className={css.reviews_title__block}>
          <div className={css.title_block}>
            <h2>{name}</h2>
            <div className={css.price_heart}>
              <span>€{price.toFixed(2)}</span>
              <svg className={css.heart}>
                <use href={`${icons}#heart`} />
              </svg>
            </div>
          </div>

          <div className={css.reviews_map}>
            <div className={css.reviews_block}>
              <svg className={css.star}>
                <use href={`${icons}#star`} />
              </svg>
              <span>{rating} (2 Reviews)</span>
            </div>

            <div className={css.map_block}>
              <svg className={css.map}>
                <use href={`${icons}#map`} />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>

        <p className={css.comment}>{description}</p>

        <div className={css.features_label__block}>
          <FeaturesLabel camper={camper} />
        </div>

        <Button onClick={handleOpenDetails}>Show more</Button>
      </div>
    </div>
  );
};

export default CamperItem;
