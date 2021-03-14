import {Nav} from './nav.js';
import {UserForm} from './user-form.js';

export class TitlePage extends React.Component {

    render() {
      return (
        <main>
            <Nav />
            <UserForm />
        </main>
      );
    }
}