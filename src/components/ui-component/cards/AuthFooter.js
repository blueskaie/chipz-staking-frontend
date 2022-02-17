// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://chipz-staking-frontend.vercel.app" target="_blank" underline="hover">
            chipz-staking-frontend.vercel.app
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://codedthemes.com" target="_blank" underline="hover">
            &copy; codedthemes.com
        </Typography>
    </Stack>
);

export default AuthFooter;
