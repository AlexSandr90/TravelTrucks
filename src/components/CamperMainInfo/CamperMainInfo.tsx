import { Camper } from '../../types/camper';
import css from './CamperMainInfo.module.css';
import icons from '../../img/icons.svg';

const CamperMainInfo = ({ camper }: { camper: Camper }) => {
  const { name, price, location, rating, gallery, description } = camper;
  return (
    <div className={css.camper_main__info_block}>
      <div className={css.camper_title__price_block}>
        <h2>{name}</h2>

        <div className={css.reviews_location__block}>
          <div className={css.reviews_block}>
            <svg className={css.star}>
              <use href={`${icons}#star`} />
            </svg>
            <span>{rating} (2 Reviews)</span>
          </div>

          <div className={css.location__block}>
            <svg className={css.map}>
              <use href={`${icons}#map`} />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        <span className={css.price}>€{price.toFixed(2)}</span>
      </div>

      <ul className={css.gallery}>
        {gallery?.map(({ original }: { original: string }) => {
          return (
            <li key={original} className={css.img_block}>
              <img src={original} alt={name} className={css.img} />
            </li>
          );
        })}
      </ul>
      <p className={css.camper_text__info}>{description}</p>
    </div>
  );
};

export default CamperMainInfo;
