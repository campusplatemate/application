import * as Yup from 'yup';

export const CreatePostSchema = Yup.object({
  food: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  bestDate: Yup.string().required(),
  image: Yup.string().url().required(),
  description: Yup.string().required(),
  location: Yup.string().required(),
  owner: Yup.string().required(),
});

export const EditPostSchema = Yup.object({
  id: Yup.number().required(),
  food: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  bestDate: Yup.string().required(),
  image: Yup.string().url().required(),
  description: Yup.string().required(),
  location: Yup.string().required(),
  owner: Yup.string().required(),
});
