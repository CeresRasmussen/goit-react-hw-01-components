import css from 'components/Statistic/Statistic.module.css';
import PropTypes from 'prop-types';
import getRandomHexColor from 'helpers/getRandomHexColor';

export const Statistic = ({ stats, title }) => {
  return (
    <section className={css.statistic}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
