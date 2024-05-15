import React, { Dispatch, SetStateAction, useState } from 'react';
import { Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Container, styles } from './styles';

export interface DropdownValueType {
    label: string;
    value: string;
}

export type PropsDropdownType ={
    dropdownValue: DropdownValueType[],
    valueDropdown: string | null,
    setValueDropdown: Dispatch<SetStateAction<string | null>>
}

export const DropdownComponent = (props: PropsDropdownType) => {
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (props.valueDropdown || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: '#4B5565' }]}>
                    Ordenar
                </Text>
            );
        }
        return null;
    };

    return (
        <Container>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#4B5565' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={props.dropdownValue}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Ordenar' : '...'}
                searchPlaceholder="Pesquisar..."
                value={props.valueDropdown}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    props.setValueDropdown(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <Text
                        style={styles.icon}
                    />
                )}
            />
        </Container>
    );
};


