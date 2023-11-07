import * as yup from 'yup';

export const fooValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
});
