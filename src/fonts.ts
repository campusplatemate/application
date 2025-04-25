import { Kanit, Roboto, Lato, Bitter, Archivo_Black, Lexend } from 'next/font/google';

export const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
});

export const bitter = Bitter({
  weight: '400',
  subsets: ['latin'],
});

export const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const archivo = Archivo_Black({
  weight: ['400'],
  subsets: ['latin'],
});

export const lexend = Lexend({
  weight: ['400'],
  subsets: ['latin'],
});
