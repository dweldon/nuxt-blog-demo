/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { format } from 'date-fns';

Vue.filter('date', date => format(date, 'MMMM Do YYYY'));
