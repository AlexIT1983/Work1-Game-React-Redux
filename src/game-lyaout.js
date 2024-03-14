// Шаблон

import PropTypes from "prop-types";
import styles from "./App.module.css";
import { Information } from "./components";
import { Field } from "./components";

export const GameLayout = ({ handleRestart }) => {
	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать игру заново
			</button>
		</div>
	);
};

// Типизируем шаблон GameLayout

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};
