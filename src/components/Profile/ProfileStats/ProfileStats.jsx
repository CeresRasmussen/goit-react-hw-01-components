// import PropTypes from 'prop-types';
import css from 'components/Profile/ProfileStats/ProfileStats.module.css';

export const ProfileStats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul className={css.stats}>
      <li className={css.stats_list}>
        <span className={css.stats_title}>Followers</span>
        <span className={css.stats_value}>{followers}</span>
      </li>
      <li className={css.stats_list}>
        <span className={css.stats_title}>Views</span>
        <span className={css.stats_value}>{views}</span>
      </li>
      <li className={css.stats_list}>
        <span className={css.stats_title}>Likes</span>
        <span className={css.stats_value}>{likes}</span>
      </li>
    </ul>
  );
};
