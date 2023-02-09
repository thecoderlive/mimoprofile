import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import AchievementList from './AchievementList'

const MimoProfile = () => (
<ScrollView style={styles.mimo_profile} showsVerticalScrollIndicator={false}>
<Image
    style={styles.setting_icon}
    source={{uri: item.setting_icon}}
   />
<Text style={styles.email}>{item.email}</Text>
<Text style={styles.build_app}>{item.build_app}</Text>
<Text style={styles.progress_percent}>{item.progress_percent}</Text>
<Text style={styles.achievement}>{item.achievement}</Text>
<Text style={styles.achievement_count}>{item.achievement_count}</Text>
<AchievementList item={item.achievement_list}/>
</ScrollView>
)

export default MimoProfile;

const styles = StyleSheet.create({
    'setting_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    },
    'email': {
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'build_app': {
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'progress_percent': {
        'color': '#8a8585',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'achievement': {
        'color': '#979595',
        'fontSize': 16,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'achievement_count': {
        'color': '#7f7a7a',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});