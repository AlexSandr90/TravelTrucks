import css from './Filters.module.css';

const Filters = () => {
  return <aside className={css.filters_wrap}>
    <div className={css.location_block}>
        <span>Location</span>
        <div>
          
        </div>
    </div>

    <div className={css.filters_form__block}>
        <span>Filters</span>
        
    </div>
  </aside>;
};

export default Filters;
