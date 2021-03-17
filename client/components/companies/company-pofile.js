
export class CompanyProfile extends React.Component {

    state = {
        company: null
    };

    constructor(props)
    {
        super(props);
        this.company = props.company;
        this.state.company = props.company;

    }

    edit(params)
    {
        let currentLocation = window.location;
       fetch(currentLocation.origin + "/api" + currentLocation.pathname, {
            method: 'PATCH',
            body: params
        });
    }


    delete()
    {
        let currentLocation = window.location;
       fetch(currentLocation.origin + "/api" + currentLocation.pathname, {
            method: 'DELETE'
        }).then(() => {
            window.location.href = "/companies"
        });
    }

    render() {
      return (
        <div class="container d-flex flex-column justify-content-center">

            <div class="card text-left mb-4 mt-4">
                <div class="card-header pt-4 pb-4">
                    <h1 class="font-weight-normal card-title text-center m-0">{this.state.company.name}</h1>
                </div>

                <div class="card-body pt-5 pb-5">
                    <h4 class="text-center mb-2">Company Information</h4>
                    <div class="row">
                        <div class="col-4 text-right p-0">
                            <p class="font-weight-bold pr-2">Industry: </p>
                        </div>

                        <div class="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.state.company.industry}</p>
                            <p class="font-weight-bold pr-2">Size (People): </p>
                        </div>

                        <div class="col-4 text-left p-0">
                            <p>{this.state.company.size}</p>
                        </div>
                    </div>

                    <h4 class="text-center mt-5 mb-2">Contact Information</h4>
                    <div class="row">
                        <div class="col-4 text-right p-0">
                            <p class="font-weight-bold pr-2">Name: </p>
                        </div>

                        <div class="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.state.company.contact_name}</p>
                            <p class="font-weight-bold pr-2">Phone: </p>
                        </div>

                        <div class="col-4 text-left p-0">
                            <p>{this.state.company.contact_phone}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 text-right p-0">
                            <p class="font-weight-bold pr-2">Email: </p>
                        </div>

                        <div class="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.state.company.contact_email}</p>
                            <p class="font-weight-bold pr-2"></p>
                        </div>
                    </div>

                    <h4 class="text-center mt-5 mb-2">Additional Information</h4>
                    <p class="text-center">{this.state.company.info}</p>
                </div>

                <div class="card-footer pt-4 pb-4 d-flex flex-row justify-content-end">
                    <div>
                        <a href={ "/companies/" + this.state.company.id + "/edit" } class="btn btn-primary mr-2" role="button">Edit</a>
                        <button class="btn btn-danger" onClick={() => this.delete() }>Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
      );
    }
}