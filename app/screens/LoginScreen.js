import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from '../config/colors';

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                resizeMode={"contain"}
                style={styles.image}
                source={require("../assets/favicon.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
    },
    image: {
        width: "100%",
        height: "100%",
    }
});

export default LoginScreen;