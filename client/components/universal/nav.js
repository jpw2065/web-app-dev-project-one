export class Nav extends React.Component {


    render() {

        return (
        <nav>
            <h1 className="mb-4 mt-3 pl-3">VOCA</h1>

            <ul className="list-inline">
                <li className={this.props.select === "title-page" ? "pl-5 nav-selected" : "pl-4" }><a href="/index">Home</a></li>
            </ul>
            
            <hr></hr>
            <h5 className="pl-3">Workers</h5>
            <ul className="list-inline">
                <li className={this.props.select === "users-page" ? "pl-5 nav-selected" : "pl-4" }><a href="/users">All</a></li>
                <li className={this.props.select === "new-user-page" ? "pl-5 nav-selected" : "pl-4" }><a href="/users/new">Create</a></li>
            </ul>
            <hr></hr>
            <h5 className="pl-3">Companies</h5>
            <ul className="list-inline">
                <li className={this.props.select === "companies-page" ? "pl-5 nav-selected" : "pl-4" }><a href="/companies">All</a></li>
                <li className={this.props.select === "new-company-page" ? "pl-5 nav-selected" : "pl-4" }><a href="/companies/new">Create</a></li>
            </ul>
        </nav>
        );
    }
    
}