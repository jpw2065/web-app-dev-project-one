import {CompanyForm} from "./company-form.js";

export class CompanyEdit extends React.Component {

    state = {
        loading: true,
        company: null
      };
  
    async componentDidMount()
    {
        let currentLocation = window.location;
        
        fetch(currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", ""))
            .then(res => res.json())
            .then((data) => {
                this.setState({ company: data, loading: false })
            })
            .catch(console.log)
    }

    handleSubmit = (e) => {

        let formData = new FormData(e.target);
        let currentLocation = window.location;
        let companyEndpoint = currentLocation.origin + "/api" + currentLocation.pathname.replace("/edit", "");

        var params = new URLSearchParams();
        for(var pair of formData.entries()){
            typeof pair[1]=='string' && params.append(pair[0], pair[1]);
        }
        params = params.toString();

        fetch(companyEndpoint, {
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
            { !this.state.loading && <h1 className="text-center mb-2">Edit Company : {this.state.company.name}</h1> }
            { !this.state.loading && <CompanyForm onSubmit={this.handleSubmit} company={ this.state.company } />  }
        </div>
      );
    }
}