import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Card from '../components/Card';
import Footer from '../../home/footer/footer';

const Account = () => {
  const elements = [
    (accountItems = [
      { icon: 'user-edit', text: 'Account', action: 'navigateToEditProfile' },
      { icon: 'user-shield', text: 'security', action: 'navigateToSecurity' },
      { icon: 'info-circle', text: 'Notifications', action: 'navigateToNotifications' },
      { icon: 'eye', text: 'Confidentiality', action: 'navigateToPrivacy' },
    ]),
    (supportItems = [
      { icon: 'credit-card', text: 'credit card', action: 'navigateToSubscription' },
      { icon: 'hands-helping', text: 'Support', action: 'navigateToSupport' },
      { icon: 'info', text: 'Conditions et Politics', action: 'navigateToTermsAndPolicies' },
    ]),
    (cacheAndCellularItems = [
      { icon: 'database', text: "Liberate cache", action: 'navigateToFreeSpace' },
      { icon: 'network-wired', text: "data economy", action: 'navigateToDateSaver' },
    ]),
    (actionsItems = [
      { icon: 'flag', text: 'problem', action: 'navigateToReportProblem' },
      { icon: 'sign-out-alt', text: 'logout', action: 'logout' },
    ]),
  ];

  return (
    <View style={{flex : 1}}>
      <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {elements.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.sectionContainer}>
              {section.map((item, itemIndex) => (
                <Card icon={item.icon} text={item.text} key={itemIndex} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
    <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F2F2F2',
    top : 20
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    margin: 16,
  },
  sectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
    marginBottom: 16,
    paddingBottom: 16,
  },
});

export default Account;
