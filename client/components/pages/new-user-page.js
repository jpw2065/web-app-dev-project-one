import {Nav} from '../universal/nav.js';
import {UserNew} from '../users/user-new.js';

export class NewUserPage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="new-user-page" />
            <UserNew />
        </main>
      );
    }
}