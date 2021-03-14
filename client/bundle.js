/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./client/components/nav.js
class Nav extends React.Component {
  render() {
    var currentLocation = window.location;
    console.log(currentLocation);
    return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("h1", {
      class: "mb-4 mt-3 pl-3"
    }, "VOCA"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: "pl-5 nav-selected"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/index"
    }, "Home"))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h5", {
      class: "pl-3"
    }, "Users"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/users"
    }, "All")), /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/users/new"
    }, "Create"))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h5", {
      class: "pl-3"
    }, "Companies"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/companies"
    }, "All")), /*#__PURE__*/React.createElement("li", {
      class: "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/companies/new"
    }, "Create"))));
  }

}
;// CONCATENATED MODULE: ./client/components/title.js
class Title extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container d-flex flex-column justify-content-center"
    }, /*#__PURE__*/React.createElement("header", {
      class: "text-center"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "display-1"
    }, "VOCA"), /*#__PURE__*/React.createElement("p", null, "CRM for skilled trade workers."), /*#__PURE__*/React.createElement("button", {
      class: "btn btn-primary"
    }, "Find Workers")));
  }

}
;// CONCATENATED MODULE: ./client/components/title-page.js


class TitlePage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Title, null));
  }

}
;// CONCATENATED MODULE: ./client/components/user-form.js
class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      alert("Sup bruh");
    };

    this.state = {
      name: '',
      email: '',
      phone: '',
      trade: '',
      info: '',
      resume: ''
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container d-flex flex-column justify-content-center"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "text-center mb-2"
    }, "New Worker"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      form: "user-form-name"
    }, "Name:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-name",
      type: "text",
      class: "form-control",
      name: "name",
      value: this.state.value,
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-email"
    }, "Email:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-email",
      type: "email",
      class: "form-control",
      placeholder: "Email",
      name: "email",
      value: this.state.value,
      onChange: this.handleChange
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-phone"
    }, "Phone:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-phone",
      type: "tel",
      class: "form-control",
      placeholder: "Phone Number",
      name: "phone",
      value: this.state.value,
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-trade"
    }, "Trade:"), /*#__PURE__*/React.createElement("select", {
      id: "user-form-trade",
      class: "form-control",
      name: "trade",
      value: this.state.value,
      onChange: this.handleChange
    }, /*#__PURE__*/React.createElement("option", null, "Bell Hanger"), /*#__PURE__*/React.createElement("option", null, "Boilermaker"), /*#__PURE__*/React.createElement("option", null, "Carpenter"), /*#__PURE__*/React.createElement("option", null, "Carpet Layer"), /*#__PURE__*/React.createElement("option", null, "Dredger"), /*#__PURE__*/React.createElement("option", null, "Electrician"), /*#__PURE__*/React.createElement("option", null, "Elevator Mechanic"), /*#__PURE__*/React.createElement("option", null, "Fencer"), /*#__PURE__*/React.createElement("option", null, "Glazier"), /*#__PURE__*/React.createElement("option", null, "Heavy Equipment Operator"), /*#__PURE__*/React.createElement("option", null, "HVAC Technician"), /*#__PURE__*/React.createElement("option", null, "Insulation"), /*#__PURE__*/React.createElement("option", null, "Ironworker"), /*#__PURE__*/React.createElement("option", null, "Laborer"), /*#__PURE__*/React.createElement("option", null, "Landscaper"), /*#__PURE__*/React.createElement("option", null, "Lineman")))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-info"
    }, "Additional Info"), /*#__PURE__*/React.createElement("textarea", {
      id: "user-form-info",
      class: "form-control",
      rows: "3",
      placeholdre: "Additional Information",
      name: "info",
      value: this.state.value,
      onChange: this.handleChange
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-resume"
    }, "Resume:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-resume",
      type: "file",
      class: "form-control-file",
      name: "resume",
      value: this.state.value,
      onChange: this.handleChange
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row text-center"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-primary"
    }, "Submit")))));
  }

}
;// CONCATENATED MODULE: ./client/components/new-user-page.js


class NewUserPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(UserForm, null));
  }

}
;// CONCATENATED MODULE: ./client/components/components.js


window.MyReactComponents = {
  TitlePage: TitlePage,
  NewUserPage: NewUserPage
};
/******/ })()
;