import React from 'react'
import PropType from 'prot-types'
import{ Flex, Box } from 'rebass'
 
export const BaseContainer = ({ children, flex = false, ...rest }) => {
    let Component = flex ? Flex : Box
    return <Component {...rest}>{children}</Component>
}

BaseContainer.propType = {
    flex: PropType.bool,
    as: PropType.string,
    children: PropType.node.isRequired
}