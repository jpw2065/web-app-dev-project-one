import {CompanyCard} from "./company-card.js";

export class Companies extends React.Component {

    state = {
        loading: true,
        coompanies: []
    };

    constructor(props)
    {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
    }

    async componentDidMount()
    {
        this.searchCompanies("");
    }

    searchCompanies(params)
    {
        fetch("/api/companies" + params)
            .then(res => res.json())
            .then((data) => {
                this.setState({ companiess: data, loading: false })
            })
            .catch(console.log)
    }

    onInputChange(event){
        this.searchCompanies("?search=" + event.target.value);
    }

    render() {


        let noCompanies;

        if(this.state.companies.length == 0 && !this.state.loading)
        {
            noCompanies = true;
        }

        return (
            <section class="container mt-5 text-center overflow-auto">
                <h1 class="mb-2">Companies</h1>
                {!this.state.loading && <input class="mb-3" placeholder="Search Name..." type="text" onChange={this.onInputChange} /> }
                {this.state.loading && <p>Loading...</p> }
                {noCompanies && <div><p class="mb-4">No companies found! Add a new Company to the database.</p><a href="/companies/new" class="btn btn-primary" role="button">Add Company</a></div> }
                {this.state.companies.map((company) => (
                        <CompanyCard company={ company }/>
                    ))}
            </section>
      );
    }
}