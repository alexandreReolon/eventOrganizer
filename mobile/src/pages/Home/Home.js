import React from 'react';
import styles from './Styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                </Text>
            </View>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#E82041" />
            </TouchableOpacity>
            <Text style={styles.title}>Informa seu dados abaixo para se cadastrar</Text>


        </View>
    );

    function navigateBack() {
        navigation.goBack();
    }
}