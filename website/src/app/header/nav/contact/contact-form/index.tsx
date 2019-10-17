import React, { FunctionComponent, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Close from '@material-ui/icons/Close'
import { useFormState } from 'react-use-form-state'

export class ContactFormProps {
  onSubmit?: () => void
}

const ContactForm: FunctionComponent<ContactFormProps> = ({ onSubmit = () => null }) => {
  const
    [{ errors, values: { named, title, content }, validity }, { text, textarea }] = useFormState(),
    [snackbar, setSnackbar] = useState(false),
    closeSnackbar = () => setSnackbar(false)
  return <>
    <Box className="flex-column margin-1.5">
      <Box className="fs-1.7 margin-top-0.2">שליחת מסר</Box>
      <Box className="margin-top-0.2 fs-1.2 margin-bottom-1.6">מסר, שאלות, מסירת שמות לברכה</Box>
      <TextField
        {...text(`named`)}
        required
        error={!!errors.named}
        label="שם מלא"
        helperText={errors.named}
        margin="normal"
        variant="outlined"
        className="margin-bottom-0.8"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        {...text(`title`)}
        error={!!errors.title}
        required
        helperText={errors.title}
        label="כותרת"
        margin="normal"
        variant="outlined"
        className="margin-bottom-0.8"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        {...textarea(`content`)}
        helperText={errors.content}
        label="תוכן"
        multiline
        rows="10"
        margin="normal"
        variant="outlined"
        className="margin-bottom-0.2"
        InputLabelProps={{ shrink: true }}
      />
      <Fab
        variant="extended"
        size="large"
        color="secondary"
        className="h-content w-content padding-horizontal-4 margin-horizontal-auto margin-vertical-2.5"
        disabled={!named || !title || !validity}
        onClick={async () => {
          try {
            const { ok } = await fetch(`https://inquiries-receiver.herokuapp.com/mailto`, {
              method: `post`,
              headers: { 'Content-Type': `application/json` },
              body: JSON.stringify({
                to: `arigold054@gmail.com`,
                subject: `${named} אומר: ${title}`,
                text: content
              })
            })
            if (!ok) throw new Error
            onSubmit()
          }
          catch (error) {
            setSnackbar(true)
          }
        }}
      >
        <Box className="fs-1.7">
          שליחה
       </Box>
      </Fab>
    </Box>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={snackbar}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      message="שליחה נכשלה, אנא נסה שנית"
      action={[<IconButton color="inherit" onClick={closeSnackbar}><Close /></IconButton>]}
    />
  </>
}

export default ContactForm