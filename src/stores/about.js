import { defineStore } from 'pinia';
import data from '../data.json';

export const aboutPristup = defineStore('about', {
  state: () => ({
    data: data.about,
  }),
});