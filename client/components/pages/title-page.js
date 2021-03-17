import {Nav} from '../universal/nav.js';
import {Title} from '../universal/title.js';

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