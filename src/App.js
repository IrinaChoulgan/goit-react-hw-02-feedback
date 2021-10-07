import { Component } from 'react';
import './App.css';
import styles from './components/Feedback/Feedback.module.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Statics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  handlerTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const total = this.handlerTotal();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const total = this.handlerTotal();
    const positiveFeedback = this.positiveFeedback();
    const objKey = Object.keys(this.state);

    return (
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          </Section>
        )}
      </div>
    );
  }
}
