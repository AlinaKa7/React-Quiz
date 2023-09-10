import axios from '../service';

const quizIcons = {
  get: () => axios.get('/quizzes')
  .then(({ data }) => data)
  .catch((err) => {
    throw new Error(err);
  }),
  // post: (params) => axios.post('/quizzes', params)
  // .then(({ data }) => data)
  // .catch((err) => {
  //   throw new Error(err);
  // }),
};

export { quizIcons };