import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li className={styles.item} key={friend.id}>
            <span className={friend.isOnline ? styles.onLine : styles.offLine}>
              {' '}
              ●
            </span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default FriendList;
