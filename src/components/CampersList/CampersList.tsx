import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <article className={css.campers_list__wrapper}>
      <CamperItem />
    </article>
  );
};

export default CampersList;
