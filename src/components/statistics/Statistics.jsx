import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={css.statisticsList}>
    <li>
      <p>
        Good:<span className={css.statisticsValue}>{good}</span>
      </p>
    </li>
    <li>
      <p>
        Neutral:<span className={css.statisticsValue}>{neutral}</span>
      </p>
    </li>
    <li>
      <p>
        Bad:<span className={css.statisticsValue}>{bad}</span>
      </p>
    </li>
    <li>
      <p>
        Total:<span className={css.statisticsValue}>{total()}</span>
      </p>
    </li>
    <li>
      <p>
        Positive feedback:
        <span className={css.statisticsValue}>{positivePercentage()}%</span>
      </p>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
