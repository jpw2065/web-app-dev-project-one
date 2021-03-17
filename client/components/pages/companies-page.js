import {Nav} from '../universal/nav.js';
import {Companies} from '../companies/companies.js';

export class CompaniesPage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="companies-page"/>
            <Companies />
        </main>
      );
    }
}