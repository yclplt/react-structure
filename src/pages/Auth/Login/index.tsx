import { Box, Card, Typography, Link, Grid } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Form from './components/Form'

const LoginPage = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Card elevation={16} sx={{ p: 4 }}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h4">Login</Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt: 3,
                            mb: 2,
                        }}
                    >
                        <Form />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Link
                            color="textSecondary"
                            component={RouterLink}
                            to="/panel/authentication/register"
                            variant="body2"
                        >
                            New Account
                        </Link>
                    </Box>
                </Card>
            </Grid>
        </Grid>

    )
}

export default LoginPage
