import {Nav} from './nav.js';
import {Users} from './users.js';

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