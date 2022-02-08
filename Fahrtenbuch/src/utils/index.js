
export const navTo = (screen, props) => {
  const { navigation } = props
  navigation.navigate(screen)
  if (navigation && navigation.closeDrawer) {
    navigation.closeDrawer()
  }
}
