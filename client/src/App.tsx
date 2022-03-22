//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import {
  LandingPage,
  RegisterPage,
  EventPage,
  ArtistPage,
  AlbumPage,
  MerchandisePage,
  UserPage
} from './Pages';

//styling
import GlobalStyles from './Styles/globalStyles';

//global user context

const App:React.FunctionComponent = () => (
  <BrowserRouter>
    <GlobalStyles />
    {/* <UserContextProvider> */}
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/artist/:artistId" element={<ArtistPage />} />
      <Route path="/album/:albumId" element={ <AlbumPage /> } />
      <Route path="/event/:eventId" element={ <EventPage /> } />
      <Route path="/merchandise/:merchandiseId" element={ <MerchandisePage /> } /> 
      <Route path="/user/:consumerId" element={ <UserPage /> } />
      <Route path="/" element={ <LandingPage /> } />
      </Routes>
    {/* </UserContextProvider> */}
  </BrowserRouter>
);

export default App;
