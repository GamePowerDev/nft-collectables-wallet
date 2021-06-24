import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

import { MaterialIcons  } from '@expo/vector-icons'
import globalStyles from '../extra/styles/global'
import * as constants from '../extra/constants'
import Text from './Text'


const NavigationView = ({...props}) => {
    return (
      <Navigation>
        {(props.leftIconName !== null) && 
            <MaterialIcons  
                onPress={props.onPress}
                name={props.leftIconName} 
                size={props.leftIconSize} 
                style={{width: 75}}
                color="white" />
        }

        <NavigationTitle large center color="white">{props.title}</NavigationTitle>
      </Navigation>
    )
}

export default NavigationView;


/* Styles */
const Navigation = styled.View`
    padding: 0px 32px 12px 32px;
    background-color: ${constants.PRIMARY_COLOR};
    flex-direction: row;
    align-items: center;
`

const NavigationTitle = styled(Text)`
    flex: 4;
`

const Image = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 30px;
    height: 30px;
`