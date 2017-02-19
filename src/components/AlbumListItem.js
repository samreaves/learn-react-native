/**
 * Learn React Native
 * Album List Item Component
 * Written by Sam Reaves
 * February 18, 2017
 * https://github.com/samreaves/learn-react-native
 */

import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

/*
 * Create Album List Item Component
 * Destructured {album} from Props
 */
const AlbumListItem = ({ album }) => {

  /* Buy button text */
  const buttonText = 'Buy Album';

  /* CSS Styles */
  const styles = {
      headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
      },
      headerTextStyles: {
        fontSize: 18
      },
      thumbnailImageStyles: {
        height: 50,
        width: 50
      },
      thumbnailContainerStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
      },
      imageArtworkStyles: {
        height: 300,
        flex: 1,
        flexGrow: 1,
        width: null
      }
  };

  /* Destructured { title, artist, thumbnailImage, url, image } from album */
  const { title, artist, thumbnail_image, url, image } = album;

  /* Destructured { headerContentStyles, thumbnailImageStyles } from styles */
  const { headerContentStyles, headerTextStyles, thumbnailContainerStyles, thumbnailImageStyles, imageArtworkStyles } = styles;

  return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyles}>
            <Image
              source={{ uri: thumbnail_image }}
              style={thumbnailImageStyles}
            />
          </View>
          <View style={headerContentStyles}>
            <Text style={headerTextStyles}>{ title }</Text>
            <Text>{ artist }</Text>
          </View>
        </CardSection>
        <CardSection>
            <Image
              source={{ uri: image }}
              style={imageArtworkStyles}
            />
        </CardSection>
        <CardSection>
          <Button text={buttonText} url={url} />
        </CardSection>
      </Card>
  );
};

/* Export Album List Item Component */
export default AlbumListItem;
