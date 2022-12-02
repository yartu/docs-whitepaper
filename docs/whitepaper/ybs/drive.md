## YBS Drive Service


YBS Drive Service is a product developed in accordance with current technological trends to meet the modern cloud storage needs of corporate and individual users. YBS Drive Service, which prioritizes data security through all development processes, offers a user-friendly and convenient storage solution for group work as well as data security.

With YBS Storage, the user can create as many repositories as he/she wants. These repositories or files and folders created within the repositories can be shared with other users. Users can simultaneously edit office files they create and share with other users.

Within the scope of the service, data integrity is preserved by keeping the history of each file. In case of an error, it is possible to restore the file. Users can get information about how the repository looked in previous situations and can bring a version of the file at any date. This mechanism guarantees the authenticity of the file by writing the changes made to the file and the date of changes in the Yartu Block Suite product to an open blockchain network. However, files on YBS Storage can be easily converted to NFT and sold on Yartu NFT Market. In addition, in order to make NFT, users will be able to upload existing documents or files to YBS storage and convert them to NFT. At the same time, users who want to buy NFT on Yartu NFT Market will be able to submit their offers.

The main features of YBS Drive Service are given below:

· Creating multiple repositories

· File synchronization with NFT

· Ability to sell the NFT file quickly with Yartu NFT Market

· Storage, folder and file sharing

· Monitoring of repository, folder and file revisions

In daily life, electronic information, documents, pictures and videos are produced at every moment. With the introduction of smart phones into our lives, the need for important information, documents and documents (pictures, videos, music, etc.) to be kept in a safe environment and to be instantly accessible has become vital. The fact that the stored content cannot be sent via e-mail has made file sharing mandatory. You can share all your information stored in a secure environment with the people you want in a limited or long-term way, you can authorize the people you share with to view/edit, and this information can be easily accessed from the mobile environment. Shares can be made directly as files or folders or added as attachments to e-mails.

With the YBS Storage application, files can be classified by creating unlimited files and subfolders, similar to the use on the operating system, and their folders can be synchronized to a computer or mobile phone and used securely.

Files and folders kept on the application can be easily shared with other users and groups. In addition, files can be shared by creating password-protected or expired download links, and the number of views and downloads can be tracked.

When looking at the files in general, it is seen that the files available in the cloud system are the same files. As a matter of fact, it is documented that 32% of the files circulating in the cloud system in an institution are the same files. In order to prevent file duplication; the uploaded file is shredded with a certain algorithm. Each split piece is converted to a unique ID shape. In this way, when a file with a similar part is uploaded, it is not necessary to keep the same part more than once. By doing so, it is ensured that data is kept securely by saving space and energy to a large extent.

With YBS Drive Service, the files in the repository can be easily and securely encrypted. A 32-byte long cryptographically strong random number is generated. This is used as the file encryption key ("file key").

The file key is encrypted with the password provided by the user. **PBKDF2** is used first to derive a key pair from the password and **AES-256-CBC** is used to encrypt the file key. This encrypted file key will be sent to the server and stored there. When you need to access the data, the file key can be decrypted from the encrypted file key. All file data is encrypted with file key with **AES-256-CBC**. The **PBKDF2** algorithm is used to derive the key pair from the file key. After encryption, the data is uploaded to the server.

YBS Drive Service supports detailed search in all applications. A search can be made according to a word in the file content. Stored files are regularly scanned for viruses with Clamav. Analysis of e-mail and storage services is done with Solr.

YBS will planning to support multiple storage backends. Users can choose to use Yartu FS which is not decentralized and also blockchain-based storage like IPFS, Storj, etc.
