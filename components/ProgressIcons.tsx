import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {times} from 'lodash';
import ProgressIcon from './ProgressIcon';
import {Dependencies} from './Icons';

type ProgressIconsProps = {
  isComplete: boolean;
  activeIcon: number;
  library: keyof typeof Dependencies;
  name: string;
  size: number;
  color: string;
  nonActiveIconColor: string;
  completedIconColor: string;
  children: Array<JSX.Element>;
};

class ProgressIcons extends React.Component<ProgressIconsProps> {
  static defaultProps = {
    isComplete: false,
    activeIcon: null,
    nonActiveIconColor: 'light_gray',
    completedIconColor: null,
  };

  state = {
    stepCount: 0,
    activeIcon: this.props.activeIcon,
    isComplete: false,
  };

  componentDidMount() {
    this.setState({stepCount: React.Children.count(this.props.children)});
  }

  componentDidUpdate(prevProps: {activeIcon: number}) {
    if (prevProps.activeIcon !== this.props.activeIcon) {
      this.setActiveIcon(this.props.activeIcon);
    }
  }

  renderIcons = () => {
    let stepIcon: Array<React.ReactNode> = [];

    times(this.state.stepCount, (i: React.Key) => {
      const isCompletedStep = this.props.isComplete
        ? true
        : i < this.state.activeIcon;

      const isActiveIcon = this.props.isComplete
        ? false
        : i === this.state.activeIcon;

      stepIcon.push(
        <View key={i}>
          <View>
            <ProgressIcon
              isCompletedStep={isCompletedStep}
              isActiveIcon={isActiveIcon}
              name={this.props.name}
              library={this.props.library}
              size={this.props.size}
              color={this.props.color}
              nonActiveIconColor={this.props.nonActiveIconColor}
              completedIconColor={this.props.completedIconColor}
            />
          </View>
        </View>,
      );
    });

    return stepIcon;
  };

  setActiveIcon = (step: number) => {
    if (step >= this.state.stepCount - 1) {
      this.setState({activeIcon: this.state.stepCount - 1});
    }

    if (step > -1 && step < this.state.stepCount - 1) {
      this.setState({activeIcon: step});
    }
  };

  render() {
    interface Styles {
      icons: ViewStyle;
    }

    const styles = StyleSheet.create<Styles>({
      icons: {
        flexDirection: 'row',
        marginLeft: 3,
      },
    });

    return <View style={styles.icons}>{this.renderIcons()}</View>;
  }
}

export default ProgressIcons;
