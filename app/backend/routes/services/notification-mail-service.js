const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const config = require('../../config')

const MAIL_FROM = 'tigrazone@gmail.com';

class NotificationMailService {

  /**
   * Create transport for email
   * @private
   */
  _createTransporter() {
	  /*
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
	auth:  {
				user: 'tigrazone@gmail.com', // Your email id
				pass: '716R424275' // Your password
				}
    });
	*/
  /*  const transporter = nodemailer.createTransport({
    host: 'email-smtp.us-west-2.amazonaws.com',
    port: 25,
    secure: false, // use SSL
	auth: {
    user: 'AKIAI46XOU7R2TB42MGQ',
    pass: 'ArE6dlPX0WqN9zIyJCfpePDjWOYedim3ynJ5bxtiosnT'
  }
}
	);*/

    const transporter = nodemailer.createTransport(sendgrid({
      auth: {api_key: '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'}
    }));

    return transporter;
  }

  /**
   * Transporter send email
   * @param transporter
   * @param mailOptions
   * @private
   */
  async _transporterSendMail(transporter, mailOptions) {
    await transporter.sendMail(mailOptions, (err, info) => {
      if(err) return console.log(err);
      return info;
    });
  }

  /**
   * Send email after logins
   * @returns {Promise<string>}
   */
  async sendEmailAfterRegister(user, token) {
    const transporter = this._createTransporter();

    const mailOptions = {
      from: MAIL_FROM,
      to: user.email,
      subject: 'User was registered.',
      html: `<h2>Dear ${user.name}</h2>
            <h3>System Notification User's Account sent to you this message</h3>
            <p>We want to inform you, that you are registered your account in <b><a href="${config.API_URL}:3000/" target="_blank">${config.API_URL}:3000/</a></b> page.</p>
            <p>Please confirm it on address <b><a href="${config.API_URL}:8000/api/confirm-activate?name=${user.email}&code=${token}" target="_blank"><b>Confirm<b></a></b></p>
            `
    };
    await this._transporterSendMail(transporter, mailOptions);
    return 'success';
  }

  /**
   * Send email after login
   * @returns {Promise<string>}
   */
  async sendEmailAfterLogIn(user) {
    const transporter = this._createTransporter();

    const mailOptions = {
      from: MAIL_FROM,
      to: user.email,
      subject: 'Attention! Logged User In',
      html: `<h2>Dear ${user.name}</h2>
            <h3>System Notification User's Accaunt sent to you this message</h3>
            <p>We want to inform you, that you are logged in your accaunt in <b><a href="">https://www.localhost.com</a></b> page.</p>
            `
    };
    await this._transporterSendMail(transporter, mailOptions);
    return 'success';
  }

  /**
   * Send email with reseted password
   * @param {object} user
   * @param {string} newPassword
   * @returns {Promise<string>}
   */
  async sendEmailWithResetedPassword(user, newPassword) {
    const transporter = this._createTransporter();

    const mailOptions = {
      from: MAIL_FROM,
      to: user.email,
      subject: 'Reset password',
      html: `<h2>Dear ${user.name}</h2>
            <h3>System Notification User's Accaunt sent to you this message</h3>
            <p>You reseted your password. Now it's <b>${newPassword}</b>.</p>
            <p>Change it please.</p>
            `
    };

    await this._transporterSendMail(transporter, mailOptions);
    return 'success';
  }

  /**
   * Send email after user creating
   * @param {object} user
   * @returns {Promise<string>}
   */
  async sendEmailAfterUserCreating({ username, creationgDate, id, smsCodeKey }) {
    const transporter = this._createTransporter();

    const mailOptions = {
      from: MAIL_FROM,
      to: username,
      subject: 'User was successfully created',
      html: `<h2>Dear User</h2>
            <h3>System Notification User's Accaunt Of Expedition sent to you this message</h3>
            <h4>You accaunt ${username} was created.</h4>
            <ul>
              <li>1. UserId: <b>${id}</b></li>
              <li>2. smsCodeKey: <b>${smsCodeKey}</b></li>
            </ul>
            <p>Date: ${creationgDate}</p>
            `
    };

    await this._transporterSendMail(transporter, mailOptions);
    return 'success';
  }

  /**
   * Send email after changed password
   * @param {string} newPassword
   * @param {string} username
   * @param {number} id
   * @returns {Promise<string>}
   */
  async sendEmailAfterChangedPassword(newPassword, username, id) {
    const transporter = this._createTransporter();

    const mailOptions = {
      from: MAIL_FROM,
      to: username,
      subject: 'User was successfully created',
      html: `<h2>Dear User</h2>
            <h3>System Notification User's Accaunt Of Expedition sent to you this message</h3>
            <h4>You password of ${username} accaunt was changed.</h4>
            <ul>
              <li>1. UserId: <b>${id}</b></li>
              <li>2. New Password: <b>${newPassword}</b></li>
            </ul>`
    };

    await this._transporterSendMail(transporter, mailOptions);
    return 'success';
  }

  async sendMailAfterRecoverPassword(user, token) {
    const transporter = this._createTransporter();

    const mailOptions = {
      from: MAIL_FROM,
      to: user.email,
      subject: 'Recover password confirmation',
      html: `<h2>Dear ${user.name}</h2>
            <h3>System Notification User's Accaunt sent to you this message</h3>
            <p>localhost:3000/api/confirm-recover-password?email=${user.email}&token=${token}</p>`
    };

    await this._transporterSendMail(transporter, mailOptions);
    return 'success';
  }

  async sendEmailAfterDeleteAccount(user, token) {
    const transporter = this._createTransporter();

    const mailOptions = {
      from: MAIL_FROM,
      to: user.email,
      subject: 'Delete account',
      html: `<h2>Dear ${user.name}</h2>
            <h3>System Notification User's Accaunt sent to you this message</h3>
            <p>localhost:3000/api/confirm-delete-account?email=${user.email}&token=${token}</p>`
    };

    await this._transporterSendMail(transporter, mailOptions);
    return 'success';
  }

}

module.exports = new NotificationMailService();
