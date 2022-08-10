import { useNavigation } from "@react-navigation/native";
const navigation = useNavigation<any>();


export function handleNavigation(route: String) {
  navigation.navigate(route);
}

export function handleNavigationWithParams(route: String, params) {
  navigation.navigate(route, params);
}
