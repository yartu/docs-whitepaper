## YBS E-mail Service

E-mail services are the most common communication tool used by users and companies in the digital world today. The e-mail service that forms the basic structure of an integrated solution is the basic component of Yartu Block Suite. Yartu E-Mail service infrastructure includes a very powerful open source e-mail server called Postfix. It uses another open source software called Dovecot to use Postfix server with IMAP and POP3. Yartu Block Suite uses a setup that works in sync with Dovecot. In this way, it can present e-mail messages as RESTFull. Thanks to this advantage it brings, it provides a flexible development environment to the platform (mobile, web, etc.).

With the developed e-mail API; it can easily perform all e-mail operations such as sending and receiving e-mails and listing/creating folders. It uses an application called Rspamd as a spam e-mail and management tool. The app has a pretty powerful spam filter. Thanks to this artificial intelligence supported filter, it continues to improve itself according to users' feedback. The user requests to send the message to the opposite address using any e-mail application or using the Yartu Block Suite interface. Before the e-mail is checked by the service. These checks are carried out on titles such as quota, postal attachments, and banned words. With DKIM, the institution's signature at the relevant address (domain name) is added to the e-mail. E-mail is sent to the counter server with Postfix using the SMTP protocol.

E-mail management has been made very easy Thanks to the YBS E-mail service. With the administration panel, the e-mail system can be managed under the following headings.

· **Quota Adjustments:** This is the module where users' e-mail quota adjustments are made. Users can be given the desired amount or unlimited quota.

**Queue Management** : It is the module where you can monitor and interfere with the e-mail traffic on the servers. There are options to clear the queue, reprocess, hold.

· **Attachment Control:** It is the module that determines the file types that users can send or cannot send during e-mail sending.

· **White and Black List:** It is one of the most powerful features in the e-mail module. With this module, you can separate incoming and outgoing e-mails as white or black, within certain rules. Lists found; RCPT List, MIME List, SMTP List, IP List

· **System E-mail:** Allows users to send mass e-mails. Example: announcement@yartu.io

· **Quarantine:** E-mails that do not comply with certain rules are displayed in this module. There are options to delete or accept.

· **Distribution List:** Certain e-mail accounts can be created and e-mails sent to this account can be distributed to specified users. E.g; an incoming mail to the help@yartu.io account is automatically sent to the e-mail of the users associated with this address.

· **ARC/DKIM Records Management:** It is the module where ARC/DKIM records, which have an important place in e-mail management, are managed. New records can be created, viewed and deleted.

· **Disclaimer:** For outgoing e-mails, it is the module where the disclaimer text added to the bottom of the mail is managed.
