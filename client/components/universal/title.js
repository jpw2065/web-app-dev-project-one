export class Title extends React.Component {

    render() {
      return (
        <div className="container d-flex flex-column justify-content-center">
          <header className="text-center">
              <h1 className="display-1">VOCA</h1>
              <p className="mb-4">CRM for skilled trade workers.</p>
              <a href="/users" className="btn btn-primary" role="button">Find Workers</a>
          </header>
        </div>
      );
    }
}