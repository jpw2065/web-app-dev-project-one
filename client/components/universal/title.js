export class Title extends React.Component {

    render() {
      return (
        <div class="container d-flex flex-column justify-content-center">
          <header class="text-center">
              <h1 class="display-1">VOCA</h1>
              <p class="mb-4">CRM for skilled trade workers.</p>
              <a href="/users" class="btn btn-primary" role="button">Find Workers</a>
          </header>
        </div>
      );
    }
}