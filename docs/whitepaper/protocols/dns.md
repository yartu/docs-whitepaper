## Yartu Domain Naming Service (YDNS)

Yartu Domain Name Service (YDNS) is a distributed, open and extensible naming system built on Binance Smartchain. The job of YNS is to match human-readable names such as “alice.yartu” with machine-readable identifiers such as BSC addresses, addresses of other blockchains (e.g., Ethereum, Bitcoin, Ripple), content hashes, and metadata. YNS also supports "reverse resolution", which allows metadata such as canonical names or interface descriptions to be associated with BSC addresses. YNS has the same goals as DNS, the Internet Domain Name Service, but has a completely different architecture due to the capabilities and limitations offered by the Binance blockchain. Like DNS, YNS operates on a system of dotted hierarchical names called domains, with the domain owner having full control over sub-domains. Top-level domains such as ".dns" and ".test" are owned by smart contracts called registrars that set rules for assigning their sub-domains. Anyone can acquire ownership of a domain for their own use by following the rules set out in these agreements with the registrar. Because of the hierarchical nature of YNS, anyone who owns a domain at any level can set up sub-domains—for themselves or others—as they see fit. For example, if Bob owns bob.yartu, he can create pay.bob.yartu and customize it however he wants.

In YNS, the list of data to be stored in a domain is summarized in the Figure 3.

![List of Domain Data](/images/protocols_dns_1.png)

**Figure 3.** List of Domain Data

YNS has two principal components: the registry, and resolvers.

![YNS: Registrar and Resolvers](/images/protocols_dns_2.png)

**Figure 4.** YNS: Registrar and Resolvers

The YNS registry consists of a single smart contract that stores a list of all domains and sub-domains, and stores three important pieces of information about each:

-   Domain owner,
    
-   Domain Resolver,
    
-   Caching lifetime for all records in the domain.
    

The domain owner can be either an external account (a user) or a smart contract. A registrar is simply a smart contract that owns a domain and issues sub-domains of that domain to users who follow certain rules defined in the contract. Registrants in the YNS registry can:

-   Install a resolver and TTL for the domain
    
-   Transfer of ownership of a domain to another address
    
-   Change the owner of sub-domains
    

The YNS registry is intentionally simple and exists only to associate a name with the resolver responsible for it. Resolvers are responsible for the actual process of converting names to addresses. Any contract that implements the relevant standards can act as a resolver in YNS. Each record type - crypto address, IPFS content hash, etc. - defines the method or methods that the resolver must implement to serve records of that type. Name resolution in YNS is a two-step process: first, you ask the registry which resolver is responsible for the name, and second, you ask that resolver to answer your query.

![Query a Yartu Domain](/images/protocols_dns_3.png)

**Figure 5.** Query a Yartu Domain
