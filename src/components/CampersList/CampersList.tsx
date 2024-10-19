import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';
import { selectCampersList } from '../../redux/campers/selectors';
import { Fragment, useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/campers/operations';
import { AppDispatch } from '../../redux/store';
import { Camper } from '../../types/camper';
import {
  selectBodyType,
  selectFeatures,
  selectLocation,
  selectTransmission,
} from '../../redux/filters/selectors';

const CampersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const campers = useSelector(selectCampersList);
  const location = useSelector(selectLocation);
  const form = useSelector(selectBodyType);
  const features = useSelector(selectFeatures);
  const transmission = useSelector(selectTransmission);

  const [page, setPage] = useState(1);
  const limit = 4;

  const featuresValues = Object.values(features);
  const isFeatureTrue = featuresValues.every((element) => element === true);

  useEffect(() => {
    if (
      isFeatureTrue ||
      (location && location?.length > 0) ||
      (form && form?.length > 0) ||
      (transmission && transmission?.length && transmission !== null)
    ) {
      dispatch(
        fetchCampers({
          page,
          limit,
          form,
          location,
          transmission,
          ...features,
        })
      );
    } else {
      dispatch(fetchCampers({ page, limit }));
    }
  }, [dispatch, page, limit]);

  return (
    <article className={css.campers_list__wrapper}>
      {campers?.map((camper: Camper) => {
        return (
          <Fragment key={camper.id}>
            <CamperItem camper={camper} />
          </Fragment>
        );
      })}
      <Button
        className={css.load_more__btn}
        onClick={() => setPage((prevPage) => prevPage + 1)}
      >
        Load more
      </Button>
    </article>
  );
};

export default CampersList;
