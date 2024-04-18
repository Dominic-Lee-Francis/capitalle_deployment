useEffect(() => {
  axios.get("/capital/checkQuiz", { user }).then((res) => {
    if (res.data.quiz_completed_today === true) {
      setGuesses(0);
      setFeedback("You have already completed the quiz today!");
    }
  });
}, [user]);
