import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors'
import categoriesData from '../data/categoriesData';
import popularData from '../data/popularData';

import { Menu, Search, ChevronRight, Gift, Plus, Star } from '../components/icons/index'

const Home = ({ navigation }) => {
    const renderCategoryItem = ({ item }) => {
        console.log(item)
        return (
            <View style={[styles.categoryItemWrapper, {
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0
            }]}>
                <Image style={styles.categoryItemImage} source={item.image} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                }]}>
                    <ChevronRight style={[styles.categoryItemIcon, {
                        color: item.selected ? colors.black : colors.white
                    }]} />
                </View>
            </View>
        );
    };
    return (
        <View style={StyleSheet.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator="false">
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
                        <Menu style={{ color: 'black' }} />
                    </View>
                </SafeAreaView>

                {/* Title */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Search style={{ color: colors.textDark }} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categorisWrapper}>
                    <Text style={styles.categorisTitle}>Categoris</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>

                </View>
                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                            item: item
                        })} key={item.id} style={[styles.popularCardWrapper, {
                            marginTop: item.id == 1 ? 10 : 20,
                        }]}>
                            <View >
                                <View>
                                    <View style={styles.popularTopWrapper}>
                                        <Gift style={{ color: colors.primary }} />
                                        <Text style={styles.popularTopText}>top of the week</Text>
                                    </View>
                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularTitlesWeight}>{item.weight}</Text>
                                    </View>
                                </View>
                                <View style={styles.popularCardBottom}>
                                    <View style={styles.addPizzaButton}>
                                        <Plus style={{ color: colors.black }} />
                                    </View>
                                    <View style={styles.ratingWrapper}>
                                        <Star style={{ color: colors.black }} />
                                        <Text style={styles.rating}>{item.rating}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.popularCardRight}>
                                <Image style={styles.popularCardImage} source={item.image} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    titlesSubtitle: {
        fontSize: 16,
        color: colors.textDark
    },
    titlesTitle: {
        fontSize: 32,
        fontWeight: '700',
        color: colors.textDark,
        marginTop: 3
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight
    },
    categorisWrapper: {
        marginTop: 30,
    },
    categorisTitle: {
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 20
    },
    categoriesListWrapper: {
        marginTop: 15,
        paddingBottom: 20,

    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 15,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 30,
        height: 30,
        borderRadius: 26,
        marginBottom: 20,
    },
    categoryItemIcon: {
        color: colors.textDark,
        alignSelf: 'center',

    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontSize: 20,
        fontWeight: '700',
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    popularTopText: {
        marginLeft: 10,
        fontWeight: '600',
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontWeight: '700',
        fontSize: 15,
        color: colors.textDark
    },
    popularTitlesWeight: {
        fontWeight: '500',
        fontSize: 14,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,

    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    rating: {
        fontWeight: '600',
        fontSize: 12,
        marginLeft: 5,
    },

    popularCardRight: {
        marginLeft: 30,

    },
    popularCardImage: {
        width: 210,
        height: 120,
        resizeMode: 'contain'
    },

})
export default Home;