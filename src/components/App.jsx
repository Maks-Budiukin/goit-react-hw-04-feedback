import React from "react";
import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  text-align: center;
`

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return (good + neutral + bad)
  }

  const countPositiveFeedbackPercentage = () => {
    return `${Math.round(good / (good + neutral + bad) * 100)}%`;
  }

  const onLeaveFeedback = (event) => {
    
  switch (event) {
    case 'good':
      setGood(good => good + 1)
      break;
    case 'neutral':
      setNeutral(neutral => neutral + 1)
      break;
    case 'bad': 
      setBad(bad => bad + 1)
      break;
      default:
        return;
  }
}
  return (
          <Wrapper>
            <Section title="Please leave feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={onLeaveFeedback} />
            </Section>
          <Section title="Statistics">
            {countTotalFeedback() > 0
              ?
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />
              :
              <Notification message="There is no feedback" />
            }
              
          </Section>
          </Wrapper>
        )
    }