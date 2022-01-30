import Activity from '../components/Activity';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as activityExample from '../examples/activityExample.json';
import * as activityJoined from '../examples/activityJoined.json';
import SearchBar from '../components/SearchBar';
import changeState from '../components/changeState';

var isJoined = true;

const JoinScreen = ({ navigation }) => {

  return (
    <View style={styles.activityWrapper}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={styles.sectionTitle}>Activity Nearby</Text>
        <SearchBar/>
      </View>
      
      {
        React.useState.changeState(0) ? (
          <ScrollView style={styles.items}>
            {activityExample.activities.map((activity, id) => (
              <Activity
                key={id}
                title={activity.title}
                description={activity.description}
                location={activity.location}
                categories={activity.categories}
              />
            ))}
          </ScrollView>
        ) : null
      }
        
      {
        React.useState.changeState(0) ? null : (
          <View>
            <View>
              {activityJoined.activities.map((activity, id) => (
                <Activity
                  key={id}
                  title={activity.title}
                  description={activity.description}
                  location={activity.location}
                  categories={activity.categories}
                />
              ))}
            </View>
            <ScrollView style={styles.items}>
              {activityExample.activities.map((activity, id) => (
                <Activity
                  key={id}
                  title={activity.title}
                  description={activity.description}
                  location={activity.location}
                  categories={activity.categories}
                />
              ))}
          </ScrollView>
        </View>
        )
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  activityWrapper: {
    flex: 1,
    backgroundColor: '#EBEAED',
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: '33%',
    borderRadius: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    // paddingTop: 10,
  },
  items: {
    marginTop: 20
  },
});

export default JoinScreen;
