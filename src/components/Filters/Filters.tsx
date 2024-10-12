import css from './Filters.module.css';
import icons from '../../img/icons.svg';
import Button from '../Button/Button';

const vehicleEquipmentMockData = [
  {
    id: '1',
    img: 'ac',
    name: 'AC',
  },
  {
    id: '2',
    img: 'automatic',
    name: 'Automatic',
  },
  {
    id: '3',
    img: 'kitchen',
    name: 'Kitchen',
  },
  {
    id: '4',
    img: 'tv',
    name: 'TV',
  },
  {
    id: '5',
    img: 'bathroom',
    name: 'Bathroom',
  },
];

const vehicleTypeMockData = [
  {
    id: '1',
    img: 'van',
    name: 'Van',
  },
  {
    id: '2',
    img: 'fullyIntegrated',
    name: 'Fully Integrated',
  },
  {
    id: '3',
    img: 'alcove',
    name: 'Alcove',
  },
];

const Filters = () => {
  return (
    <aside className={css.filters_wrap}>
      <div className={css.location_block}>
        <span className={css.location_title}>Location</span>

        <div className={css.map_block}>
          <svg className={css.map}>
            <use href={`${icons}#map`} />
          </svg>
          <span className={css.map_location}>Kyiv, Ukraine</span>
        </div>
      </div>

      <div className={css.filters_form__block}>
        <span className={css.filters_title}>Filters</span>

        <div className={css.filter_group}>
          <h3 className={css.filter_group__title}>Vehicle equipment</h3>

          <div className={css.divider} />

          <ul className={css.filter_group__list}>
            {vehicleEquipmentMockData.map(
              ({
                id,
                img,
                name,
              }: {
                id: string;
                img: string;
                name: string;
              }) => {
                return (
                  <li key={id} className={css.filter_group__item}>
                    <svg className={css.filter_group__img}>
                      <use href={`${icons}#${img}`} />
                    </svg>
                    <span className={css.filter_group__text}>{name}</span>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className={css.filter_group}>
          <h3 className={css.filter_group__title}>Vehicle type</h3>

          <div className={css.divider} />

          <ul className={css.filter_group__list}>
            {vehicleTypeMockData.map(
              ({
                id,
                img,
                name,
              }: {
                id: string;
                img: string;
                name: string;
              }) => {
                return (
                  <li key={id} className={css.filter_group__item}>
                    <svg
                      className={css.filter_group__img}
                      width="32px"
                      hanging="32px"
                    >
                      <use href={`${icons}#${img}`} />
                    </svg>
                    <span className={css.filter_group__text}>{name}</span>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>

      <Button onClick={() => console.log('Search!')}>Search</Button>
    </aside>
  );
};

export default Filters;
