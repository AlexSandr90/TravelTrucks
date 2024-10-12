import Button from '../Button/Button';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

const CampersList = () => {
  return (
    <article className={css.campers_list__wrapper}>
      <CamperItem />
      <Button
        className={css.load_more__btn}
        onClick={() => console.log('Load more')}
      >
        Load more
      </Button>
    </article>
  );
};

export default CampersList;
