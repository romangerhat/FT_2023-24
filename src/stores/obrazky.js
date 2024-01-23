import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupDoObrazkov = defineStore('obrazky', {
  state: () => ({
    data: data.obrazky,
  }),
});