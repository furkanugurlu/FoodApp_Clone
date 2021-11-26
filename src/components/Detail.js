import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from "react-native";
import colors from "../assets/colors/colors";
import { ChevronLeft, Star, ChevronRight } from './icons/index'

const Detail = ({ route, navigation }) => {
    const { item } = route.params;

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[styles.ingredientItemWrapper, {
                marginLeft: item.id == 1 ? 20 : 0
            }]}>
                <Image source={item.image} style={styles.ingredientImage} />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <ChevronLeft style={styles.leftIcon} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headerRight}>
                        <Star style={styles.starIcon} />
                    </View>
                </View>
            </SafeAreaView>
            {/* Title */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>${item.price}</Text>
            </View>
            {/* Pizza info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.inofItemTitle}>Size</Text>
                        <Text style={styles.inofItemText}>{item.sizeName} {item.sizeNumber}</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.inofItemTitle}>Crust</Text>
                        <Text style={styles.inofItemText}>{item.crust}</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.inofItemTitle}>Delevery</Text>
                        <Text style={styles.inofItemText}>{item.deliveryTime} min</Text>
                    </View>
                </View>
                <View style={styles.infoRightWrapper}>
                    <Image source={item.image} style={styles.itemImage} />
                </View>
            </View>
            {/* Ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            {/* Place an order */}
            <TouchableOpacity onPress={() => alert("Your order has been placed!")}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Place an order</Text>
                    <ChevronRight style={{ color: colors.black }} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leftIcon: {
        color: colors.textLight,
    },
    starIcon: {
        color: 'white'
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingTop: 20,
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 12,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    titlesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.textDark,
        width: '50%'
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    priceText: {
        color: colors.price,
        fontWeight: '800',
        fontSize: 32,
    },
    infoWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20

    },
    inofItemTitle: {
        color: colors.textLight,
        fontSize: 14,
    },
    inofItemText: {
        fontSize: 18,
        fontWeight: '600'
    },
    infoRightWrapper: {

    },
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: '700'
    },
    ingredientsListWrapper: {
        paddingVertical: 20,
    },
    ingredientItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 15,
        borderRadius: 15,

    },
    ingredientImage: {
        resizeMode: 'contain',
    },
    orderWrapper: {
        marginTop: 60,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        paddingVertical: 25,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderText: {
        fontWeight: '600',
        fontSize: 18,
        marginRight: 10,

    }

})
export default Detail;