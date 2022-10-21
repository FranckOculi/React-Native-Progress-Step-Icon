import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import Iicon from 'react-native-vector-icons/Ionicons';
import Fisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';

type LibraryProps = {
  dependencies: keyof typeof Dependencies;
};

interface IconProps {
  library: LibraryProps['dependencies'];
  name: string;
  size: number;
  color: string;
  style?: object;
}

export const Dependencies = {
  AntDesign: 'AntDesign',
  EntIcon: 'EntIcon',
  FeatherIcon: 'FeatherIcon',
  FontAwesome: 'FontAwesome',
  FontAwesome5: 'FontAwesome5',
  Fontisto: 'Fontisto',
  Ionicons: 'Ionicons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  MaterialIcons: 'MaterialIcons',
  Octicons: 'Octicons',
};

const Icon = ({library, name, size, color, style}: IconProps) => {
  switch (library) {
    case 'AntDesign':
      return <AntIcon name={name} size={size} color={color} style={style} />;
    case 'EntIcon':
      return <EntIcon name={name} size={size} color={color} style={style} />;
    case 'FeatherIcon':
      return <Feather name={name} size={size} color={color} style={style} />;
    case 'FontAwesome':
      return <FIcon name={name} size={size} color={color} style={style} />;
    case 'FontAwesome5':
      return <F5Icon name={name} size={size} color={color} style={style} />;
    case 'Fontisto':
      return <Fisto name={name} size={size} color={color} style={style} />;
    case 'Ionicons':
      return <Iicon name={name} size={size} color={color} style={style} />;
    case 'MaterialCommunityIcons':
      return <MCIcon name={name} size={size} color={color} style={style} />;
    case 'MaterialIcons':
      return <MIcon name={name} size={size} color={color} style={style} />;
    case 'Octicons':
      return <OIcon name={name} size={size} color={color} style={style} />;
    default:
      throw new Error('Wrong library');
  }
};

export default Icon;
