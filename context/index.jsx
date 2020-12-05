import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';

export const CountContext = createContext();

export default function CountProvider({ children }) {
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
    <CountContext.Provider
      value={{
        backHome,
        quiz,
        setQuiz,
        state,
        setState,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function quizContext() {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useContext must be used within a CountProvidere');
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

CountProvider.propTypes = {
  children: React.Component,
};

CountProvider.defaultProps = {
  children: PropTypes.string,
};
