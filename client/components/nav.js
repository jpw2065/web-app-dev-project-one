export class Nav extends React.Component {





    render() {
        var currentLocation = window.location;
        console.log(currentLocation);

        return (
        <nav>
            <h1 class="mb-4 mt-3 pl-3">VOCA</h1>

            <ul class="list-inline">
                <li class="pl-5 nav-selected"><a href="/index">Home</a></li>
            </ul>
            
            <hr></hr>
            <h5 class="pl-3">Users</h5>
            <ul class="list-inline">
                <li class="pl-4"><a href="/users">All</a></li>
                <li class="pl-4"><a href="/users/new">Create</a></li>
            </ul>
            <hr></hr>
            <h5 class="pl-3">Companies</h5>
            <ul class="list-inline">
                <li class="pl-4"><a href="/companies">All</a></li>
                <li class="pl-4"><a href="/companies/new">Create</a></li>
            </ul>
        </nav>
        );
    }
}