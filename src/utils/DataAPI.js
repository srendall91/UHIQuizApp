const api = process.env.REACT_APP_QUIZ_API_URL || 'http://localhost:5002';

let token = localStorage.token;

if(!token){
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept':'application/json',
  'Authorization': token
}

export const getAllQuizzes = () =>
  fetch(`${api}/quizzes`, {headers})
  .then(res => res.json())
  .then(data => data);

export const getAllQuestions = () =>
  fetch(`${api}/questions`, {headers})
  .then(res => res.json())
  .then(data => data);

export const getAQuiz = (quiz_id) => 
  fetch(`${api}/quizzes/${quiz_id}`, {headers})
  .then(res => res.json())
  .then(data => data);

export const questionCorrect = (quiz_id, question_id) => 
  fetch(`${api}/quizzes/${quiz_id}/correct/${question_id}`, {headers})
  .then(res => res.json())
  .then(data => data);

export const questionIncorrect = (quiz_id, question_id) => 
  fetch(`${api}/quizzes/${quiz_id}/incorrect/${question_id}`, {headers})
  .then(res => res.json())
  .then(data => data);

export const viewedHint = (question_id) => 
  fetch(`${api}/questions/hint/${question_id}`, {headers})
  .then(res => res.json())
  .then(data => data);

export const questionAttempt = (question_id) => 
  fetch(`${api}/questions/attempt/${question_id}`, {headers})
  .then(res => res.json())
  .then(data => data);

export const resetQuiz = (quiz_id) => 
  fetch(`${api}/quizzes/reset/${quiz_id}`, {headers})
  .then(res => res.json())
  .then(data => data);

export const resetQuestion = (question_id) => 
  fetch(`${api}/questions/reset/${question_id}`, {headers})
  .then(res => res.json())
  .then(data => data);


