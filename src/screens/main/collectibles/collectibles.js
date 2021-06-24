import React, {useState, useEffect} from 'react'
import { FlatList, ImageBackground } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components/native'
import globalStyles from '../../../extra/styles/global'
import { LinearGradient } from 'expo-linear-gradient'

import * as constants from '../../../extra/constants'
import { fetchCollectibles } from '../../../redux/actions'

import {BaseContainer, CollectibleRow, Text} from '../../../components'


const NUMBER_OF_COLUMNS = 2

const formatListData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns)

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true})
        numberOfElementsLastRow = numberOfElementsLastRow + 1
    }

    return data
}

const Collectibles = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { collectibles } = useSelector((state) => state.nftReducer)

    useEffect(() => {
        dispatch(fetchCollectibles())
    }, [dispatch])

    const HeaderView = (nav, item) => {
    
        return (
            <Header>
                <BackgroundImage source={{uri: item.image}}>
                    <GradientBackground>
                        <Gradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
                            <HeaderText header heavy color="#ffffff">{item.name}</HeaderText>
                        </Gradient>
                    </GradientBackground>
                </BackgroundImage>
            </Header>
        )
    }

    return (
        <BaseContainer 
            navigationMenuHandler={() => navigation.pop()} 
            navigationTitle={`My Items (${collectibles.length})`}
            navigationLeftIconType="back">
                <CollectiblesList 
                    ListHeaderComponent={HeaderView(navigation, route.params.item)}
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    keyExtractor={item => item.id}
                    data={formatListData([...collectibles], 1)}
                    renderItem={({ item }) => (
                        <CollectibleRow item={item} onPress={() => { navigation.navigate(constants.CollectiblesScreens.Collectibles, {item}) }} />
                    )}
                />

        </BaseContainer>
    )
}

export default Collectibles;


/* Styles */

const CollectiblesList = styled(FlatList)`
    flex: 1;
    background-color: ${constants.BACKGROUND_COLOR};
`

const BackgroundImage = styled(ImageBackground).attrs({
    imageStyle: {
        resizeMode: 'cover'
    }
})`
    justify-content: flex-end;
    height: 350px;
`
const GradientBackground = styled.View`
    flex: 1;
    overflow: hidden;
`

const Gradient = styled(LinearGradient)`
    flex: 1;
    padding: 20px;
    flex-direction: row;
`
const Header = styled.View`
    height: 360px;
`

const HeaderText = styled(Text)`
    align-self: flex-end;
    margin-left: 0px;
`