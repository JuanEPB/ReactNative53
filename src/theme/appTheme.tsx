import { StyleSheet } from "react-native";

export const colorsTheme = {
  primary: "#3FD0FC",
  secondary: "#EDF5FF",
  tertirary: "#A087FF",
  background: "#E1F4FF",
};

export const appTheme = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  globalContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 90,
    borderColor: "gray",
    borderWidth: 5,
  },
  avatarContainer: {
    alignItems: "center",
  },
  menuContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuBtn: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    borderColor: "blue",
  },
});
