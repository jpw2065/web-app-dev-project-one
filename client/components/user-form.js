export class UserForm extends React.Component {


    handleSubmit = (e) => {

        let formData = new FormData(e.target);

        var params = new URLSearchParams();
        for(var pair of formData.entries()){
            typeof pair[1]=='string' && params.append(pair[0], pair[1]);
        }
        params = params.toString();

        fetch('/api/users', {
            method: 'POST',
            
            // We convert the React state to JSON and send it as the POST body
            body: params
          }).then(function(response) {
            if(response.status == 201)
            {
                window.location.href = "/users";
            }
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
                        <input id="user-form-name" type="text" class="form-control" name="name" />
                    </div>
                    <div class="col">
                        <label for="user-form-email">Email:</label>
                        <input id="user-form-email" type="email" class="form-control" name="email" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label for="user-form-phone">Phone:</label>
                        <input id="user-form-phone" type="tel" class="form-control" name="phone" />
                    </div>
                    <div class="col">
                        <label for="user-form-trade">Trade:</label>
                        <select id="user-form-trade" class="form-control" name="trade" >
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
                        <label for="user-form-employed">Employed:</label>
                        <select id="user-form-employed" class="form-control" name="employed" >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="user-form-employer">Employer:</label>
                        <input id="user-form-employer" type="text" class="form-control" name="employer" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <label for="user-form-info">Additional Info</label>
                        <textarea id="user-form-info" class="form-control" rows="3" name="info" ></textarea>
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