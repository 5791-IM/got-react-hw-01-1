import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsDesc}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span className={css.statsDesc}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>

        <li className={`${css.statsItem} ${css.lastInRow}`}>
          <span className={css.statsDesc}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
