import React from 'react';
import Icon, {Dependencies} from './Icons';

type ProgressIconProps = {
  name: string;
  isCompletedStep: boolean;
  isActiveIcon: boolean;
  library: keyof typeof Dependencies;
  size: number;
  color: string;
  nonActiveIconColor: string;
  completedIconColor: string | null;
};

export const ProgressIcon = ({
  name,
  isCompletedStep = false,
  isActiveIcon = false,
  library,
  size,
  color,
  nonActiveIconColor,
  completedIconColor,
}: ProgressIconProps): JSX.Element => {
  const activeIcons = () => {
    return <Icon library={library} name={name} size={size} color={color} />;
  };

  const completedIcons = () => {
    return (
      <Icon
        library={library}
        name={name}
        size={size}
        color={completedIconColor ? completedIconColor : color}
      />
    );
  };

  const nonActiveIcons = () => {
    return (
      <Icon
        library={library}
        name={name}
        size={size}
        color={nonActiveIconColor}
      />
    );
  };

  if (isCompletedStep) {
    return completedIcons();
  } else if (isActiveIcon) {
    return activeIcons();
  } else {
    return nonActiveIcons();
  }
};

export default ProgressIcon;
