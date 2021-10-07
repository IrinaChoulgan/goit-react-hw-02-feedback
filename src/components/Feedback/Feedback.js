// import React from 'react';
// import styles from './Feedback.module.css';

// class Feedback extends React.Component {
//   //   state = { good: 0, neutral: 0, bad: 0 };

//   handlerOnBtnGood = () => {
//     this.setState(prevState => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };
//   handlerOnBtnNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };
//   handlerOnBtnBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const total = good + neutral + bad;
//     const positiveFeedback = Math.round((good * 100) / total);

//     return (
//       <div className={styles.wrapper}>
//         <h1 className={styles.name}>Please leave feedback</h1>
//         <div>
//           <button className={styles.good} onClick={this.handlerOnBtnGood}>
//             Good
//           </button>
//           <button className={styles.neutral} onClick={this.handlerOnBtnNeutral}>
//             Neutral
//           </button>
//           <button className={styles.bad} onClick={this.handlerOnBtnBad}>
//             Bad
//           </button>
//         </div>

//         {/* <div>
//           <h2>Statics</h2>
//           <p>Good: {good}</p>
//           <p>Neutral: {neutral}</p>
//           <p>Bad: {bad}</p>
//           <p>Total:{total}</p>
//           <p>Positive feedback: {positiveFeedback}%</p>
//         </div> */}
//       </div>
//     );
//   }
// }
// export default Feedback;
