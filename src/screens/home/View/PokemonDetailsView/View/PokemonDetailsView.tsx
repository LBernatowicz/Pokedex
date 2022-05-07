
/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ContainerHeader from '../../../../../components/ContainerHeader/View/ContainerHeader';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import PokemonDetailsImage from '../../../components/PokemonDetailsImage/View/PokemonDetailsImage';
import PokemonDetailsMenu from '../../../components/PokemonDetailsMenu/View/PokemonDetailsMenu';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import LinearGradient from 'react-native-linear-gradient';
import {handlePokemonIndex, handlePokemonTypeColor, handleStatesArray} from '../../../../../helpers/helpersFunction';

const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

type Props = {
    navigation: any,
    route: any;
}

const PokemonDetailsView = ({navigation, route}: Props) => {
    const [uniquePokemon, setUniquePokemon] = useState<any>()
    const [pokemonIndex, setPokemonIndex] = useState<any>()

    useEffect( ()=> {
        setUniquePokemon(route.params.details)
        setPokemonIndex(route.params.index)
    },[])

    useEffect(() => {
       // handleStatesArray(route.params.details)
    }, [])


    return (
        <LinearGradient colors={handlePokemonTypeColor(route.params.details.types[0].type.name)} style={styles.mainContainer}>
                <ContainerHeader
                    title={route.params.details.forms[0].name.toUpperCase()}
                    font={GLOBAL_FONTS.ROBOTO_BOLD}
                    fSize={GLOBAL_FONTSIZES.header}
                    fColor={GLOBAL_COLORS.primary}
                    fOpacity={0.5}
                    navigation={navigation}
                />
                <View style={styles.pokemonImageContainer}>
                    <PokemonDetailsImage
                        showIndex={handlePokemonIndex(route.params.index)}
                        image={`${imageLink}/${route.params.index}.png`}
                        absolute
                    />
                </View>
            <View style={styles.pokemonMenuContainer}>
                <PokemonDetailsMenu
                    pokemonType={route.params.details.types[0].type.name}
                    pokemonDetails={route.params.details}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: GLOBAL_COLORS.white
    },
    pokemonImageContainer: {
        flex:4,
    },
    pokemonMenuContainer: {
        flex:5,
    }
})

export default PokemonDetailsView;
