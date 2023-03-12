import React from 'react';
import { View, Text, Button } from 'react-native';

interface Jobs {
    navigation: any,
}

const Jobs: React.FC<Jobs> = ({ navigation }) => {
    return (
        <View>
            <Text> Hello Jobs Page!</Text>
            <Button title='Go To Detail' onPress={() => navigation.navigate('JobsDetail')} />
        </View>
    )
}

export default Jobs;