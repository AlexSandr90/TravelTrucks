import css from './CamperItem.module.css';
import icons from '../../img/icons.svg';
import Button from '../Button/Button';

const CamperItem = () => {
  return (
    <div className={css.camper_item__wrap}>
      <img className={css.img} src="" alt="" />
      <div className={css.info_block}>
        <div className={css.reviews_title__block}>
          <div className={css.title_block}>
            <h2>Mavericks</h2>
            <div className={css.price_heart}>
              <span>€8000.00</span>
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
              <span>4.4 (2 Reviews)</span>
            </div>

            <div className={css.map_block}>
              <svg className={css.map}>
                <use href={`${icons}#map`} />
              </svg>
              <span>Kyiv, Ukraine</span>
            </div>
          </div>
        </div>

        <p className={css.comment}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>

        <div className={css.features_label__block}>
          <div className={css.features_label}>
            <svg className={css.features_img}>
              <use href={`${icons}#automatic`} />
            </svg>
            <span className={css.features_text}>Automatic</span>
          </div>
          <div className={css.features_label}>
            <svg className={css.features_img}>
              <use href={`${icons}#petrol`} />
            </svg>
            <span className={css.features_text}>Petrol</span>
          </div>
          <div className={css.features_label}>
            <svg className={css.features_img}>
              <use href={`${icons}#kitchen`} />
            </svg>
            <span className={css.features_text}>Kitchen</span>
          </div>
          <div className={css.features_label}>
            <svg className={css.features_img}>
              <use href={`${icons}#ac`} />
            </svg>
            <span className={css.features_text}>AC</span>
          </div>
        </div>

        <Button onClick={() => console.log('Item')}>Show more</Button>
      </div>
    </div>
  );
};

export default CamperItem;
