import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const AddPropertyScreen: React.FC = () => {
    const [role, setRole] = useState<string | null>(null);
    const [purpose, setPurpose] = useState<string | null>('Sell');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Add property</Text>
            <Text style={styles.subHeader}>
                cleaning agencies, window cleaning services, dry clean, house service,
                maid services, baby-sitter
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Property name</Text>
                <TextInput style={styles.input} placeholder="Enter name" />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter number"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter email"
                    keyboardType="email-address"
                />
            </View>

            <Text style={styles.label}>Roles</Text>
            <View style={styles.rolesContainer}>
                {['Owner', 'Manager', 'Guard'].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.roleButton,
                            role === item && styles.roleButtonSelected,
                        ]}
                        onPress={() => setRole(item)}
                    >
                        <Text
                            style={[
                                styles.roleText,
                                role === item && styles.roleTextSelected,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>Purpose</Text>
            <View style={styles.purposeContainer}>
                {['Sell', 'Rent'].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[
                            styles.purposeButton,
                            purpose === item && styles.purposeButtonSelected,
                        ]}
                        onPress={() => setPurpose(item)}
                    >
                        <Text
                            style={[
                                styles.purposeText,
                                purpose === item && styles.purposeTextSelected,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9F9F9',
        paddingTop: 30,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 14,
        color: '#7D7D7D',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
    },
    rolesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    roleButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    roleButtonSelected: {
        backgroundColor: '#007BFF',
        borderColor: '#007BFF',
    },
    roleText: {
        color: '#000',
    },
    roleTextSelected: {
        color: '#FFF',
    },
    purposeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    purposeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    purposeButtonSelected: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    purposeText: {
        color: '#000',
    },
    purposeTextSelected: {
        color: '#FFF',
    },
});

export default AddPropertyScreen;