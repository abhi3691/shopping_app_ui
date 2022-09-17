import { View, Text } from 'react-native'
import React from 'react'
import styles from './HomeScreenStyle'
import HomeHeader from '../../components/organization/home_header/HomeHeader'
import RequestList from '../../components/template/reqest_list/RequestList'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* //header */}
      <HomeHeader name={"john"} />

      {/* //request list */}
      <RequestList />
    </View>
  )
}

export default HomeScreen