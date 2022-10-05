import { PropTypes } from 'prop-types';
import { FriendItem } from './FriendItem';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
    return (
        <div className={css.friends}>
            <ul className={css['friend-list']}>
                {friends.map(({ id, avatar, name, isOnline }) =>
                    <li className={css.item} key={id}>
                        <FriendItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        />
                    </li>)}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}