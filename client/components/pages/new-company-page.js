import {Nav} from '../universal/nav.js';
import {CompanyNew} from '../companies/company-new.js';

export class NewCompanyPage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="new-company-page" />
            <CompanyNew />
        </main>
      );
    }
}