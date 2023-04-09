import css from 'components/Profile/Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          width="120"
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
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
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
