// Мини библиотека

// import { useRef, useState } from "react";

// const reduxManager = {
// 	store: null,
// 	renderTriggers: new Map(),
// 	render: () => {
// 		reduxManager.renderTriggers.forEach((renderTrigger) =>
// 			renderTrigger(Symbol()),
// 		);
// 	},
// };

// dispatch --> reduxManager.render --> setRenderIndicator

// функция для фиктивного стейта (для обновления компонента)
// export const useReduxState = () => {
// 	const [renderIndicator, setRenderIndicator] = useState(Symbol());
// 	const renderTriggerKey = useRef(renderIndicator).current;

// 	reduxManager.renderTriggers.set(renderTriggerKey, setRenderIndicator);
// 	return reduxManager.store.getState();
// };

// функция которая будет возвращть нам dispatch
// export const useDispatch = () => (action) => {
// 	reduxManager.store.dispatch(action);
// 	reduxManager.render();
// };

// функция для проброса пропсов(завернем все приложение Game в него)
// export const ReduxRenderer = ({ children, store }) => {
// 	reduxManager.store = store;

// 	return children;
// };
