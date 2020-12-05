/* eslint-disable no-undef */
/* eslint-disable max-len */
import React from 'react';
import {
  Row, Col, Progress, message, Radio,
} from 'antd';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

import Container from '../components/container';
import SEO from '../components/seo';
import Card from '../components/QuestionnaireCard';
import PersonalQuestionCard from '../components/PersonalQuestionCard';

import ThankYou from '../components/ThankYou';

import { quizContext } from '../../context/index';
import QuestionConfig, { personalQuestionConfig } from '../QuestionConfig';
import './style.less';
import apiDataFormer from '../services/apiDataFormer';
import LeftBanner from '../components/LeftBanner';

const fixedNumber = (value) => value.toFixed(2);

const IndexPage = () => {
  const {
    quiz, setQuiz, state, setState,
  } = quizContext();

  const { currentStep } = state;
  const nextStep = (questionaire) => {
    setState((prevState) => ({
      ...prevState,
      currentStep: currentStep + 1,
      questionaire: [...prevState.questionaire, ...questionaire],
    }));
  };

  const previousStep = () => {
    setState((prevState) => ({ ...prevState, currentStep: currentStep - 1 }));
  };

  const selectQuiz = (e) => {
    setQuiz(e.target.value);
  };

  const finalStep = (personalQuestions) => {
    const apiData = apiDataFormer(personalQuestions);

    // ENDPOINT - VOCE DEVE MANTER ESSE ENDPOINT
    // const endPoint = "https://fortodayapi.agencysavage.com/wrike-task";
    console.log(apiData);

    message.success('your response has been submitted');
    setState((prevState) => ({
      ...prevState,
      currentStep: currentStep + 1,
    }));

    // axios
    //   .post(endPoint, {
    //     title: personalQuestions.name,
    //     description: apiData,
    //     // FOLDER ID - VOCE DEVE MANTER ESSE FOLDER ID
    //     folder: "IEAA6GKGI4RSVONQ",
    //   })
    //   .then(() => {
    //     message.success("your response has been submitted");
    //     setState((prevState) => ({
    //       ...prevState,
    //       currentStep: currentStep + 1,
    //     }));
    //   });
  };

  return (
    <Container>
      <SEO title="Home" />
      <Row gutter={[60, 40]} justify="center">
        {quiz === undefined ? (
          <WelcomePage {...{ QuestionConfig, selectQuiz, quiz }} />
        ) : (
          <>
            {currentStep !== QuestionConfig[quiz].length + 1 ? (
              <QuizLayout
                {...{
                  quiz: QuestionConfig[quiz],
                  currentStep,
                  finalStep,
                  previousStep,
                  fixedNumber,
                  nextStep,
                }}
              />
            ) : (
              <ThankYou />
            )}
          </>
        )}
      </Row>
    </Container>
  );
};

const WelcomePage = ({ quiz, selectQuiz }) => {
  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(200px)' },
  });

  return (
    <>
      <animated.div style={{ ...props }}>
        <LeftBanner />
        <Col className="gutter-row" span={24} offset={0}>
          <h2>Choose:</h2>
        </Col>
        <Col className="gutter-row" span={24} offset={0}>
          <Radio.Group onChange={selectQuiz} value={quiz}>
            {QuestionConfig.map((_, index) => (
              <Radio value={index} key={`radio-${index}`}>
                {`Quiz ${index + 1}`}
              </Radio>
            ))}
          </Radio.Group>
        </Col>
      </animated.div>
    </>
  );
};

const QuizLayout = ({
  quiz,
  currentStep,
  finalStep,
  previousStep,
  nextStep,
}) => (
  <>
    <LeftBanner />
    <Col md={24} lg={12} className="textCenter minQuestionareWidth">
      <Progress
        percent={fixedNumber((currentStep + 1) * (100 / (quiz.length + 1)))}
        showInfo
        status="active"
        style={{ marginBottom: '2rem' }}
      />

      {currentStep !== quiz.length ? (
        <Card
          {...{
            questions: quiz[currentStep],
            nextStep,
            previousStep,
            stepNumber: currentStep,
          }}
        />
      ) : (
        <PersonalQuestionCard
          questions={personalQuestionConfig}
          nextStep={finalStep}
          previousStep={previousStep}
        />
      )}

      {/*  */}
    </Col>
  </>
);

export default IndexPage;
