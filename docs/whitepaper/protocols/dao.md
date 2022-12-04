## DAO   

A DAO, or Decentralized Autonomous Organization, is a community-run organization with no central authority. It is completely autonomous and transparent: smart contracts set basic rules, execute agreed decisions and at any time proposals, votes and even the code itself can be subject to public scrutiny. Ultimately, the DAO is managed entirely by its individual members, who collectively make important decisions about the future of the project, such as: technical upgrades and budget allocations. Generally, community members create proposals for the future work of the protocol and then come together to vote on each proposal. Then proposals that reach a certain predetermined level of consensus are accepted and applied according to the rules set in the smart contract. The usual hierarchical structures of large corporations give way within this structure of joint cooperation. Each individual DAO member monitors the log at some level. DAO rules are set by a core team of community members using smart contracts. These smart contracts lay the foundation for the operation of the DAO. They are highly visible, verifiable and publicly verifiable, allowing any potential participant to fully understand how the protocol should work at each stage. For DAOs that focus on technical governance, it is important to understand what voting rights are granted to token holders and the propositions that come with them.

### 1.  Selection of DAO Members


In Yartu DAO, we aim to use delegated democratic way of DAO system where a fixed number of members (say k) can be selected by the community token holder. Therefore, anybody is free to create a proposal to be a member of DAO. Only k number of members in the list with the highest rank will be chosen for a pre-defined period of time. Hence, the selection will be done periodically.


### 2 Actions of DAO Members


The selected DAO members will create an off-chain network to setup threshold based signature/encryption mechanism that will be used to sign the valid request from the clients and vote. After the setup, each DAO member will have partial keys for a specific threshold encryption/signing key. The list of public credentials will be publicized in the DAO contract.


![Yartu DAO Member Public Credentials](/images/protocols_dao_1.png)

**Figure 2.** Yartu DAO Member Public Credentials


The following actions (summarized in Figure 2) can be voted/performed through the selected DAO member.

-   Token holder can request the members to sign user data to be added into a smart-contract.
    
-   Token holder can select a DAO member to stake his/her tokens.
    
-   DAO member can create proposal for upgrading system parameters.
    
-   DAO member can set the Domain price in the contract.
    
-   Token holder can purchase a domain from the DAO off-chain network.
    

![List of Actions on DAO](/images/protocols_dao_2.png)

**Figure 3.** List of Actions on DAO
