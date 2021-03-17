export class UserForm extends React.Component {

    render() {
      return (
        <form onSubmit={this.props.onSubmit}>
            <div class="form-row">
                <div class="col">
                    <label form="user-form-name">Name:</label>
                    <input id="user-form-name" required type="text" class="form-control" name="name" defaultValue={this.props.user && this.props.user.name}/>
                </div>
                <div class="col">
                    <label for="user-form-email">Email:</label>
                    <input id="user-form-email" required type="email" class="form-control" name="email" defaultValue={this.props.user && this.props.user.email}/>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="user-form-phone">Phone:</label>
                    <input id="user-form-phone" required type="tel" class="form-control" name="phone" defaultValue={this.props.user && this.props.user.phone}/>
                </div>
                <div class="col">
                    <label for="user-form-trade">Trade:</label>
                    <select id="user-form-trade" required class="form-control" name="trade" defaultValue={this.props.user && this.props.user.trade}>
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
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="user-form-employed">Employed:</label>
                    <select id="user-form-employed" class="form-control" name="employed" defaultValue={this.props.user && this.props.user.employed}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div class="col">
                    <label for="user-form-employer">Employer:</label>
                    <input id="user-form-employer" type="text" class="form-control" name="employer" defaultValue={this.props.user && this.props.user.employer}/>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <label for="user-form-info">Additional Info</label>
                    <textarea id="user-form-info" class="form-control" rows="3" name="info" defaultValue={this.props.user && this.props.user.info}></textarea>
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