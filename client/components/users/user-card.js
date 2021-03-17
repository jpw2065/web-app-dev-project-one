
export class UserCard extends React.Component {

    Capitalize(str) 
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    render() {

        let employedColor = {};
        if(this.props.user.employed === "Yes") employedColor.backgroundColor = '#c4ffdb';

        return (
            <div className="card text-left mb-4 mt-4">
                <div className="card-header font-weight-bold" style={ employedColor }>
                    <h4 className="mb-2 mt-2">{this.Capitalize(this.props.user.trade)} Worker</h4>
                </div>
                <div className="card-body">
                    <h5 className="font-weight-normal">{this.props.user.name}</h5>
                    
                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Phone: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.user.phone}</p>
                            <p className="font-weight-bold pr-2">Email: </p>
                        </div>

                        <div className="col-4 text-left p-0">
                            <p>{this.props.user.email}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Trade: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.user.trade}</p>
                            <p className="font-weight-bold pr-2">Resume: </p>
                        </div>

                        <div className="col-4 text-left p-0">
                            <p>No</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <a href={'/users/' + this.props.user.id} className="btn btn-primary mr-3">Profile</a>
                        <a href={'/users/' + this.props.user.id + '/edit'} className="btn btn-primary mr-3">Edit</a>
                    </div>
                </div>

            </div>
        );
    }
}