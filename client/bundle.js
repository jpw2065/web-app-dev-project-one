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
      class: this.props.select === "title-page" ? "pl-5 nav-selected" : "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/index"
    }, "Home"))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h5", {
      class: "pl-3"
    }, "Workers"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: this.props.select === "users-page" ? "pl-5 nav-selected" : "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/users"
    }, "All")), /*#__PURE__*/React.createElement("li", {
      class: this.props.select === "new-user-page" ? "pl-5 nav-selected" : "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/users/new"
    }, "Create"))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h5", {
      class: "pl-3"
    }, "Companies"), /*#__PURE__*/React.createElement("ul", {
      class: "list-inline"
    }, /*#__PURE__*/React.createElement("li", {
      class: this.props.select === "companies-page" ? "pl-5 nav-selected" : "pl-4"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/companies"
    }, "All")), /*#__PURE__*/React.createElement("li", {
      class: this.props.select === "new-company-page" ? "pl-5 nav-selected" : "pl-4"
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
    }, "VOCA"), /*#__PURE__*/React.createElement("p", {
      class: "mb-4"
    }, "CRM for skilled trade workers."), /*#__PURE__*/React.createElement("a", {
      href: "/users",
      class: "btn btn-primary",
      role: "button"
    }, "Find Workers")));
  }

}
;// CONCATENATED MODULE: ./client/components/title-page.js


class TitlePage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "title-page"
    }), /*#__PURE__*/React.createElement(Title, null));
  }

}
;// CONCATENATED MODULE: ./client/components/user-form.js
class UserForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleSubmit = e => {
      let formData = new FormData(e.target);
      var params = new URLSearchParams();

      for (var pair of formData.entries()) {
        typeof pair[1] == 'string' && params.append(pair[0], pair[1]);
      }

      params = params.toString();
      fetch('/api/users', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: params
      }).then(function (response) {
        if (response.status == 201) {
          window.location.href = "/users";
        }

        return response.json();
      });
      e.preventDefault();
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
      name: "name"
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-email"
    }, "Email:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-email",
      type: "email",
      class: "form-control",
      name: "email"
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
      name: "phone"
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-trade"
    }, "Trade:"), /*#__PURE__*/React.createElement("select", {
      id: "user-form-trade",
      class: "form-control",
      name: "trade"
    }, /*#__PURE__*/React.createElement("option", null, "Bell Hanger"), /*#__PURE__*/React.createElement("option", null, "Boilermaker"), /*#__PURE__*/React.createElement("option", null, "Carpenter"), /*#__PURE__*/React.createElement("option", null, "Carpet Layer"), /*#__PURE__*/React.createElement("option", null, "Dredger"), /*#__PURE__*/React.createElement("option", null, "Electrician"), /*#__PURE__*/React.createElement("option", null, "Elevator Mechanic"), /*#__PURE__*/React.createElement("option", null, "Fencer"), /*#__PURE__*/React.createElement("option", null, "Glazier"), /*#__PURE__*/React.createElement("option", null, "Heavy Equipment Operator"), /*#__PURE__*/React.createElement("option", null, "HVAC Technician"), /*#__PURE__*/React.createElement("option", null, "Insulation"), /*#__PURE__*/React.createElement("option", null, "Ironworker"), /*#__PURE__*/React.createElement("option", null, "Laborer"), /*#__PURE__*/React.createElement("option", null, "Landscaper"), /*#__PURE__*/React.createElement("option", null, "Lineman")))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-employed"
    }, "Employed:"), /*#__PURE__*/React.createElement("select", {
      id: "user-form-employed",
      class: "form-control",
      name: "employed"
    }, /*#__PURE__*/React.createElement("option", {
      value: "No"
    }, "No"), /*#__PURE__*/React.createElement("option", {
      value: "Yes"
    }, "Yes"))), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-employer"
    }, "Employer:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-employer",
      type: "text",
      class: "form-control",
      name: "employer"
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-info"
    }, "Additional Info"), /*#__PURE__*/React.createElement("textarea", {
      id: "user-form-info",
      class: "form-control",
      rows: "3",
      name: "info"
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
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "new-user-page"
    }), /*#__PURE__*/React.createElement(UserForm, null));
  }

}
;// CONCATENATED MODULE: ./client/components/user-card.js
class UserCard extends React.Component {
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    let employedColor = {};
    if (this.props.user.employed === "Yes") employedColor.backgroundColor = '#c4ffdb';
    return /*#__PURE__*/React.createElement("div", {
      class: "card text-left mb-4 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card-header font-weight-bold",
      style: employedColor
    }, /*#__PURE__*/React.createElement("h4", {
      class: "mb-2 mt-2"
    }, this.Capitalize(this.props.user.trade), " Worker")), /*#__PURE__*/React.createElement("div", {
      class: "card-body"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "font-weight-normal"
    }, this.props.user.name), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Phone: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.phone), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Email: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.email))), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Trade: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.trade), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Resume: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, "No"))), /*#__PURE__*/React.createElement("div", {
      class: "d-flex flex-row justify-content-end"
    }, /*#__PURE__*/React.createElement("a", {
      href: '/users/' + this.props.user.id,
      class: "btn btn-primary mr-3"
    }, "Profile"), /*#__PURE__*/React.createElement("a", {
      href: '/users/' + this.props.user.id + '/edit',
      class: "btn btn-primary mr-3"
    }, "Edit"))));
  }

}
;// CONCATENATED MODULE: ./client/components/users.js

class Users extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true,
      users: []
    };
  }

  async componentDidMount() {
    const url = "/api/users";
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        users: data,
        loading: false
      });
    }).catch(console.log);
  }

  render() {
    let noUsers;

    if (this.state.users.length == 0 && !this.state.loading) {
      noUsers = true;
    }

    return /*#__PURE__*/React.createElement("section", {
      class: "container mt-5 text-center overflow-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "mb-2"
    }, "Workers"), /*#__PURE__*/React.createElement("p", null, "Green = Employed, Grey = Not Employed"), this.state.loading && /*#__PURE__*/React.createElement("p", null, "Loading..."), noUsers && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      class: "mb-4"
    }, "No workers found! Add a new Worker to the database."), /*#__PURE__*/React.createElement("a", {
      href: "/users/new",
      class: "btn btn-primary",
      role: "button"
    }, "Add Workers")), this.state.users.map(user => /*#__PURE__*/React.createElement(UserCard, {
      user: user
    })));
  }

}
;// CONCATENATED MODULE: ./client/components/users-page.js


class UsersPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "users-page"
    }), /*#__PURE__*/React.createElement(Users, null));
  }

}
;// CONCATENATED MODULE: ./client/components/user-pofile.js
class UserProfile extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container d-flex flex-column justify-content-center"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card text-left mb-4 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card-header pt-4 pb-4"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "font-weight-normal card-title text-center m-0"
    }, this.props.user.name)), /*#__PURE__*/React.createElement("div", {
      class: "card-body pt-5 pb-5"
    }, /*#__PURE__*/React.createElement("h4", {
      class: "text-center mb-2"
    }, "Pesonal Information"), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Phone: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.phone), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Email: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.email))), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Trade: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.trade), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Resume: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, "No"))), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Employed: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.employed), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Employer: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.user.employer))), /*#__PURE__*/React.createElement("h4", {
      class: "text-center mt-5 mb-2"
    }, "Additional Information"), /*#__PURE__*/React.createElement("p", {
      class: "text-center"
    }, this.props.user.info)), /*#__PURE__*/React.createElement("div", {
      class: "card-footer pt-4 pb-4 d-flex flex-row justify-content-between"
    }, /*#__PURE__*/React.createElement("div", null, this.props.user.employed === "Yes" ? /*#__PURE__*/React.createElement("button", {
      class: "btn btn-primary"
    }, "Mark Un-employed") : /*#__PURE__*/React.createElement("button", {
      class: "btn btn-primary"
    }, "Mark Employed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "/users/new",
      class: "btn btn-primary mr-2",
      role: "button"
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      class: "btn btn-danger"
    }, "Delete")))));
  }

}
;// CONCATENATED MODULE: ./client/components/loading.js
class Loading extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("section", {
      class: "container mt-5 text-center"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "mb-2"
    }, "VOCA"), /*#__PURE__*/React.createElement("p", null, "Loading..."));
  }

}
;// CONCATENATED MODULE: ./client/components/user-page.js



class UserPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true,
      user: null
    };
  }

  async componentDidMount() {
    let currentLocation = window.location;
    console.log(currentLocation.origin + "/api" + currentLocation.pathname);
    fetch(currentLocation.origin + "/api" + currentLocation.pathname).then(res => res.json()).then(data => {
      this.setState({
        user: data,
        loading: false
      });
    }).catch(console.log);
  }

  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "users-page"
    }), !this.state.loading && /*#__PURE__*/React.createElement(UserProfile, {
      user: this.state.user
    }));
  }

}
;// CONCATENATED MODULE: ./client/components/components.js




window.MyReactComponents = {
  TitlePage: TitlePage,
  NewUserPage: NewUserPage,
  UsersPage: UsersPage,
  UserPage: UserPage
};
/******/ })()
;