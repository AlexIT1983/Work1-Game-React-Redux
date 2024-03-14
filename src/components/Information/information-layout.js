import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ information }) => {
	return <div className={styles.information}>{information}</div>;
};

InformationLayout.propTypes = {
	information: PropTypes.string,
};
