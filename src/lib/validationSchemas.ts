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

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export interface Post {
  faceImg: string;
  foodName: string;
  quantity: number;
  bestDate: string;
  foodImg: string;
  location: string;
  message: string;
  owner: string;
}
