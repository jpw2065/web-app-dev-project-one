import {UserForm} from "./user-form.js";

export class UserEdit extends React.Component {

    state = {
        loading: true,
        user: null
      };
  
    async componentDidMount()
    {
        let currentLocation = window.location;
        
        fetch(currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", ""))
            .then(res => res.json())
            .then((data) => {
                this.setState({ user: data, loading: false })
            })
            .catch(console.log)
    }

    handleSubmit = (e) => {

        let formData = new FormData(e.target);
        let currentLocation = window.location;
        let userEndpoint = currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", "");

        var params = new URLSearchParams();
        for(var pair of formData.entries()){
            typeof pair[1]=='string' && params.append(pair[0], pair[1]);
        }
        params = params.toString();

        fetch(userEndpoint, {
            method: 'PATCH',
            body: params
          }).then(function(response) {
            if(response.status == 201)
            {
                window.location.href = currentLocation.pathname.replace("/edit", "");
            }
            return response.json();
          });
    
        e.preventDefault();
    }

    render() {
      return (
        <div className="container d-flex flex-column justify-content-center">
            { !this.state.loading && <h1 className="text-center mb-2">Edit Worker : {this.state.user.name}</h1> }
            { !this.state.loading && <UserForm onSubmit={this.handleSubmit} user={ this.state.user } />  }
        </div>
      );
    }
}