import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default{
    Titile: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
        <>
            <TextInput.Icon>
            <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail address '/>
            </>
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    }  
} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {}

export const withoutIcon: StoryObj<TextInputRootProps> = {
    args: {
    children: <TextInput.Input placeholder="Type your e-mail address"/>
},
}

