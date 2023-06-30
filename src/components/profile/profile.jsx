import s from './profile.module.css'
import PropTypes from 'prop-types';

export const Profile= ({username,location,tag,avatar,stats}) => {
    const {followers,views,likes} = stats;
return(
    <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.username}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
</div>
)


}

Profile.propTypes = {
username : PropTypes.string,
location: PropTypes.string,
tag: PropTypes.string,
avatar:PropTypes.string,
stats: PropTypes.shape({
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}),

}