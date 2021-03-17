import {Nav} from '../universal/nav.js';
import {CompanyEdit} from '../companies/company-edit.js';

export class EditCompanyPage extends React.Component {

    render() {
      return (
        <main>
            <Nav select="companies-page" />
            <CompanyEdit />
        </main>
      );
    }
}