import React, { FunctionComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import { useFormState } from 'react-use-form-state'
import size from 'lodash/size'

export class ContactFormProps { }

const ContactForm: FunctionComponent<ContactFormProps> = () => {
  const [{ errors, values, validity }, { text, textarea }] = useFormState();
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
        InputLabelProps={{  shrink: true }}
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
        InputLabelProps={{  shrink: true }}
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
        InputLabelProps={{  shrink: true }}
      />
      <Fab
        variant="extended"
        size="large"
        color="secondary"
        className="h-content w-content padding-horizontal-4 margin-horizontal-auto margin-vertical-2.5"
        disabled={!values.named || !values.title || !validity}
      >
        <Box className="fs-1.7">
          שליחה
       </Box>
      </Fab>
    </Box>
  </>
}

export default ContactForm