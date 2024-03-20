const size = {
    xs: '400px', // for small screen mobile
    sm: '767px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
}

export const devices = {
    max:{
        xs:  `(width < ${size.xs})`,
        sm:  `(width < ${size.sm})`,
        md:  `(width < ${size.md})`,
        lg:  `(width < ${size.lg})`,
        xl:  `(width < ${size.xl})`,
        xxl: `(width < ${size.xxl})`,
    },
    min:{
        xs:  `(width >= ${size.xs})`,
        sm:  `(width >= ${size.sm})`,
        md:  `(width >= ${size.md})`,
        lg:  `(width >= ${size.lg})`,
        xl:  `(width >= ${size.xl})`,
        xxl: `(width >= ${size.xxl})`,
    }
}

export const display = {
    ['d-sm-none']: `@media ${devices.max.sm}{ display: none}`,
}