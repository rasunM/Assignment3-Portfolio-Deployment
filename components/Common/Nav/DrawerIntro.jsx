import React from 'react'
import DrawerLayout from '../DrawerLayout'
import Intro from '../Intro'
export const runtime = "experimental-edge";
export const DrawerIntro = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <Intro />
        </DrawerLayout>
    )
}
