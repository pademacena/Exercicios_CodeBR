import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize: 30 } }

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props}))
}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}

        {/*So funciona caso o pai tenha somente um filho*/}
        {/* {React.cloneElement(props.children, {...props.children.props})} */}

        {/*esse elemnto pega as propriedades do pai e coloca nos filhos */}
        {/* {React.Children.map(props.children,
            c => React.cloneElement(c, { ...props, ...c.props}))} */}

        {/*Exemplo de cima poremutilizando uma funcao*/}
        {filhosComProps(props)}


    </View>

export const Avo = props => 
    <View>
        <Text {...fonte}>Avo: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Andre' sobrenome={props.sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Gui' />
            <Filho nome='Davi' />
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca'/>
            <Filho nome='Alice'/>
        </Pai>
    </View>

export default Avo