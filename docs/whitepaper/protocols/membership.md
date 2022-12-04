
## Private Set Membership 

Private Set Membership is a cryptographic protocol that allows users to privately query whether their identifier is a member of a given set of identifiers held by a server in a privacy-preserving manner. In the context of blockchain, private set membership is more interesting due the single decentralized ledger. Users can enroll to a particular context and then do any action privately such as voting. Semaphore has proven that private membership is efficiently applicable.

-   A semaphore group is on a smart contract
    
-   It is an incremental Merkle tree
    

**Join:** A public key (identity commitment) pk can be added to the tree

**Leave:** Users can also remove their identities from the tree

1.  Generate a secret key sk.
    
2.  Compute the public key (identity commitment) pk = Poseidon(sk,0).
    
3.  For a given topic, compute a nullifier n = Poseidon(sk, topic).
    
4.  Compute a signal s = n + ZKP.
    

**I****dentity:**  (sk, n, pk, s).

![Semaphore1](/images/protocols_membership_1.png)
![Semaphore2](/images/protocols_membership_2.png)

**Figure 9**. Semaphore

-   Compute Nullifier n= H(sk, topic)where topic = “Is Bitcoin at the start of a bear market?”
    
-   Signal is s_i = n + "Yes/No" + ZKSNARK for membership proofs