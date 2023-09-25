import NavBar from '@/components/partials/navbar';
import Header from '@/components/partials/header';
import ListTickersPage from '@/features/tickers/pages/listTickers';
import { Route, Switch } from "wouter";

function App() {

  return (
    <>
      <div className="min-h-full">
        <NavBar />
        <Header />
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Switch>
              <Route path='/' component={ListTickersPage} />
            </Switch>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
