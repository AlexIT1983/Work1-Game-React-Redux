// Наш компонент Field

import { FieldLayout } from "./field-layout";
import { PLAYER, STATUS } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { checkEmptyCell, checkWin } from "../../utils";
import { setCurrentPlayer, setField, setStatus } from "../../actions";

// в нашем компоненте мы будем принимать пропсы(props)
export const Field = () => {
	const status = useSelector((state) => state.status);
	const field = useSelector((state) => state.field);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const dispatch = useDispatch();

	const handleCellClick = (cellIndex) => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return; // проверяем условие доступности игры и наличие ячеек и ничью
		}
		const newField = [...field]; // подготовим новое поле через спред оператор

		newField[cellIndex] = currentPlayer;

		dispatch(setField(newField));

		// проверяем условие для победы
		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSSES
					? PLAYER.NOUGHTS
					: PLAYER.CROSSES;

			dispatch(setCurrentPlayer(newCurrentPlayer));
		} // проверяем и сменяем игрока на другого
		else {
			dispatch(setStatus(STATUS.DRAW));
			// setStatus(STATUS.DRAW);
		}
	};

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};
