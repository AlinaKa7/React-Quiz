import React, { useCallback, useEffect, useState } from "react";
import CardUnit from "../../pages/quizzes/QuizCard";
import { quizIcons } from "../../api/quiz-icon/quizIcon";
import CircularIndeterminate from "../loading/Loading";
import { Alert, AlertTitle, Stack } from "@mui/material";
import { CardWrapper } from "./styled";

export default function Main() {
	const [quizList, setQuizList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchQuizList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizIcons.get();
      setQuizList(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setQuizList, setLoading, setError]);

  useEffect(() => {
    fetchQuizList();
  }, [fetchQuizList]);

  if (loading) return <CircularIndeterminate />;
  if (error) return <Stack sx={{ width: '100%' }} spacing={2}>
  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
  </Alert>
</Stack>;

	return (
		<CardWrapper>
      {quizList.map((quizzes) => (
				<CardUnit key={quizzes.id} quizzes={quizzes} />
			))}
    </CardWrapper>
	);
}
