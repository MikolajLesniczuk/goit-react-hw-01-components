import PropTypes from 'prop-types';
import s from './Statistic.module.css'

const bgcolors = ['red', 'blue', 'grey', 'green', 'orange'];

export const Statistic = ({title, stats }) => {
return (
    <section className={s.statistic}>
  <h2 className={s.title}>{title}</h2>

  <ul className={s.list}>
  {stats.map(({ id, label, percentage }, i) => (
          <li className={s.item} key={id} style={{ background: bgcolors[i] }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
  </ul>
</section>
)

}

Statistic.prototype = {
  title: PropTypes.string,
  stats: PropTypes.shape({
id:PropTypes.string,
label : PropTypes.string,
percentage : PropTypes.number,


  })
}