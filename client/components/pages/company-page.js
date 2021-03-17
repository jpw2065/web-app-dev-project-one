import {Nav} from '../universal/nav.js';
import {CompanyProfile} from '../companies/company-pofile.js';

export class CompanyPage extends React.Component {

    state = {
      loading: true,
      company: null
    };

    async componentDidMount()
    {
      let currentLocation = window.location;
      
      fetch(currentLocation.origin + "/api" + currentLocation.pathname)
          .then(res => res.json())
          .then((data) => {
              this.setState({ company: data, loading: false })
          })
          .catch(console.log)
    }

    render() {

      return (
        <main>
            <Nav select="companies-page"/>
            { !this.state.loading && <CompanyProfile company={ this.state.company } />  }
        </main>
      );
    }
}