/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./client/components/nav.js
class Nav extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("h1", {
      class: "mb-4 mt-3 pl-3"
    }, "VOCA"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, "Home")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h5", {
      class: "pl-3"
    }, "Users"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: "pl-5 nav-selected"
    }, "All"), /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, "Create")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h5", {
      class: "pl-3"
    }, "Companies"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, "All"), /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, "Create")));
  }

}
;// CONCATENATED MODULE: ./client/components/title.js
class Title extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("header", {
      class: "text-align-center"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "display-4"
    }, "VOCA"), /*#__PURE__*/React.createElement("p", null, "CRM for skilled trade workers."));
  }

}
;// CONCATENATED MODULE: ./client/components/titlePage.js
class TitlePage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("nav_Nav", null), /*#__PURE__*/React.createElement("title_Title", null));
  }

}
;// CONCATENATED MODULE: ./client/components/components.js



window.MyReactComponents = {
  TitlePage: TitlePage
};
/******/ })()
;