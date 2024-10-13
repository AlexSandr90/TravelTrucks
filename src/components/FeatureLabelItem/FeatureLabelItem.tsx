import icons from '../../img/icons.svg';
import css from './FeatureLabelItem.module.css';

const FeatureLabelItem = ({
  imgLabel,
  featureName,
}: {
  imgLabel: string;
  featureName: string;
}) => {
  return (
    <div className={css.features_label}>
      <svg className={css.features_img}>
        <use href={`${icons}#${imgLabel}`} />
      </svg>
      <span className={css.features_text}>{featureName}</span>
    </div>
  );
};

export default FeatureLabelItem;
