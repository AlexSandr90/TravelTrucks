import css from './CamperItem.module.css';
import icons from '../../img/icons.svg';
import Button from '../Button/Button';
import { Camper } from '../../types/camper';
import FeaturesLabel from '../FeaturesLabel/FeaturesLabel';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { AppDispatch } from '../../redux/store';
import { addFavorite, removeFavorites } from '../../redux/favorites/slice';

const CamperItem = ({ camper }: { camper: Camper }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch<AppDispatch>();
  const { gallery, name, price, rating, location, description, id } = camper;
  const navigate = useNavigate();

  const handleOpenDetails = () => {
    navigate(`/catalog/${id}`);
  };

  const handleToggleIsFavorite = (id: string) => {
    if (favorites.includes(id)) {
      dispatch(removeFavorites(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <div className={css.camper_item__wrap}>
      <img
        className={css.img}
        src={(gallery && gallery.length > 0 && gallery[0].thumb) || ''}
        alt={name}
      />
      <div className={css.info_block}>
        <div className={css.reviews_title__block}>
          <div className={css.title_block}>
            <h2>{name}</h2>
            <div className={css.price_heart}>
              <span>€{price.toFixed(2)}</span>
              <svg
                className={`${css.heart} ${
                  favorites.includes(id) ? css.favorite : ''
                }`}
                onClick={() => handleToggleIsFavorite(id)}
              >
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

        <FeaturesLabel camper={camper} />

        <Button onClick={handleOpenDetails}>Show more</Button>
      </div>
    </div>
  );
};

export default CamperItem;
