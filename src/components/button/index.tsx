import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonArea, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    value: string;
    height?: number;
    width?: number;
    colorText?: string;
    sixeText?: number;
    weightText?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 100 | 200 | 300 | 400 | 500 | 700 | 800 | 900 | "ultralight" | "thin" | "light" | "medium" | undefined
}

export const Button: React.FC<ButtonProps> = ({ value, onPress, style, colorText, sixeText, weightText }) => {
    return (
        <ButtonArea onPress={onPress} style={style}>
            <Text style={{ 
                color: colorText??'#FFFFFF', 
                fontSize: sixeText??16,
                fontWeight: weightText?? 700
            }}>
                {value}
            </Text>
        </ButtonArea>
    );
}