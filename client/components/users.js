import {UserCard} from "./user-card.js";

export class Users extends React.Component {

    state = {
        loading: true,
        users: []
    };

    async componentDidMount()
    {
        const url = "/api/users";

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ users: data, loading: false })
            })
            .catch(console.log)
    }

    render() {


        let noUsers;

        if(this.state.users.length == 0 && !this.state.loading)
        {
            noUsers = true;
        }

        return (
            <section class="container mt-5 text-center overflow-auto">
                <h1 class="mb-2">Workers</h1>
                <p>Green = Employed, Grey = Not Employed</p>
                {this.state.loading && <p>Loading...</p> }
                {noUsers && <div><p class="mb-4">No workers found! Add a new Worker to the database.</p><a href="/users/new" class="btn btn-primary" role="button">Add Workers</a></div> }
                {this.state.users.map((user) => (
                        <UserCard user={ user }/>
                    ))}
            </section>
      );
    }
}