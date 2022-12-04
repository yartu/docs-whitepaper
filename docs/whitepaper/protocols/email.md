## Signed Mail Protocol

Unfortunately conventional email technology has a number of security and privacy flaws which are addressed by implementing new authentication methods, upgrading connections, popularizing security, and encryption standards.

These improvements do have some benefits like limiting spam, phishing, or data theft, however, they cannot eliminiate these concerns completely. Yartu aims to solve and eliminate these issues and secure the current email communication.

### 1. Advantages


**Email authentication (between senders and receivers):** Blockchain based email solution would allow the receiver to verify the sender. Hence, any sort of scammers or spam could be prevented.

**Insecurity Feature of** **SMTP:** Unfortunately, SMTP standards do not guarantee end-2-end encryption of messages from one in-box to another. Most commonly used email addresses such as Gmail or Hotmail have been using TLS for security in transit, however emails are not encrypted in the email servers leading to interception. Note that secure emails like Proton aims to solve these issues, however, Yartu eliminates the use of centralized servers and ensures perfect availability.

**Privacy:** The first previous concern with SMPT also addresses privacy. With Yartu, except the sender and the receiver, no one can get any information about the contents of the emails.

### 2. Yartu End-2-End email Functions


-   **Integration of Crypto Wallets:** A user can use his/her wallet to create both plain and/or signed email as a transaction.
    
-   **Secure and Private Emails as a Transation:** A user can create a signed and encrypted email for providing confidential communication as a transaction.
    
-   **Receiver Identity Verification through YNS:** In order to ease the verification of the receiver identity, YNS can be used to get the public key of the receivers securely (without having to communicate with the receivers continuously) and send any types of emails (plain and/or signed and/or encrypted). Hence, users can easily communicate through end-2-end secure communication.
    
-   **Removal of Email Servers and Underlying Applications:** Yartu removes any cost related to implement email systems (Servers, Outlooks, Cloud, Storage etc.) as it provides “plug your wallet and send your email”.
    
-   **Emails as NFTs:** Yartu can allow users to convert their e-mails into NFTs. This feature cannot be possible within the conventional email systems.
    

The high level Yartu signed email protocol is played between Yartu mail client application, mail server and YNS and mail contract (see Figure 6). Note that, each domain has a signing public key and this is crucial for integrity and authenticity of mail. At the end of the protocol, the hash of mail is also submitted to the mail protocol for transparency and non-modifiability.


![Yartu Signed Mail Protocol](/images/protocols_mail_1.png)

**Figure 6.** Yartu Signed Mail Protocol
