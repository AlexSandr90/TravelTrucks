import CampersList from '../../components/CampersList/CampersList';
import Filters from '../../components/Filters/Filters';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <section className={css.catalog}>
      <Filters />
      <CampersList />
    </section>
  );
};

export default Catalog;
