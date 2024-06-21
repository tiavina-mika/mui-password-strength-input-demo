import { Card, CardContent, ThemeProvider, Typography, createTheme } from '@mui/material';
import PasswordStrengthInput from 'mui-password-strength-input';
import Footer from './Footer';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col justify-center items-center min-h-dvh gap-4 bg-neutral-500">
        <Card className="max-w-[400px] pb-2 px-2">
          <CardContent>
            <div className="flex flex-col gap-3 mb-6 mt-2">
              <Typography variant="h5">mui-password-strength-input</Typography>
              <Typography variant="body2">Click on the input field and type a password to see the strength indicator</Typography>
            </div>
            <PasswordStrengthInput
              placeholder="Enter your password"
              barClassName="flex-1"
              strengthLabelClassName="!text-sm"
              className="!w-full"
              /**
               * decomment if overriding options
               */
              // options={{
              //   tooWeak: {
              //     label: 'Too weak 2',
              //     color: 'red',
              //   },
              //   weak: {
              //     label: 'Weak 2',
              //     color: 'yellow',
              //   },
              //   medium: {
              //     label: 'Medium 2',
              //     color: 'green',
              //   },
              //   strong: {
              //     label: 'Strong 2',
              //     color: 'blue'
              //   },
              // }}
            />
          </CardContent>
          </Card>
          <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
