/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import { Button, Select } from 'antd';
import { useSpring, animated } from 'react-spring';
import React, { useEffect, useState } from 'react';
import { quizContext } from '../../../context';

const { Option } = Select;

const Card = ({
  questions, nextStep, previousStep, stepNumber,
}) => {
  const [state, setState] = useState({
    questionsAnswered: [],
    prefilledAnswers: [],
  });
  const [newQuestions, setNewQuestions] = useState(false);

  const { backHome } = quizContext();

  useEffect(() => {
    setState((prevProps) => ({
      ...prevProps,
      prefilledAnswers: [],
    }));

    // check if  questions is array of options
    if (Array.isArray(questions[0])) {
      const lastAnswer = JSON.parse(sessionStorage.getItem(stepNumber - 1));
      questions.map(
        (question) => question[0].previous === lastAnswer[0].answer
          && setNewQuestions(question[0].questions),
      );
    } else {
      setNewQuestions(questions);
    }

    if (sessionStorage.getItem(stepNumber)) {
      const prefilledAnswers = JSON.parse(sessionStorage.getItem(stepNumber));
      setState((prevState) => ({ ...prevState, prefilledAnswers }));
    }
  }, [questions]);

  const handleChange = (key, value) => {
    const { questionsAnswered, prefilledAnswers } = state;

    const fill = {
      question: newQuestions[key].question,
      answer: value,
    };

    questionsAnswered[key] = fill;
    prefilledAnswers[key] = fill;

    setState((prevProps) => ({
      ...prevProps,
      questionsAnswered,
      prefilledAnswers,
    }));
  };

  const renderPageQuestions = ({ val, key }) => (
    <animated.div key={val.id} style={{ marginBottom: '4rem', ...props }}>
      <h4 style={{ marginBottom: '1rem' }}>{`${val.id})${val.question}`}</h4>
      <Select
        value={
          prefilledAnswers.length > 0 && prefilledAnswers[key]
            ? prefilledAnswers[key].answer
            : null
        }
        placeholder="Select a option"
        onChange={(value) => handleChange(key, value)}
        style={{ width: '300px' }}
      >
        {val.options.map((opt, index) => (
          <Option value={opt} key={index}>
            {opt}
          </Option>
        ))}
      </Select>
    </animated.div>
  );

  const { questionsAnswered, prefilledAnswers } = state;
  const enableNext = !(prefilledAnswers.length === questions.length)
    || !prefilledAnswers.length === newQuestions.length;

  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(200px)' },
  });

  const setAnsweredQuestion = () => {
    nextStep(questionsAnswered);

    sessionStorage.setItem(stepNumber, JSON.stringify(prefilledAnswers));
  };
  return (
    <>
      {newQuestions
        && newQuestions.map((val, key) => renderPageQuestions({ val, key }))}

      <ButtonBox
        {...{
          backHome,
          previousStep,
          setAnsweredQuestion,
          stepNumber,
          enableNext,
        }}
      />
    </>
  );
};

const ButtonBox = ({
  backHome,
  previousStep,
  setAnsweredQuestion,
  stepNumber,
  enableNext,
}) => (
  <>
    <Button type="default" onClick={() => backHome()} style={{ margin: '8px' }}>
      Home
    </Button>
    {!!stepNumber && (
      <Button
        type="default"
        onClick={() => previousStep()}
        style={{ margin: '8px' }}
      >
        Previous
      </Button>
    )}
    <Button
      type="primary"
      onClick={() => setAnsweredQuestion()}
      disabled={enableNext}
      style={{ width: '8rem', margin: '8px' }}
    >
      Next
    </Button>
  </>
);

export default Card;
