import { Camper } from '../../types/camper';
import FeatureLabelItem from '../FeatureLabelItem/FeatureLabelItem';
import css from './FeaturesLabel.module.css';

const FeaturesLabel = ({ camper }: { camper: Camper }) => {
  return (
    <div className={css.features_label__block}>
      {camper?.transmission === 'automatic' && (
        <FeatureLabelItem imgLabel="automatic" featureName="Automatic" />
      )}
      {camper?.engine === 'petrol' && (
        <FeatureLabelItem imgLabel="petrol" featureName="Petrol" />
      )}
      {camper?.kitchen && (
        <FeatureLabelItem imgLabel="kitchen" featureName="Kitchen" />
      )}
      {camper?.AC && <FeatureLabelItem imgLabel="ac" featureName="AC" />}
      {camper?.TV && <FeatureLabelItem imgLabel="tv" featureName="TV" />}
      {camper?.bathroom && (
        <FeatureLabelItem imgLabel="bathroom" featureName="Bathroom" />
      )}
      {camper?.radio && (
        <FeatureLabelItem imgLabel="radio" featureName="Radio" />
      )}
      {camper?.refrigerator && (
        <FeatureLabelItem imgLabel="refrigerator" featureName="Refrigerator" />
      )}
      {camper?.microwave && (
        <FeatureLabelItem imgLabel="microwave" featureName="Microwave" />
      )}
    </div>
  );
};

export default FeaturesLabel;
