import PropTypes from 'prop-types';
import s from './Friends.module.css'

export const Friends = ({friends}) => {

    return (

        <ul className={s.friendList}>

{friends.map(({avatar, name , isOnline,id }) => (
    <li className={s.item} key={id} >
  <span className={isOnline? s.active : s.disable}></span>
  <img className={s.avatar} src={avatar} alt="User avatar" />
  <p className={s.name}>{name}</p>
</li>

)  ) }

</ul>
    )

}

Friends.prototype = {
avatar: PropTypes.string,
name: PropTypes.string,
isOnline: PropTypes.bool,

}