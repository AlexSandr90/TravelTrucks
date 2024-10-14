import css from './ReviewsDetail.module.css';
import icons from '../../img/icons.svg';

interface Review {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }
  
  interface ReviewsDetailProps {
    reviews: Review[]; 
    isVisible: boolean;
  }

const ReviewsDetail = ({ reviews, isVisible }: ReviewsDetailProps) => {
  const starArray = Array.from({ length: 5 - 1 + 1 }, (_, index) => 1 + index);
  return (
    <ul className={`${css.reviews_block} ${isVisible ? css.flex : css.none}`}>
      {reviews?.map(
        ({
          reviewer_name,
          reviewer_rating,
          comment,
        }: {
          reviewer_name: string;
          reviewer_rating: number;
          comment: string;
        }) => {
          return (
            <li
              key={`${reviewer_name}_${reviewer_rating}`}
              className={css.reviews_item}
            >
              <div className={css.reviews_img__block}>
                <span className={css.reviews_img}>
                  {reviewer_name.charAt(0).toUpperCase()}
                </span>
                <div className={css.name_review}>
                  <span>{reviewer_name}</span>
                  <div className={css.rating}>
                    {starArray?.map((_, index) => {
                      return (
                        <svg
                          className={`${css.star} ${
                            reviewer_rating > index ? css.rating : css.gray
                          }`}
                        >
                          <use href={`${icons}#star`} />
                        </svg>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p>{comment}</p>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ReviewsDetail;
