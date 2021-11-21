import React, { useEffect, useState } from "react";
import QuestionController from "../../controllers/QuestionController";
import Question from "./Question";

export default function QuestionContainer({ applicationProcessId }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    QuestionController.getQuestionList().then((res) => {
      setQuestions(res.data.contents);
    });
  }, []);

  return (
    <>
      {questions.map((res, idx) => (
        <Question
          {...res}
          idx={idx + 1}
          onChoose={(e) => {
            const all = answers;
            const temp = answers.filter(
              (x) => x.basic_test_question_id === res.id
            );
            if (temp.length === 0) {
              all.push({
                application_process_id: applicationProcessId,
                basic_test_question_id: res.id,
                answer: e,
              });
            } else {
              for (let i = 0; i < all.length; i++) {
                if (all[i].basic_test_question_id === res.id) {
                  all[i].answer = e;
                  break;
                }
              }
            }
            setAnswers([...all]);
          }}
        />
      ))}
    </>
  );
}
