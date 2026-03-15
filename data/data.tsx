import {ImageSourcePropType} from "react-native";

interface message {
  id: number,
  nome: string,
  profile: ImageSourcePropType,
  time: string
}

const listMessage: message[] = [
  {
    id: 1,
    nome: 'Josias',
    profile: require('../assets/images/profiles/josias.jpeg'),
    time: '12:12'
  },
  {
    id: 2,
    nome: 'Gustavo',
    profile: require('../assets/images/profiles/gustavo.jpeg'),
    time: '11:11'
  },
  {
    id: 3,
    nome: 'Bruno',
    profile: require('../assets/images/profiles/bruno.jpg'),
    time: '10:10'
  },
  {
    id: 4,
    nome: 'Josias',
    profile: require('../assets/images/profiles/josias.jpeg'),
    time: '12:12'
  },
  {
    id: 5,
    nome: 'Gustavo',
    profile: require('../assets/images/profiles/gustavo.jpeg'),
    time: '11:11'
  },
  {
    id: 6,
    nome: 'Bruno',
    profile: require('../assets/images/profiles/bruno.jpg'),
    time: '10:10'
  },
  {
    id: 7,
    nome: 'Josias',
    profile: require('../assets/images/profiles/josias.jpeg'),
    time: '12:12'
  },
  {
    id: 8,
    nome: 'Gustavo',
    profile: require('../assets/images/profiles/gustavo.jpeg'),
    time: '11:11'
  },
  {
    id: 9,
    nome: 'Bruno',
    profile: require('../assets/images/profiles/bruno.jpg'),
    time: '10:10'
  },
  {
    id: 10,
    nome: 'Josias',
    profile: require('../assets/images/profiles/josias.jpeg'),
    time: '12:12'
  },
  {
    id: 11,
    nome: 'Gustavo',
    profile: require('../assets/images/profiles/gustavo.jpeg'),
    time: '11:11'
  },
  {
    id: 12,
    nome: 'Bruno',
    profile: require('../assets/images/profiles/bruno.jpg'),
    time: '10:10'
  },
];

export default listMessage