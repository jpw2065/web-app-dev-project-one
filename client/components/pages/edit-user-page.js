import {Nav} from '../universal/nav.js';
import {UserEdit} from '../users/user-edit.js';

export class EditUserPage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="users-page" />
            <UserEdit />
        </main>
      );
    }
}