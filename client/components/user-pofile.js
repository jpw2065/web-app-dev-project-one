
export class UserProfile extends React.Component {

    render() {
      return (
        <div class="container d-flex flex-column justify-content-center">

            <div class="card text-left mb-4 mt-4">
                <div class="card-header pt-4 pb-4">
                    <h1 class="font-weight-normal card-title text-center m-0">{this.props.user.name}</h1>
                </div>

                <div class="card-body pt-5 pb-5">
                    <h4 class="text-center mb-2">Pesonal Information</h4>
                    <div class="row">
                        <div class="col-4 text-right p-0">
                            <p class="font-weight-bold pr-2">Phone: </p>
                        </div>

                        <div class="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.user.phone}</p>
                            <p class="font-weight-bold pr-2">Email: </p>
                        </div>

                        <div class="col-4 text-left p-0">
                            <p>{this.props.user.email}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 text-right p-0">
                            <p class="font-weight-bold pr-2">Trade: </p>
                        </div>

                        <div class="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.user.trade}</p>
                            <p class="font-weight-bold pr-2">Resume: </p>
                        </div>

                        <div class="col-4 text-left p-0">
                            <p>No</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 text-right p-0">
                            <p class="font-weight-bold pr-2">Employed: </p>
                        </div>

                        <div class="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.user.employed}</p>
                            <p class="font-weight-bold pr-2">Employer: </p>
                        </div>

                        <div class="col-4 text-left p-0">
                            <p>{this.props.user.employer}</p>
                        </div>
                    </div>

                    <h4 class="text-center mt-5 mb-2">Additional Information</h4>
                    <p class="text-center">{this.props.user.info}</p>
                </div>

                <div class="card-footer pt-4 pb-4 d-flex flex-row justify-content-between">
                    <div>
                        {this.props.user.employed === "Yes" ? (<button class="btn btn-primary">Mark Un-employed</button>) : (<button class="btn btn-primary">Mark Employed</button>) }
                    </div>  
                    <div>
                        <a href="/users/new" class="btn btn-primary mr-2" role="button">Edit</a>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
      );
    }
}