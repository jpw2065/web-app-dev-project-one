export class Nav extends React.Component {





    render() {
        var currentLocation = window.location;
        console.log(currentLocation);

        return (
        <nav>
            <h1 class="mb-4 mt-3 pl-3">VOCA</h1>

            <ul class="list-inline">
                <li class="pl-5 nav-selected">Home</li>
            </ul>
            
            <hr></hr>
            <h5 class="pl-3">Users</h5>
            <ul class="list-inline">
                <li class="pl-4">All</li>
                <li class="pl-4">Create</li>
            </ul>
            <hr></hr>
            <h5 class="pl-3">Companies</h5>
            <ul class="list-inline">
                <li class="pl-4">All</li>
                <li class="pl-4">Create</li>
            </ul>
        </nav>
        );
    }
}