import React, { useState } from 'react';
import "./Form.css";
export default function Form() {
  /* submitting, success, empty */
  const [status, setStatus]= useState('empty');
  const [inputText, setInputText]= useState('');
  const [error, setError]= useState(null);

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  function handleTextAreaChange(e) {
    setInputText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(inputText);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  return (
    <div className="card">
      <h1>City Quiz</h1>
      <p>In which city does we have malatang?</p>
      <form onSubmit={handleSubmit}>
        <textarea disabled = { status === 'submitting' } onChange={handleTextAreaChange} value={inputText}/>
        <br />
        <button disabled={ inputText=== '' || status === 'submitting' } id="submit-btn">Submit</button>
        { error !== null && <p style={{color:"red"}}>{error.message}</p>}
      </form>
    </div>
);

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      let shouldError = answer.toLowerCase() !== 'chongqing';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    })
  }
}