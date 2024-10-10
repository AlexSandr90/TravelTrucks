import Filters from '../../components/Filters/Filters';
import css from './Catalog.module.css';

const Catalog = () => {
  return <section className={css.catalog}>
    <Filters/>
    <article>Content</article>
  </section>;
};

export default Catalog;
