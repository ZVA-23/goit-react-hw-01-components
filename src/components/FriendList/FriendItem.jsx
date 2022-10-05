import { PropTypes } from 'prop-types';
import css from './FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <span className={isOnline ? css.isOnline : css.isOffline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </>
    )
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,    
}