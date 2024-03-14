// Наш компонент Information
//
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from "../../constants";
import { useSelector } from "react-redux";
import { InformationLayout } from "./information-layout";

export const Information = () => {
	const status = useSelector((state) => state.status);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	const playerAction = PLAYER_ACTION[status]; // выбираем действие
	const playerName = PLAYER_NAME[currentPlayer]; // выбираем текущего игрока

	const information =
		status === STATUS.DRAW ? "Ничья" : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
