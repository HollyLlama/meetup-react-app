import { Routes, Route } from "react-router-dom";
//the purpose of Route is to define a path for the url we want to listen to and to which component should be loaded for each path

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage/>}/>
        <Route path='/new-meetup' element={<NewMeetupPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
