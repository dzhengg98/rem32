import React from 'react';
import ImageIndexItem from './image_index_item';

class ImageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImages();
  };

  render() {
    return (
      <div className="images-gallery-container">
        {
          this.props.images.map((image) => <ImageIndexItem key={image.id} image={image} />)
        }
      </div>
    )
  }
};

export default ImageIndex;