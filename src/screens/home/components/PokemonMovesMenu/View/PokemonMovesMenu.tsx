/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';

const PokemonMovesMenu = () => {
    return (
        <View style={styles.mainContainer}>
            <StyledText title={'Pokemon moves menu'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center'
    }
})

export default PokemonMovesMenu;
