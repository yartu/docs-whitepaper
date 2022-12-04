import{_ as e,o as t,c as a,d as n}from"./app.c3ba526e.js";const i="/images/protocols_mail_1.png",o={},r=n('<h2 id="signed-mail-protocol" tabindex="-1"><a class="header-anchor" href="#signed-mail-protocol" aria-hidden="true">#</a> Signed Mail Protocol</h2><p>Unfortunately conventional email technology has a number of security and privacy flaws which are addressed by implementing new authentication methods, upgrading connections, popularizing security, and encryption standards.</p><p>These improvements do have some benefits like limiting spam, phishing, or data theft, however, they cannot eliminiate these concerns completely. Yartu aims to solve and eliminate these issues and secure the current email communication.</p><h3 id="_1-advantages" tabindex="-1"><a class="header-anchor" href="#_1-advantages" aria-hidden="true">#</a> 1. Advantages</h3><p><strong>Email authentication (between senders and receivers):</strong> Blockchain based email solution would allow the receiver to verify the sender. Hence, any sort of scammers or spam could be prevented.</p><p><strong>Insecurity Feature of</strong> <strong>SMTP:</strong> Unfortunately, SMTP standards do not guarantee end-2-end encryption of messages from one in-box to another. Most commonly used email addresses such as Gmail or Hotmail have been using TLS for security in transit, however emails are not encrypted in the email servers leading to interception. Note that secure emails like Proton aims to solve these issues, however, Yartu eliminates the use of centralized servers and ensures perfect availability.</p><p><strong>Privacy:</strong> The first previous concern with SMPT also addresses privacy. With Yartu, except the sender and the receiver, no one can get any information about the contents of the emails.</p><h3 id="_2-yartu-end-2-end-email-functions" tabindex="-1"><a class="header-anchor" href="#_2-yartu-end-2-end-email-functions" aria-hidden="true">#</a> 2. Yartu End-2-End email Functions</h3><ul><li><p><strong>Integration of Crypto Wallets:</strong> A user can use his/her wallet to create both plain and/or signed email as a transaction.</p></li><li><p><strong>Secure and Private Emails as a Transation:</strong> A user can create a signed and encrypted email for providing confidential communication as a transaction.</p></li><li><p><strong>Receiver Identity Verification through YNS:</strong> In order to ease the verification of the receiver identity, YNS can be used to get the public key of the receivers securely (without having to communicate with the receivers continuously) and send any types of emails (plain and/or signed and/or encrypted). Hence, users can easily communicate through end-2-end secure communication.</p></li><li><p><strong>Removal of Email Servers and Underlying Applications:</strong> Yartu removes any cost related to implement email systems (Servers, Outlooks, Cloud, Storage etc.) as it provides “plug your wallet and send your email”.</p></li><li><p><strong>Emails as NFTs:</strong> Yartu can allow users to convert their e-mails into NFTs. This feature cannot be possible within the conventional email systems.</p></li></ul><p>The high level Yartu signed email protocol is played between Yartu mail client application, mail server and YNS and mail contract (see Figure 6). Note that, each domain has a signing public key and this is crucial for integrity and authenticity of mail. At the end of the protocol, the hash of mail is also submitted to the mail protocol for transparency and non-modifiability.</p><p><img src="'+i+'" alt="Yartu Signed Mail Protocol"></p><p><strong>Figure 6.</strong> Yartu Signed Mail Protocol</p>',12),s=[r];function l(c,d){return t(),a("div",null,s)}const m=e(o,[["render",l],["__file","email.html.vue"]]);export{m as default};