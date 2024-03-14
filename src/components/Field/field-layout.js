// Компонент FieldLyaout

import styles from "./field.module.css";
import { PLAYER, PLAYER_SIGN } from "../../constants";
import PropTypes from "prop-types";

export const FieldLayout = ({ field, handleCellClick }) => {
	return (
		<div className={styles.field1}>
			{field.map((cellPlayer, index) => (
				<button
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button> // вывод ячеек по индексу
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSSES, PLAYER.NOUGHTS, PLAYER.NOBODY]),
	),
	handleCellClick: PropTypes.func,
};
