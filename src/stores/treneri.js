import { defineStore } from 'pinia';
import data from '../data.json';

export const pristupDoTrenerov = defineStore('treneri', {
  state: () => ({
    data: data.treneri,
  }),
});