import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';

const UserProfileScreen: React.FC = () => {
    const data = [
        {
            id: '1',
            icon: '👤',
            title: 'Personal Documents',
            description: 'Your Documents are uploaded.',
        },
        {
            id: '2',
            icon: '💳',
            title: 'Digital KYC',
            description: 'Aadhar Card\nPAN Card',
            status: 'Verified',
        },
        {
            id: '3',
            icon: '📄',
            title: 'Rental Agreement',
            description: 'You’ve signed the rental agreement.',
        },
        {
            id: '4',
            icon: '🛡️',
            title: 'Police Verification',
            description: 'Your Police Verification is complete.',
        },
        {
            id: '5',
            icon: '👥',
            title: 'Room mate details',
        },
        {
            id: '6',
            icon: '🔒',
            title: 'Management Details',
        },
    ];

    const renderItem = ({
        item,
    }: {
        item: { id: string; icon: string; title: string; description?: string; status?: string };
    }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                {item.description && <Text style={styles.itemDescription}>{item.description}</Text>}
            </View>
            {item.status && <Text style={styles.status}>{item.status}</Text>}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Text style={styles.headerIcon}>{'◀'}</Text>
                </TouchableOpacity>
                <Image
                    source= {require('@/assets/images/tenant/t10.jpg')}
                    style={styles.profileImage}
                />
                <TouchableOpacity>
                    <Text style={styles.headerIcon}>{'⋮'}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.userName}>Kartik Sharma</Text>
            <Text style={styles.userRoom}>Room - 104</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingTop:30,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerIcon: {
        fontSize: 24,
        color: '#000',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    userRoom: {
        fontSize: 16,
        color: '#7D7D7D',
        textAlign: 'center',
        marginBottom: 16,
    },
    listContainer: {
        paddingHorizontal: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    icon: {
        fontSize: 24,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    itemDescription: {
        fontSize: 14,
        color: '#7D7D7D',
        marginTop: 4,
    },
    status: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
});

export default UserProfileScreen;