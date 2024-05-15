import React, { useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, View } from 'react-native';

type OTPInputProps = {
    length: number;
    value: string[];
    disabled?: boolean;
    onChange(value: string[]): void;
};

export const OTPInput: React.FunctionComponent<OTPInputProps> = ({
    length,
    disabled = false,
    value,
    onChange,
}) => {
    const [inputValue, setInputValue] = useState<string[]>(['', '', '', '', '']);
    const inputRefs = useRef<TextInput[]>([]);

    const onChangeValue = (text: string, index: number) => {
        const newValue = value.map((item, valueIndex) => {
            if (valueIndex === index) {
                return text;
            }
            return item;
        });
        onChange(newValue);
    };

    const handleChange = (text: string, index: number) => {
        const newValue = [...inputValue];
        newValue[index] = text;

        setInputValue(newValue);
        onChangeValue(text, index);

        if (text.length !== 0) {
            if (inputRefs.current[index + 1] && !disabled) {
                inputRefs.current[index + 1].focus();
            }
        } else {
            if (inputRefs.current[index - 1] && !disabled) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleBackspace = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        const { nativeEvent } = event

        if (nativeEvent.key === 'Backspace') {
            handleChange('', index)
        }
    }

    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            {[...new Array(length)].map((item, index) => (
                <TextInput
                    key={index}
                    ref={ref => {
                        if (ref && !inputRefs.current.includes(ref)) {
                            inputRefs.current = [...inputRefs.current, ref]
                        }
                    }}
                    maxLength={1}
                    contextMenuHidden
                    selectTextOnFocus
                    style={{
                        fontSize: 24,
                        color: "#697586",
                        textAlign: 'center',
                        width: 59,
                        height: 56,
                        borderColor: inputValue[index] !== '' ? '#0F96E3' : '#CDD5DF',
                        borderWidth: 1.5,
                        backgroundColor: '#FEFEFE',
                        borderRadius: 4,
                        fontFamily: 'Inter_400Regular',
                    }}
                    editable={!disabled}
                    keyboardType="decimal-pad"
                    testID={`OTPInput-${index}`}
                    onChangeText={text => handleChange(text, index)}
                    onKeyPress={event => handleBackspace(event, index)}
                />
            ))}
        </View>
    );
};