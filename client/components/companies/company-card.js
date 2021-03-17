
export class CompanyCard extends React.Component {

    Capitalize(str) 
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    render() {


        return (
            <div className="card text-left mb-4 mt-4">
                <div className="card-header font-weight-bold">
                    <h4 className="mb-2 mt-2">{this.Capitalize(this.props.company.industry)} Company</h4>
                </div>
                <div className="card-body">
                    <h5 className="font-weight-normal">{this.props.company.name}</h5>
                    
                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Industry: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.company.industry}</p>
                            <p className="font-weight-bold pr-2">Size (People): </p>
                        </div>

                        <div className="col-4 text-left p-0">
                            <p>{this.props.company.size}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Contact Name: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.company.contact_name}</p>
                            <p className="font-weight-bold pr-2">Contact Phone: </p>
                        </div>

                        <div className="col-4 text-left p-0">
                            <p>{this.props.company.contact_phone}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 text-right p-0">
                            <p className="font-weight-bold pr-2">Contact Email: </p>
                        </div>

                        <div className="col-4 d-flex flex-row justify-content-between p-0">
                            <p>{this.props.company.contact_email}</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <a href={'/companies/' + this.props.company.id} className="btn btn-primary mr-3">Profile</a>
                        <a href={'/companies/' + this.props.company.id + '/edit'} className="btn btn-primary mr-3">Edit</a>
                    </div>
                </div>

            </div>
        );
    }
}