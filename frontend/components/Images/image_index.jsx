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
      <div>
        <ul>
          {
            this.props.images.map((image) => <ImageIndexItem key={image.id} image={image} />)
          }
        </ul>
      </div>
    )
  }
};

export default ImageIndex;