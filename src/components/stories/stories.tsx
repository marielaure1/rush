import React, {useContext} from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, View } from 'react-native';
import buttons from '@theme/theme.buttons';
import texts from '@theme/theme.texts';
import ButtonSecondary from "@components/buttons/buttonSecondary";
import useStories from "@/src/components/stories/stories.hook";
import styles from "@/src/components/layout/header/header.styles";

const Stories: React.FC = ({navigation}) => {
    // const {listStories} = useStories()
    return (
        <View style={[styles.container]}>
            {/* {listStories && listStories.map(() => (
                <Text style={texts.textPrimary}>Rush</Text>
            ))} */}
            
        </View>
    );
};

export default Stories;
