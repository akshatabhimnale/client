import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { Icon } from 'react-native-elements';

interface Property {
    id: string;
    name: string;
    address: string;
    status: string; // 'Occupied', 'Vacant', or 'Under maintenance'
    occupants: string;
    rent: string;
    image: string;
    paymentStatus: string; // 'Paid', 'Overdue', 'Pending'
}

const properties: Property[] = [
    {
        id: '1',
        name: 'Willow Creek',
        address: '123 Main St, Anytown, USA',
        status: 'Occupied',
        occupants: '2 persons',
        rent: '$1500 / Month',
        image: require('@/assets/images/property/property1.jpg'),
        paymentStatus: 'Paid',
    },
    {
        id: '2',
        name: 'Oakwood Manor',
        address: '456 Elm St, Othertown, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2000 / Month',
        image: require('@/assets/images/property/property2.jpg'),
        paymentStatus: 'Overdue',
    },
    {
        id: '3',
        name: 'Sunny Side Up',
        address: '789 Oak St, Sunnyville, USA',
        status: 'Occupied',
        occupants: '3 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property3.jpg'),
        paymentStatus: 'Pending',
    },
    {
        id: '4',
        name: 'Maple Ridge',
        address: '876 Maple St, Maple Tri, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property4.jpg'),
        paymentStatus: 'Paid',
    },
    {
        id: '5',
        name: 'Maple Ridge',
        address: '876 Maple St, Maple Tri, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property5.jpg'),
        paymentStatus: 'Paid',
    },
    {
        id: '6',
        name: 'Maple Ridge',
        address: '876 Maple St, Maple Tri, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property6.jpg'),
        paymentStatus: 'Paid',
    },
    {
        id: '7',
        name: 'Maple Ridge',
        address: '876 Maple St, Maple Tri, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property7.jpg'),
        paymentStatus: 'Paid',
    },
    {
        id: '8',
        name: 'Maple Ridge',
        address: '876 Maple St, Maple Tri, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property8.jpg'),
        paymentStatus: 'Paid',
    },
    {
        id: '9',
        name: 'Maple Ridge',
        address: '876 Maple St, Maple Tri, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property9.jpg'),
        paymentStatus: 'Paid',
    },
    {
        id: '10',
        name: 'Maple Ridge',
        address: '876 Maple St, Maple Tri, USA',
        status: 'Occupied',
        occupants: '4 persons',
        rent: '$2200 / Month',
        image: require('@/assets/images/property/property10.jpg'),
        paymentStatus: 'Paid',
    },
];

const PropertyList: React.FC = () => {
    const renderProperty = ({ item }: { item: Property }) => (
        <View style={styles.card}>
            <Image
                source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                style={styles.propertyImage}
            />
            <View style={styles.propertyDetails}>
                <Text style={styles.propertyName}>{item.name}</Text>
                <Text style={styles.propertyAddress}>{item.address}</Text>
                <Text style={styles.propertyInfo}>Occupied: {item.occupants}</Text>
                <Text style={styles.propertyRent}>Rent: {item.rent}</Text>
                <Text
                    style={[
                        styles.paymentStatus,
                        item.paymentStatus === 'Paid'
                            ? styles.paid
                            : item.paymentStatus === 'Overdue'
                                ? styles.overdue
                                : styles.pending,
                    ]}
                >
                    {item.paymentStatus === 'Paid'
                        ? '✔️ ' + item.paymentStatus
                        : item.paymentStatus === 'Overdue'
                            ? '❌ ' + item.paymentStatus
                            : '⌛ ' + item.paymentStatus}
                </Text>

            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Categories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
                {['All', 'House', 'Apartment', 'Villa'].map((category, index) => (
                    <TouchableOpacity key={index} style={index === 0 ? styles.activeCategory : styles.category}>
                        <Text style={index === 0 ? styles.activeCategoryText : styles.categoryText}>
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Tab Filters */}
            <View style={styles.tabs}>
                {['Occupied', 'Vacant', 'Under maintenance'].map((tab, index) => (
                    <TouchableOpacity key={index} style={index === 0 ? styles.activeTab : styles.tab}>
                        <Text style={index === 0 ? styles.activeTabText : styles.tabText}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Property List */}
            <FlatList
                data={properties}
                renderItem={renderProperty}
                keyExtractor={(item) => item.id}
                style={styles.propertyList}
            />
        </View>
    );
};

export default PropertyList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop:30,
    },
    categories: {
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    category: {
        backgroundColor: '#D7E9F1',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
    },
    activeCategory: {
        backgroundColor: '#21B5CF',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
    },
    categoryText: {
        color: '#21B5CF',
        fontWeight: 'bold',
    },
    activeCategoryText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 10,
        elevation: 3,
    },
    tab: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#21B5CF',
    },
    tabText: {
        color: '#7F7F7F',
        fontWeight: 'bold',
    },
    activeTabText: {
        color: '#21B5CF',
        fontWeight: 'bold',
    },
    propertyList: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    propertyImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    propertyDetails: {
        flex: 1,
        marginLeft: 10,
    },
    propertyName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    propertyAddress: {
        fontSize: 12,
        color: '#7F7F7F',
        marginVertical: 5,
    },
    propertyInfo: {
        fontSize: 12,
        color: '#7F7F7F',
    },
    propertyRent: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 5,
    },
    paymentStatus: {
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignSelf: 'flex-start',
    },
    paid: {
        color: '#4CAF50',
        backgroundColor: '#E8F5E9',
    },
    overdue: {
        color: '#F44336',
        backgroundColor: '#FFEBEE',
    },
    pending: {
        color: '#FF9800',
        backgroundColor: '#FFF3E0',
    },
});