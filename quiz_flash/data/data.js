var chapters = ["3: Security Architecture and Engineering"]

var questions = [
{
   "id":"0",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What is the Common Criteria?",
   "answer":"The Common Criteria was created in the early 1990s as a way of combining the strengths of both the Trusted Computer System Evaluation Criteria (TCSEC) and Information Technology Security Evaluation Criteria (ITSEC) while eliminating their weaknesses. The Common Criteria is more flexible than TCSEC and more straightforward than ITSEC. Because it is recognized globally, the Common Criteria helps consumers by reducing the complexity of the ratings and eliminating the need to understand the definition and meaning of different ratings within various evaluation schemes. This also helps manufacturers because now they can build to one specific set of requirements if they want to sell their products internationally instead of having to meet several different ratings with varying rules and requirements."
},

{
   "id":"1",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What is the relationship between the reference monitor and the security kernel?",
   "answer":"The trusted computing base <b>TCB</b> is the total combination of a system’s protection mechanisms. These are in the form of hardware, software, and firmware. These same components also comprise the security kernel. The reference monitor is an access control concept that is implemented and enforced by the security kernel via the hardware, software, and firmware. In doing so, the security kernel ensures that subjects have the appropriate authorization to access the objects they are requesting. The subject, be it a program, user, or process, should not be able to access a file, program, or resource it is requesting until it has proven that it has the appropriate access rights."
},

{
   "id":"2",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What's up with cooperative and preemptive multitasking?",
   "answer":"Operating systems started out as cooperative and then evolved into preemptive multitasking. With preemptive multitasking, used in Windows 9x and later versions and in Unix systems, the operating system controls how long a process can use a resource. The system can suspend a process that is using the CPU (or other system resources) and allow another process access to it through the use of time sharing. Thus, operating systems that use preemptive multitasking run the show, and one application does not negatively affect another application if it behaves badly. In operating systems that used cooperative multitasking, the processes had too much control over resource release, and when an application hung, it usually affected all the other applications and sometimes the operating system itself."
},

{
   "id":"3",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What be the Clark-Wilson model?",
   "answer":"In the Clark-Wilson model, a subject cannot access an object without going through some type of application or program that controls how this access can take place. The subject (usually a user) is bound to the application and then is allowed access to the necessary objects based on the access rules within the application software that are defined as <i>well-formed transactions</i>"
},

{
   "id":"4",
   "chapter":"3: Security Architecture and Engineering",
   "question":"Bell-Lapadula and Biba models?",
   "answer":"The Bell-LaPadula model includes the simple security rule, which is no read up, and the star property rule, which is no write down. <br> The Biba model includes the simple integrity axiom, which is no read down, and the star-integrity axiom, which is no write up."
},

{
   "id":"5",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What is a side-channel attack?",
   "answer":"A side-channel attack is a nonintrusive attack. In this type of attack, the attacker gathers information about how a mechanism (such as a smart card or encryption processor) works from the radiation that is given off, time taken to carry out processing, power consumed to carry out tasks, etc. This information is used to reverse-engineer the mechanism to uncover how it carries out its security tasks. This is not related to virtual storage."
},

{
   "id":"6",
   "chapter":"3: Security Architecture and Engineering",
   "question":"The Brewer and Nash model is..?",
   "answer":"The Chinese Wall model is another name for the Brewer and Nash model, which was created to provide access controls that can change dynamically, depending upon a user’s previous actions, in an effort to protect against conflicts of interest by users’ access attempts. No information can flow between subjects and objects in a way that would result in a conflict of interest. The model states that a subject can write to an object if, and only if, the subject cannot read another object that is in a different dataset."
},

{
   "id":"7",
   "chapter":"3: Security Architecture and Engineering",
   "question":"I forgot the difference between the Red Book and Orange Book. Help!",
   "answer":"The Orange Book is a U.S. government publication that primarily addresses government and military requirements and expectations for operating systems. The Orange Book is used to evaluate whether a product contains the security properties the vendor claims it does and whether the product is appropriate for a specific application or function. The Orange Book is used to review the functionality, effectiveness, and assurance of a product during its evaluation, and it uses classes that were devised to address typical patterns of security requirements. It provides a broad framework for building and evaluating trusted systems with great emphasis on controlling which users can access a system. The other name for the Orange Book is the Trusted Computer System Evaluation Criteria <b>(TCSEC)</b>. <br> The Red Book is a U.S. government publication that addresses security evaluation topics for networks and network components. Officially titled the Trusted Network Interpretation, the book provides a framework for securing different types of networks. Subjects accessing objects on the network need to be controlled, monitored, and audited."
},

{
   "id":"8",
   "chapter":"3: Security Architecture and Engineering",
   "question":"Security concerns pertaining to <i>virtual storage</i>?",
   "answer":"A security issue with using virtual swap space is that two or more processes use the same resource and the data could be corrupted or compromised."
},

{
   "id":"9",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What is execution domain switching? Also, what does TCB stand for?",
   "answer":"Execution domain switching takes place when a CPU needs to move between executing instructions for a highly trusted process to a less trusted process or vice versa. The trusted computing base (TCB) allows processes to switch domains in a secure manner in order to access different levels of information based on their sensitivity. Execution domain switching takes place when a process needs to call upon a process in a higher protection ring. The CPU goes from executing instructions in user mode to privileged mode and back."
},

{
   "id":"10",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What is process deactivation?",
   "answer":"Process deactivation takes place when a process’s instructions are completely executed by the CPU or when another process with a higher priority calls upon the CPU. When a process is deactivated, the CPU’s registers must be filled with new information about the new requesting process. The data that is getting switched in and out of the registers may be sensitive, so the TCB components must make sure this takes place securely."
},

{
   "id":"11",
   "chapter":"3: Security Architecture and Engineering",
   "question":"When does memory mapping occur?",
   "answer":"Memory mapping takes place when a process needs its instructions and data processed by the CPU. The memory manager maps the logical address to the physical address so that the CPU knows where the data is located. This is the responsibility of the operating system’s memory manager."
},

{
   "id":"12",
   "chapter":"3: Security Architecture and Engineering",
   "question":"Hi there. Does virtualization simplify OS patching?",
   "answer":"Is the Graham-Denning model a recipe for a dessert?"
},

{
   "id":"13",
   "chapter":"3: Security Architecture and Engineering",
   "question":"Maybe, but for InfoSec- The Graham-Denning model addresses how access rights between subjects and objects are defined, developed, and integrated. It defines a set of basic rights in terms of commands that a specific subject can execute on an object. This model has eight primitive protection rights, or rules, on how these types of functionalities should take place securely. They are as follows: how to securely create an object; how to securely create a subject; how to securely delete an object; how to securely delete a subject; how to securely provide the read access right; how to securely provide the grant access right; how to securely provide the delete access right; and how to securely provide transfer access rights. These things may sound insignificant, but when we are talking about building a secure system, they are very critical.",
   "answer":"Is <b>encapsulation of objects</b> a super cool method in which an interface defines how communication can take place between two processes and no process can interact with the other’s internal programming code?"
},

{
   "id":"14",
   "chapter":"3: Security Architecture and Engineering",
   "question":" When a process is properly encapsulated, no other process understands or interacts with its internal programming code. Two processes must only interact through an interface. <br>An interface defines how communication must take place.  The interfaces dictate the type of requests that a process will accept and the type of output that will be provided. So, two processes can communicate with each other, even if they are written in different programming languages, as long as they know how to communicate with each other’s interface. Encapsulation provides data hiding, which means that outside software components will not know how a process works and will not be able to manipulate the process’s internal code. This is an integrity mechanism and enforces modularity in programming code.",
   "answer":"Ingen forklaring gitt"
},

{
   "id":"15",
   "chapter":"3: Security Architecture and Engineering",
   "question":"Is time multiplexing a type of fruit?",
   "answer":"No it is not. Time multiplexing is a technology that allows processes to use the same resources through an interleaved method. A CPU has to be shared among many processes. Although it seems as though all applications are executing their instructions simultaneously, the operating system is splitting up time shares between each process. Multiplexing means that there are several data sources and the individual data pieces are piped into one communication channel. In this instance, the operating system is coordinating the different requests from the different processes and piping them through the one shared CPU. An operating system has to provide proper time multiplexing (resource sharing) to ensure that a stable working environment exists for software and users."
},

{
   "id":"16",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What's PID? Does it have to do with naming distinctions?",
   "answer":"Processes are usually assigned process identification, <i>PID</i> values, which the operating system and other processes use to call upon them. If each process is isolated, that means that each process has its own unique PID value."
},

{
   "id":"17",
   "chapter":"3: Security Architecture and Engineering",
   "question":"Are garbage collectors involved with the mafia?",
   "answer":"Don't be silly. A garbage collector is a countermeasure against memory leaks. It is software that runs an algorithm to identify unused committed memory and then tells the operating system to mark that memory as available. Different types of garbage collectors work with different operating systems, programming languages, and algorithms."
},

{
   "id":"18",
   "chapter":"3: Security Architecture and Engineering",
   "question":"What was the thing called that keeps track of different types of memory?",
   "answer":"The portion of the operating system that keeps track of how different types of memory are used is called the <b>memory manager</b>. Its jobs are to allocate and deallocate different memory segments, enforce access control to ensure that processes are interacting only with their own memory segments, and swap memory contents from RAM to the hard drive."
},

{
   "id":"19",
   "chapter":"3: Security Architecture and Engineering",
   "question":"The memory manager has five basic responsibilities: <b>relocation, protection, sharing, local organization, and physical organization</b>. Tell me a 'lil about relocation.",
   "answer":"Swapping contents from RAM to the hard drive as needed is a responsibility of the memory manager that falls under the relocation category. When RAM and secondary storage are combined, the result is virtual memory. The system uses hard drive space to extend its RAM memory space. Another relocation responsibility is to provide pointers for applications if their instructions and memory segment have been moved to different location in main memory"
},

{
   "id":"20",
   "chapter":"3: Security Architecture and Engineering",
   "question":"Does the <b>memory manager</b> use complex controls to ensure integrity and confidentiality when processes need to use the same shared memory segments?",
   "answer":"Don't be coy. We both know the memory manager uses complex controls to ensure integrity and confidentiality when processes need to use the same shared memory segments. This is critical to protecting memory and the data in it, since two or more processes can share access to the same segment with potentially different access rights. The memory manager is also responsible for allowing many users with different levels of access to interact with the same application running in one memory segment."
},

];
