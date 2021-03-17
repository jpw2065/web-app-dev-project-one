import {CompanyForm} from "./company-form.js";

export class CompanyNew extends React.Component {


    handleSubmit = (e) => {

        let formData = new FormData(e.target);

        var params = new URLSearchParams();
        for(var pair of formData.entries()){
            typeof pair[1]=='string' && params.append(pair[0], pair[1]);
        }
        params = params.toString();

        fetch('/api/companies', {
            method: 'POST',
            
            // We convert the React state to JSON and send it as the POST body
            body: params
          }).then(function(response) {
            if(response.status == 201)
            {
                window.location.href = "/companies";
            }
            return response.json();
          });
    
        e.preventDefault();
    }


    render() {
      return (
        <div class="container d-flex flex-column justify-content-center">
            <h1 class="text-center mb-2">New Company</h1>
            <CompanyForm onSubmit={this.handleSubmit} />
        </div>
      );
    }
}