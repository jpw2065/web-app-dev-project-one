export class UserForm extends React.Component {

    render() {
      return (
        <div class="container d-flex flex-column justify-content-center">
          <form class="text-center">
            <div class="form-row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col">
                    <input type="email" class="form-control" placeholder="Email" />
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <input type="tel" class="form-control" placeholder="Phone Number" />
                </div>
                <div class="col">
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col">
                    <input type="email" class="form-control" placeholder="Last name" />
                </div>
            </div>
          </form>
        </div>
      );
    }
}