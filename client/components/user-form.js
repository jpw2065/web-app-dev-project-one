export class UserForm extends React.Component {

    constructor(props){
        super(props);
        this.state = { name: '', email: '', phone: '', trade: '', info: ''}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {


        fetch('api/users', {
            method: 'POST',

            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            return response.json();
          });
    
        e.preventDefault();
    }


    render() {
      return (
        <div class="container d-flex flex-column justify-content-center">
            <h1 class="text-center mb-2">New Worker</h1>
            <form onSubmit={this.handleSubmit}>
                <div class="form-row">
                    <div class="col">
                        <label form="user-form-name">Name:</label>
                        <input id="user-form-name" type="text" class="form-control" name="name" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div class="col">
                        <label for="user-form-email">Email:</label>
                        <input id="user-form-email" type="email" class="form-control" name="email" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label for="user-form-phone">Phone:</label>
                        <input id="user-form-phone" type="tel" class="form-control" name="phone" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div class="col">
                        <label for="user-form-trade">Trade:</label>
                        <select id="user-form-trade" class="form-control" name="trade" value={this.state.value} onChange={this.handleChange}>
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
                            <option>Insulation</option>
                            <option>Ironworker</option>
                            <option>Laborer</option>
                            <option>Landscaper</option>
                            <option>Lineman</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label for="user-form-info">Additional Info</label>
                        <textarea id="user-form-info" class="form-control" rows="3" name="info" value={this.state.value} onChange={this.handleChange}></textarea>
                    </div>
                    {/* <div class="col">
                        <label for="user-form-resume">Resume:</label>
                        <input id="user-form-resume" type="file" class="form-control-file" name="resume" value={this.state.value} onChange={this.handleChange}/>

                    </div> */}
                </div>
                <div class="form-row text-center">
                    <div class="col">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
      );
    }
}