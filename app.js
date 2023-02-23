import React, { useState } from 'react';//usesate redux 

export default function App() {
	const questions = [ // key value pair ( array )
		
		{
			questionText: 'What is 1 +2 ?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '2', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'how was your day?',
			answerOptions: [
				{ answerText: 'Procuctive', isCorrect: true },
				{ answerText: 'Not Productive', isCorrect: false },
				{ answerText: 'Lazy', isCorrect: false },
				{ answerText: 'dDONT kNOW', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	                                                            
													             //component defines 3 states using usestate ( hook) { The useState Hook can be used to keep
	                                                            //track of strings, numbers, booleans, arrays, objects, and any combination of these! 
	const [currentQuestion, setCurrentQuestion] = useState(0);															//We could create multiple state Hooks to track individual values.
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => { // checking if last optionclicked is correct and iscorrect given 
		                                             // to have iscorrect value as only correct only then score +1   
		if (isCorrect) {
			setScore(score + 1);//increment score for showscore 
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) { //to check the end of qns 
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return ( // renders ui displayed to user where returns div element with class ( app ) 
		<div className='app'>   
			{showScore ? (  //// showscore true then displays a div element with class name score section 
			//class question section with child element 
			// text of current question 
			 // map used when clicked call ( handleAnswerOptionClick ) function with boolean value 
			 //current qns number 
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'> 
						<div className='question-count'> 
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div> 
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
