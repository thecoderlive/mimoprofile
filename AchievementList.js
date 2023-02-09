import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const achievementListItem = ({ item }) => (
<View style={styles.achievement_list_item}>
<Image
    style={styles.achievement_logo}
    source={{uri: item.achievement_logo}}
   />
<Text style={styles.achievement_title}>{item.achievement_title}</Text>
</View>
  );

const AchievementList = ({ item }) => (
<FlatList
    style={styles.achievement_list}
    data={item}
    renderItem={achievementListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default AchievementList;

const styles = StyleSheet.create({
    'achievement_logo': {
        'width': '14vw',
        'height': '14vw',
        'margin': 5
    },
    'achievement_title': {
        'color': '#9b9797',
        'fontSize': 15,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});