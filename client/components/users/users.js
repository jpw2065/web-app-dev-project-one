import {UserCard} from "./user-card.js";

export class Users extends React.Component {

    state = {
        loading: true,
        users: []
    };

    constructor(props)
    {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
    }

    async componentDidMount()
    {
        this.searchUsers("");
    }

    searchUsers(params)
    {
        fetch("/api/users" + params)
            .then(res => res.json())
            .then((data) => {
                this.setState({ users: data, loading: false })
            })
            .catch(console.log)
    }

    onInputChange(event){
        this.searchUsers("?search=" + event.target.value);
    }

    render() {


        let noUsers;

        if(this.state.users.length == 0 && !this.state.loading)
        {
            noUsers = true;
        }

        return (
            <section className="container mt-5 text-center overflow-auto">
                <h1 className="mb-2">Workers</h1>
                <p>Green = Employed, Grey = Not Employed</p>
                {!this.state.loading && <input className="mb-3" placeholder="Search Name..." type="text" onChange={this.onInputChange} /> }
                {this.state.loading && <p>Loading...</p> }
                {noUsers && <div><p className="mb-4">No workers found! Add a new Worker to the database.</p><a href="/users/new" className="btn btn-primary" role="button">Add Workers</a></div> }
                {this.state.users.map((user) => (
                        <UserCard key="{user}" user={ user }/>
                    ))}
            </section>
      );
    }
}