// Game крестики нолики c React Redux (9. State Management. React Redux)

// import { useDispatch } from "./redux-manager";
import { useDispatch } from "react-redux"; // импортируем хук для доступа к диспатч
import { GameLayout } from "./game-lyaout";
import { RESTART_GAME } from "./actions";

export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(RESTART_GAME);
	};

	return <GameLayout handleRestart={() => handleRestart(handleRestart)} />;
};
