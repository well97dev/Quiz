import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg';

import './Welcome.css';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
    <div id="welcome">
        <h2>Bem-Vindo!</h2>
        <p>Click no botão abaixo:</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE"})}>
            Start
        </button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
    );
};

export default Welcome;