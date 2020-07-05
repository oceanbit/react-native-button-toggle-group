import { Component } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface ButtonToggleGroupProps {
	values: string[];
	value: string;
	onSelect: (val: string) => void;
	style?: StyleProp<ViewStyle>;
	highlightBackgroundColor: string;
	highlightTextColor: string;
	inactiveBackgroundColor: string;
	inactiveTextColor: string;
	textStyle?: StyleProp<TextStyle>;
}

export default class ButtonToggleGroup extends Component<
	ButtonToggleGroupProps,
	any
> {}
