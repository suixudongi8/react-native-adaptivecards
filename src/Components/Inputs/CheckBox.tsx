import * as React from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleManager } from '../../Styles/StyleManager';

interface IProps<T> {
    title: string;
    value: T;
    checked: boolean;
    theme: 'default' | 'emphasis';
    onClick: (value: T) => void;
}

export class Checkbox<T> extends React.Component<IProps<T>> {
    public render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.onClick}
            >
                <View
                    style={[
                        {
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'stretch',
                            paddingTop: 18,
                        }
                    ]}
                >
                    <Icon
                        name={this.radioIcon}
                        size={24}
                        color={this.radioColor}
                        style={{
                            paddingTop: 4,
                        }}
                    />
                    <Text
                        style={{
                            color: this.color,
                            fontSize: StyleManager.getFontSize('default'),
                            fontWeight: StyleManager.getFontWeight('default'),
                            textAlign: StyleManager.getTextAlign('left'),
                            width: 0,
                            flex: 1,
                            flexWrap: StyleManager.getWrap(true),
                            paddingLeft: 16,
                        }}
                    >
                        {this.props.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    private onClick = () => {
        console.log('Checkbox clicked');
        console.log(this.props.value);
        if (this.props.onClick) {
            this.props.onClick(this.props.value);
        }
    }

    private get color() {
        return StyleManager.getCheckboxTitleColor(this.props.theme);
    }

    private get radioColor() {
        return StyleManager.getCheckboxBoxColor(this.props.theme, this.props.checked);
    }

    private get radioIcon() {
        if (this.props.checked) {
            return 'check-box';
        } else {
            return 'check-box-outline-blank';
        }
    }
}
