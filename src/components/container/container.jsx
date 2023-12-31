import PropTypes from 'prop-types';
import s from './container.module.css';


export const Container = ({children}) => {

    return( 
        <div className={s.container}>{children}</div>
    )

}

Container.propTypes ={
    children: PropTypes.node
}