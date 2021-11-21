import React, { useEffect, useState } from "react";
import QuestionController from "../../controllers/QuestionController";
import Question from "./Question";
import SnackbarUtils from "../../utils/SnackbarUtils";

export default function QuestionContainer({
  applicationProcessId,
  applicationId,
}) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    QuestionController.answer({
      application_process_id: applicationProcessId,
      answers: answers,
    })
      .then((res) => {
        SnackbarUtils.success(
          "Success answering question, please proceed to the next step."
        );
        setTimeout(() => {
          window.location.href = "/application-detail/" + applicationId;
        }, 1000);
      })
      .catch((err) => {
        SnackbarUtils.error("There is an error");
      });
  };

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
      <div className="flex flex-row-reverse">
        <button
          type="submit"
          className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
