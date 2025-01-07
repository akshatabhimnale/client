import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

interface Tenant {
  id: string;
  name: string;
  joinedDate: string;
  propertyName: string;
  address: string;
  rent: string;
  dueDate: string;
  avatar: string;
}

const tenants: Tenant[] = [
  {
    id: '1',
    name: 'John',
    joinedDate: '15 June 2024',
    propertyName: 'Willow Creek',
    address: '123 Main St, Anytown, USA',
    rent: '$1500 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t1.jpg'),
  },
  {
    id: '2',
    name: 'Mariya',
    joinedDate: '02 June 2024',
    propertyName: 'Sunny Side Up',
    address: '789 Oak St, Sunnyville, USA',
    rent: '$1500 / Month',
    dueDate: '02 July 2024',
    avatar: require('@/assets/images/tenant/t2.jpg'),
  },
  {
    id: '3',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t3.jpg'),
  },
  {
    id: '4',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t4.jpg'),
  },
  {
    id: '5',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t5.jpg'),
  },
  {
    id: '6',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t6.jpg'),
  },
  {
    id: '7',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t7.jpg'),
  },
  {
    id: '8',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t8.jpg'),
  },
  {
    id: '9',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t9.jpg'),
  },
  {
    id: '10',
    name: 'William',
    joinedDate: '15 June 2024',
    propertyName: 'Pineview Estate',
    address: '456 Elm St, Greenville, USA',
    rent: '$1400 / Month',
    dueDate: '15 July 2024',
    avatar: require('@/assets/images/tenant/t10.jpg'),
  },
];

const TenantList: React.FC = () => {
  const router = useRouter();

  const handleTenantClick = (tenantId: string) => {
    // Navigate to the tenant-specific file
    router.push(`/tenant/${tenantId}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tenants</Text>
      {tenants.map((tenant) => (
        <View key={tenant.id} style={styles.card}>
          {/* Tenant Info */}
          <View style={styles.tenantInfo}>
            <TouchableOpacity onPress={() => handleTenantClick(tenant.id)}>
              <Image
                source={typeof tenant.avatar === 'string' ? { uri: tenant.avatar } : tenant.avatar}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={styles.tenantDetails}>
              <Text style={styles.tenantName}>{tenant.name}</Text>
              <Text style={styles.joinedText}>Joined: {tenant.joinedDate}</Text>
              <Text style={styles.propertyDetails}>Property Details</Text>
              <Text style={styles.propertyName}>{tenant.propertyName}</Text>
              <Text style={styles.propertyAddress}>{tenant.address}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity>
                <Icon name="pencil" type="material-community" size={20} color="#21B5CF" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="delete" type="material-community" size={20} color="#21B5CF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Rent Info */}
          <View style={styles.rentInfo}>
            <Text style={styles.rent}>Rent: {tenant.rent}</Text>
            <Text style={styles.due}>Due on: {tenant.dueDate}</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.remindButton}>
              <Text style={styles.remindButtonText}>Remind Tenant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addDueButton}>
              <Text style={styles.addDueButtonText}>Add Due</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default TenantList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  card: {
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
  tenantInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tenantDetails: {
    flex: 1,
    marginLeft: 10,
  },
  tenantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  joinedText: {
    fontSize: 12,
    color: '#7F7F7F',
    marginBottom: 5,
  },
  propertyDetails: {
    fontSize: 12,
    color: '#21B5CF',
    fontWeight: 'bold',
  },
  propertyName: {
    fontSize: 14,
    color: '#000',
  },
  propertyAddress: {
    fontSize: 12,
    color: '#7F7F7F',
  },
  actions: {
    justifyContent: 'space-between',
  },
  rentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },
  rent: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  due: {
    fontSize: 14,
    color: '#F44336',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remindButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: '#21B5CF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  remindButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  addDueButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#D7E9F1',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addDueButtonText: {
    color: '#21B5CF',
    fontWeight: 'bold',
  },
});