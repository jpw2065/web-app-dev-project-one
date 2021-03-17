
export class UserProfile extends React.Component {

    state = {
        user: null
    };

    constructor(props)
    {
        super(props);
        this.user = props.user;
        this.state.user = props.user;

        this.setEmployed = this.setEmployed.bind(this);
        this.setUnemployed = this.setUnemployed.bind(this);
        this.setEmployedState = this.setEmployedState.bind(this);
    }

    setEmployedState(employedState)
    {
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user); 
            user.employed = employedState;                                
            return { user };
        })
    }

    setEmployed()
    {
        this.setEmployedState("Yes");
        this.edit("employed=Yes");
    }

    setUnemployed()
    {
        this.setEmployedState("No");
        this.edit("employed=No");
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
            window.location.href = "/users"
        });
    }

    render() {
      return (
        <div className="container d-flex flex-column justify-content-center">

            <div className="card text-left mb-4 mt-4">
                <div className="card-header pt-4 pb-4">
                    <h1 className="font-weight-normal card-title text-center m-0">{this.state.user.name}</h1>
                </div>

                <div className="card-body pt-5 pb-5">
                    <h4 className="text-center mb-2">Pesonal Information</h4>
                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Phone: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.state.user.phone}</p>
                            <p className="font-weight-bold pr-2">Email: </p>
                        </div>

                        <div className="col-4 text-left p-0">
                            <p>{this.state.user.email}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Trade: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.state.user.trade}</p>
                            <p className="font-weight-bold pr-2">Resume: </p>
                        </div>

                        <div className="col-4 text-left p-0">
                            <p>No</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Employed: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.state.user.employed}</p>
                            <p className="font-weight-bold pr-2">Employer: </p>
                        </div>

                        <div className="col-4 text-left p-0">
                            <p>{this.state.user.employer}</p>
                        </div>
                    </div>

                    <h4 className="text-center mt-5 mb-2">Additional Information</h4>
                    <p className="text-center">{this.state.user.info}</p>
                </div>

                <div className="card-footer pt-4 pb-4 d-flex flex-row justify-content-between">
                    <div>
                        {this.state.user.employed === "Yes" ? (<button className="btn btn-primary" onClick={() => this.setUnemployed() }>Mark Un-employed</button>) : (<button className="btn btn-primary" onClick={() => this.setEmployed() }>Mark Employed</button>) }
                    </div>  
                    <div>
                        <a href={ "/users/" + this.state.user.id + "/edit" } className="btn btn-primary mr-2" role="button">Edit</a>
                        <button className="btn btn-danger" onClick={() => this.delete() }>Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
      );
    }
}