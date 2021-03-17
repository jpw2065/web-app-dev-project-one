import {Nav} from '../universal/nav.js';
import {UserProfile} from '../users/user-pofile.js';

export class UserPage extends React.Component {

    state = {
      loading: true,
      user: null
    };

    async componentDidMount()
    {
      let currentLocation = window.location;
      
      fetch(currentLocation.origin + "/api" + currentLocation.pathname)
          .then(res => res.json())
          .then((data) => {
              this.setState({ user: data, loading: false })
          })
          .catch(console.log)
    }

    render() {

      return (
        <main>
            <Nav select="users-page"/>
            { !this.state.loading && <UserProfile user={ this.state.user } />  }
        </main>
      );
    }
}