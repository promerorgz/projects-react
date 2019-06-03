const styles = theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        width: 350,
        height: 350,
        padding: 24,
        margin: 24,
        borderRadius: 35
    },
    header: {
        marginBottom: 24
    },
    options: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    clientImg: {
        width: 70,
        height: 70
    },
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.margin,
            color: theme.palette.primary.text
        }
    }
})

export default styles