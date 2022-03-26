//react
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button, Card } from 'antd';
//firebase imports
import { storage } from '../Firebase/index'
//services
import { createAlbum } from 'Services/Album';
//components
import AlbumForm from '../Components/FormComponents/DataComponents/AlbumForm'
import EventForm from '../Components/FormComponents/DataComponents/EventForm';
import MerchandiseForm from '../Components/FormComponents/DataComponents/MerchandiseForm'
import StyledPage from '../Styles/styledComponents/styledPage';
//styling

//Datatypes
import { IAlbum, IEvent, IMerchandise } from '../Data/DataTypes';

//context is being used in this component
import { UserContext } from 'Data/UserContext';


const ArtistPage: React.FunctionComponent = () => {
const [ type, setType] = useState('');
const [ submitted, setSubmitted ] = useState(false);

const toggleSubmit = () => {
  setSubmitted(prev => !prev)
}

const handleAlbumState = () => setType('album');
const handleEventState = () => setType('event');
  const handleMerchandiseState = () => setType('merchandise');
  

  const handleAlbumFormSubmit=(album: IAlbum) => {
    
  }


  // const handleEventFormSubmit = (event: IEvent) => {
  //   console.log(event)
  // }
  // const handleMerchandiseFormSubmit = (merch: IMerchandise) => {
  //   console.log(merch)
  // }
  

  return (
    <StyledPage>
        <Link to="/">home</Link>
        <h1>Artist</h1>
      <p>To upload new NFTs to your profile, please select 
        from the following category and input required information: </p>
      <button onClick={handleAlbumState}>album</button>
      <button onClick={handleEventState}>event</button>
      <button onClick={handleMerchandiseState}>merchandise</button>
      {(type === 'album') ? <AlbumForm onSubmitForm={ handleAlbumFormSubmit }/> : null}
      {/* { (type === 'event') ? <EventForm  onSubmitForm={ handleEventFormSubmit } /> : null}
      {(type === 'merchandise') ? <MerchandiseForm onSubmitForm={ handleMerchandiseFormSubmit } /> : null} */}
    <p>artist view with option to update offers</p>
    <p>user view without any authorisations but with fake follow button</p>
    </StyledPage>
  )
}

export default ArtistPage;