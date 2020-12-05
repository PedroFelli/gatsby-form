/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { quizContext } from '../../../context';
import inputValidation from '../../services/inputValidation';

const PersonalQuestionCard = ({ questions, nextStep, previousStep }) => {
  const [state, setState] = useState({
    personalQuestionsAnswered: {},
  });
  const { backHome } = quizContext();

  useEffect(() => {
    if (sessionStorage.getItem('personal')) {
      const personalQuestionsAnswered = JSON.parse(
        sessionStorage.getItem('personal'),
      );
      setState((prevState) => ({ ...prevState, personalQuestionsAnswered }));
    }
  }, []);
  const { personalQuestionsAnswered } = state;
  const enableNext = !(Object.keys(personalQuestionsAnswered).length === 4);
  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(200px)' },
  });
  const questionsHandle = (questionName, answer) => {
    if (answer) {
      personalQuestionsAnswered[questionName] = answer;
      setState((prevProps) => ({ ...prevProps, personalQuestionsAnswered }));
      sessionStorage.setItem(
        'personal',
        JSON.stringify(personalQuestionsAnswered),
      );
    } else {
      delete personalQuestionsAnswered[questionName];
      setState((prevProps) => ({ ...prevProps, personalQuestionsAnswered }));
    }
  };

  const validation = inputValidation(personalQuestionsAnswered);

  return (
    <>
      <animated.div style={props} className="personalQuestionPage">
        {questions
          && questions.map((questionLabel, index) => renderPageQuestions({
            questionLabel,
            questionsHandle,
            validation,
            personalQuestionsAnswered,
            index,
          }))}
      </animated.div>
      <Button type="default" onClick={() => backHome()} style={{ margin: '8px' }}>
        Home
      </Button>
      <Button
        type="default"
        onClick={() => previousStep()}
        style={{ marginRight: '1rem' }}
      >
        Previous
      </Button>
      <Button
        type="primary"
        onClick={() => nextStep(personalQuestionsAnswered)}
        disabled={enableNext}
        style={{ width: '8rem' }}
      >
        Submit
      </Button>
    </>
  );
};

const renderPageQuestions = ({
  questionLabel,
  questionsHandle,
  validation,
  personalQuestionsAnswered,
  index,
}) => (
  <div className="questionMrbtm" key={[questionLabel.key]}>
    <h4 className="answerMarginbtm">
      {`${index + 1})${questionLabel.question}`}
    </h4>
    <Input
      className="inputSize"
      value={
        personalQuestionsAnswered[questionLabel.key]
        && personalQuestionsAnswered[questionLabel.key]
      }
      onChange={({ target: { value } }) => {
        questionsHandle(questionLabel.key, value);
      }}
    />
    {validation[questionLabel.key] && (
      <p className="error">{validation[questionLabel.key]}</p>
    )}
  </div>
);
export default PersonalQuestionCard;
