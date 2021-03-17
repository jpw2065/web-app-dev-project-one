import {Nav} from '../universal/nav.js';
import {Users} from '../users/users.js';

export class UsersPage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="users-page"/>
            <Users />
        </main>
      );
    }
}