import { ReviewForm } from "../review-form/review-form";
import { TitleLabel } from "../title-label/title-label";
import styles from "./reviews.module.css";

export function Reviews({ reviews }) {
  return (
    <>
      <TitleLabel label="Отзывы:" />
      <ul className={styles.reviewTextGridWithGap}>
        {reviews.map((review) => (
          <li
            key={review.id}
            className={styles.reviewTextGrid}>
            <span>
              {review.user}: {review.text}
            </span>
            <span>
              {review.rating}
              <span className={styles.reviewRatingColor}>★</span>
            </span>
          </li>
        ))}
      </ul>
      <ReviewForm />
    </>
  );
}