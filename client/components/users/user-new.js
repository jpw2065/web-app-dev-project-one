import {UserForm} from "./user-form.js";

export class UserNew extends React.Component {


    handleSubmit = (e) => {

        let formData = new FormData(e.target);

        var params = new URLSearchParams();
        for(var pair of formData.entries()){
            typeof pair[1]=='string' && params.append(pair[0], pair[1]);
        }
        params = params.toString();

        fetch('/api/users', {
            method: 'POST',
            
            // We convert the React state to JSON and send it as the POST body
            body: params
          }).then(function(response) {
            if(response.status == 201)
            {
                window.location.href = "/users";
            }
            return response.json();
          });
    
        e.preventDefault();
    }


    render() {
      return (
        <div className="container d-flex flex-column justify-content-center">
            <h1 className="text-center mb-2">New Worker</h1>
            <UserForm onSubmit={this.handleSubmit} />
        </div>
      );
    }
}