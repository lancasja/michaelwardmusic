import React from 'react';
import Gallery from 'react-photo-gallery';

function importAll(r) {
    return r.keys().map(r);
}
  
const importedImages = importAll(require.context('../assets/photos/independent/', false, /\.(jpe?g)$/));

class PhotosPage extends React.Component {
    componentDidMount () {
        const images = importedImages.forEach(image => {
            const img = new Image();
            img.src = image;
        
            const w = img.width;

            console.log(w);
        
            return null;
        })
    }

    render() {
        return (
            <div id="photosPage" className="photos-page">
            </div>
        );
    } 
}

export default PhotosPage;