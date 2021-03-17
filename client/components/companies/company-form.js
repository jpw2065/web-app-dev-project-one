export class CompanyForm extends React.Component {

    render() {
      return (
        <form onSubmit={this.props.onSubmit}>
            <div class="form-row">
                <div class="col">
                    <label form="company-form-contact-name">Contact Name:</label>
                    <input id="company-form-contact-name" type="text" class="form-control" name="name" defaultValue={this.props.company && this.props.company.contact_name}/>
                </div>
                <div class="col">
                    <label for="company-form-contact-email">Contact Email:</label>
                    <input id="company-form-contact-email" type="email" class="form-control" name="email" defaultValue={this.props.company && this.props.company.contact_email}/>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="company-form-contact-phone">Contact Phone:</label>
                    <input id="company-form-contact-phone" type="tel" class="form-control" name="phone" defaultValue={this.props.company && this.props.company.contact_phone}/>
                </div>
                <div class="col">
                    <label for="company-form-name">Company Name:</label>
                    <input id="company-form-name" required type="text" class="form-control" name="name" defaultValue={this.props.company && this.props.company.name}/>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="company-form-industry">Industry:</label>
                    <select id="company-form-industry" required class="form-control" name="trade" defaultValue={this.props.company && this.props.company.industry}>
                        <option>Bell Hanger</option>
                        <option>Boilermaker</option>
                        <option>Carpenter</option>
                        <option>Carpet Layer</option>
                        <option>Dredger</option>
                        <option>Electrician</option>
                        <option>Elevator Mechanic</option>
                        <option>Fencer</option>
                        <option>Glazier</option>
                        <option>Heavy Equipment Operator</option>
                        <option>HVAC Technician</option>
                        <option>Insulation Installer</option>
                        <option>Ironworker</option>
                        <option>Laborer</option>
                        <option>Landscaper</option>
                        <option>Linemen</option>
                        <option>Mason</option>
                        <option>Millwright</option>
                        <option>Painter</option>
                        <option>Pile Driver</option>
                        <option>Pipefitter</option>
                        <option>Plasterer</option>
                        <option>Plumber</option>
                        <option>Roofer</option>
                        <option>Sheet Metal Worker</option>
                        <option>Sign Display Worker</option>
                        <option>Steak Fixer</option>
                        <option>Waterproofer</option>
                        <option>Welder</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="col">
                    <label for="company-form-size">Size (people):</label>
                    <input id="company-form-size" type="text" required class="form-control" name="employer" defaultValue={this.props.company && this.props.company.size}/>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="company-form-address">Address:</label>
                    <input id="company-form-address" type="text" required class="form-control" name="employer" defaultValue={this.props.company && this.props.company.address}/>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="company-form-info">Additional Info</label>
                    <textarea id="company-form-info" class="form-control" rows="3" name="info" defaultValue={this.props.company && this.props.company.info}></textarea>
                </div>
            </div>
            <div class="form-row text-center">
                <div class="col">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
      );
    }
}