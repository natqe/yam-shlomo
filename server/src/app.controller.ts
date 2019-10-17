import { Body, Controller, Get, Post } from '@nestjs/common'
import { createTransport } from 'nodemailer'
import { SendMailDto } from './app.dto'
import { from } from 'rxjs'
import { mapTo } from 'rxjs/operators'
import { GMAIL_USER, GMAIL_PASS, SEND_MAIL_TO } from './main.constants'

@Controller(`/contact-form`)
export class AppController {
  @Post()
  sendMail(@Body() { title, content, named }: SendMailDto) {
    return from(
      createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS
        }
      }).
        sendMail({
          from: GMAIL_USER,
          to: SEND_MAIL_TO,
          subject: `${named} אומר: ${title}`,
          text: content
        })
    ).pipe(
      mapTo(<const>true)
    )
  }
}
