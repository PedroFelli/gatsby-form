import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';

export const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const initialState = {
    currentStep: 0,

    questionaire: [],
  };

  const [state, setState] = useState(initialState);
  const [quiz, setQuiz] = useState(undefined);

  const backHome = useCallback(() => {
    sessionStorage.clear();

    setState(initialState);

    setQuiz(undefined);
  }, []);

  return (
    <QuizContext.Provider
      value={{
        backHome,
        quiz,
        setQuiz,
        state,
        setState,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function quizContext() {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error('useContext must be used within a QuizProvider');
  }

  const {
    count, setCount, backHome, quiz, setQuiz, state, setState,
  } = context;

  return {
    count,
    setCount,
    backHome,
    quiz,
    setQuiz,
    state,
    setState,
  };
}

QuizProvider.propTypes = {
  children: React.Component,
};

QuizProvider.defaultProps = {
  children: PropTypes.string,
};
