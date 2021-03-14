import React from 'react'
import PropType from 'prop-types'
import { Flex, Box } from 'rebass'

const BaseContainer = ({ children, flex = false, ...rest }) => {
    let Component = flex ? Flex : Box
    return <Component {...rest}>{children}</Component>
}

export { BaseContainer }

BaseContainer.protoType = {
    flex: PropType.bool,
    as: PropType.string,
    children: PropType.node.isRequired
}