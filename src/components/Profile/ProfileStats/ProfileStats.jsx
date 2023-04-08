// import PropTypes from 'prop-types';
import css from 'components/Profile/ProfileStats/ProfileStats.module.css';

export const ProfileStats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span className={css.stats}>Followers</span>
        <span className={css.stats}>{followers}</span>
      </li>
      <li>
        <span className={css.stats}>Views</span>
        <span className={css.stats}>{views}</span>
      </li>
      <li>
        <span className={css.stats}>Likes</span>
        <span className={css.stats}>{likes}</span>
      </li>
    </ul>
  );
};
