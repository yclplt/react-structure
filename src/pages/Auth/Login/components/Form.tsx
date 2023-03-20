import * as React from 'react'
import * as yup from 'yup'
import { Box, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { useFormik } from 'formik'
import { useSnackbar } from 'notistack'
import { useAuthLoginMutation } from '@/hooks'

const createValidationSchema = (y: typeof yup) =>
    y.object().shape({
        email: y.string().email().max(255).required(),
        password: y.string().min(6).required(),
    })

const Form = () => {
    const loginMutation = useAuthLoginMutation()

    const [verificationDialog, setVerificationDialog] = React.useState({
        isOpen: false,
        email: '',
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: createValidationSchema(yup),
        onSubmit: async (values) => {
            const response = await loginMutation.mutateAsync(values)
            !response.isEmailVerified &&
                setVerificationDialog({
                    isOpen: true,
                    email: response.email,
                })
        },
    })

    return (
        <>
            <TextField
                autoFocus
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                type="email"
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                type="password"
                variant="outlined"
                onKeyDown={(e) => e.key === 'Enter' && formik.handleSubmit()}
            />

            <Box sx={{ mt: 2 }}>
                <LoadingButton
                    onClick={() => formik.handleSubmit()}
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Login
                </LoadingButton>
            </Box>
        </>
    )
}

export default Form
