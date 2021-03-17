/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./client/components/universal/nav.js
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
;// CONCATENATED MODULE: ./client/components/universal/title.js
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
;// CONCATENATED MODULE: ./client/components/pages/title-page.js


class TitlePage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "title-page"
    }), /*#__PURE__*/React.createElement(Title, null));
  }

}
;// CONCATENATED MODULE: ./client/components/users/user-form.js
class UserForm extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.props.onSubmit
    }, /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      form: "user-form-name"
    }, "Name:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-name",
      required: true,
      type: "text",
      class: "form-control",
      name: "name",
      defaultValue: this.props.user && this.props.user.name
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-email"
    }, "Email:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-email",
      required: true,
      type: "email",
      class: "form-control",
      name: "email",
      defaultValue: this.props.user && this.props.user.email
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-phone"
    }, "Phone:"), /*#__PURE__*/React.createElement("input", {
      id: "user-form-phone",
      required: true,
      type: "tel",
      class: "form-control",
      name: "phone",
      defaultValue: this.props.user && this.props.user.phone
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-trade"
    }, "Trade:"), /*#__PURE__*/React.createElement("select", {
      id: "user-form-trade",
      required: true,
      class: "form-control",
      name: "trade",
      defaultValue: this.props.user && this.props.user.trade
    }, /*#__PURE__*/React.createElement("option", null, "Bell Hanger"), /*#__PURE__*/React.createElement("option", null, "Boilermaker"), /*#__PURE__*/React.createElement("option", null, "Carpenter"), /*#__PURE__*/React.createElement("option", null, "Carpet Layer"), /*#__PURE__*/React.createElement("option", null, "Dredger"), /*#__PURE__*/React.createElement("option", null, "Electrician"), /*#__PURE__*/React.createElement("option", null, "Elevator Mechanic"), /*#__PURE__*/React.createElement("option", null, "Fencer"), /*#__PURE__*/React.createElement("option", null, "Glazier"), /*#__PURE__*/React.createElement("option", null, "Heavy Equipment Operator"), /*#__PURE__*/React.createElement("option", null, "HVAC Technician"), /*#__PURE__*/React.createElement("option", null, "Insulation Installer"), /*#__PURE__*/React.createElement("option", null, "Ironworker"), /*#__PURE__*/React.createElement("option", null, "Laborer"), /*#__PURE__*/React.createElement("option", null, "Landscaper"), /*#__PURE__*/React.createElement("option", null, "Linemen"), /*#__PURE__*/React.createElement("option", null, "Mason"), /*#__PURE__*/React.createElement("option", null, "Millwright"), /*#__PURE__*/React.createElement("option", null, "Painter"), /*#__PURE__*/React.createElement("option", null, "Pile Driver"), /*#__PURE__*/React.createElement("option", null, "Pipefitter"), /*#__PURE__*/React.createElement("option", null, "Plasterer"), /*#__PURE__*/React.createElement("option", null, "Plumber"), /*#__PURE__*/React.createElement("option", null, "Roofer"), /*#__PURE__*/React.createElement("option", null, "Sheet Metal Worker"), /*#__PURE__*/React.createElement("option", null, "Sign Display Worker"), /*#__PURE__*/React.createElement("option", null, "Steak Fixer"), /*#__PURE__*/React.createElement("option", null, "Waterproofer"), /*#__PURE__*/React.createElement("option", null, "Welder"), /*#__PURE__*/React.createElement("option", null, "Other")))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "user-form-employed"
    }, "Employed:"), /*#__PURE__*/React.createElement("select", {
      id: "user-form-employed",
      class: "form-control",
      name: "employed",
      defaultValue: this.props.user && this.props.user.employed
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
      name: "employer",
      defaultValue: this.props.user && this.props.user.employer
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
      name: "info",
      defaultValue: this.props.user && this.props.user.info
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row text-center"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-primary"
    }, "Submit"))));
  }

}
;// CONCATENATED MODULE: ./client/components/users/user-new.js

class UserNew extends React.Component {
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
    }, "New Worker"), /*#__PURE__*/React.createElement(UserForm, {
      onSubmit: this.handleSubmit
    }));
  }

}
;// CONCATENATED MODULE: ./client/components/pages/new-user-page.js


class NewUserPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "new-user-page"
    }), /*#__PURE__*/React.createElement(UserNew, null));
  }

}
;// CONCATENATED MODULE: ./client/components/users/user-edit.js

class UserEdit extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true,
      user: null
    };

    this.handleSubmit = e => {
      let formData = new FormData(e.target);
      let currentLocation = window.location;
      let userEndpoint = currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", "");
      var params = new URLSearchParams();

      for (var pair of formData.entries()) {
        typeof pair[1] == 'string' && params.append(pair[0], pair[1]);
      }

      params = params.toString();
      fetch(userEndpoint, {
        method: 'PATCH',
        body: params
      }).then(function (response) {
        if (response.status == 201) {
          window.location.href = currentLocation.pathname.replace("/edit", "");
        }

        return response.json();
      });
      e.preventDefault();
    };
  }

  async componentDidMount() {
    let currentLocation = window.location;
    fetch(currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", "")).then(res => res.json()).then(data => {
      this.setState({
        user: data,
        loading: false
      });
    }).catch(console.log);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container d-flex flex-column justify-content-center"
    }, !this.state.loading && /*#__PURE__*/React.createElement("h1", {
      class: "text-center mb-2"
    }, "Edit Worker : ", this.state.user.name), !this.state.loading && /*#__PURE__*/React.createElement(UserForm, {
      onSubmit: this.handleSubmit,
      user: this.state.user
    }));
  }

}
;// CONCATENATED MODULE: ./client/components/pages/edit-user-page.js


class EditUserPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "users-page"
    }), /*#__PURE__*/React.createElement(UserEdit, null));
  }

}
;// CONCATENATED MODULE: ./client/components/users/user-card.js
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
;// CONCATENATED MODULE: ./client/components/users/users.js

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: []
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  async componentDidMount() {
    this.searchUsers("");
  }

  searchUsers(params) {
    fetch("/api/users" + params).then(res => res.json()).then(data => {
      this.setState({
        users: data,
        loading: false
      });
    }).catch(console.log);
  }

  onInputChange(event) {
    this.searchUsers("?search=" + event.target.value);
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
    }, "Workers"), /*#__PURE__*/React.createElement("p", null, "Green = Employed, Grey = Not Employed"), !this.state.loading && /*#__PURE__*/React.createElement("input", {
      class: "mb-3",
      placeholder: "Search Name...",
      type: "text",
      onChange: this.onInputChange
    }), this.state.loading && /*#__PURE__*/React.createElement("p", null, "Loading..."), noUsers && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
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
;// CONCATENATED MODULE: ./client/components/pages/users-page.js


class UsersPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "users-page"
    }), /*#__PURE__*/React.createElement(Users, null));
  }

}
;// CONCATENATED MODULE: ./client/components/users/user-pofile.js
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.user = props.user;
    this.state.user = props.user;
    this.setEmployed = this.setEmployed.bind(this);
    this.setUnemployed = this.setUnemployed.bind(this);
    this.setEmployedState = this.setEmployedState.bind(this);
  }

  setEmployedState(employedState) {
    this.setState(prevState => {
      let user = Object.assign({}, prevState.user);
      user.employed = employedState;
      return {
        user
      };
    });
  }

  setEmployed() {
    this.setEmployedState("Yes");
    this.edit("employed=Yes");
  }

  setUnemployed() {
    this.setEmployedState("No");
    this.edit("employed=No");
  }

  edit(params) {
    let currentLocation = window.location;
    fetch(currentLocation.origin + "/api" + currentLocation.pathname, {
      method: 'PATCH',
      body: params
    });
  }

  delete() {
    let currentLocation = window.location;
    fetch(currentLocation.origin + "/api" + currentLocation.pathname, {
      method: 'DELETE'
    }).then(() => {
      window.location.href = "/users";
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container d-flex flex-column justify-content-center"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card text-left mb-4 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card-header pt-4 pb-4"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "font-weight-normal card-title text-center m-0"
    }, this.state.user.name)), /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement("p", null, this.state.user.phone), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Email: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.user.email))), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Trade: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.user.trade), /*#__PURE__*/React.createElement("p", {
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
    }, /*#__PURE__*/React.createElement("p", null, this.state.user.employed), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Employer: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.user.employer))), /*#__PURE__*/React.createElement("h4", {
      class: "text-center mt-5 mb-2"
    }, "Additional Information"), /*#__PURE__*/React.createElement("p", {
      class: "text-center"
    }, this.state.user.info)), /*#__PURE__*/React.createElement("div", {
      class: "card-footer pt-4 pb-4 d-flex flex-row justify-content-between"
    }, /*#__PURE__*/React.createElement("div", null, this.state.user.employed === "Yes" ? /*#__PURE__*/React.createElement("button", {
      class: "btn btn-primary",
      onClick: () => this.setUnemployed()
    }, "Mark Un-employed") : /*#__PURE__*/React.createElement("button", {
      class: "btn btn-primary",
      onClick: () => this.setEmployed()
    }, "Mark Employed")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "/users/" + this.state.user.id + "/edit",
      class: "btn btn-primary mr-2",
      role: "button"
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      class: "btn btn-danger",
      onClick: () => this.delete()
    }, "Delete")))));
  }

}
;// CONCATENATED MODULE: ./client/components/pages/user-page.js


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
;// CONCATENATED MODULE: ./client/components/companies/company-form.js
class CompanyForm extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.props.onSubmit
    }, /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      form: "company-form-contact-name"
    }, "Contact Name:"), /*#__PURE__*/React.createElement("input", {
      id: "company-form-contact-name",
      type: "text",
      class: "form-control",
      name: "contact_name",
      defaultValue: this.props.company && this.props.company.contact_name
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "company-form-contact-email"
    }, "Contact Email:"), /*#__PURE__*/React.createElement("input", {
      id: "company-form-contact-email",
      type: "email",
      class: "form-control",
      name: "contact_email",
      defaultValue: this.props.company && this.props.company.contact_email
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "company-form-contact-phone"
    }, "Contact Phone:"), /*#__PURE__*/React.createElement("input", {
      id: "company-form-contact-phone",
      type: "tel",
      class: "form-control",
      name: "contact_phone",
      defaultValue: this.props.company && this.props.company.contact_phone
    })), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "company-form-name"
    }, "Company Name:"), /*#__PURE__*/React.createElement("input", {
      id: "company-form-name",
      required: true,
      type: "text",
      class: "form-control",
      name: "name",
      defaultValue: this.props.company && this.props.company.name
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "company-form-industry"
    }, "Industry:"), /*#__PURE__*/React.createElement("select", {
      id: "company-form-industry",
      required: true,
      class: "form-control",
      name: "industry",
      defaultValue: this.props.company && this.props.company.industry
    }, /*#__PURE__*/React.createElement("option", null, "Bell Hanger"), /*#__PURE__*/React.createElement("option", null, "Boilermaker"), /*#__PURE__*/React.createElement("option", null, "Carpenter"), /*#__PURE__*/React.createElement("option", null, "Carpet Layer"), /*#__PURE__*/React.createElement("option", null, "Dredger"), /*#__PURE__*/React.createElement("option", null, "Electrician"), /*#__PURE__*/React.createElement("option", null, "Elevator Mechanic"), /*#__PURE__*/React.createElement("option", null, "Fencer"), /*#__PURE__*/React.createElement("option", null, "Glazier"), /*#__PURE__*/React.createElement("option", null, "Heavy Equipment Operator"), /*#__PURE__*/React.createElement("option", null, "HVAC Technician"), /*#__PURE__*/React.createElement("option", null, "Insulation Installer"), /*#__PURE__*/React.createElement("option", null, "Ironworker"), /*#__PURE__*/React.createElement("option", null, "Laborer"), /*#__PURE__*/React.createElement("option", null, "Landscaper"), /*#__PURE__*/React.createElement("option", null, "Linemen"), /*#__PURE__*/React.createElement("option", null, "Mason"), /*#__PURE__*/React.createElement("option", null, "Millwright"), /*#__PURE__*/React.createElement("option", null, "Painter"), /*#__PURE__*/React.createElement("option", null, "Pile Driver"), /*#__PURE__*/React.createElement("option", null, "Pipefitter"), /*#__PURE__*/React.createElement("option", null, "Plasterer"), /*#__PURE__*/React.createElement("option", null, "Plumber"), /*#__PURE__*/React.createElement("option", null, "Roofer"), /*#__PURE__*/React.createElement("option", null, "Sheet Metal Worker"), /*#__PURE__*/React.createElement("option", null, "Sign Display Worker"), /*#__PURE__*/React.createElement("option", null, "Steak Fixer"), /*#__PURE__*/React.createElement("option", null, "Waterproofer"), /*#__PURE__*/React.createElement("option", null, "Welder"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "company-form-size"
    }, "Size (people):"), /*#__PURE__*/React.createElement("input", {
      id: "company-form-size",
      type: "text",
      required: true,
      class: "form-control",
      name: "size",
      defaultValue: this.props.company && this.props.company.size
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "company-form-address"
    }, "Address:"), /*#__PURE__*/React.createElement("input", {
      id: "company-form-address",
      type: "text",
      required: true,
      class: "form-control",
      name: "address",
      defaultValue: this.props.company && this.props.company.address
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("label", {
      for: "company-form-info"
    }, "Additional Info"), /*#__PURE__*/React.createElement("textarea", {
      id: "company-form-info",
      class: "form-control",
      rows: "3",
      name: "info",
      defaultValue: this.props.company && this.props.company.info
    }))), /*#__PURE__*/React.createElement("div", {
      class: "form-row text-center"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-primary"
    }, "Submit"))));
  }

}
;// CONCATENATED MODULE: ./client/components/companies/company-new.js

class CompanyNew extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleSubmit = e => {
      let formData = new FormData(e.target);
      var params = new URLSearchParams();

      for (var pair of formData.entries()) {
        typeof pair[1] == 'string' && params.append(pair[0], pair[1]);
      }

      params = params.toString();
      fetch('/api/companies', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: params
      }).then(function (response) {
        if (response.status == 201) {
          window.location.href = "/companies";
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
    }, "New Company"), /*#__PURE__*/React.createElement(CompanyForm, {
      onSubmit: this.handleSubmit
    }));
  }

}
;// CONCATENATED MODULE: ./client/components/pages/new-company-page.js


class NewCompanyPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "new-company-page"
    }), /*#__PURE__*/React.createElement(CompanyNew, null));
  }

}
;// CONCATENATED MODULE: ./client/components/companies/company-edit.js

class CompanyEdit extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true,
      company: null
    };

    this.handleSubmit = e => {
      let formData = new FormData(e.target);
      let currentLocation = window.location;
      let companyEndpoint = currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", "");
      var params = new URLSearchParams();

      for (var pair of formData.entries()) {
        typeof pair[1] == 'string' && params.append(pair[0], pair[1]);
      }

      params = params.toString();
      fetch(companyEndpoint, {
        method: 'PATCH',
        body: params
      }).then(function (response) {
        if (response.status == 201) {
          window.location.href = currentLocation.pathname.replace("/edit", "");
        }

        return response.json();
      });
      e.preventDefault();
    };
  }

  async componentDidMount() {
    let currentLocation = window.location;
    fetch(currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", "")).then(res => res.json()).then(data => {
      this.setState({
        company: data,
        loading: false
      });
    }).catch(console.log);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container d-flex flex-column justify-content-center"
    }, !this.state.loading && /*#__PURE__*/React.createElement("h1", {
      class: "text-center mb-2"
    }, "Edit Company : ", this.state.company.name), !this.state.loading && /*#__PURE__*/React.createElement(CompanyForm, {
      onSubmit: this.handleSubmit,
      company: this.state.company
    }));
  }

}
;// CONCATENATED MODULE: ./client/components/pages/edit-company-page.js


class EditCompanyPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "companies-page"
    }), /*#__PURE__*/React.createElement(CompanyEdit, null));
  }

}
;// CONCATENATED MODULE: ./client/components/companies/company-card.js
class CompanyCard extends React.Component {
  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "card text-left mb-4 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card-header font-weight-bold"
    }, /*#__PURE__*/React.createElement("h4", {
      class: "mb-2 mt-2"
    }, this.Capitalize(this.props.company.industry), " Company")), /*#__PURE__*/React.createElement("div", {
      class: "card-body"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "font-weight-normal"
    }, this.props.company.name), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Industry: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.company.industry), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Size (People): ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.company.size))), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Contact Name: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.company.contact_name), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Contact Phone: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.company.contact_phone))), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Contact Email: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.props.company.contact_email))), /*#__PURE__*/React.createElement("div", {
      class: "d-flex flex-row justify-content-end"
    }, /*#__PURE__*/React.createElement("a", {
      href: '/companies/' + this.props.company.id,
      class: "btn btn-primary mr-3"
    }, "Profile"), /*#__PURE__*/React.createElement("a", {
      href: '/companies/' + this.props.company.id + '/edit',
      class: "btn btn-primary mr-3"
    }, "Edit"))));
  }

}
;// CONCATENATED MODULE: ./client/components/companies/companies.js

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      companies: []
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  async componentDidMount() {
    this.searchCompanies("");
  }

  searchCompanies(params) {
    fetch("/api/companies" + params).then(res => res.json()).then(data => {
      this.setState({
        companies: data,
        loading: false
      });
    }).catch(console.log);
  }

  onInputChange(event) {
    this.searchCompanies("?search=" + event.target.value);
  }

  render() {
    let noCompanies;

    if (this.state.companies.length == 0 && !this.state.loading) {
      noCompanies = true;
    }

    return /*#__PURE__*/React.createElement("section", {
      class: "container mt-5 text-center overflow-auto"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "mb-2"
    }, "Companies"), !this.state.loading && /*#__PURE__*/React.createElement("input", {
      class: "mb-3",
      placeholder: "Search Name...",
      type: "text",
      onChange: this.onInputChange
    }), this.state.loading && /*#__PURE__*/React.createElement("p", null, "Loading..."), noCompanies && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      class: "mb-4"
    }, "No companies found! Add a new Company to the database."), /*#__PURE__*/React.createElement("a", {
      href: "/companies/new",
      class: "btn btn-primary",
      role: "button"
    }, "Add Company")), this.state.companies.map(company => /*#__PURE__*/React.createElement(CompanyCard, {
      company: company
    })));
  }

}
;// CONCATENATED MODULE: ./client/components/pages/companies-page.js


class CompaniesPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "companies-page"
    }), /*#__PURE__*/React.createElement(Companies, null));
  }

}
;// CONCATENATED MODULE: ./client/components/companies/company-pofile.js
class CompanyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null
    };
    this.company = props.company;
    this.state.company = props.company;
  }

  edit(params) {
    let currentLocation = window.location;
    fetch(currentLocation.origin + "/api" + currentLocation.pathname, {
      method: 'PATCH',
      body: params
    });
  }

  delete() {
    let currentLocation = window.location;
    fetch(currentLocation.origin + "/api" + currentLocation.pathname, {
      method: 'DELETE'
    }).then(() => {
      window.location.href = "/companies";
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container d-flex flex-column justify-content-center"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card text-left mb-4 mt-4"
    }, /*#__PURE__*/React.createElement("div", {
      class: "card-header pt-4 pb-4"
    }, /*#__PURE__*/React.createElement("h1", {
      class: "font-weight-normal card-title text-center m-0"
    }, this.state.company.name)), /*#__PURE__*/React.createElement("div", {
      class: "card-body pt-5 pb-5"
    }, /*#__PURE__*/React.createElement("h4", {
      class: "text-center mb-2"
    }, "Company Information"), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Industry: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.company.industry), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Size (People): ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.company.size))), /*#__PURE__*/React.createElement("h4", {
      class: "text-center mt-5 mb-2"
    }, "Contact Information"), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Name: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.company.contact_name), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Phone: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-left p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.company.contact_phone))), /*#__PURE__*/React.createElement("div", {
      class: "row"
    }, /*#__PURE__*/React.createElement("div", {
      class: "col-4 text-right p-0"
    }, /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }, "Email: ")), /*#__PURE__*/React.createElement("div", {
      class: "col-4 d-flex flex-row justify-content-between p-0"
    }, /*#__PURE__*/React.createElement("p", null, this.state.company.contact_email), /*#__PURE__*/React.createElement("p", {
      class: "font-weight-bold pr-2"
    }))), /*#__PURE__*/React.createElement("h4", {
      class: "text-center mt-5 mb-2"
    }, "Additional Information"), /*#__PURE__*/React.createElement("p", {
      class: "text-center"
    }, this.state.company.info)), /*#__PURE__*/React.createElement("div", {
      class: "card-footer pt-4 pb-4 d-flex flex-row justify-content-end"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "/companies/" + this.state.company.id + "/edit",
      class: "btn btn-primary mr-2",
      role: "button"
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      class: "btn btn-danger",
      onClick: () => this.delete()
    }, "Delete")))));
  }

}
;// CONCATENATED MODULE: ./client/components/pages/company-page.js


class CompanyPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true,
      company: null
    };
  }

  async componentDidMount() {
    let currentLocation = window.location;
    fetch(currentLocation.origin + "/api" + currentLocation.pathname).then(res => res.json()).then(data => {
      this.setState({
        company: data,
        loading: false
      });
    }).catch(console.log);
  }

  render() {
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Nav, {
      select: "companies-page"
    }), !this.state.loading && /*#__PURE__*/React.createElement(CompanyProfile, {
      company: this.state.company
    }));
  }

}
;// CONCATENATED MODULE: ./client/components/components.js









window.MyReactComponents = {
  TitlePage: TitlePage,
  NewUserPage: NewUserPage,
  EditUserPage: EditUserPage,
  UsersPage: UsersPage,
  UserPage: UserPage,
  NewCompanyPage: NewCompanyPage,
  EditCompanyPage: EditCompanyPage,
  CompaniesPage: CompaniesPage,
  CompanyPage: CompanyPage
};
/******/ })()
;