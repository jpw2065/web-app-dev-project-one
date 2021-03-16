import {Nav} from './nav.js';
import {UserForm} from './user-form.js';

export class NewUserPage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="new-user-page" />
            <UserForm />
        </main>
      );
    }
}