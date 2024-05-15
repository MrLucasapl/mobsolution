import React from 'react';
import { DimensionValue, StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Box, Input, InputArea, TextArea } from './styles';

interface SignInputProps extends TextInputProps {
    IconSvg?: React.FC<SvgProps>;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void
    password?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    height?: number;
    width?: number;
    inputMode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url',
    label?: string
}

export const SignInput: React.FC<SignInputProps> = ({ label, IconSvg, placeholder, value, onChangeText, password, multiline, numberOfLines, height, width, inputMode, onBlur }) => {
    const InputAreaStyle: StyleProp<ViewStyle> = {
        width: width ? `${width}%` : 'auto' as DimensionValue | undefined,
        height: height ? height : 60 as DimensionValue | undefined,
    };

    return (
        <InputArea style={InputAreaStyle}>
            {label && <TextArea>{label}</TextArea>}
            <Box>
                {IconSvg && <IconSvg width="24" height="24" fill="#FEFEFE" style={{ marginLeft: 10 }} />}
                <Input
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    placeholder={placeholder}
                    placeholderTextColor="#697586"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                    returnKeyType='done'
                    inputMode={inputMode ? inputMode : "text"}
                    onBlur={onBlur}
                />
            </Box>
        </InputArea>
    );
}