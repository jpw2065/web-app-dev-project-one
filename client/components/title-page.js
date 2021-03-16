import {Nav} from './nav.js';
import {Title} from './title.js';

export class TitlePage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="title-page" />
            <Title />
        </main>
      );
    }
}