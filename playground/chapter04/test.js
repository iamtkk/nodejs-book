const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const qs = require("querystring");

let test = "name=iamtk;age=41";

console.log("before parsing", test);
const parseCookies = (cookie) => {
  return cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};

console.log("after parsing", parseCookies(test));
