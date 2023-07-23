import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchHeader from './components/SearchHeader';
import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from './context/YoutubeApiiContext';

const clientQuery = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={clientQuery}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
