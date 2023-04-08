import { ProfileDesc } from 'components/Profile/ProfileDesc/ProfileDesc';
import { ProfileStats } from 'components/Profile/ProfileStats/ProfileStats';
import css from 'components/Profile/Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <ProfileDesc
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileStats stats={stats} />
    </div>
  );
};

ProfileDesc.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.object.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
