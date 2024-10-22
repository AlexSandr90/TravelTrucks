import { useParams } from 'react-router-dom';
import css from './CamperDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectCamper, selectIsLoading } from '../../redux/campers/selectors';
import { useEffect, useState } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import CamperMainInfo from '../../components/CamperMainInfo/CamperMainInfo';
import ReviewsDetail from '../../components/ReviewsDetail/ReviewsDetail';
import CamperBookingForm from '../../components/CamperBookingForm/CamperBookingForm';
import FeaturesDetail from '../../components/FeaturesDetail/FeaturesDetail';

const CamperDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectIsLoading);
  const [featuresTab, setFeaturesTab] = useState(true);
  const [reviewsTab, setReviewsTab] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  if (isLoading || !camper) {
    return <p>Loading...</p>;
  }

  const handleToggleTabs = (activeTab: 'features' | 'reviews') => {
    if (activeTab === 'features' && !featuresTab) {
      setFeaturesTab(true);
      setReviewsTab(false);
    } else if (activeTab === 'reviews' && !reviewsTab) {
      setFeaturesTab(false);
      setReviewsTab(true);
    }
  };

  const { reviews } = camper;

  return (
    <div className={css.camperDetail_wrap}>
      <CamperMainInfo camper={camper} />

      <div className={css.feature_reviews__block}>
        <div className={css.tabs_block}>
          <div className={css.tabs}>
            <h3
              className={`${css.tab} ${featuresTab && css.active}`}
              onClick={() => handleToggleTabs('features')}
            >
              Features
            </h3>
            <h3
              className={`${css.tab} ${reviewsTab && css.active}`}
              onClick={() => handleToggleTabs('reviews')}
            >
              Reviews
            </h3>
          </div>
          <div className={css.divider} />
        </div>
        <div className={css.features_reviews__form_block}>
          <FeaturesDetail camper={camper} isVisible={featuresTab} />

          <ReviewsDetail reviews={reviews ?? []} isVisible={reviewsTab} />

          <CamperBookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetail;
