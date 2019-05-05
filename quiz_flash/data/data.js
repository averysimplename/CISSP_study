var chapters = [
   "Notes from book", "Eksamen 2006", "Eksamen 2008", "Eksamen 2011", "Eksamen 2012"
];

var questions = [
{
   "id":"0",
   "chapter":"Notes from book",
   "question":"Mention five domains of distributed systems and their challenges",
   "answer":"<ul> <li>Finance and Commerce - payment technologies</li> <li>Information society - search a vast repository</li> <li>Entertainment - time-sensitivity and legal issues</li> <li>Healthcare - issuces of privacy</li> <li>Eduction - making good web tools</li> <li>Logistics - finding routes</li> <li>Science - exploiting complex networks of computers</li> <li>Environment - monitoring and managing the natural environment using sensors</li> </ul> Chapter 1.3 - Trends in distributed systems"
},

{
   "id":"1",
   "chapter":"Notes from book",
   "question":"What's the role of a firewall",
   "answer":"to protect an intranet by preventing unauthorized messages from leaving or entring"
},

{
   "id":"2",
   "chapter":"Notes from book",
   "question":"What's a backbone?",
   "answer":"A network link with a high transmission capacity between other nodes."
},

{
   "id":"3",
   "chapter":"Notes from book",
   "question":"What is location-aware or context-aware computing?",
   "answer":"Utilizing resources such as printers that are conveniently nearby the users, i.e. taking into consideration the current state."
},

{
   "id":"4",
   "chapter":"Notes from book",
   "question":"What is Ubiquitous computing?",
   "answer":"Harnessing of many small, cheap computational devices that are present in the users' physical environment."
},

{
   "id":"5",
   "chapter":"Notes from book",
   "question":"What is Webcasting?",
   "answer":"The ability to broadcast continuous media, typically audio or video, over the internet"
},

{
   "id":"6",
   "chapter":"Notes from book",
   "question":"Describe cloud computing",
   "answer":"Making software services, or physical services (such as storage and processing) available to networked computers, removing the need to have these resources on their own. Chapter 1.4 - Focus on resource sharing"
},

{
   "id":"7",
   "chapter":"Notes from book",
   "question":"What is computer-supported cooperative working (CSCW)?",
   "answer":"A group of users who cooperate directly, sharing resources (e.g. documents) in a small closed group."
},

{
   "id":"8",
   "chapter":"Notes from book",
   "question":"Describe the client-server approach.",
   "answer":"Requests are sent in messages from the clients to a server and replies are sent in messages from the server to the clients. When the client sends a request for an operation to be carried out, we say that the client invokes an operation upon the server. Chapter 1.5 - Challenges"
},

{
   "id":"9",
   "chapter":"Notes from book",
   "question":"The Internet enables users o access servicees and run applications over a heterogeneous collection of computers and networks. What do we mean by that?",
   "answer":"That the networks, computer hardware, programming languages and operating systems have a variety and difference within the Internet."
},

{
   "id":"10",
   "chapter":"Notes from book",
   "question":"What is middleware?",
   "answer":"The term middleware applies to a software layer that provides a programming abstraction as well as masking the heterogeneity of the underlying networks, hardware, operating systems and programming languages."
},

{
   "id":"11",
   "chapter":"Notes from book",
   "question":"What is miobile code?",
   "answer":"It refer to program code that can be transferred from one computer to another and run at the destination - Java applets are an example."
},

{
   "id":"12",
   "chapter":"Notes from book",
   "question":"What are the three components of ecurity for information resources?",
   "answer":"Confidentiality (protection against disclosure to unauthorized individuals), integrity (protection against alteration or corruption) and availability (protection against interference with the means to access the resources)"
},

{
   "id":"13",
   "chapter":"Notes from book",
   "question":"What is scalability?",
   "answer":"A system is described as scalable if it will remain effective when there is a significant increase in the number of resources and the number of users."
},

{
   "id":"14",
   "chapter":"Notes from book",
   "question":"What challanges are there regarding scalability when designing a distributed system:",
   "answer":"1. Controlling the cost of physical resources: As the demand for a resource grows, it should be possible to extend the system, at reasonable cost, to meet it. 2. Controlling the performance loss: The time taken to access hierarchicallly structured data is O(log n), where n is the size of the set of data. For a system to be scalable, the maximum performance loss should be no worse than that. 3. Avoiding performance bottlenecks: In general, algorithms should be decentralized to avoid having performance bottlenects."
},

{
   "id":"15",
   "chapter":"Notes from book",
   "question":"What (general) techniques are used for dealing with failures?",
   "answer":"<ul> <li>Detecting failures. For example, checksums can be used to detect corrupted data in a message or file.</li> <li>Masking failures. For example, messages can be retransmitted when they fail to arrive.</li> <li>Tolerating failures. For example, inform the user that a server is unreachable.</li> <li>Recover from failures. For example rolling back after a server has crashed.</li> <li>Redundancy. For example, replicating a database in several servers.</li> </ul>"
},

{
   "id":"16",
   "chapter":"Notes from book",
   "question":"Define transparency.",
   "answer":"Transparancy is defined as the concealment from the user and the application programmer of the separation of components in a distributed system, so that the system is perceived as a whole rather than as a collection of independant components."
},

{
   "id":"17",
   "chapter":"Notes from book",
   "question":"Mention some types of transparancies. What are the most important?",
   "answer":"1) Access transparency: Hiding that a remote resource is remote. <br />2) Location transparency enables resources to be accessed without knowledge of their physical or network locaztion<br />3) Concurrency transparency enables several processes to operate at the same time using shared resources.<br />Replication transparency hides that there are multiple instances of a resource.<br />5) Failure transparency hides faults.<br />6) Mobility transparency allows a user to roam.<br />7) Performance transparency hides the load that a sytem has.<br />8) Scaling transparency allows the system and applications to expand in scale with out changes to the system structure or the application algorithms.<br /><br />The two most important transparencies are access and location, which are sometimes referred to together as network transparency."
},

{
   "id":"18",
   "chapter":"Notes from book",
   "question":"What are the main nonfunctional properties of systems, that affect the quality of service experienced by users?",
   "answer":"Reliability, security and performance"
},

{
   "id":"19",
   "chapter":"Notes from book",
   "question":"What are time-critical data?",
   "answer":"Data that are required to be processed or transferred from one to another at a fixed rate. Like video-streaming. Chapter 1.6 - Case study: The word wide web"
},

{
   "id":"20",
   "chapter":"Notes from book",
   "question":"What are the general HTTP URL form:",
   "answer":"http://servername[:port][/pathName][?query][#fragment]"
},

{
   "id":"21",
   "chapter":"Notes from book",
   "question":"When loading one web page, how many requests are sent?",
   "answer":"That depends on the number of elements within the page. Every linked resource (that is, reference to stylesheet, images and so on) is obtained in it's own request."
},

{
   "id":"22",
   "chapter":"Notes from book",
   "question":"What does a Common Gateway Interface (CGI) program do?",
   "answer":"It's a program that web servers run to generate content for their clients. Chapter 0.1 - NoSQL Chapter 1"
},

{
   "id":"23",
   "chapter":"Notes from book",
   "question":"Why do we have databases?",
   "answer":"They provide consistent data, and is more flexible than a file system in storign large amounts of data in a way that allows an application program to get at small bits of that information quickly and easily"
},

{
   "id":"24",
   "chapter":"Notes from book",
   "question":"What do we mean by shared database integration?",
   "answer":"Multiple applications store their data in a single database."
},

{
   "id":"25",
   "chapter":"Notes from book",
   "question":"One of the biggest drawbacks with using relational databases, is the impedance mismatch. What do we mean by this term?",
   "answer":"That there's a difference between the ralational model and the in-memory data structures. One must therefore retrieve multiple pieces of data from the database to construct the in-memory data object."
},

{
   "id":"26",
   "chapter":"Notes from book",
   "question":"What does object-relational mapping framworks such as Hibernate and iBATIS do? What can be the negative result of this?",
   "answer":"They abstract the relational database, and handles the converting from database to in-memory objects. The negative result of this is that query performance can suffer, as people don't have to think about the querying anymore."
},

{
   "id":"27",
   "chapter":"Notes from book",
   "question":"Describe integration databases.",
   "answer":"Integration databases are databases that hold data for several applications. This improves communication between the applications, because all of them are operating on a consistent set of data (yay). However, this also makes the databases more complex than any (one) application has use of. It also leaves the database responsibility between application teams, and can be neglected. A different approach is <strong>application databases</strong> - which is only directly access by a single application codebase."
},

{
   "id":"28",
   "chapter":"Notes from book",
   "question":"Why use clusters of small machines instead of big servers?",
   "answer":"Small machines of commodity hardware ends up being cheaper the huge scales. They can also be more resilient - while individual machine failures are common, the overall cluster can be built to keep going despite such failures."
},

{
   "id":"29",
   "chapter":"Notes from book",
   "question":"WhyRelational databases are not designed to be run on clusters. When they are run as separate servers for different sets of data, they _____ the database. (Fill in the blank)",
   "answer":"Sharding."
},

{
   "id":"30",
   "chapter":"Notes from book",
   "question":"Amazon and Google has been pioneering the alternative data storage known as the basis (sort of) of NoSQL. What are the name of their inspiring projects?",
   "answer":"BigTable (Google) and Dynamo (Amazon)"
},

{
   "id":"31",
   "chapter":"Notes from book",
   "question":"What are common characteristics of NoSQL databases?",
   "answer":"There are no absolute spesifications, but usually they're open-source, distributed, nonrelational and schemeless databases."
},

{
   "id":"32",
   "chapter":"Notes from book",
   "question":"What are the advantages of NoSQL compared with regular relational databases?",
   "answer":"Less amount of queries, as whole objects can be stored and returned as one whole object. A free range of options for data storage. No impedance mismatch (differences in structure between in-memory and on-book data). The two primary reasons are handing data access with sizes and performance that demand a cluster; the other to improve the productivity of application development by using a more convenient data interaction style."
},

{
   "id":"33",
   "chapter":"Notes from book",
   "question":"What are the disadvantages of NoSQL compared with regular relational databases?",
   "answer":"Takes up larger storage space. Can be a challenge to keep consistency. However, the disadvantages mentioned the most is the immaturity. Common BI-tools doesn't support it, neither can you get proper support for it, lack of expertice in the field Chapter 0.2 - NoSQL Chapter 2"
},

{
   "id":"34",
   "chapter":"Notes from book",
   "question":"NoSQL solution has four main categories of model. What are they called?",
   "answer":"Key-valued, document, column-family and graph."
},

{
   "id":"35",
   "chapter":"Notes from book",
   "question":"What characteristics does a key-value NoSQL model have?",
   "answer":"With a key-value store, we can only access an aggregate by lookup based on its key."
},

{
   "id":"36",
   "chapter":"Notes from book",
   "question":"What characteristics does a document NoSQL model have?",
   "answer":"With a document database, we can submit queries to the database based on the fields in the aggregate, we can retrieve part of the aggregate rather than the whole thing, and database can create indexes based on the contents of the aggregate."
},

{
   "id":"37",
   "chapter":"Notes from book",
   "question":"What characteristics does a column-family NoSQL model have?",
   "answer":"A row (unit) is a two-level map. Row -> Column family -> column where column family is a set of columns (attributes) which typically are accessed together. So for row: user (tomas), we could have column family: profile with columns: name, lastname, age, address."
},

{
   "id":"38",
   "chapter":"Notes from book",
   "question":"What characteristics does a graph NoSQL model have?",
   "answer":"It does not have aggregate orientation."
},

{
   "id":"39",
   "chapter":"Notes from book",
   "question":"What is aggregate orientation?",
   "answer":"An aggregate is a collection of related objects that we wish to treat as a unit. For example an aggregate data model for an order might contain payment, order and address information within that order-unit. How to make your aggregate, is totally dependant on the use; the goal is to minimize the queries to reduce load on the service (cluster)."
},

{
   "id":"40",
   "chapter":"Notes from book",
   "question":"Why is aggregate orientation helpful when running on a cluster?",
   "answer":"If we're running on a cluster, we need to minimize how many nodes we need to query when we're gathering data. Aggreagtion helps alot with this."
},

{
   "id":"41",
   "chapter":"Notes from book",
   "question":"Relational databases allow you to manipulate any combination of rows from anny tables in a single transaction. Such transactions are called ACID. What does ACID stand for?",
   "answer":"Atomic, Consistent, Isolated and Durable. The real point is really atomicity. The operation either succeeds or fails in it's entirety, and concurrent operations are isolated from each other so they cannot see a partial update."
},

{
   "id":"42",
   "chapter":"Notes from book",
   "question":"Does NoSQL databases support atomic operations?",
   "answer":"Well, yes, but not as well as relational databases. NoSQL supports atomic operations of a single aggregate at a time. But if we need to manipulate multiple aggregates in an atomic way, we gotta find a way for this in the application code. Chapter 5 - Remote invocation Chapter 5.1 - Introduction"
},

{
   "id":"43",
   "chapter":"Notes from book",
   "question":"What is RPC?",
   "answer":"Remote procedure call (RPC) is an approach that extends the common programming abstraction of the procedure call to distributed environments, allowing a calling process to call a procedure in a remote node as if it was local."
},

{
   "id":"44",
   "chapter":"Notes from book",
   "question":"What's the difference between RPC and RMI?",
   "answer":"Remote invocation (RMI) is similar to RPC but for distributed objects. So while Remote Procedure Call (RPC) allows you to call procedures on remote machines, RMI allows you to use remote objects as parameters, return values and perform methods from. Chapter 5.2 - Request reply protocols"
},

{
   "id":"45",
   "chapter":"Notes from book",
   "question":"When implementing a request-reply protocol, why would one prefer datagram (UDP) over TCP?",
   "answer":"The overheads associated with TCP stream are usualy unnecessary: <br />1) Achknowledgements, which are redundant since requests are followed by replies. <br />2) Establishing a connection involves two extra pairs of messages in addition to the pair required for a request and a reply. <br />3) Flow control is redundant for the majority of invocation, which pass only small arguments and results."
},

{
   "id":"46",
   "chapter":"Notes from book",
   "question":"The three main procedures used in a request-reply protocol can be said to be doOperation (send request, and return reply), getRequest (recieve request) and sendReply (sends reply). When implemented over UDP datagrams, what sort of communication failures are common?",
   "answer":"Messages are not guaranteed to be delivered, and if they are, not necessarily in senders order."
},

{
   "id":"47",
   "chapter":"Notes from book",
   "question":"What is an idempotent operation, and how does that affect us?",
   "answer":"That an operation is idempotent means that it can be performed repeatedly with the same effect as if it had been performed exactly once. The effect of this, is that the method on the server can uncritically perform the requests that it recieves (as opposed to checking if the request is a resend from a client that didn't get the previous respond from server). Related to Maybe, At-least-once and At-most-once semantics (5.3)."
},

{
   "id":"48",
   "chapter":"Notes from book",
   "question":"What are the three styles of exchange protocols, and what do they do?",
   "answer":"1) The request (R) protocol: A simple request is sent by the client to the server. Can be used when there's no return value and the client doesn't require a confirmation that the operation has been executed.<br />2) The request-reply (RR) protocol: Special acknowledgement messages are not required, because a server's reply message is regarded as an acknowledgement. Similary, a subsequent call from a client may be regarded as an acknowledgement of the client's request message.<br />The request-reply-acknowledge reply (RRA) protocol: The Acknowledge reply message contains the requestId from the reply message being acknowledged. This will enable the server to discard entries from its history."
},

{
   "id":"49",
   "chapter":"Notes from book",
   "question":"What are the advantages of implement the request-reply protocol as TCP (over UDP)?",
   "answer":"Simplicity. The limited length of datagrams (usually 8 kilobytes) may not be regarded as adaquate for use in transparent RMI og RPC systems, since the arguments or results of a procedure may be of any size. Implementing request-reply protocols over TCP streams allows us to avoid implementing multipacket protocols. One also avoids to deal with retransmission of messages and filtering of duplicates or with history. When using TCP one also allows larger arguments and results to be passed without worrying about overwhelming the recipient."
},

{
   "id":"50",
   "chapter":"Notes from book",
   "question":"Why did HTTP 1.1 (A request-reply protocol) change to use persistent connection?",
   "answer":"Opening and closing a TCP connection requires some overhead. As web pages became filled with more elements (like pictures, stylesheets etc) one realized that using a persistent connection would prove more efficient. Persistent connections are usually closed when it has been idle for a period of time, by sending an indication to the other participant."
},

{
   "id":"51",
   "chapter":"Notes from book",
   "question":"What's MIME (Multipurpose Internet Mail Extension)?",
   "answer":"It's a standard for sending multipart data, containing text, images, sound etc. in email messages. A MIME-like structure is used in HTTP Chapter 5.3 - Remote procedure call"
},

{
   "id":"52",
   "chapter":"Notes from book",
   "question":"Why does one often program with interfaces in a distributed system?",
   "answer":"As with any form of modular programming, programmers are concered only with the abstraction offered by the service, and need not be aware of implementation detailes. Extrapolating to (potentially hetereogeneous) distributed systems, programmers also do not need to know the programming language. Also, this approach provides natural support for software evolution in that implementation can change as long as the interface remains the same."
},

{
   "id":"53",
   "chapter":"Notes from book",
   "question":"What are Interface definition languages (IDLs)?",
   "answer":"It's a spesification language that allows procedures implemented in different languages to invoke one another."
},

{
   "id":"54",
   "chapter":"Notes from book",
   "question":"What are the main choices (3) of implementing the doOperation?",
   "answer":"1) Retry requestion message: Controls whether to retransmit the request message until either a reply is received or the server is assumed to have failed. <br />Duplicate filtering: Controls when retransmission are used and whether to filter out duplicate requests at the server.<br />3) Retransmission of results: Controls whether to keep a history of result messages to enable lost results to be retransmitted without re-executing the operations at the server"
},

{
   "id":"55",
   "chapter":"Notes from book",
   "question":"In RPC call, what are the Maybe semantics?",
   "answer":"With maybe semantics, the remote procedure call may be executed once or not at all. If the result message has not been received after a timeout, we have the 'maybe' situation. Maybe semantics are only useful for application in which occasional failed calls are acceptable."
},

{
   "id":"56",
   "chapter":"Notes from book",
   "question":"In RPC call, what are the At-least-once semantics?",
   "answer":"With At-least-once semantics, the invoker receives either a result (in which case the invoker knows that it was executed), or by an exception informing that no result was recieved. At-least-once semantics can be achieved by retransmission of the request message in the case of the latter. One has to be aware of the potentional arbitrary failure that the remote server may execute the procedure more than once, possibly causing wrong values to be stored or returned. For idempotent procedures, this is not a problem."
},

{
   "id":"57",
   "chapter":"Notes from book",
   "question":"In RPC call, what are the At-most-once semantics?",
   "answer":"With At-most-once semantics, the server has to keep a record of what has been requested from whom in order to make sure that no call is made more than once. The invoker acts as with At-least-once semantics, retrying until it gets a reply."
},

{
   "id":"58",
   "chapter":"Notes from book",
   "question":"What is Transparency in RPC?",
   "answer":"It's making the syntax of remote procedure calls as much like local procedure calls as possible. All the differences (marshalling, message-passing) are hidden. Since remote procedure calls are more vurnerable to failure and can be caused by other things than local calls, they should a different error handling. This is why it should be able to differentiate by the two at the invocation level. The current consensus is that remote calls should be made transparent in the ense that the syntax of a remote call is the same as that of a local invocation, but that the difference between local and remote calls should be expressed in their interfaces."
},

{
   "id":"59",
   "chapter":"Notes from book",
   "question":"Tell me about Sun RPC.",
   "answer":"In Sun RPC is more primitive than other RPCs like Java and COBRA IDL:<br />...the implementors have the choice of using UDP og TCP. <br /> ....doesn't allow interface names to be specified, but instead supply a program and version number which both are passed in the request message<br/> ...allow only a single input parameter (procedures requireing multiple parameters must include them as components of a single structure)<br />...only outputs a single result paramenter (see above) Chapter 5.4 - Remote method invocation"
},

{
   "id":"60",
   "chapter":"Notes from book",
   "question":"What are the commonalities between RMI and RPC?",
   "answer":"1) They both support programming with interfaces<br />2) They are both typically construced on top of request-reply protocols and can offer a range of call semeantics such as At-least-once and At-most-once.<br />3) They both offer a similar level of transparency."
},

{
   "id":"61",
   "chapter":"Notes from book",
   "question":"What are the differences between RMI and RPC?",
   "answer":"1) All objects in an RMI-based system have unique object references<br />2) Object references can be passed as parameters, thus offering significantly richer parameter-passing semantics than in RPC.<br />3) The programmer is able to use the full expressive power of OOP, including objects, classes and inheritance."
},

{
   "id":"62",
   "chapter":"Notes from book",
   "question":"What is an object reference?",
   "answer":"In Java, a variable that appears to hold an object actually holds a reference to that object. In distributed systems, object references reduce the amount of necessary network traffic."
},

{
   "id":"63",
   "chapter":"Notes from book",
   "question":"What's an interface?",
   "answer":"An interface provides a definition of the signatures of a set of methods (the types of their arguments, return values and exceptions) without specifying their implementation."
},

{
   "id":"64",
   "chapter":"Notes from book",
   "question":"What's garage collection (in RMI)?",
   "answer":"Garbage collection is the means of freeing the space occupied by objects that are no longer needed. C++ does not support automatic garbage collection, so the programmer has to deal with freeing space allocated to objects. This can be a major source of errors. Java has an automatic garbage collector."
},

{
   "id":"65",
   "chapter":"Notes from book",
   "question":"What is a remote reference module responsible for?",
   "answer":"Translating between local and remote object references and for creating remote object references."
},

{
   "id":"66",
   "chapter":"Notes from book",
   "question":"What's a Servant (in RMI)?",
   "answer":"A servant is an instance of a class that provides the body of a remote object. That is, the 'live', running class on the server. A servant is connected to a skeleton, which is the 'live' remote interface, that unmarshals (unwrapping) the request message and invokes the corresponding method in the servant. Running class --> Servant (normal thing) + skeleton (external thing)."
},

{
   "id":"67",
   "chapter":"Notes from book",
   "question":"What's a Skeleton (in RMI?",
   "answer":"A skeleton is the part of a class that implements the methods in the remote interface. It's reponsible for unmarshaling (unwrapping) the arguments of a request message and invoking the corresponding method in the servant."
},

{
   "id":"68",
   "chapter":"Notes from book",
   "question":"What's a Proxy (in RMI)?",
   "answer":"The role of a proxy is on the client side of a remote method invocation, and can be seen upon as the 'anti-skeleton'. It makes the remote invocation transparent, by behaving like a local object to the invocer, by marshaling (wrapping/compressing), sending and recieving messages from the client."
},

{
   "id":"69",
   "chapter":"Notes from book",
   "question":"What is Factory methods?",
   "answer":"Remote object interfaces cannot include constructors, which means a remote invocation cannot create a new instance (servant) of a class. Instead, these have to be initiated in the initialization section or in methods in a remote interface designed for that purpose. The term factory method is sometimes used to refer to a method that creates servants, and a factory object is an object with factory methods."
},

{
   "id":"70",
   "chapter":"Notes from book",
   "question":"What's a binder",
   "answer":"A binder in a distributed system is a separate service that maintains a table containg mapping from textual names to remote object references."
},

{
   "id":"71",
   "chapter":"Notes from book",
   "question":"What is active and passive objects, and what are activators?",
   "answer":"Sometimes, when objects have not been used for a while, they are put in a sort of 'sleep-state' to conserve resources. That is, their current state is saved in a marshalled (compressed) form. When it is in this form, it is called passive, as opposed to active. An activator is responsible for registering passive objects that are available for activation (mapping name with URLs/file names), starting passive objects when invoked and keeping track of the locations of remote objects it self has activated."
},

{
   "id":"72",
   "chapter":"Notes from book",
   "question":"What's the aim of a distributed garbage collector?",
   "answer":"Ensure that if a local or remote reference to an object is still held anywhere in a set of distributed objects, the object itself will continue to exist, but as soon as no object any longer holds a reference to it, the object will be colllected and the memory it uses recovered. Javas garbage collector works by the object giving a time lease to others using it, which eventually is returned or timed out. When an object no longer have anyone using it, it's being cleaned up."
},

{
   "id":"73",
   "chapter":"Notes from book",
   "question":"In Java RMI, how will you notice that you're using a remote method?",
   "answer":"You are required to handle a RemoteException. The remote object iself is aware that it is remote because it must implement the Remote interface."
},

{
   "id":"74",
   "chapter":"Notes from book",
   "question":"What happens if the recipient doesn't have the class of a servers return value in Java RMI?",
   "answer":"The class is downloaded at the recipient automatically, and nothing major happens. The advantages of this is that there is no need for every user to keep the same set of classes in their working environment, and that both client and server programs can make transparent use of instances of new classes whenever they are added."
},

{
   "id":"75",
   "chapter":"Notes from book",
   "question":"What is the Java RMI registry?",
   "answer":"It's the binder for Java RMI. An instance of RMIregistry should normally run on every server computer that hosts remote objects."
},

{
   "id":"76",
   "chapter":"Notes from book",
   "question":"What are Callbacks in Java RMI?",
   "answer":"It's the observer-observed idea. Instead of clients polling the server to find out whether some event has occurred, the server should inform its client whenever that event occurs. The callback object itself is the remote object at the client side that the server should call when such an event happens. Summary: 1: Request-reply protocols provide lightweight and minimal support for client-server computing. Such protocols are often used in environments where overhead of communication must be minimized - for example, in embedded systems. 2: Due to their different failure and performance characteristics and to the possibility of concurrent access to servers, it is not necessarily a good idea to make remote procedure calls appear to be exactly the same as local calls 3: Each object in a distributed system has a remote object reference (a globally unique identifier) and a remote interface that specifies which of its operations can be invoked remotely. Chapter 10 - Peer to peer systems Chapter 10.1 - Introduction"
},

{
   "id":"77",
   "chapter":"Notes from book",
   "question":"What would you say is the goal of peer-to-peer system, and how come they've kept replacing server-client architechture lately?",
   "answer":"Any computer, also big servers has their constraints on how much load they can take. This lead to a more and less linear costexpansion on administration and fault recovery as a site becomes more popular, and eventually becomes the dominating cost. The goal of peer-to-peer systems is to able the sharing of data and resources on a very large large scale by eliminating any requirements for seperately managed servers and their associated infrastructure, and make a reliable system based on many (unreliable) clients or small servers. Shirky (2000) defined peer-to-peer applications as 'applications that exploit resources available at the edges of the Internet - storage cycles, content, human presence'."
},

{
   "id":"78",
   "chapter":"Notes from book",
   "question":"What characteristics describe peer-to-peer systems?",
   "answer":"1) Their design ensures that each user contributes resources to the system.<br />2) Although they may differ in the resources that they contribute, all the nodes in a peer-to-peer system have the same functional capabilities and reponsibilites.<br />3) Their correct operation does not depend on the existence of any centrally administered systems.<br />4) They can be designed to offer a limited degree of anonymity to the providers and users of resources<br />5) A key issue for their efficient operation is the choice of an algorithm for the placement of data across many hosts and subsequent access to it in a manner that balances the workload and ensures avilability withou adding undue overheads."
},

{
   "id":"79",
   "chapter":"Notes from book",
   "question":"The availability of the processes and computer participating in P2P systems are unpredictable, and the services therefore cannot rely on guaranteed access to individual resources. How can this weakness be turned into a strength?",
   "answer":"The resources are for the same reason replicated in different nodes. This can be exploited to achieve a degree of resistance to tampering."
},

{
   "id":"80",
   "chapter":"Notes from book",
   "question":"Why wasn't P2P used widely before ~2000?",
   "answer":"The potential for the deployment of P2P-services emerged only when a significant number of users had acquired always-on, broadband connections to the network. Before this happened, nodes were too unreliable and the communication too slow."
},

{
   "id":"81",
   "chapter":"Notes from book",
   "question":"What are some of the distictions between IP and overlay routing?",
   "answer":"<ul> <li>IPv4 is limited to 2<sup>32</sup> addressable nodes. (IPv6 to 2<sup>128</sup), where GUID namespace has ~2<sup>128</sup></li> <li>IP routing tables are updated on asynchronously @ ~1 hour. Routing tables in overlay can be updated sync og async with ~seconds delay.</li> <li>IP addresses map to exactly one node, where in routing overlay, a message can be routed to the nearest replica of a target object.</li> <li>Some anonymity can be provided in routing overlay, not in IP</li> <li>More costly fault tolerance in routing overlay than in IP</li> </ul>"
},

{
   "id":"82",
   "chapter":"Notes from book",
   "question":"What is distributed computation?",
   "answer":"Distributed computation is the exploitation of spare computing power on end-user computers. It was first done with personal computers at Xerox PARC (1982) - the place where all the fancy researchstuff happened, like mouse and GUI - with ~100 computers that showed its feasibility. The most widely known effort of this is the SETI@home project (Search for Extraterrestial ... T.. I.. something. It has E.T. in it :D). The Grid project is worth mentioning too, which is a distributed platform for useful computation. Chapter 10.2 - Napster its legacy"
},

{
   "id":"83",
   "chapter":"Notes from book",
   "question":"How was Napsters architecture?",
   "answer":"They had centralized indexes, but users supplied the files, which were stored and accessed on their personal computers. Chapter 10.3 - Peer-to-peer middleware"
},

{
   "id":"84",
   "chapter":"Notes from book",
   "question":"What computer-science related lessons did Napster teach us?",
   "answer":"The feasibility of building a useful large-scale service that depends almost wholly on data and computers owned by ordinary Internet users."
},

{
   "id":"85",
   "chapter":"Notes from book",
   "question":"What is middleware?",
   "answer":"ObjectWeb defines middleware as: 'The software layer that lies between the operating system and applications on each side of a distributed computing system in a network.' That is, it is responsible for the deliverance of method invocation in RMI, it's the 'to' in peer-to-peer etc. In essence, it simplifies the programming by seperation of the functionality and communication."
},

{
   "id":"86",
   "chapter":"Notes from book",
   "question":"What is the function of peer-to-peer middleware?",
   "answer":"to simplify the construction of services that are implemented across many hosts in widely distributed network."
},

{
   "id":"87",
   "chapter":"Notes from book",
   "question":"What are some of the non-functional requirements of peer-to-peer middleware (in order to perform efficiently)?",
   "answer":"Scalability, Load balancing, optimization for local interactions between peers, accommodating to highly dynamic host availability. Chapter 10.4 - Routing overlays"
},

{
   "id":"88",
   "chapter":"Notes from book",
   "question":"What does a routing overlay do?",
   "answer":"It is reponsible for locating nodes and objects in a network."
},

{
   "id":"89",
   "chapter":"Notes from book",
   "question":"What are the four main tasks of a routing overlay?",
   "answer":"1) A client wishing to invoke an operation on an object subits a request including the object's GUID to the routing overlay, which routes the request to a node at which a replica of the object resides.<br />2) A node wishing to make a new object computes a GUID for the object and annonces it to the routing overlay, which then ensures that the object is reachable by all other clients.<br />3) When clients request the removal of objects from the service, the routing overlay must make them unavailable<br />4) Node addition and removal: Nodes (Computers) may join an leave the service. The routing overlay must arrange for giving og distributing the responsibility of the node in question"
},

{
   "id":"90",
   "chapter":"Notes from book",
   "question":"With a Distributed hash table (DHT), where is an object stored?",
   "answer":"An object with GUID x is stored at the node whose GUID is numerically closest to x, and at the r hosts whose GUID are next-closest to it numerically (r being the replication factor) Chapter 10.5 - Overlay case studies: Pastry, Tapestry"
},

{
   "id":"91",
   "chapter":"Notes from book",
   "question":"What is Pastry?",
   "answer":"Pastry is a routing overlay. All nodes and objects that can be accessed through Pastry are assigned 128-bit GUIDs. The resulting GUIDs have the usual properties of secure has values - that is, they are randomly distributed in the range 0 to 2<sup>128</sup>-1. They provide no clue as to the value from which they were computed."
},

{
   "id":"92",
   "chapter":"Notes from book",
   "question":"How many steps does it take to correctly rout a GUID-addressed message in Pastry?",
   "answer":"O(log N)"
},

{
   "id":"93",
   "chapter":"Notes from book",
   "question":"Is Pastry fully self-organizing?",
   "answer":"Yes it is. When new nodes join the overlay, they obtain the data needed to construct a routing table and other requried state from existing members in O(log N) messages."
},

{
   "id":"94",
   "chapter":"Notes from book",
   "question":"Explain the steps following a node joining the Pastry overlay.",
   "answer":"1) The new node computes a suitable GUID (typically by applying the SHA-1 hash function to the node's public key)<br /> 2) The node contacts a nearby existing Pastry node, with a join message (nearby as in network distance, not GUID distance).<br /> 3) The existing node routes the join message to the numerically closest node in the Pastry network. Every node along the way sends the new node relevant information that, when put together, will give the new node a decent routing table."
},

{
   "id":"95",
   "chapter":"Notes from book",
   "question":"What happens after a node in the Pastry network leaves?",
   "answer":"The immediate neighbours (in GUID space) will notice that the node has gone missing by not recieving 'heartbeat' messages - messages sent at fixed time intervals to indicate that the sender is alive. The neighbours will notify their neighbours again, up til l nodes away from the node that left (l being half the size of the leaf set which all nodes keep track of - consisting of neighbours in GUID space)"
},

{
   "id":"96",
   "chapter":"Notes from book",
   "question":"How come Pastry routing structure is so redundant?",
   "answer":"The routing tables that nodes has, differ from eachother in such a way that there are many routes between each pair of nodes. Somewhat related: a simple gossip protocol is used to periodically exchange routing table information between nodes in order to repair failed entries and prevent slow deterioration of the locality properties."
},

{
   "id":"97",
   "chapter":"Notes from book",
   "question":"What is Tapestry?",
   "answer":"Tapestry implements a distributed hasth table and routes messages to nodes associated with resources using a prefix routing in a manner similar to Pastry."
},

{
   "id":"98",
   "chapter":"Notes from book",
   "question":"What's the difference between structured and unstructured peer-to-peer",
   "answer":"In structured approaches, there is an overall global policy governing the topology of the network. This gives a garantee to locate objects, and can offer time and complexity bounds on operation. However, this also means structured approaches need to maintain overlay structures, which is harder and costly to achieve. Especially in highly dynamic environments (nodes leaving and joining a lot, adding/removing data objects). Unstructured peer-to-peer are hence more resilient to high churn (nodes leaving and joining a lot), but cannot offer guarantees on locating objects, and is prone to excessive messaging which can affect scalability. The unstructured approach is the dominent in the Internet, particularly in supporting p2p file sharing."
},

{
   "id":"99",
   "chapter":"Notes from book",
   "question":"What is expanded ring search?",
   "answer":"The initiating node carries out a series of searches with increasing values in the time-to-live-field, recognizing that a significant number of requests will be met locally."
},

{
   "id":"100",
   "chapter":"Notes from book",
   "question":"What is Random walks (in search)?",
   "answer":"The initiating node sets off a number of walkers who follow their own random pathway."
},

{
   "id":"101",
   "chapter":"Notes from book",
   "question":"What is Gossiping (in search)?",
   "answer":"A node sends a request to a given neighbour with a certain probability, so the request propagates through the network like a virus (which is also why it's called epidemic protocols). Gossiping is a common technique."
},

{
   "id":"102",
   "chapter":"Notes from book",
   "question":"How does the typology in Gnutella look like?",
   "answer":"Imagine all peers being equal. Now find those that have has additional resources, and elect them as ultrapeers, forming the heart of the network. Each peer is connected to a small number of ultrapeers, which again is heavily connected to other ultrapeers. Chapter 10.6 - Squirrel, OceanStore, Ivy (cursory)"
},

{
   "id":"103",
   "chapter":"Notes from book",
   "question":"What is Squirrel and how is it different from normal web-caching?",
   "answer":"Squirrel is a local area network (?) peer-to-peer web caching service platform (which is sort of what makes it differnt). The simplest implementation of Squirrel makes a node whose GUID is numarically closest to the object-GUID it's home node. The home node is then the web-cache for that spesific object. Load on the central webservers has been observed to reduce by 30-40% with a slightly (but not much) experienced latency."
},

{
   "id":"104",
   "chapter":"Notes from book",
   "question":"What is OceanStore file store?",
   "answer":"OceanStore is a p2p file store that, unlike PAST, supports the storage of mutable files. The design aims to provide a very large scale, incrementally scalable persistent storage facility for mutable data objects with long-term persistence and reliability in an environment of constantly changing network and computing resources. Pew, long sentence. Now, the fun thing about OceanStore is that it (in principle) keeps all the different versions of a file. Any change to a file generates a new version that share unchanged blocks with the previous version. While I couldn't find this in writing, it seems very likely that any p2p version control software would be based on this (or something similar). The OceanStore would at least be an effective solution for the distribution of files that do not change very much, or rapidly."
},

{
   "id":"105",
   "chapter":"Notes from book",
   "question":"What is the Ivy file system?",
   "answer":"Like OceanStore, Ivy is a read/write file system supporting multiple readers and writers implemented over an overlay routing layer and a distributed hash-addressed data store. Unlike OceanStore, the Ivy file system emulates a Sun NFS server. The execution times compared with NFS is within a factor of two for LAN, but is quite horribad for WAN usage. Chapter 11: Chapter 11.1 - Introduction"
},

{
   "id":"106",
   "chapter":"Notes from book",
   "question":"Why do we need security mechanisms in distributed systems?",
   "answer":"The need arised from the desire to share resources (resources that are not shared can generally be protected by isolating them from external access). We need it today because it's easy to run a program on a connected computer that obtains copies of the messages transmitted between other computers."
},

{
   "id":"107",
   "chapter":"Notes from book",
   "question":"Security can be divided into policy and machanism. What do these represent?",
   "answer":"Policies are rules, that provide for the sharing of resources within specified limits. Mechanisms are what enforce them."
},

{
   "id":"108",
   "chapter":"Notes from book",
   "question":"What is cryptography?",
   "answer":"Cryptography is the art of encoding information in a format that only the intended recipients can decode."
},

{
   "id":"109",
   "chapter":"Notes from book",
   "question":"How did cryptography arise, and where is it in use today?",
   "answer":"The military were the first to employ cryptography. Later the growth of interest in non-military applications and is used in online e-banking and e-mail among other things."
},

{
   "id":"110",
   "chapter":"Notes from book",
   "question":"Can you give an example of openness being good for security?",
   "answer":"The DES encryption algorithm that was adopted and used by the US military was intentially a military secret. Its eventual publication and successfull efforts to crack it resulted in the development of much stronger secret-key encryption algorithms."
},

{
   "id":"111",
   "chapter":"Notes from book",
   "question":"Security threads fall into three broad classes. Which?",
   "answer":"1) Leakage (acquisition of information by unauthorized recipients). 2) Tampering (unauthorized alteration of information). 3) Vandalism (interference with the proper operation of a system without gain to the perpetrator)"
},

{
   "id":"112",
   "chapter":"Notes from book",
   "question":"Methods of attack is classified into five broad categories. Which?",
   "answer":"MMERD!<br /> Message tampering: Intercepting messages and altering their contents before passing them on to the inteded recipient. 'Man-in-the-middle attacks' is a form.<br /><br /> Masquerading: Sending or receiving messages using the identity of another principal.<br /><br /> Eavesdropping: Obtaining copies of messages without authority.<br /><br /> Replaying: Storing intercepted messages and sending them at a later date<br /><br /> Denial of service: Flooding a channel or resource with messages in order to deny access for others.<br /><br />"
},

{
   "id":"113",
   "chapter":"Notes from book",
   "question":"What sort of guarantees/requirements does secure web purchases need?",
   "answer":"Authenticating the vendor to the buyer. Keeping payment details from leaking. Ensure that contents are delivered without alteration or disclosure. Authenticate the identity of the account holder (to the bank)."
},

{
   "id":"114",
   "chapter":"Notes from book",
   "question":"What worst-case assumption and design guidelines should one be aware of?",
   "answer":"1) Interfaces are exposed - an attack can send a message to any interface. <br />2) Networks are insecure - Peter can connect tot he network with Martins address and receive copies of the messages. <br />3) Limit the lifetime and scope of each secret - passwords and shared secret keys should be time-limited. <br />4) Algorithms and program code are available to attackers - if you try to hide it, it will leak. If you share it - people will point out flaws that you can improve. <br />5) Minimize the trust base - The smaller portion of a system that is responsible for security implementation, the less can go wrong."
},

{
   "id":"115",
   "chapter":"Notes from book",
   "question":"There are two main classes of encryption. Shared secret keys (sync) and public-key (async). Which one is faster, and by ~how much?",
   "answer":"The secret-key algorithm is faster, by 100 to 1000 times."
},

{
   "id":"116",
   "chapter":"Notes from book",
   "question":"Describe how hybrid cryptographic protocol works between two processes A and B?",
   "answer":"<ol> <li>A obtains a public-key certificate giving B's public key. A can now transfer information safely to B, by encrypting it with the public key</li>. <li>A creates a shared key, and encrypts it using B's public key.</li> <li>A sends the encrypted shared key to B. The message can be tampered with, but not decoded to retrieve the shared key.</li> <li>B decrypts the message using B's private key, and retrieves the shared key from which A and B might interact. If the message had been tampered with, A will not understand the shared-key-encrypted messages, and the process would have to start over.</li> </ol> A problem above is with man-in-the middle attacks, where the attacker gives A the wrong key in step 1, and intercepts packages going to Bob. This can be prevented with the certificate being signed by a well-known authority. However, the public key from the well known authority that is used to verify B might also have been subject to a mim-attack, This is a problem arising with certificates."
},

{
   "id":"117",
   "chapter":"Notes from book",
   "question":"What are digital signatures, and how would A sign one when sending a document to B?",
   "answer":"Diginal signatures is a way to show that a certain signer has OK'ed a document. A can encrypt a document with A's private key. The encrypted message would then be the signature. Anyone can decrypt it, and know it had been encrypted by A (given someone hadn't found and stolen A's private key)."
},

{
   "id":"118",
   "chapter":"Notes from book",
   "question":"Say that A had given C access to some stuff by giving a certificate of 'C shall has dem access'. How does A revoke this certificate later?",
   "answer":"The usual solution to this is to include an expiry date in the certificate, so C would have to renew it when it expires."
},

{
   "id":"119",
   "chapter":"Notes from book",
   "question":"What's the reasons for/against granting access to resources via capabilities and access control lists?",
   "answer":"Capabilites may, through carelessness or as a result of an eavesdropping attack, fall into the hands of principals other that those to whom they were issued. It's also difficult to cancel capabilities. Analouges can be made to keys. Keys can be lost or stolen, and it's hard to force back keys that have been given. Access control lists are more havy to handle for servers. Both Unix and Windows se access permission bits associated with each file. Chapter 11.3 - Cryptographic algorithms"
},

{
   "id":"120",
   "chapter":"Notes from book",
   "question":"Why are secret-key cryptography referred to as symmetric cryptography, whereas public-key cryptography is referred to as assymetric?",
   "answer":"In symmetric, the same key is used for encryption and decryption. Assymetric use two different key, A and B, where A can decrypt what has been encrypted by B and visa versa."
},

{
   "id":"121",
   "chapter":"Notes from book",
   "question":"What is one-way functions, and what is a trap-door function? How is it related to encryption?",
   "answer":"A one-way function, is a function F where F(M) is easy to compute, and F<sup>-1</sup>(M) is hard to compute. These are used for symmetric encryption, where F(M) denotes applying the secret-key to a message M and where M = F<sup>2</sup>(M). Decrypting it, F inverse, is suppose to be hard.<br /> A trap-door function is a one-way function with a secret exit. It's easy to compute F(M), but F<sup>-1</sup>(M) is hard <em>unless</em> one has the secret (trap-door)."
},

{
   "id":"122",
   "chapter":"Notes from book",
   "question":"What is Chipher block chaining, and why is it necessary?",
   "answer":"In a simple block cipher (no chaining), the encrypted data will be identical if the message data was identical. So one can recognize repeated data. <br /><br />In cipher block chaining, each block is combined with the preceding ciphertext block using XOR operation before it's encrypted. (XOR is it's own inverse function). Decryption will for the same reason here fail if any blocks of ciphertext are lost. <br /><br />Since cipher block chaining of plain text will be the exact same for an identical plain text message, there is also sometimes used an initialization vector to make each message start with a different plaintext block. This makes each message look unique."
},

{
   "id":"123",
   "chapter":"Notes from book",
   "question":"How do you encrypt streams of data, such as bitstreams of sound?",
   "answer":"You use a keystream, such as '1001010101' as a 'key'. Then you send bits which are XORed to the corresponding bit in this key."
},

{
   "id":"124",
   "chapter":"Notes from book",
   "question":"DES (56 bit effective encryption) was demonstrated to be cracked in 1997 (over 12 weeks, after about 25% of the possible 2<sup>56</sup> values had been checked). What algorithms has taken it's place?",
   "answer":"The tripple-DES or 3DES is equivalent to a 112 bit length key length, and is somewhat popular. This despite it having poor performance and not particulary safe. IDEA was developed in the early 90s a successor to DES, and uses a 128-bit key to encrypt 64-bit blocks at three times the speed of DES. RC4 (used in WEP) is about 10 times as fast at DES, but the discovered weakness led Wifi over to AES, which is pretty awesome. But yeah. The answer is sortof IDEA or 3DES."
},

{
   "id":"125",
   "chapter":"Notes from book",
   "question":"What is chosen plaintext attack (related to public-key algorithms)?",
   "answer":"Since an attacker can obtain a message decrypted with the public key, and already has the public key, he can guess for what text is in the message, encrypt it with public key and compared to the leaked message. This is what was done with RC4 that made WPA the standard over WEP."
},

{
   "id":"126",
   "chapter":"Notes from book",
   "question":"What encryption scheme is used in most large-scalle distributed systems?",
   "answer":"Hybrid cryptographic protocols. This is because the cost of public-key cryptography are too high. So pubilc key is used for authentication, and exchange of secret keys, and secret-keys are used from thereon out. Chapter 11.4 - Digital signatures"
},

{
   "id":"127",
   "chapter":"Notes from book",
   "question":"What's the role of a secure hash in digital signing?",
   "answer":"Say I have a document M that I want to sign. First I churn it through the hash function, which is open and used by everyone. An example is SHA1. This gives me a hueg number, which I then encrypt with my private key. I give this string of numbers to Bob, which wants to verify that I have signed the document. Bob naturally already has an unsigned copy of the document, and the secure hash function. What he does to verify my signature is to put an unsigned document through the function, and compare that number to what he gets when he decrypts my message with my public key."
},

{
   "id":"128",
   "chapter":"Notes from book",
   "question":"What is a birthday attack?",
   "answer":"It's making two documents have the same hash value, so when one is signed, that signature can be used to claim that the other is singed. Chapter 11.6"
},

{
   "id":"129",
   "chapter":"Notes from book",
   "question":"What's need was Needham-Schroeder authentication protocol developed in response of?",
   "answer":"The need for a secure mean to manage keys (and passwords) in a network. It works based of an authentication server that supplies secret keys to clients."
},

{
   "id":"130",
   "chapter":"Notes from book",
   "question":"What was the major weakness of Needham-Schroeder authentication protocol.",
   "answer":"If one gets tha hold of an old shared secret AB authentication ticket from A -> B, one can use it to initiate an exchange with B where one impersonates A. The weakness can be remedied by adding a nounce or timestamp to a message, giving it a period to live."
},

{
   "id":"131",
   "chapter":"Notes from book",
   "question":"How does Login with Kerberos work?",
   "answer":"When a user logs into a workstation, the login program sends the user's name to the Kerberos authentication service. If the user is known to the authentication services, it replies  with a session key, a nonce encrypted in the user's password and a  ticket for the TGS. The login program then attempts to decrypt the session key and the nonce using the password that the user typic in response to the password prompt."
},

{
   "id":"132",
   "chapter":"Notes from book",
   "question":"How is the Kerberos service scalable?",
   "answer":"The world is divided into separate domains of authentication authority, called realms, each with its own Kerberos server. The authentication database is replicated by a simple master-slave technique. Updates are applied to the master copy by a single Kerberos Database Management service (KDBM) that runs only on the master machine. Chapter 12 - Distributed File systems Chapter 12.1 - Introduction"
},

{
   "id":"133",
   "chapter":"Notes from book",
   "question":"What do we mean by metadata in file systems?",
   "answer":"Metadata is often used to refer to all of the extra information stored by a file system that is needed for the management of files. It includes file attributes, directories and all other persistent information used by the system."
},

{
   "id":"134",
   "chapter":"Notes from book",
   "question":"What sorts of transparency are we conserned about regarding file services?",
   "answer":"1) Access transparency: Client programs should be unaware of the distribution of files. 2) Location transparency: Client programs should see a uniform file name path (even though files may be relocated). 3) Mobility transparency: Client programs (nor system administration tables in clients) should need to change when files are moved. 4) Performance transparency: Client programs should perform satisfactorily while the load varies. 5) Scaling transparency: The service can be expanded."
},

{
   "id":"135",
   "chapter":"Notes from book",
   "question":"What's the benefits of file replication?",
   "answer":"Two main benefits: it enables multiple servers to share the load of providing a service, and it enhances fault tolerance should a copy fail."
},

{
   "id":"136",
   "chapter":"Notes from book",
   "question":"What do we mean by the heterogeneity requirement?",
   "answer":"The file system has to preserve information about where a client process is at. The system is therefore not stateless."
},

{
   "id":"137",
   "chapter":"Notes from book",
   "question":"UNIX is not stateless. NFS and AFS is however, but how do they accomplish this?",
   "answer":"To accomplish statelessness, NFS and AFS obviously can't have sessions. User requests has to therefore be authorized for each request. Chapter 12.3 - Case study: Sun Network File System"
},

{
   "id":"138",
   "chapter":"Notes from book",
   "question":"What security measures does NFS provide?",
   "answer":"1) TCP or UDP, NFS is compatible with both, to guarantee against message loss. 2) Signing and encryption is also optional, the latter to secure privacy and the first for integrity."
},

{
   "id":"139",
   "chapter":"Notes from book",
   "question":"What's the difference between hard- and soft-mounting remote filesystems?",
   "answer":"When using hard-mounting, the process is suspended until the request can be completed, and can therefore hang when the server goes down. When soft-mounted, the NFS client returns a failure indication after a small number of retries."
},

{
   "id":"140",
   "chapter":"Notes from book",
   "question":"What is read-ahead and delayed-write and how does it help NFS?",
   "answer":"Read-ahead anticipates read accesses and fetching the following pages. Delayed-write doesn't write changes to disc unless the buffer page is required for another page. For the latter, sync operation flushes altered pages to disk every 30 sec (as a guard against system crash)."
},

{
   "id":"141",
   "chapter":"Notes from book",
   "question":"What's write-through cashing and the commit operation in NFS?",
   "answer":"These are the two operations offered by NFS write operation. Write-through cashing is when a server writes changes to disk before sending a reply to the client. Commit operation is a client operation that asks teh data to be stored to disk. The latter was an additional operation provided in version 3 to overcome the performance bottleneck caused by write-through mode in servers that received large numbers of write operation."
},

{
   "id":"142",
   "chapter":"Notes from book",
   "question":"How is the NFS performance?",
   "answer":"The write operation is really the weakness of NFS performance, but it's descent as long as writing alot isn't a part of the normal operation. Chapter 12.4 - Case study: The Andrew File System."
},

{
   "id":"143",
   "chapter":"Notes from book",
   "question":"How does AFS differ from NFS?",
   "answer":"AFS is more scalable, which is the main focus of AFS. The key strategy for achieving this is the caching of whole files in client nodes, and storing them in a permanent cache (surviving reboots), whereas NFS stores a temporary cache in main memory. This makes AFS much more scalable when clients are repeatedly using the same computer, as on a typical workplace."
},

{
   "id":"144",
   "chapter":"Notes from book",
   "question":"How does AFS make sure that files stay consistent?",
   "answer":"When a server gives a client files, it also provides a callback promise - a token issued by the server that guarantees that it will notify the client when any other client modifies the file. This callback promise are stored with the cached files on the workstation disk and have two states: valid (ez ok) and cancelled (u old). When the server receives an update, it tells all the clients that the callback now is cancelled. When users 'log' in and out of clients, they are verified versus the server, and differences are merged."
},

{
   "id":"145",
   "chapter":"Notes from book",
   "question":"What's the challenge with time and knowing what event happened first (in distributed system)?",
   "answer":"The real killer is that we can't synchronize clocks with a small enough error margin. Chapter 14.2 - Clocks, events and process states"
},

{
   "id":"146",
   "chapter":"Notes from book",
   "question":"How does physical clocks inside a computer work, and why is it unpresice?",
   "answer":"Physical clocks consits of an electronic device that count oscilliations in a crystal. Compare computer A and Bs clocks. The instantaneous difference between the reading of them is called a <em>skew</em>. They also count time at a slightly different rate (since no things are perfect), which is called a <em>clock drift</em>. That makes them diverge over time. The <em>drift rate</em> is the change in offset (difference) between the clock and a nominal perfect reference clock."
},

{
   "id":"147",
   "chapter":"Notes from book",
   "question":"What is the difference between external and internal synchronization?",
   "answer":"Synchronizing the processes' clocks with an authoritativev external source of time is called external synchronization, while synchronizing to clocks to eachother is called internal synchronization. The internal synchronization agrees on their offset to do this, not by adjusting their clock to their average (which might've been intuitive)."
},

{
   "id":"148",
   "chapter":"Notes from book",
   "question":"What is the monotonicity condition for a clock, and why would we want it?",
   "answer":"Monotonicity is the condition that a clock only ever advances. This is a condition that lets us know what happened first (locally) depending on time stamps. The fact that something happened later is more useful (and for some things, a requirement) than knowing how the difference between them in time (which then becomes compromized). You might wonder: Then how can you adjust the clock backwards? The answer is that the computer 'makes time run slower', until it's been caught up by the adjusted time. U DIG?"
},

{
   "id":"149",
   "chapter":"Notes from book",
   "question":"What is Cristian's method for synchronizing clocks?",
   "answer":"It's a suggestion for the use of a time server, receiving UTC signals, to be a server for external syncronization. A client asks for the time, and receives T ms later a time t. It then adjusts it's clock to t + T/2, which is reasonably close to the actual time. Weakness of this is a faulty time server, (or if that one server fails, but that can be fixed by making more than one of them.)"
},

{
   "id":"150",
   "chapter":"Notes from book",
   "question":"What's the Berkeley algorithm for clock syncronization?",
   "answer":"It's an algorithm for internal synchronization. A coordinatur computer is chosen to act as master, which polls the other computers periodically and asks what their clock is. The master collects the local clocks by observing the round-trip times (RTT) and adding half of RTT to the individual local time. When it has those times, it estimates the averages (might not care about outliers) and sends back the amount by which each individual slave's clock requires adjustment."
},

{
   "id":"151",
   "chapter":"Notes from book",
   "question":"Network Time Protocol (NTP) defines an architecture for time service over the Internet. What is NTP's chief design aims?",
   "answer":"1) To provide a service enabling clients across the Internet to be synchronized accurately to UTC.<br /> 2) To provide a realiable service that can survive lengthy losses of connectivity (redundant servers, redundant paths)<br /> 3) To enable client to resynchronize sufficiently frequently to offset the drift rate found in most computers<br /> 4) To provide protection against interference with the time service, whether malicious or accidental<br /><br />NTP does this basically by having primary servers that are connected directly to a time source, and secondary servers that are synchronized with primary servers."
},

{
   "id":"152",
   "chapter":"Notes from book",
   "question":"What's the difference between physical and logical clocks?",
   "answer":"Since we cannot synchronize clocks perfectly accross a distributed system, we cannot in general use physical time to find out the order of any arbitrary pair of events occuring in it. So what Lamport did, was make a logical clock which basically is a integer counter, where event gets timestamp = counter++. Its basis is on two simple points: 1) If two event occured at the same process, then their order is which the process observes them. 2) Whenever a message is sent between processes, the event of sending occurs before the event of recieving. 3) This has the transitivy property, so a -> b, b -> c ==> a -> c."
},

{
   "id":"153",
   "chapter":"Notes from book",
   "question":"What's a vector clock?",
   "answer":"It's a clock with a vector of logical clocks, each clock<sub>i</sub> denoting the state of the clock at process<sub>i</sub>."
},

{
   "id":"154",
   "chapter":"Notes from book",
   "question":"Shortly describe what distributed garbage collection, deadlock detection and termination detection is.",
   "answer":"<ul> <li>Distributed garbage collection: An object is considered to be garbage if there are no longer any references to it anywhere in the distributed system.</li> <li>A distributed deadlock occures when each of a collection of process waits for another, where there is a cycle in the 'wait-for' relationship</li> <li>The problem with termination detection is how to detect that a distributed algorithm has terminated</li> </ul>"
},

{
   "id":"155",
   "chapter":"Notes from book",
   "question":"What is a linearization or consistent run?",
   "answer":"It's an ordering of the events in a global history that is consistent with a happened-before relationship on H."
},

{
   "id":"156",
   "chapter":"Notes from book",
   "question":"What's the Chandy and Lamport 'snapshot' algorithm.",
   "answer":"It makes snapshots of global states of a distributed system. A snapshot can be initiated by anyone. When a snapshot is made, it starts recording the input from different channels, to capture the 'inbetween-snapshot-data' too."
},

{
   "id":"157",
   "chapter":"Notes from book",
   "question":"How do you find possibly and definetly Ø in a lattice of global states?",
   "answer":"If there's any of the possible states in the lattice (which is derived from an execution table) with Ø, we got 'possibly Ø'. If you can't get past states with Ø to get to the bottom of the lattice, you got 'definitely Ø'. Chapter 15 - Coordination and agreement Chapter 15.1 - Introduction"
},

{
   "id":"158",
   "chapter":"Notes from book",
   "question":"Why would we want to avoid fixed master-slave relationships in distributed systems?",
   "answer":"We often require our systems to keep working correctly even if failures occur, so we need to avoid single points of failure, such as fixed masters."
},

{
   "id":"159",
   "chapter":"Notes from book",
   "question":"In async systems, a reliable channel <em>eventually</em> delivers a message to the recipient's input buffer. What about sync systems?",
   "answer":"In a synchronous system, we suppose that there is hardware redundancy where necessary, so that a reliable channel not only eventually delivers each message despite underlying failures, but does so within a specified time bound."
},

{
   "id":"160",
   "chapter":"Notes from book",
   "question":"Over the Internet, independant routing choices means that we can have asymmetric and intransitive connectivity. What do we mean by this?",
   "answer":"Assymetric: Communication is possible from process p to process q, but not vice versa. <br /> Intransitive: Communication is possible from p to q and from q to r, but p cannot communicate directly with r."
},

{
   "id":"161",
   "chapter":"Notes from book",
   "question":"What's a correct process?",
   "answer":"A correct process is one the exhibits no failures at any point in the execution under consideration. Note that correctness applies to the whole execution, not just to a part of it. So a process that sufferes a crash failure is 'non-failed' before that point, not 'correct' before that point."
},

{
   "id":"162",
   "chapter":"Notes from book",
   "question":"An unreliable failure detector may produce one of two failures given the identity of a process, Unsuspected or Suspected. How does it determine these values?",
   "answer":"An unsuspected process can be on where the detector has recently received evdence suggesting that the process has not failed. A suspected process may be that no message from the process has been received for more than a anominal maximum length of silence. Chapter 15.2 - Distributed mutual exclusion"
},

{
   "id":"163",
   "chapter":"Notes from book",
   "question":"What is the 'critical region'?",
   "answer":"This is the region where only one process might be at a time. Typical critical region is one where a process is allowed write access to a resource."
},

{
   "id":"164",
   "chapter":"Notes from book",
   "question":"How do we evaluate the performance of algorithms for mutual exclusion?",
   "answer":"1) The bandwith consumed. 2) The client delay incurred by a process at each entry and exit operation. 3) The algorithm's effect upon the throughput of the system."
},

{
   "id":"165",
   "chapter":"Notes from book",
   "question":"The central server algorithm for mutual exclusion (mutex). How does this work?",
   "answer":"Employing a server that grants permission to enter the critical section is a simple way of implementing mutex. Any process that wants a resource, asks the server for a 'resource-token', which the server gives (when it is ready). The server is a one-point-of failure, potentially bottleneck for the entire system."
},

{
   "id":"166",
   "chapter":"Notes from book",
   "question":"How does the ring-based algorithm work?",
   "answer":"It arranges the processes in a logical ring, and passes tokens in one direction (e.g. clockwise). If a process does not require to enter the critical section when it receives the token, it forwards it immediately. The delay experienced by a process requesting entry can be potentially very long."
},

{
   "id":"167",
   "chapter":"Notes from book",
   "question":"What are the three essential requirements for mutex (ME1-3)?",
   "answer":"ME1 (safety): At most one process may execute in the critical section at once<br /> ME2 (liveness): Requests to enter and exit the critical section eventually succeed.<br /> ME3 (ordering): If one request to enter the crittical section happened-before another , then the entry to the CS is granted in that order."
},

{
   "id":"168",
   "chapter":"Notes from book",
   "question":"How does the mutex algorithm using multicast and logical clocks work?",
   "answer":"This is the only one described in the book which satisfies M1 through M3. The basic idea is that processes that require entry multicast a request message, and can only enter after all other processes has replied. A process replies if it is outside CS (critical section), but not if it is in it. If the process itself wants in on the action, it replies only if the request has a lower timestamp than it's own request for the resource.<br /> <br /> It is an expensive algorithm in terms of bandwidth consumption due to all the messaging. However, the client delay in requesting is only one round-trip time. Chapter 15.3 - Elections: Chapter 15.4 - Coordination and agreement in group communications:"
},

{
   "id":"169",
   "chapter":"Notes from book",
   "question":"What is FIFO ordering?",
   "answer":"If a correct process issues multicast(g, m) and then multicast(g, m'), then every correct process that delives m' will deliver m before m'. What this means in practice is that if I scream 1, 2, 3, 4 in a group, you will receive (atleast do) it as 1, 2, 3, 4. No other way. This does not imply causal ordering. FIFO is less heavy to implement than causal and total ordering, and is therefore the only ordering available in USENET boards. Causal > FIFO, but FIFO !> causal.<br /> FIFO ordering can be accomplished by including a order for that multicast with the message (e.g. [order <identifier>, package <packagenum>])"
},

{
   "id":"170",
   "chapter":"Notes from book",
   "question":"What is causal ordering?",
   "answer":"Causal ordering makes sure that what happen as a basis in process [X], before [X] called for {1, 2, 3, 4} also happens in a process [Y] which receives {1, 2, 3, 4}. For example, say that the following events happen (in this order):<br /> <br />1) X broadcasts {1, 2, 3, 4} <br />2) Y receives {1, 2, 3, 4} and does {5, 6, 7} subsequentially, before broadcasting {5, 6, 7} <br />3) Z receives {5, 6, 7}. If it's causal ordering, Z should put these on hold, and do {1, 2, 3, 4} first. <br />4) Z receives {1, 2, 3, 4} and then {5, 6 ,7} <br />Causal ordering can be accomplished using vector clocks that are sent with the messages. Causal ordering implies FIFO ordering, btw."
},

{
   "id":"171",
   "chapter":"Notes from book",
   "question":"How can three byztantine generals agree?",
   "answer":"They can by using digital signing. Four or more generals can agree without digital signing. Chapter 17 - Distributed transactions Chapter 17.2 - Flat and nested distributed transactions"
},

{
   "id":"172",
   "chapter":"Notes from book",
   "question":"What are the two different ways that distributed transactions can be structured. Explain.",
   "answer":"Distributed trnasactions can be structured as flat transaction or as nested ones. A flat client transaction completes each of its requests before gooing on to the next one. Therefore, each transaction accesses servers' objects sequentially. Chapter 17.3 - Atomic commit protocols"
},

{
   "id":"173",
   "chapter":"Notes from book",
   "question":"What's a one-phase atomic commit protocol?",
   "answer":"Considering a transaction involves several distributed operations, the atomic property requires that either all or none of them are carried out. In 1PC, the coordinator communicates the commit or abort request untill all of the participants has acknowledged that they have carried it out. This has several weaknesses."
},

{
   "id":"174",
   "chapter":"Notes from book",
   "question":"What is the two-phase commit protocol (2PC)?",
   "answer":"2PC is designed to allow any participant to abort its part of a transaction. It works by:<br /> 1) Coordinator goes participant.canCommit(trans)? to all participants<br /> 2) All participants then say Yes/No to Coordinator.<br /> 3) If all yes, Coordinator goes participant.doCommit(trans). If <em>any</em> no, participant.doAbort(trans)<br /> Note that after part 2, the participants (who say Yes) prepares for the commit, and is left in a wait-state. It can do Coordinator.getDecision if it's impatient, and Coordinator can do participant.doAbort if it can't decide (doesn't get an answer from some participants). Chapter 17.4 - Concurrency control in distributed transaction"
},

{
   "id":"175",
   "chapter":"Notes from book",
   "question":"How does a distributed deadlock occur?",
   "answer":"To provide atomicity for distributed transactions, resources are held at multiple places, and locked from others, while the transaction finds out whether or not to commit (2PC). When there's cyclic dependencies between transactions, a deadlock has occured. Chapter 17.5 - Distributed deadlocks"
},

{
   "id":"176",
   "chapter":"Notes from book",
   "question":"Why is using timeouts to resolve deadlocks a clumsy approach?",
   "answer":"It is difficult to choose an appropriate timeout interval, and transactions may be aborted unnecessarily."
},

{
   "id":"177",
   "chapter":"Notes from book",
   "question":"How can we use centralized deadlock detection, and what is it's drawbacks?",
   "answer":"In centralized deadlock detection, one server takes on the role of global deadlock detector. From time to time, each server sends the latest copy of its local wait-for graph to the global deadlock detector, which detect and tells servers which transaction to abort.<br /><br />This is not a good idea because it depends on a single server. This makes it suffer from the usual problems associated with centralized solutions in distributed systems - poor availability, lack of fault tolerance and no ability to scale."
},

{
   "id":"178",
   "chapter":"Notes from book",
   "question":"What are phantom deadlocks, and how do they appear?",
   "answer":"Phantom deadlocks is a 'detected' deadlock that issn't really a deadlock. The reason for this to happen is that detecting a deadlock will take some time, and there's a chance that one of the transaction in the meantime will realease a lock that is a part of the phantom deadlock."
},

{
   "id":"179",
   "chapter":"Notes from book",
   "question":"How does edge chasing work?",
   "answer":"Edge chasing (also known as path pushing) tries to find a deadlock by using a probe. A probe is a set of transactions, really (the book says edges, but that's not really necessary). A transaction adds itself to a probe and sends it to the waiting-for server. If that server also waits for another one, it does the same until one server finds that it's already in the probe. (It has then found a cycle)"
},

{
   "id":"180",
   "chapter":"Notes from book",
   "question":"When a deadlock is detected, how does one choose which transaction to abort?",
   "answer":"Each transaction is given a priority. Timestamps (indicating when they started) is a great one. The youngest transaction can then be aborted."
},

{
   "id":"181",
   "chapter":"Notes from book",
   "question":"How can one reduce the number of probe messages?",
   "answer":"A rule that detection is initiated only when a higher-priority transaction starts to wait for a lower-priority one is likely to reduce the number of probe messages by about half. Chapter 21 - Google Case study Chapter 21.2 (kursorisk) - Introducing the case study: Google"
},

{
   "id":"182",
   "chapter":"Notes from book",
   "question":"What does a crawler do?",
   "answer":"It locates and retrieves the contents of the Web and pass the contents onto indexing subsystems"
},

{
   "id":"183",
   "chapter":"Notes from book",
   "question":"What's the role of indexing?",
   "answer":"To produce an index for the contents (of the Web) that is similar to an index at the back of a book."
},

{
   "id":"184",
   "chapter":"Notes from book",
   "question":"What is ranking, and why is it needed?",
   "answer":"The problem with indexing on its own is that it provides no information about the relative importance of the web pages contatining a particular set of keywords?"
},

{
   "id":"185",
   "chapter":"Notes from book",
   "question":"What is Googles pageranking algorithm called, and what's its very core idea?",
   "answer":"PageRank. A page will be viewed as important if linked to by a large number of other pages. It also looks at the importance of the sites that contain links to the given page. Chapter 21.3 (kursorisk) - Overall architecture and design philosophy"
},

{
   "id":"186",
   "chapter":"Notes from book",
   "question":"What's the key philosophy of Googles physical model?",
   "answer":"Its physical infrastructure is to use very large numbers of commodity PCs to produce a cost-effective environment for distributed storage and computation. Funfacts: Hardware failures represent about 10% of the failures. Of these, 95% are due to disks or DRAM."
},

{
   "id":"187",
   "chapter":"Notes from book",
   "question":"What's the most obvious requirement for the underlying Google infrastructure.",
   "answer":"Scalability."
},

{
   "id":"188",
   "chapter":"Notes from book",
   "question":"The most important design principle behind Google software is that of simplicity. What do we mean by that?",
   "answer":"That software should avoid being rich in features, but do one thing and do it well. Two other important design principles are the emphasis on performance and being able to estimate the performance of a design before making it live, and stringent testing: If it ain't broke, you aren't trying hard enough Chapter 21.4 - Underlying communication paradigms"
},

{
   "id":"189",
   "chapter":"Notes from book",
   "question":"What's the publish-subscribe system?",
   "answer":"It's implemented as a broker overlay in the form of a set of trees, where each tree represents a topic. The root of the tree is the and the leaf nodes represent subscribers. Googles publisher-subscribe system has emphasis on reliable and timely delivery through redundant trees and flow-limit per user/topic. Chapter 21.5 - Data storage and coordination services"
},

{
   "id":"190",
   "chapter":"Notes from book",
   "question":"Describe the Google File System.",
   "answer":"GFS is a distributed file system that offers access to unstructured data in the form of files, but optimized to the styles of data required by Google. It is specialized for the very particular requirements in terms of storage and access to very large quantative data."
},

{
   "id":"191",
   "chapter":"Notes from book",
   "question":"What requirements does Google File System (GFS) have?",
   "answer":"1) It must run reliably on Googles physical architecutre (large commodity PCs). The designers of GFS started with the assumption that components will fail.<br />2) Optimized for the patterns of usage within Google. Concurrent read access upon huge files.<br />3) GFS must scale and have high, sustained throughput in reading data. This is prioritized over latency.<br /><br />These requirements are markedly different from those for NFS and AFS."
},

{
   "id":"192",
   "chapter":"Notes from book",
   "question":"What is the role of a master within a GFS cluster?",
   "answer":"First: The storage of files are done in fixed-size chunks of 64 megabites. Each GFS cluster has a single master with metadata and multiple chunkservers to store away these chunks. The role of the master is to manage metadata about the file systems defining the namespace for files, access control information and the mapping of each particular file to the associated set of chunks."
},

{
   "id":"193",
   "chapter":"Notes from book",
   "question":"What is Chubby?",
   "answer":"Together with GFS and Bigtable, Chubby is a part of Googles heart. It provides coarse-grained distributed locks to synchronize distributed activites, and provides a file system offering the reliable storage of small files (complementing GFS, and can support the election of a primary in a set of replicas."
},

{
   "id":"194",
   "chapter":"Notes from book",
   "question":"What is Bigtable? A NoSQL db, that supports vast volumes of structured data (hence the name). Its tables is a three-dimensional structure containing row key, column key and timestamp for any given cell. The rest of useful stuff is NoSQL curriculum. Chapter 21.6 - Distributed computation services",
   "answer":"Ingen forklaring gitt"
},

{
   "id":"195",
   "chapter":"Notes from book",
   "question":"What is MapReduce?",
   "answer":"MapReduce is a way to perform parallell computations by breaking down input data into chunks, divide the workload by giving each chunk away, gathering results, and combining them into the final output."
},
{
   "id":"200",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver synkronisering i distribuerte systemer står overfor i forhold til synkronisering i sentraliserte systemer",
   "answer":"Unngå avhengighet av enkeltnoder / enkeltmeldinger <br /> Unngå / begrens flaskehalser i systemet (noder / lenker) <br /> Begrens meldingsmengder / prosesseringsforsinkelser"
},

{
   "id":"201",
   "chapter":"Eksamen 2006",
   "question":"Beskriv og vurder ringalgoritmen for distribuert primas utvelgelse (distributed process election)",
   "answer":"Start Valg-rutine: <br />1a) Send Valg-melding m/ Egen identifikator <br />Får Valg-melding: <br />2a) Med høyere identifikator og Egen ikke inkludert / Egen inkludert: <br /> - Send videre m/ Gitt identifikator <br />2b) Med lavere identifikator og Egen ikke inkludert: <br /> - Send videre m/ Egen identifikator <br />2c) Med lavere identifikator og Egen inkludert: <br /> - Stopp Valg-melding <br />2d) Med samme identifikator og Egen inkludert: <br /> Send Sjef-melding m/ Egen identifikator <br />Får Sjef-melding: <br />3a) Med høyere identifikator: Send videre m/ Gitt identifikator <br />3b) Med samme identifikator: Avslutt rutine <br /> <br />Vurdering <br />Det totale antall meldinger kan bli høyt (-> 3N) <br />Den totale forsinkelse kan bli lang (-> 3N) <br />Hver node må kjenne adressen til alle de andre i ringen Ingen virkelig god algoritme, men denne er mye brukt"
},

{
   "id":"202",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver filsystemer for distribuerte omgivelser står overfor i forhold til filsystemer for sentraliserte omgivelser",
   "answer":"Ulike filer kan være plassert på forskjellige noder, under ulike aksessregimer (autonomi), på ulik form (modell) og med permanente kopier (replikater) og/eller temporære kopier (cacher) på andre noder igjen."
},

{
   "id":"203",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver databasesystemer for distribuerte omgivelser står overfor i forhold til databasesystemer for sentraliserte omgivelser",
   "answer":"Dataene kan bli oppdelt i mindre fragmenter som så blir fordelt på ulike noder <br />Fragmentene kan igjen forefinnes i flere kopier som tilsvarende repliseres på ulike noder"
},

{
   "id":"204",
   "chapter":"Eksamen 2006",
   "question":"Beskriv og vurder algoritmen for 2-fase-låsing (2-phase-locking)",
   "answer":"<ul><li>Enhver transaksjon kreves å sette en lås på ethvert dataelement før det skal aksesseres / oppdateres, og å fjerne låsen igjen når dataelementet ikke lenger skal aksesseres / oppdateres </li> <li>Systemet forventes kun å tillate kompatible låser mellom ulike transaksjoner - dvs. at låser som ikke kan tillates samtidig på et gitt dataelement, faktisk ikke aksepteres på vegne av ulike transaksjoner </li> <li>En transaksjon kan ikke sette en ny lås etter at en av dens eksisterende låser er fjernet – dvs. alle dens låser settes før noen av dem fjernes </li></ul> En funksjonelt sett god algoritme – men samtidig en effektivitetsmessig krevende algoritme. Den tillater kun serialiserbare utførelser, men den tillater mindre parallellitet enn hva full serialiserbarhet tilsier."
},

{
   "id":"205",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver pålitelighet i distribuerte systemer står overfor i forhold til pålitelighet i sentraliserte systemer",
   "answer":"Noder kan feile uavhengig av hverandre, og meldinger mellom noder kan forsvinne, dubliseres, ødelegges, omrokkeres, avlyttes og/eller manipuleres Et system må likevel kunne brukes selv om noen noder er tilgjengelige mens andre noder er utilgjengelige på et vilkårlig tidspunkt, og et system bør også kunne brukes som om det hadde bestått av en eneste node"
},

{
   "id":"206",
   "chapter":"Eksamen 2006",
   "question":"Beskriv og vurder en algoritme for sikring av atomiskhet (atomicity) ved meldingsutveksling (message exchange)",
   "answer":"<ul><li>Avsender sender meldingen til alle tiltenkte mottakere - med beskjed om å bekrefte mottaket og samtidig avvente agering på mottaket </li> <li>Mottakere som ikke bekrefter å ha fått meldingen, vil få den tilsendt et visst antall ganger til </li> <li>Hvis absolutt alle mottakere bekrefter mottaket, vil alle få beskjed om å agere på mottaket. Hvis minst en mottaker ikke bekrefter mottaket, vil alle få beskjed om å kansellere mottaket.</li></ul> En funksjonelt sett god algoritme – men samtidig en effektivitetsmessig krevende algoritme. Den sikrer atomiskhet, men den krever fire meldingsrunder."
},

{
   "id":"207",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver navnetjenester i distribuerte systemer står overfor i forhold til navnetjenester i sentraliserte systemer",
   "answer":"Navnerommet kan være fysisk fordelt på ulike navnetjenere – og det på en helt annen måte enn den måten navnerommet logisk er oppdelt på Således vil både replikasjon av adresseinformasjon og caching av søkeresultater på ulike noder kunne variere. Likeledes vil navigasjon mot navn og binding av navn ved opprulling av flernivånavn kunne variere."
},

{
   "id":"208",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver delt lager i distribuerte systemer står overfor i forhold til delt lager i sentraliserte systemer",
   "answer":"Et distribuert delt lager tilsier en simulering av felles lager i en omgivelse uten felles lager. Dette gir både funksjonalitetsspørsmål (hvordan bør det gjøres for at det skal bli mest likt et felles lager) og effektivitetsspørsmål (hvordan bør det gjøres for at skal bli raskest nok)."
},

{
   "id":"209",
   "chapter":"Eksamen 2006",
   "question":"Beskriv og vurder algoritmen for lesing og skriving av dataelementer i IVY/MIRAGE",
   "answer":"Sidebasert (dvs. OS-simulering) – Sekvensiell konsistens (som lagringskrav) <br />* Måte: <br />Globale sider er spredt på lokale noder – Ingen eier en gitt side permanent <br />En gitt side kan være skitten (W-tilstand) eller ren (R-tilstand) <br />En skitten side vil finnes i en kopi – En ren side kan finnes i flere kopier <br />En ønsket side kan være på tilsvarende node eller ikke <br />* Resultat: <br />6 ulike tilfeller for leseaksess & 6 ulike tilfeller for skriveaksess <br />Eier-lokalisering: <br />Benytt sentral forvalter / Forfølg sannsynlig eier <br />Kopi-lokalisering: <br />Forvalter evt. eier(e) holder kopiliste(r) / Forespørrer benytter kringkasting <br />Flere aktive aktører gjør spontane invalideringer mulig: <br />Behov for nye sideutbyttingsalgoritmer <br /> <br />Vurdering: En god algoritme – som dekker mange relevante aspekter for aksessering og oppdatering i et distribuert delt lager"
},

{
   "id":"210",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver multimediasystemer for distribuerte omgivelser står overfor i forhold til multimediasystemer for sentraliserte omgivelser",
   "answer":"Svært korte tur-retur tider kreves for interaktive MM-applikasjoner. <br /> Store, skiftende ressurskrav som ikke kan monopolisere parallelt kjørende applikasjoner"
},

{
   "id":"211",
   "chapter":"Eksamen 2006",
   "question":"Beskriv og vurder bøttebufferalgoritmen (token bucket algorithm)",
   "answer":"* En mediakilde tøyles ved at det innsettes en spesiell buffer mellom den og en medieavtaker <br />* Bufferen inkluderer en generator som kontinuerlig fyller en bøtte med buffertoken <br />* Bøttebufferen vil nedskalere uten helt å fjerne variasjonene i mediastrømmen <br /> Vurdering: En ganske effektiv algoritme – ved at den implementerer en lineært bundet ankomststrøm"
},

{
   "id":"212",
   "chapter":"Eksamen 2006",
   "question":"Angi hvilke ekstra utfordringer og oppgaver sikkerhet i distribuerte systemer står overfor i forhold til sikkerhet i sentraliserte systemer",
   "answer":"Forespørsler og resultater kan gå via meldinger over ett / flere nett hvor de kan lett kan utsettes for ulike former for manipulasjon (aksess og endring i ulike former). Kontroll av ulike aspekter blir vanskeligere på tvers av noder (identitet og rettigheter generelt sett)"
},

{
   "id":"213",
   "chapter":"Eksamen 2006",
   "question":"Beskriv og vurder Needham-Schroeder algoritmen for meldingsautentisering (message authentication)",
   "answer":"Autentisering (av aktør A og B seg imellom via en tjener S) <br />1) A->S: A, B, N<subA <br />2) S->A: {N<sub>A</sub>, B, K<sub>AB</sub>, {K<sub>AB</sub>, A}K<sub>B</sub>}K<sub>A</sub> <br />3) A->B: {K<sub>AB</sub>, A}K<sub>B</sub> <br />4) B->A: {N<sub>B</sub>}K<sub>AB</sub> <br />5) A->B: {N<sub>B</sub>-1}K<sub>AB</sub><br /> Vurdering: En funksjonelt sett ganske riktig algoritme - kun manglende et tidsmerke i melding nr. 3"
},

{
   "id":"214",
   "chapter":"Eksamen 2008",
   "question":"Drøft kort noen ulike former for ordning (ordering) som kan kreves i forbindelse med kommunikasjon mellom grupper av prosesser i distribuerte systemer, og diskuter kort aktuelle måter å implementere minst to slike former for ordning på",
   "answer":"Ulike former <ul> <li>Uordnet – Ingen intern ordning</li> <li>Kausalt ordnet – Intern ordning tilsvarende eventuelt årsak-virknings forhold</li> <li>Totalt ordnet – Intern ordning uansett</li> <li>Synkront ordnet – Ekstern, dobbel barriere</li> </ul> Implementasjon: <ul> <li>Uordnet – Ingen spesielle tiltak</li> <li>Kausalt ordnet –Logiske klokker + nodeidentifikatorer (/ vektorklokker – egentlig unødvendig)</li> <li>Totalt ordnet – Logiske klokker + nodeidentifikatorer (/ vektorklokker – egentlig unødvendig)</li> <li>Synkront ordnet – Logiske klokker (/ vektorklokker) + Ekstra nodekom. & -nodesynkronisering</li> </ul>"
},

{
   "id":"215",
   "chapter":"Eksamen 2008",
   "question":"Angi kort overordnete krav som bør stilles til algoritmer for å foreta primas utvelgelse (secretary election) i et distribuert system, og illustrer minst en aktuell algoritme for å løse denne oppgaven",
   "answer":"Overordnede krav: <ul> <li>Oppnå absolutt primas utvelgelse</li> <li>Sikre at alle aktive prosesser involveres</li> <li>Sikre at ingen passiv prosess ødelegger</li> <li>Unngå vranglås og utsulting</li> <li>Unngå avhengighet av enkeltnoder eller enkeltmeldinger</li> <li>Unngå eller begrens flaskehalser i systemet (noder og lenker)</li> <li>Begrens meldingsmengder og prosesseringsforsinkelser</li> </ul> Distribuert algoritme: Start Valg-rutine: <br />1a) Send Valg-melding til alle med høyere identifikator <br /> <br />Får Valg-melding (fra noen lavere): <br />2a) Send OK-melding til avsender <br />2b) Start Valg-prosess som over <br /> <br />Får OK-melding (fra noen høyere): <br />3a) Gi opp for andre <br /> <br />Får ingen melding (fra noen høyere): <br />4a) Send Sjef-melding til alle m/Egen identifikator<br /><br /> Andre muligheter er Sentralisert algoritme og ringalgoritme"
},

{
   "id":"216",
   "chapter":"Eksamen 2008",
   "question":"Begrunn kort om 2PL-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering <strong>men uten</strong> replisering (fragmented, non-replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: Basis 2PL er direkte anvendbar <br />Nye problemer: Kun effektivitestsutfordringer (Vranglåser oppdages senere, og tilhørende aborter kaster bort mer arbeid), ingen korrekthetsproblemer.<br /> Tilhørende løsninger: Intet spesielt"
},

{
   "id":"217",
   "chapter":"Eksamen 2008",
   "question":"Begrunn også kort om 2PL-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering <strong>så vel</strong> som replisering (fragmented, replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: Basis 2PL er nesten direkte anvendbar. <br />Nye problemer: Både effektivitetsutfordringer (Vranglåser oppdages senere, og tilhørende aborter kaster bort mer arbeid) og korrethetsproblemer (Låsing av et / flere fysiske replikater må føre til låsing av tilhørende logiske objekt). Tilhørende løsninger<br /> - Sentralisert låsing (På sentral node)<br /> - Sentralisert / distribuert låsing (Av primær-kopi / master-element)<br /> - Distribuert låsing (Spenn: W låser alle og R låser en - W og R låser begge en majoritet)<br /> <br /> Tofase-skriving (2PW – 2 phase write) i databasesystemer tilsier at alle objekter som skal oppdateres må skrives til en logg før noe objekt blir skrevet til databasen. 2PW er nok til å sikre seg mot gale resultater i forbindelse med transaksjoner som feiler under utførelse i sentraliserte databaser."
},

{
   "id":"218",
   "chapter":"Eksamen 2008",
   "question":"Begrunn kort om 2PW-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering men uten replisering (fragmented, non-replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: 2PW sikrer kun atomiskhet (m.h.t. feil) innen en node (alt-eller-intet).<br /> Nye problemer: Trenger også å sikre atomiskhet (m.h.t. feil og autonomi) mellom flere noder (alle eller ingen). Tilstandssyn (oppfatning av hvilke logiske objekter er tilgjengelige eller ikke) er ikke et ekstra problem.<br /> Tilhørende løsninger: 2PC: 1.fase (stemming), 2.fase (utføring) / 3PC: 1.fase (stemming), 2.fase (orientering), 3.fase (utføring)<br />"
},

{
   "id":"219",
   "chapter":"Eksamen 2008",
   "question":"Begrunn også kort om 2PW-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering så vel som replisering (fragmented, replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: 2PW sikrer kun atomiskhet (m.h.t. feil) innen en node (alt-eller-intet).<br /> Nye problemer: Trenger også å sikre atomiskhet (m.h.t. feil og autonomi) mellom flere noder (alle eller ingen).<br /> Tilstandssyn (oppfatning av hvilke logiske objekter er tilgjengelige eller ikke) er dog et ekstra problem.<br /> Tilhørende løsninger: PC: / 3PC: Med både nodefeil og kommunikasjonsfeil kreves egne protokoller for å utpeke partisjon for oppdatering. (Med kun nodefeil kreves intet ekstra)."
},

{
   "id":"220",
   "chapter":"Eksamen 2008",
   "question":"Angi kort overordnete krav som bør stilles til et distribuert filsystem, og diskuter kort viktige komponenter som må implementeres i et slikt system",
   "answer":"Overordnede krav: <ul> <li>Sikre ekte globalt filsystem</li> <li>Tilby ulike former for konsistensoppnåelse</li> <li>Tilby ulike former for oppdateringssemantikk</li> <li>Håndter både feiltoleranse og mobilitetstoleranse</li> <li>Utnytt klientmaskiner</li> <li>Utnytt datacaching</li> <li>Begrens beregningsspredning</li> <li>Begrens datareplisering</li> </ul> Viktige komponenter: <ul> <li>Sikre ekte globalt filsystem</li> <li>Tilby ulike former for konsistensoppnåelse</li> <li>Tilby ulike former for oppdateringssemantikk</li> <li>Håndter både feiltoleranse og mobilitetstoleranse</li> <li>Utnytt klientmaskiner</li> <li>Utnytt datacaching</li> <li>Begrens beregningsspredning</li> <li>Begrens datareplisering</li> </ul>"
},

{
   "id":"221",
   "chapter":"Eksamen 2008",
   "question":"Angi kort overordnete krav som bør stilles til en distribuert navnetjeneste, og diskuter kort viktige komponenter som må implementeres i en slik tjeneste",
   "answer":"Overordnede krav: <ul> <li>Tilby hierarkisk navnerom:<br /> Separat for hvert enkelt organisasjonsenhet etc. – full frihet etter behov</li> <li>Tilby tilpassete navnetjenere:<br /> Samlet for flere organisasjonsenheter etc. – full tilpasning til last</li> <li>Anvend gradvis binding av navn:<br /> Åpner således opp for utnyttelse av aliaser</li> <li>Anvend iterativ binding av navn:<br /> Åpner således opp for utnyttelse av caching</li> </ul> Viktige komponenter: <ul> <li>Implementer nødvendige operasjoner – for maskiner, brukere og tjenester:<br /> Registrer (Hvem, hva)<br /> Finn (Hva)<br /></li> Deregistrer (Hvem, hva) <li>Implementer caching og replikasjon:<br /> Sikrer ytelse og tilgjengelighet</li> </ul>"
},

{
   "id":"222",
   "chapter":"Eksamen 2008",
   "question":"Angi hvilke ekstra utfordringer og oppgaver multimediasystemer for distribuerte omgivelser står overfor i forhold til multimediasystemer for sentraliserte omgivelser",
   "answer":"Svært korte tur-retur tider kreves for interaktive MM-applikasjoner<br /> Store, skiftende ressurskrav som ikke kan monopolisere parallelt kjørende applikasjoner"
},

{
   "id":"223",
   "chapter":"Eksamen 2008",
   "question":"Beskriv og vurder bøttebufferalgoritmen (token bucket algorithm)",
   "answer":"* En mediakilde tøyles ved at det innsettes en spesiell buffer mellom den og en medieavtaker<br /> * Bufferen inkluderer en generator som kontinuerlig fyller en bøtte med buffertoken<br /> * Bøttebufferen vil nedskalere uten helt å fjerne variasjonene i mediastrømmen<br /><br /> En ganske effektiv algoritme – ved at den implementerer en lineært bundet ankomststrøm"
},

{
   "id":"224",
   "chapter":"Eksamen 2008",
   "question":"Angi hvilke ekstra utfordringer og oppgaver sikkerhet i distribuerte systemer står overfor i forhold til sikkerhet i sentraliserte systemer",
   "answer":"Forespørsler og resultater kan gå via meldinger over ett / flere nett hvor de kan lett kan utsettes for ulike former for manipulasjon (aksess og endring i ulike former). Kontroll av ulike aspekter blir vanskeligere på tvers av noder (identitet og rettigheter generelt sett)"
},

{
   "id":"225",
   "chapter":"Eksamen 2008",
   "question":"Beskriv og vurder Needham-Schroeder algoritmen for meldingsautentisering (message authentication)",
   "answer":"Autentisering (av aktør A og B seg imellom via en tjener S) <br />1) A->S: A, B, N<subA <br />2) S->A: {N<sub>A</sub>, B, K<sub>AB</sub>, {K<sub>AB</sub>, A}K<sub>B</sub>}K<sub>A</sub> <br />3) A->B: {K<sub>AB</sub>, A}K<sub>B</sub> <br />4) B->A: {N<sub>B</sub>}K<sub>AB</sub> <br />5) A->B: {N<sub>B</sub>-1}K<sub>AB</sub><br /> Vurdering: En funksjonelt sett ganske riktig algoritme - kun manglende et tidsmerke i melding nr. 3"
},

{
   "id":"226",
   "chapter":"Eksamen 2011",
   "question":"Forklar/definer kort følgende begreper: Arbitrære/bysantinske feil",
   "answer":"Systemmodeller: Det kan oppstå alle typer feil: meldinger forsvinner, ankommer flere ganger eller blir endret underveis. Den verste typen feilsemantikk.<br /><br /> Koordinering og enighet: Feilaktige prosesser kan sende vilkårlige meldinger med vilkårlige verdier til vilkårlig tid. De kan også unnlate å sende meldinger."
},

{
   "id":"227",
   "chapter":"Eksamen 2011",
   "question":"Forklar/definer kort følgende begreper: Maskering av feil",
   "answer":"Gjemmer bort enkelte typer feil for brukeren og/eller tjenester i høyere lag. Det er to måter å gjøre det på: Enten å gjemme feilen helt bort, eller å konvertere den til en mindre alvorlig feiltype (f.eks. kaste en melding med feil sjekksum for å konvertere en arbitrær feil til en unnlatelsesfeil)."
},

{
   "id":"228",
   "chapter":"Eksamen 2011",
   "question":"Forklar/definer kort følgende begreper: Marshalling",
   "answer":"Konvertering av data fra et lokalt format til et format for utveksling mellom prosesser. Må ta høyde for ting som byte order, tegnsett og parameterrekkefølge. Marshalling kan forutsette at strukturen er kjent på begge sider (f.eks. CORBA), eller sende med metadata som beskriver strukturen (f.eks. XML)."
},

{
   "id":"229",
   "chapter":"Eksamen 2011",
   "question":"Forklar/definer kort følgende begreper: Overlay network",
   "answer":"Et rutingnettverk implementert oppå et annet nettverk, typisk i applikasjonslaget. Ruter meldinger på andre måter enn IP-ruting, f.eks. ruting basert på objekt-ID i Pastry. Det finnes både strukturerte og ustrukturerte overlay networks."
},

{
   "id":"230",
   "chapter":"Eksamen 2011",
   "question":"Forklar/definer kort følgende begreper: Passiv replisering",
   "answer":"Også kalt primary-backup. Det er ett primærreplikat og ett eller flere backup-/slavereplikater. Primærreplikatet håndterer kommunikasjonen med front end og sender oppdateringer til slavene. Dersom det oppstår feil, forfremmes en av slavene til primær."
},

{
   "id":"231",
   "chapter":"Eksamen 2011",
   "question":"Forklar kort forskjellen på kallsemantikkene kanskje (maybe), minst én gang (at least once) og maksimalt én gang (at most once).",
   "answer":"Kanskje: Fjernkallet kan utføres eller ikke utføres. Vi får kanskje-semantikk når ingen systemer feiltoleranse er satt i verk. Tåler ikke unnlatelsesfeil (forespørsel eller svar kommer ikke frem) og krasj (tjeneren med objektet man gjør fjernkall til krasjer). <br /><br /> Minst én gang: Fjernkallet utføres minst én gang, og klienten får svar som garanterer at operasjonen er utført minst én gang eller unntak dersom det ikke kom svar. Kan oppnås ved å sende forespørsler om igjen dersom det ikke kommer svar (maskerer unnlatelsesfeil). Tåler ikke krasj og arbitrære feil. Idempotente operasjoner brukes for å kunne gjenta operasjoner uten uheldige konsekvenser. <br /><br /> Maksimalt én gang: Klienten får svar som garanterer at operasjonen er utført nøyaktig én gang eller unntak dersom svar ikke kommer. Kan oppnås ved å repetere forespørsel og cache svar på tjeneren."
},

{
   "id":"232",
   "chapter":"Eksamen 2011",
   "question":"Hva er idempotente operasjoner og hvorfor trenger vi dem?",
   "answer":"En idempotent operasjon er en operasjon som kan utføres gjentatte ganger og hver gang har samme resultat som om den ble utført bare én gang. Idempotente operasjoner brukes for å unngå feil når vi gjentar meldinger. F.eks. vil en operasjon som setter saldoen på en bankkonto til 10 kr kunne gjentas dersom tjeneren ikke svarer, mens en operasjon som trekker fra 1 kr vil kunne føre til at et større beløp trekkes fra kontoen dersom den gjentas."
},

{
   "id":"233",
   "chapter":"Eksamen 2011",
   "question":"I Network File System (NFS) brukes lookup til å slå opp filsystemstien (path name translation) steg for steg ved kall til open, creat og stat. Hvorfor er dette et problem og hva gjøres for å bøte på problemet?",
   "answer":"Det blir veldig mange lookup-forespørsler til tjeneren. Samlet er det mange kall til open, creat og stat, og når lookup slår opp stien iterativt for hvert av disse kallene, blir det en roundtrip for hver del av filsystemstien. Det blir både stor belastning og lang ventetid. <br /><br /> Klienten cacher lookup-resultater for å redusere antallet forespørsler. Dette fungerer fordi applikasjoner og brukere typisk aksesserer filer i et lite antall filkataloger (lokalitetsprinsippet holder)."
},

{
   "id":"234",
   "chapter":"Eksamen 2011",
   "question":"I Network File System (NFS) brukes lookup til å slå opp filsystemstien (path name translation) steg for steg ved kall til open, creat og stat. Hvordan påvirkes denne mekanismen av avstanden mellom klient og tjener (f.eks. i samme bygning eller på forskjellige kontinenter)?",
   "answer":"Hvert lookup-kall vil bruke lengre tid når avstanden øker siden nettverksforsinkelsen også øker. Spesielt vil dette merkes når det gjøres flere lookup-kall i sekvens for å slå opp en sti i flere deler. Det vil da bli en veldig merkbar forsinkelse. <br /><br /> Cachingen vil gi større ytelsesforbedring i et system hvor tjener og klient står langt fra hverandre."
},

{
   "id":"235",
   "chapter":"Eksamen 2011",
   "question":"Hvorfor er ikke lokal samtidighetskontroll (concurrency control) på hver deltaker tilstrekkelig til å garantere global serialiserbarhet?",
   "answer":"De lokale samtidighetskontrollene kan utføre operasjoner i forskjellig rekkefølge. Historien kan være serialiserbar lokalt, men på andre noder kan historien være stokket om med transaksjonene i en annen rekkefølge."
},

{
   "id":"236",
   "chapter":"Eksamen 2011",
   "question":"Hvordan oppstår distribuert vranglås?",
   "answer":"En transaksjon A venter på en annen transaksjon B på en node. På en annen node venter B på A, eller så kan det være flere ledd, slik at B venter på C som igjen venter på A. Siden dette skjer på forskjellige noder, kan det oppstå uten at det er sykluser i de lokale venter-på-grafene."
},

{
   "id":"237",
   "chapter":"Eksamen 2011",
   "question":"Hva er forskjellen på fysiske og logiske klokker?",
   "answer":"Fysiske klokker måler tid. Kan utlede rekkefølge ved å sammenligne tidspunkter. Logiske klokker brukes for å ordne hendelser i en rekkefølge. Kan for eksempel bare være en teller som økes med 1 hver gang noe skjer."
},

{
   "id":"238",
   "chapter":"Eksamen 2011",
   "question":"Anta et distribuert system med to prosesser p1 og p2. p1 har en lokal historie med tre hendelser e1, e2, e3 (i denne rekkefølgen) og p2 har en lokal historie med to hendelser f1 og f2 (i denne rekkefølgen). Anta videre at e1 er sending av en melding som mottas i f1 og at f2 er sending av en melding som mottas i e3. (e2 er en hendelse som bare endrer tilstanden i p1). Kan dette distribuerte systemet ha vært i en tilstand der e2 var sist skjedde hendelse i p1 samtidig som f1 var sist skjedde hendelse i p2? Evaluer både “possibly” og “definitely”.",
   "answer":"Bruker Sxy for global tilstand der sist skjedde hendelse i p1 er ex og sist skjedde hendelse i p2 er fy. Skal dermed finne ut om S21 er «possibly» eller «definitely». <br />Vi får disse mulige tilstandsovergangene: <br />S00 => S10 <br />S10 => S11 eller S10 => S20 <br />S11 => S21 eller S11 => S12 <br />S20 => S21 <br />S21 => S22 <br />S12 => S22 <br />S22 => S23 <br /> <br />«definitly» er ikke riktig siden vi kan gå S00 => S10 => S11 => S12 => S22 => S23 <br />«possibly» er riktig siden vi kan gå S00 => S10 => S20 => S21 => S22 => S23"
},

{
   "id":"239",
   "chapter":"Eksamen 2011",
   "question":"Anta at man skal bruke en sentral tjener for å sikre gjensidig utelukkelse (mutual exclusion). I hvilken grad kan denne algoritmen håndtere at en deltakende prosess krasjer?",
   "answer":"Håndterer ikke at tjeneren krasjer eller prosessen som har token krasjer. Algoritmen stopper hvis tjener ikke kan kontaktes eller hvis token forsvinner. Går greit hvis prosess uten token krasjer."
},

{
   "id":"240",
   "chapter":"Eksamen 2011",
   "question":"Hva er kausal rekkefølge (causal ordering) av multicast-meldinger? Beskriv kort hvordan det kan implementeres.",
   "answer":"Meldinger er ordnet basert på skjedde-før relasjonen. Dvs at hvis sending av en melding skjedde før sending av en annen melding skal den første meldingen leveres først til alle mottakere. Kan implementeres ved bruk av vektorklokker. Alle deltakere har sin egen vektorklokke som viser antall meldinger fra andre deltakere som har kunnet påvirke nåtilstand. Vektorklokkeverdier legges ved meldinger ved sending. Ved mottak av en melding legges den i en kø hvis mottatte vektorklokkeverdier viser at det er en eller flere meldinger som mangler (skjedde-før mottatt melding)."
},

{
   "id":"241",
   "chapter":"Eksamen 2012",
   "question":"Hva er fordelene ved et distribuert system i forhold til et sentralisert system?",
   "answer":"Distribuerte systemer muligjør deling av ressurser mellom flere brukere. Det gjør det også mulig å slå sammen ressurser som er delt i utgangspunktet eller ressurser som er for mye for en enkelt sentralisert maskin. Gjennom dette kan man oppnå større grad av skalerbarhet og tilgjengelighet. Distribuerte systemer gjør det også mulig med samhandling mellom deltakere (eks: lynmeldinger, videokonferanser)"
},

{
   "id":"242",
   "chapter":"Eksamen 2012",
   "question":"Heterogenitet er en typisk utfordring for distribuerte systemer. Beskriv kort hvordan heterogenitet kan håndteres.",
   "answer":"Man kan definere standarder for hvordan (del-)systemer skal oppføre seg og for hvilket grensesnitt de skal ha. Man kan introdusere mellomvare som utligner forskjeller mellom individuelle deltakere. Man kan bruke virtuelle maskiner som gjør det mulig å kjøre samme kode på flere plattformer."
},

{
   "id":"243",
   "chapter":"Eksamen 2012",
   "question":"Er det ønskelig å gjøre fjernkall helt transparente (dvs. helt likt lokale funksjons-/metodekall)? Diskuter fordeler og ulemper",
   "answer":"Det forsøkes som regel å gjøre syntaksen så lik som mulig mellom fjernkall og lokale kall, men helt transparent er det i praksis umulig å få til (det tar f.eks. alltid lenger tid å gjøre et fjernkall), og det er som regel heller ikke ønskelig, siden man ønsker utvidet feilhåndtering av fjernkall. I motsetning til lokale kall kan fjernkall feile, f.eks. hvis nettverksforbindelsen går ned eller hvis motparten krasjer. Derfor er det ikke alltid ønskelig å gjøre dem helt transparante, siden slik transparens vil hindre feildeteksjon og -håndtering.<br /><br /> Fordelene ved å gjøre fjernkall transparente, er at man ikke trenger å skille mellom fjernkall og lokale kall og at det derfor blir lettere å skrive og vedlikeholde koden, f.eks. ved at marshalling og unmarshalling gjøres automatisk. Det gjør også grensesnittet mer fleksibelt siden det ikke er nødvendig å endre koden hvis man senere velger å flytte på objekter eller funksjoner. Man slipper også å forholde seg til marshalling og unmarshalling og håndtering av nettverksfeil ved å sende meldinger på nytt.<br /><br /> Ulempene er at man gjemmer bort kompleksitet og semantiske forskjeller mellom fjernkall og lokale kall. Lokale kall har en nøyaktig-en-gang-semantikk, mens fjernkall kan ha flere andre semantikker (maybe, at-least-once, at-most-once). Dette vil ikke komme frem i et helt transparent grensesnitt. Det mye som kan gå galt i et fjernkall, og effektiv håndtering av feilsituasjoner er ikke mulig når kallene er transparente. F.eks. kan det være ønskelig å skille mellom at nettverket går ned og at motparten krasjer. <br /><br /> Gjeldende praksis er at man gjør syntaksen lik, og at forskjellene blir tydeliggjort i grensesnittet, f.eks. ved å deklarere at fjernkall kaster unntak ved feil."
},

{
   "id":"244",
   "chapter":"Eksamen 2012",
   "question":"Anta at vi har to klient-tjener-applikasjoner. Typisk bruksmønster for applikasjon A er at en klient kobler seg opp mot tjeneren, sender en forespørsel, får svar og kobler seg ned. For applikasjon B er det derimot mange forespørsler/svar for hver klient-oppkobling. Hvilken trådarkitektur ville du valgt for tjeneren for applikasjon A? Hva med applikasjon B? Begrunn svaret.",
   "answer":"A: En tråd per forespørsel og en tråd per forbindelse blir det samme i dette tilfellet. Det gir typisk mye overhead å starte en tråd per forespørsel. Kan derfor være fornuftig med en ”worker pool architecture” der forespørsler blir lagt i en felles kø som håndteres av et sett med alltid eksisterende tråder. B: En tråd per forbindelse gir god mening her ettersom mange forespørsler skal håndteres for en gitt forbindelse. Overhead i forbindelse med starting av tråder bør ikke bli et problem her ettersom samme tråd vil svare på mange forespørsler. Hvis man antar at klienten kan genererere ny forespørsel før svar på forrige, kan det gi mening med flere tråder per forbindelse og benytte samtidige kall (”concurrent invocations”). Gitt fornuftige antagelser utover det som er beskrevet i oppgaveteksten, kan tråd per objekt vurderes for både A og B."
},

{
   "id":"245",
   "chapter":"Eksamen 2012",
   "question":"Oppslag (”routing”) i et likemannsnettverk skjer som regel steg for steg. Hvorfor er dette nødvendig? Hvorfor kan ikke oppslag i steden alltid gjøres direkte fra avsender til mottaker? Begrunn svaret",
   "answer":"For at likemannsnettverket skal være skalerbart, kan ikke alle noder vite om alle andre noder. Dette gjelder spesielt ved høy churn. Konsekvensen er at direkte oppslag er umulig og at forespørsler må rutes steg for steg."
},

{
   "id":"246",
   "chapter":"Eksamen 2012",
   "question":"Alice og Bob har hver sine offentlige og private nøkler. Av disse fire nøklene, kjenner Alice tre – alle unntatt Bob sin private nøkkel. Gi eksempler på hva Alice kan bruke hver av disse tre nøklene til. (Ett eksempel per nøkkel er nok.)",
   "answer":"AlicePub: Kan gis til Bob slik at Bob kan bruke den til å kryptere meldinger til Alice siden bare AlicePriv kan dekryptere.<br /> AlicePriv: Kan brukes for å signere meldinger da kun AlicePub vil kunne dekryptere meldingen og dermed bevise at meldingen kom fra Alice.<br /> BobPub: Kan brukes til å sende krypterte meldinger til Bob da kun BobPriv vil kunne dekryptere meldingen."
},

{
   "id":"247",
   "chapter":"Eksamen 2012",
   "question":"Tenk at du skal lage en ny krypteringsalgoritme. Ville du holdt algoritmen (og implementasjonen) hemmelig eller ikke? Begrunn svaret.",
   "answer":"Hvis man gjør algoritmen og implementasjonen offentlig, vil flere kunne delta i å finne mulige feil og mangler. Det vil kunne gjøre algoritmen og implementasjonen sterkere og lettere å stole på. Det er nøklene som skal være hemmeligheten – ikke algoritmen."
},

{
   "id":"248",
   "chapter":"Eksamen 2012",
   "question":"Hvorfor egner Andrew File System (AFS) seg bedre enn Network File System (NFS) til å lagre hjemmekatalogene til ansatte ved et universitet? Vil de samme fordelene gjelde for en student som bruker forskjellige maskiner på forskjellige datasaler? Hvorfor/hvorfor ikke?",
   "answer":"En av de største forskjellene mellom AFS og NFS er at AFS har en persistent (dvs. overlever reboot) cache av hele filer på lokal disk, mens NFS bare cacher diskblokker i RAM. En ansatt som nesten utelukkende bruker sin egen kontor-PC vil derfor oppleve at de fleste filene allerede er cachet på lokal disk når han skal bruke dem. Ved bruk må klienten spørre tjenren om det har kommet nye versjoner av filen, og kun i veldig få tilfeller der den ansatte eller andre har endret en fil i hjemmekatalogen fra et annet sted vil det være nødvendig å lese nye data fra tjeneren.<br /><br /> En student som flytter mellom maskiner vil normalt ikke oppleve den samme effekten. Filer blir oppdatert på forskjellige maskiner, så mye av effekten ved å bygge opp en lokal cache med arbeidssettet vil forsvinne. Det betyr ikke at fordlene forsvinner helt, men de blir redusert. Hvis studenten har en fast maskin på hver datasal og det ikke er alt for mange andre brukere som spiser av cachekapasiteten, vil det imidlertid være mulig å bygge opp et rimelig arbeidssett på hver av dem og bare oppdatere endringene når det blir nødvendig. Det kan også være en fordel å bruke AFS selv om cachen må bygges opp for hver sesjon, f.eks. hvis studenten gjør operasjoner som bruker filene mye. Filene vil da ligge lokalt i stedet for å hentes over nett (hvis blokkcachen i NFS ikke er stor nok til å holde alt)"
},

{
   "id":"249",
   "chapter":"Eksamen 2012",
   "question":"Anta et distribuert system med to prosesser p1 og p2. Prosess p1 har en lokal historie med fire hendelser e1-e4 og p2 har en lokal historie med tre hendelser f1-f3. Prosess p1 har en lokal variabel v1 og p2 har en lokal variabel v2. Begge variablene har verdien 0 i utgangspunktet. Detaljer om hendelsene er gitt under: <img src='img/2012_oppg7.png' /> Har summen av v1 og v2 noen gang vært 10? Begrunn svaret",
   "answer":"Bruker Sxy for global tilstand der sist skjedde hendelse i p1 er ex og sist skjedde hendelse i p2 er fy. Vi får disse mulige tilstandsovergangene: <br />S00 => S10 <br />S10 => S20 eller S10 => S11 <br />S20 => S30 eller S20 => S21 <br />S11 => S21 <br />S30 => S31 <br />S21 => S31 eller S22 <br />Osv. I både S21 og S31 er summen lik 10. Siden vi ikke kan unngå å gå innom enten S21 eller S31, vet vi ”definitly” at summen har vært 10 (ikke bare ”possibly”)"
},

{
   "id":"250",
   "chapter":"Eksamen 2012",
   "question":"Forklar ved hjelp av et eksempel hvordan multicast-meldinger kan være FIFO-ordnet uten å samtidig være kausalt ordnet.",
   "answer":"FIFO ordner bare meldinger sendt fra samme avsender. Anta at node A sender to meldinger. Disse to meldingene blir levert i samme rekkefølge hos nodene A, B og C. Vi har dermed FIFO-ordning. Men anta at C sender en melding etter å ha fått levert A sin første melding (denne meldingen er dermed kausalt avhengig av As første melding). Anta at denne meldingen blir levert hos node B før As første melding. Vi har da ikke kausal ordning (men fremdeles FIFO-ordning)."
},

{
   "id":"251",
   "chapter":"Eksamen 2012",
   "question":"Hvilket problem bruker man 2PC for å løse? Hvorfor må deltakerene logge (til disk) beslutninger som tas før meldinger sendes?",
   "answer":"To-fase-commit brukes for å koordinere deltakere i distribuerte transaksjoner. Det sikrer at alle deltakere er enige om commit/abort og at en transaksjon ikke introduserer inkonsistens ved at den kun har effekt hos noen av deltakerene. Logging til disk før meldingssendelse gjøres for å forhindre at deltakere kan ombestemme seg etter krasj. Hvis melding sendes før logging og en node krasjer etter at den har sendt en melding men før den har logget meldingen, kan den ombestemme seg når den restarter fordi den ikke har noen anelse om beslutningen den tok (og informerte andre om) før den krasjet."
},

{
   "id":"252",
   "chapter":"Eksamen 2012",
   "question":"Både Google File System (GFS) og Bigtable bruker sentraliserte mastere, men skalerer likevel godt. Hvorfor fungerer dette? Hvilke fordeler er det ved å gjøre systemene avhengige av en sentralisert master?",
   "answer":"Det fungerer fordi trafikken mellom klient og master er redusert til et minimum, slik at det aller meste av trafikken kan gjøres direkte mellom klient og slaver uten å involvere masteren. I GFS og Bigtable gjøres dette ved at masterene bare håndterer metadata og administrative oppgaver, mens all lesing og skriving av data går direkte mot slavene.<br /><br /> Fordlene med sentralisert master er at det reduserer behovet for koordinering og distribuert enighet. Når det bare er én master, er denne den autorative kilden for alle, og den trenger ikke bli enig med andre for å kunne svare på forespørsler. Dette gjør f.eks. at masteren har overblikk og kan gjøre lastbalansering både av CPU-last og datalagring.<br /><br /> Sentralisert master gir også en mye enklere arkitektur, noe som øker utviklernes og brukernes forståelse og reduserer mulighetene for feil. Klare skiller i arkitekturen gjør også systemet mer fleksibelt og utvidbart. F.eks. har Google pga. stor last utvidet til multi-master uten å endre den overordnede arkitekturen."
},

];