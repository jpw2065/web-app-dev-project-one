import {Nav} from './nav.js';
import {UserProfile} from './user-pofile.js';
import {Loading} from './loading.js';

export class UserPage extends React.Component {

    state = {
      loading: true,
      user: null
    };

    async componentDidMount()
    {
      let currentLocation = window.location;
      console.log(currentLocation.origin + "/api" + currentLocation.pathname);
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