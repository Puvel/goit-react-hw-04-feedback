import { useState } from 'react';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/feedbackOptions/feedbackOptions';
import { Statistics } from 'components/statistics/Statistics';
import { Notification } from 'components/notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackState = { good, setGood, neutral, setNeutral, bad, setBad };
  const onLeaveFeedback = e => {
    const name = e.target.name;
    feedbackState[`set${name}`](feedbackState[name.toLowerCase()] + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
