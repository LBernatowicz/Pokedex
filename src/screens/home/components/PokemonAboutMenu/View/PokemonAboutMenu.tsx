/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import PokemonInformationText from '../components/PokemonInformationText/View/PokemonInformationText';
import PokemonInformationEvo from '../components/PokemonInformationEvo/View/PokemonInformationEvo';

const PokemonAboutMenu = () => {
    return (
        <View style={styles.mainContainer}>
            <PokemonInformationText/>
            <PokemonInformationEvo/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
    }
})

export default PokemonAboutMenu;
