import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    {id: 1, nome: 'Joao', nota: 7.9},
    {id: 2, nome: 'Maria', nota: 8.5},
    {id: 3, nome: 'Paulo', nota: 10.0},
    {id: 4, nome: 'Pedro', nota: 5.9},
    {id: 5, nome: 'Vanessa', nota: 4.9},
    {id: 6, nome: 'Joaquim', nota: 3.8},
    {id: 7, nome: 'Gustavo', nota: 7.1},
    {id: 8, nome: 'Carla', nota: 5.1},
    {id: 9, nome: 'Paula', nota: 1.2},
    {id: 10, nome: 'Ricardo', nota: 1.2},
    {id: 11, nome: 'Joao', nota: 7.9},
    {id: 12, nome: 'Maria', nota: 8.5},
    {id: 13, nome: 'Paulo', nota: 10.0},
    {id: 14, nome: 'Pedro', nota: 5.9},
    {id: 15, nome: 'Vanessa', nota: 4.9},
    {id: 16, nome: 'Joaquim', nota: 3.8},
    {id: 17, nome: 'Gustavo', nota: 7.1},
    {id: 18, nome: 'Carla', nota: 5.1},
    {id: 19, nome: 'Paula', nota: 1.2},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}