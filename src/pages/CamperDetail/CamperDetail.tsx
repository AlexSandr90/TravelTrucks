import { useParams } from 'react-router-dom';
import css from './CamperDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { selectCamper, selectIsLoading } from '../../redux/campers/selectors';
import { useEffect, useState } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import CamperMainInfo from '../../components/CamperMainInfo/CamperMainInfo';
import FeaturesLabel from '../../components/FeaturesLabel/FeaturesLabel';
import VehicleDetailsTable from '../../components/VehicleDetailsTable/VehicleDetailsTable';
import ReviewsDetail from '../../components/ReviewsDetail/ReviewsDetail';
import Button from '../../components/Button/Button';
import { Field, Form, Formik } from 'formik';

const CamperDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectIsLoading);
  const [featuresTab, setFeaturesTab] = useState(false);
  const [reviewsTab, setReviewsTab] = useState(true);

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
          <div
            className={`${css.features_block} ${
              featuresTab ? css.flex : css.none
            }`}
          >
            <FeaturesLabel camper={camper} />
            <VehicleDetailsTable vehicleDetails={camper} />
          </div>
          <ReviewsDetail reviews={reviews} isVisible={reviewsTab} />

          <div className={css.form_block}>
            <div className={css.form_title__block}>
              <h3>Book your campervan now</h3>
              <p>Stay connected! We are always ready to help you.</p>
            </div>
            <Formik
              initialValues={{
                name: '',
                email: '',
                bookingDate: '',
                comment: '',
              }}
              onSubmit={() => console.log('Form')}
            >
              <Form className={css.form}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={css.form_input}
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={css.form_input}
                />
                <Field
                  type="text"
                  name="dateBooking"
                  placeholder="Booking date*"
                  className={css.form_input}
                />
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={`${css.form_input} ${css.form_textarea}`}
                />
              </Form>
            </Formik>

            <Button onClick={() => console.log('first: ')}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperDetail;
