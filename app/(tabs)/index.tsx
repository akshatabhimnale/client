import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { PieChart } from 'react-native-chart-kit';

const Dashboard: React.FC = () => {
  const screenWidth = Dimensions.get('window').width;

  // Data for the Pie Chart
  const chartData = [
    { name: 'Income', population: 90, color: '#21B5CF', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Expense', population: 60, color: '#FF4081', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hai Ryan Francis!</Text>
        <Icon name="bell-outline" type="material-community" size={24} color="#000" />
      </View>

      {/* Today's Details */}
      <Card containerStyle={styles.card}>
        <Text style={styles.sectionTitle}>Today's Details</Text>
        <View style={styles.row}>
          <Text style={styles.incomeText}>Income: $25.00</Text>
          <Text style={styles.expenseText}>Expense: $5.00</Text>
        </View>
        <TouchableOpacity style={styles.summaryButton}>
          <Text style={styles.summaryButtonText}>This Month Income Summary</Text>
        </TouchableOpacity>
      </Card>

      {/* Shortcuts */}
      <View style={styles.shortcutContainer}>
        {['Add Property', 'Manage Tenants', 'Manage Maintenance', 'Manage Complaints'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.shortcutButton}>
            <Icon name="folder-outline" type="material-community" size={24} color="#21B5CF" />
            <Text style={styles.shortcutText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Income Summary */}
      <Card containerStyle={styles.card}>
        <Text style={styles.sectionTitle}>June Income Summary</Text>
        <PieChart
          data={chartData}
          width={screenWidth - 40}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${ opacity })`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        <View style={styles.chartLegend}>
          <Text style={styles.legendText}>Total: $1,50,000</Text>
          <Text style={styles.legendText}>Income: $90,000 (60%)</Text>
          <Text style={styles.legendText}>Expense: $60,000 (40%)</Text>
        </View>
      </Card>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#21B5CF',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  incomeText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 16,
  },
  expenseText: {
    color: '#F44336',
    fontWeight: 'bold',
    fontSize: 16,
  },
  summaryButton: {
    backgroundColor: '#EDE7F6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  summaryButtonText: {
    color: '#21B5CF',
    fontWeight: 'bold',
  },
  shortcutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  shortcutButton: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  shortcutText: {
    color: '#21B5CF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  chartLegend: {
    marginTop: 15,
    alignItems: 'center',
  },
  legendText: {
    fontSize: 14,
    color: '#000',
  },
});