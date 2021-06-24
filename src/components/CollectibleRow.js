import React from 'react'
import styled from 'styled-components/native'
import Text from './Text'

import * as constants from '../extra/constants'

const ThumbnailView = ({...props}) => {
  if(props.item.empty === true) {
    return (
      <EmptyView />
    )
  }
  return (
    <Thumbnail onPress={props.onPress}>
      <ThumbnailImage source={{uri: props.item.image}} />
      <Title medium bold center color="white">{props.item.name}</Title>
    </Thumbnail>
  )
}

const CollectibleRow = ({...props}) => {
    return (
        <Container>
            <ThumbnailImage source={{uri: props.item.image}} />
            <DetailsView />
        </Container>
    )
}

export default CollectibleRow;

const Container = styled.View`
  flex: 1;
  padding: 3px;
  padding-top: 3px;
  padding-bottom: 10px;
`

const DetailsView = styled.View`
  flex: 2;
`

const Thumbnail = styled.TouchableOpacity`
    background-color: ${constants.PRIMARY_COLOR};
    flex: 1;
    width: 100%;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
`

const EmptyView = styled.View`
  background-color: transparent;
`

const Title = styled(Text)`
  padding: 5px;
`

const ThumbnailImage = styled.Image`
  flex: 1;
  margin: 4px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
`