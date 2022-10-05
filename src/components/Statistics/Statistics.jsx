import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

const bgColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.2 +
    ')'

  return color
}

export function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>{title}</h2>:""}

            <ul className={css['stat-list']}>
                {stats.map(stat => {
                    return (
                        <li className={css.item} key={stat.id} style={{ backgroundColor: bgColor() }}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
    )
}

