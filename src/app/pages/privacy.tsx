"use client";

import {Metadata} from 'next';
import {motion} from 'framer-motion';
import {
    Container,
    Typography,
    CssBaseline,
    createTheme,
    ThemeProvider,
} from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6200ea',
        },
        secondary: {
            main: '#03dac6',
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#333333',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h3: {
            fontWeight: 700,
            color: '#6200ea',
        },
        h5: {
            fontWeight: 600,
            color: '#03dac6',
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                },
            },
        },
    },
});

export const metadata: Metadata = {
    title: 'Privacy Policy - Mind Reader',
};

const PrivacyPolicy = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="md" sx={{mt: 4, mb: 4}}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <Typography variant="h3" component="h1" align="center" gutterBottom>
                        Privacy Policy
                    </Typography>
                    <motion.div
                        initial={{x: '-100vw'}}
                        animate={{x: 0}}
                        transition={{type: 'spring', stiffness: 50}}
                    >
                        <Typography variant="body1" paragraph>
                            Welcome to Mind Reader! This privacy policy explains how we collect,
                            use, and protect your information when you use our app.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{y: '-100vh'}}
                        animate={{y: 0}}
                        transition={{type: 'spring', stiffness: 50}}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Information Collection
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Mind Reader does not collect any personal information from its users.
                            The app is designed to be simple and does not require any data input
                            from you.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The only information collected is for the purpose of serving
                            advertisements via Unity Ads. This may include information such as
                            device type, location, and other non-personal information.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{y: '-100vh'}}
                        animate={{y: 0}}
                        transition={{type: 'spring', stiffness: 50, delay: 0.2}}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Unity Ads
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Mind Reader uses Unity Ads to serve advertisements. Unity Ads may
                            collect certain information to display relevant ads. Please refer to
                            Unity{`'`}s privacy policy for more information.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The information collected by Unity Ads is used solely for ad-serving
                            purposes and is not shared with any third parties beyond what is
                            necessary for the operation of the ad network.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{y: '-100vh'}}
                        animate={{y: 0}}
                        transition={{type: 'spring', stiffness: 50, delay: 0.4}}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Changes to This Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may update this privacy policy from time to time. Any changes will
                            be posted on this page. We encourage you to review this policy
                            periodically to stay informed about how we are protecting your
                            information.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If we make significant changes to the policy, we will provide a more
                            prominent notice.
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{y: '-100vh'}}
                        animate={{y: 0}}
                        transition={{type: 'spring', stiffness: 50, delay: 0.6}}
                    >
                        <Typography variant="h5" component="h2" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you have any questions about this privacy policy, please contact us
                            at rayensbai2@gmail.com. We are committed to addressing your
                            questions and resolving any concerns you may have.
                        </Typography>
                    </motion.div>
                </motion.div>
            </Container>
        </ThemeProvider>
    );
};

export default PrivacyPolicy;
