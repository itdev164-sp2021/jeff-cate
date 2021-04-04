import { withTheme } from "styled-components"

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        grays:{ // from light to dark
            0: 'hsl(208,13%, 100%)',
            1: 'hsl(208,13%, 95%)',
            2: 'hsl(208,13%, 85%)',
            3: 'hsl(208,13%, 75%)',
            4: 'hsl(208,13%, 65%)',
            5: 'hsl(208,13%, 55%)',
            6: 'hsl(208,13%, 45%)',
            7: 'hsl(208,13%, 35%)',
            8: 'hsl(208,13%, 25%)',
            9: 'hsl(208,13%, 15%)',
            10: 'hsl(208,13%, 5%)',
        }
    }
}

header: { 
    backgroundColor: '#555' 
}

export { theme as Gray }