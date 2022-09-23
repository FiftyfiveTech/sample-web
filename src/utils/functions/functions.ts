import { emailRegexp } from "../help";
import _ from "lodash";

const isEmail = (email: string) => emailRegexp.test(email);

const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const getItem = (key: string) => {
  return localStorage.getItem(key);
};

const sortByDate = (data: string, key: string, order: string) => {
  return _.orderBy(data, (a) => new Date(a[key]), [order]);
};

export { isEmail, getItem, setItem, sortByDate };
