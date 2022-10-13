import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button" 

export default{
    Titile: 'Components/Button',
    component: Button,
    args: {
        children: 'Lorem Ipsum',
        size: 'md',
        
    },
    argTypes: {

    }  
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

