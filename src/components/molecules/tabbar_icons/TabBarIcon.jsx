import { View, Text } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
import FontRatio from '../../../global_functions/font_ratio/FontRatio'
import HomeIconFIlled from '../../../assets/svg_icons/home-filled.svg'
import HomeIcon from '../../../assets/svg_icons/home.svg'
import NotificationIconFilled from '../../../assets/svg_icons/notification-filled.svg'
import NotificationIcon from '../../../assets/svg_icons/notification.svg'
import CartIconFilled from '../../../assets/svg_icons/cart-filled.svg'
import CartIcon from '../../../assets/svg_icons/cart.svg'
import PersonIconFilled from '../../../assets/svg_icons/person-filled.svg'
import PersonIcon from '../../../assets/svg_icons/person.svg'
import styles from './TabBarIconStyle'
const TabBarIcon = ({ iconName, label, color }) => {
  return (
    <View style={styles.container}>
      {
        iconName === "home-filled" ?

          <HomeIconFIlled
            height={FontRatio(18)}
            width={FontRatio(18)}
          />
          :
          iconName === "home" ?

            <HomeIcon
              height={FontRatio(18)}
              width={FontRatio(18)}
            />
            :
            iconName === "notifications-filled" ?
              <NotificationIconFilled
                height={FontRatio(18)}
                width={FontRatio(18)}
              />

              :
              iconName === "notifications" ?
                <NotificationIcon
                  height={FontRatio(18)}
                  width={FontRatio(18)}
                />

                :
                iconName === "cart-filled" ?
                  <CartIconFilled
                    height={FontRatio(22)}
                    width={FontRatio(22)}
                  /> :

                  iconName === "cart" ?
                    <CartIcon
                      height={FontRatio(22)}
                      width={FontRatio(22)}
                    /> :
                    iconName === "person-filled" ?
                      <PersonIconFilled
                        height={FontRatio(18)}
                        width={FontRatio(18)}
                      /> :
                      iconName === "person" ?
                        <PersonIcon
                          height={FontRatio(18)}
                          width={FontRatio(18)}
                        /> :
                        <HomeIcon
                          height={FontRatio(18)}
                          width={FontRatio(18)}
                        />
      }
      <Text style={{ fontSize: FontRatio(12), color: color }}>{label}</Text>
    </View>
  )
}

export default TabBarIcon