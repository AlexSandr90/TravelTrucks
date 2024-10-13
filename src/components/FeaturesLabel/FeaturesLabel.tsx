import { Camper } from '../../types/camper';
import FeatureLabelItem from '../FeatureLabelItem/FeatureLabelItem';

interface FeaturesLabelProps {
  camper: Camper;
}

const FeaturesLabel = ({ camper }: FeaturesLabelProps) => {
  return (
    <>
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
    </>
  );
};

export default FeaturesLabel;
