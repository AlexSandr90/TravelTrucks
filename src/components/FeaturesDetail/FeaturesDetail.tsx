import { Camper } from '../../types/camper';
import FeaturesLabel from '../FeaturesLabel/FeaturesLabel';
import VehicleDetailsTable from '../VehicleDetailsTable/VehicleDetailsTable';
import css from './FeaturesDetail.module.css';

const FeaturesDetail = ({
  camper,
  isVisible,
}: {
  camper: Camper;
  isVisible: boolean;
}) => {
  return (
    <div className={`${css.features_block} ${isVisible ? css.flex : css.none}`}>
      <FeaturesLabel camper={camper} />
      <VehicleDetailsTable vehicleDetails={camper} />
    </div>
  );
};

export default FeaturesDetail;
