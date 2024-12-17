# <small>Chapter 6</small><br> Logic

## 6.1. Introduction

In Chapter 2 we have introduced some basic concepts of logic, but the treatment was quite informal. In this chapter we discuss the foundations of logic in a mathematically rigorous manner. In particular, we clearly distinguish between the syntax and the semantics of a logic and between syntactic derivations of formulas and logical consequences they imply. We also introduce the concept of a logical calculus and define soundness and completeness of a calculus. Moreover, we discuss in detail a concrete calculus for propositional logic, the so-called resolution calculus.

At a very general level, the goal of logic is to provide a framework for expressing mathematical statements and for expressing and verifying proofs for such statements. A more ambitious, secondary goal can be to provide tools for *automatically* or semi-automatically generating a proof for a given statement.

A treatment of logic usually begins with a chapter on propositional logic[^1] [(see Section 6.5)](#_6-5-propositional-logic), followed by a chapter on predicate (or first-order) logic[^2] [(see Section 6.6)](#_6-6-predicate-logic-first-order-logic), which can be seen as an extension of propositional logic. There are several other logics which are useful in Computer Science and in mathematics, including temporal logic, modal logic, intuitionistic logic, and logics for reasoning about knowledge and about uncertainty. Most if not all relevant logics contain the logical operators from propositional logic, i.e., $\land$, $\lor$, $¬$ (and the derived operators $→$ and $↔$), as well as the quantifiers ($∀$ and $∃$) from predicate logic.

[^1]:German: Aussagenlogik

[^2]:German: Prädikatenlogik

Our goal is to present the general concepts that apply to all types of logics in a unified manner, and then to discuss the specific instantiations of these concepts for each logic individually. Therefore we begin with such a general treatment (see Sections 6.2, 6.3, and 6.4) before discussing propositional and predicate logic. From a didactic viewpoint, however, it will be useful to switch back and forth between the generic concepts of Sections 6.2, 6.3, and 6.4 and the concrete instantiations of Sections 6.5 and 6.6.

We give a general warning: Different treatments of logic often use slightly or sometimes substantially different notation.[^3] Even at the conceptual level there are significant differences. One needs to be prepared to adopt a particular notation used in a particular application context. However, the general principles explained here are essentially standard.

We also refer to the book by Kreuzer and Kühling and that by Schönisng mentioned in the preface of these lecture notes.

## 6.2. Proof Systems

### 6.2.1. Definition

In a formal treatment of mathematics, all objects of study must be described in a well-defined syntax. Typically, syntactic objects are finite strings over some alphabet $Σ$, for example the symbols allowed by the syntax of a logic or simply the alphabet $\{0, 1\}$, in which case syntactic objects are bit-strings. Recall that $Σ^∗$ denotes the set of finite strings of symbols from $Σ$.

In this section, the two types of mathematical objects we study are:
- **mathematical statements** of a certain type and
- **proofs** for this type of statements.

By a statement type we mean for example the class of statements of the form that a given number $n$ is prime, or the class of statements of the form that a given graph $G$ has a Hamiltonian cycle (see below), or the class of statements of the form that a given formula $F$ in propositional logic is satisfiable.

Consider a fixed type of statements. Let $\mathcal{S} ⊆ Σ^∗$ be the set of (syntactic representations of) mathematical statements of this type, and let $\mathcal{P} ⊆ Σ^∗$ be the set of (syntactic representations of) proof strings.[^4]

[^3]:For example, in some treatments the symbol $\implies$ is used for $→$, which can be confusing.

[^4]:Membership in $\mathcal{S}$ and also in $\mathcal{P}$ is assumed to be efficiently checkable (for some notion of efficiency).

Every statement $s ∈ \mathcal{S}$ is either true or false. The **truth function**

$$\tau:\,\mathcal{S}\to\{0,1\}$$

assigns to each $s ∈ \mathcal{S}$ its truth value $τ(s)$. This function $τ$ defines the meaning, called the *semantics*, of objects in $\mathcal{S}$. [^5]

An element $p ∈ \mathcal{P}$ is either a (valid) proof for a statement $s ∈ \mathcal{S}$, or it is not. This can be defined via a **verification function**

<center>

$\phi : \mathcal{S} × \mathcal{P} → \{0, 1\}$,

</center>

where $\phi(s, p) = 1$ means that $p$ is a valid proof for statement $s$.

Without strong loss of generality we can in this section consider

<center>

$\mathcal{S} = \mathcal{P} = \{0, 1\}^∗$,

</center>

with the understanding that any string in $\{0, 1\}^∗$ can be interpreted as a statement by defining syntactically wrong statements as being false statements.

::: info Definition 6.1.{#definition-6-1}
A **proof system**[^6] is a quadruple $Π = (\mathcal{S},\mathcal{P}, τ, \phi)$, as above.
:::

We now discuss the two fundamental requirements for proof systems.

::: info Definition 6.2.{#definition-6-2}
A proof system $Π = (\mathcal{S},\mathcal{P}, τ, \phi)$ is **sound**[^7] if no false statement has a proof, i.e., if for all $s ∈ \mathcal{S}$ for which there exists $p ∈ \mathcal{P}$ with $\phi(s, p) = 1$, we have $τ(s) = 1$.
:::

:::info Definition 6.3.{#definition-6-3}
A proof system $Π = (\mathcal{S},\mathcal{P}, τ, \phi)$ is **complete**[^8] if every true statement has a proof, i.e., if for all $s ∈ \mathcal{S}$ with $τ(s) = 1$, there exists $p ∈ \mathcal{P}$ with $\phi(s, p) = 1$.
:::

In addition to soundness and completeness, one requires that the function $\phi$ be *efficiently computable* (for some notion of efficiency).[^9] We will not make this formal, but it is obvious that a proof system is useless if proof verification is computationally infeasible. Since the verification has to generally examine the entire proof, the length of the proof cannot be infeasibly long.[^10]

[^5]: In the context of logic discussed from the next section onwards, the term semantics is used in a specific restricted manner that is compatible with its use here.

[^6]:The term proof system is also used in different ways in the mathematical literature.

[^7]:German: korrekt

[^8]:German: vollständig

[^9]:The usual efficiency notion in Computer Science is so-called *polynomial-time computable* which we do not discuss further.

[^10]:An interesting notion introduced in 1998 by Arora et al. is that of a *probabilistically checkable proof (PCP)*. The idea is that the proof can be very long (i.e., exponentially long), but that the verification only examines a very small random selection of the bits of the proof and nevertheless can decide correctness, except with very small error probability.

### 6.2.2. Examples

::: tip Example 6.1.
An undirected *graph* consists of a set V of nodes and a set E of edges between nodes. Suppose that $V = \{0,$ … $, n − 1\}$. A graph can then be described by the so-called *adjacency matrix*, an $n×n$-matrix $M$ with $\{0, 1\}$-entries, where $M_{i,j} = 1$ if and only if there is an edge between nodes $i$ and $j$. A graph with $n$ nodes can hence be represented by a bit-string of length $n^2$ , by reading out the entries of the matrix row by row.

We are now interested in proving that a given graph has a so-called *Hamiltonian cycle*, i.e., that there is a closed path from $node~1$ back to $node~1$, following edges between nodes, and visiting every node exactly once. We are also interested in the problem of proving the negation of this statement, i.e., that a given graph has no Hamiltonian cycle. Deciding whether a given graph has a Hamiltonian cycle or not is considered a computationally very hard decision problem (for large graphs).[^11]

To prove that a graph has a Hamiltonian cycle, one can simply provide the sequence of nodes visited by the cycle. A value in $V = \{0,$ … $, n − 1\}$ can be represented by a bit-string of length $⌈log_2~n⌉$, and a sequence of $n$ such numbers can hence be represented by a bit-string of length $n⌈log_2~n⌉$. We can hence define $\mathcal{S} = \mathcal{P} = \{0, 1\}^∗$.

Now we can let $τ$ be the function defined by $τ(s) = 1$ if and only if $|s| = n^2$ for some $n$ and the $n^2$ bits of s encode the adjacency matrix of a graph containing a Hamiltonian cycle. If $|s|$ is not a square or if s encodes a graph without a Hamiltonian cycle, then $τ(s) = 0$. [^12] Moreover, we can let $\phi$ be the function defined by $\phi(s, p) = 1$ if and only if, when $s$ is interpreted as an $n × n$-matrix $M$ and when $p$ is interpreted as a sequence of $n$ different numbers $(a_1,…, a_n)$ with $a_i ∈ \{0,…, n − 1\}$ (each encoded by a bit-string of length $⌈log_2~n⌉$), then the following is true:

$$M_{a_{i},a_{i+1}}=1$$

for $i = 1,…, n − 1$ and

<center>

$M_{a_n,a_1}=1$.

</center>

This function $\phi$ is efficiently computable. The proof system is sound because a graph without Hamiltonian cycle has no proof, and it is complete because every graph with a Hamiltonian cycle has a proof. Note that each $s$ with $τ(s) = 1$ has at least $n$ different proofs because the starting point in the cycle is arbitrary.
:::

[^11]:The best known algorithm has running time exponential in n. The problem is actually NP-complete, a concept that will be discussed in a later course on theoretical Computer Science.

[^12]:Note that $τ$ defines the meaning of the strings in $S$, namely that they are meant to encode graphs and that we are interested in whether a given graph has a Hamiltonian cycle.

::: tip Example 6.2.
Let us now consider the opposite problem of proving the inexistence of a Hamiltonian cycle in a given graph. In other words, in the above example we define $τ(s) = 1$ if and only if $|s| = n^2$ for some $n$ and the $n^2$ bits

of s encode the adjacency matrix of a graph not containing Hamiltonian cycle. In this case, no sound and complete proof system (with reasonably short and efficiently verifiable proofs) is known. It is believed that no such proof system exists.
:::

::: tip Example 6.3.{#example-6-3}
Let again $\mathcal{S} = \mathcal{P} = \{0, 1\}^∗$ , and for $s ∈ \{0, 1\}^∗$ let $n(s)$ denote the natural number whose (standard) binary representation is $s$, with the convention that leading $0$'s are ignored. (For example, $n(101011) = 43$ and $n(00101) = 5$.) Now, let $τ$ be the function defined as follows: $τ(s) = 1$ if and only if $n(s)$ is not a prime number. Moreover, let $\phi$ be the function defined by $\phi(s, p) = 1$ if and only if $n(s) = 0$, or if $n(s) = 1$, or if $n(p)$ divides $n(s)$ and $1 < n(p) < n(s)$. This function $\phi$ is efficiently computable. This is a proof system for the non-primality (i.e., compositeness) of natural numbers. It is sound because every $s$ corresponding to a prime number $n(s)$ has no proof since $n(s) ≠ 0$ and $n(s) ≠ 1$ and $n(s)$ has no divisor $d$ satisfying $1 < d < n(s)$. The proof system is complete because every natural number $n$ greater than $1$ is either prime or has a prime factor $q$ satisfying $1 < q < n$ (whose binary representation can serve as a proof).
:::

::: tip Example 6.4.{#example-6-4}
Let us consider the opposite problem, i.e., proving primality of a number $n(s)$ represented by $s$. In other words, in the previous example we replace "not a prime" by "a prime". It is far from clear how one can define a verification function $\phi$ such that the proof system is sound and complete. However, such an efficiently computable function $\phi$ indeed exists. Very briefly, the proof that a number $n(s)$ (henceforth we simply write $n$) is prime consists of (adequate representations of):

1. the list $p_1, … , p_k$ of distinct prime factors of $n − 1$, 
2. a (recursive) proof of primality for each of $p_1, . . . , p_k$ [^13] 
3. a generator $g$ of the group $Z^∗_n$ .

The exact representation of these three parts of the proof would have to be made precise, but we omit this here as it is obvious how this could be done.

The verification of a proof (i.e., the computation of the function $\phi$) works as follows.

- If $n = 2$ or $n = 3$, then the verification stops and returns 1. [^14]
- It is tested whether $p_1, … , p_k$ all divide $n − 1$ and whether $n − 1$ can be written as a product of powers of $p_1, … , p_k$ (i.e., whether $n − 1$ contains no other prime factor).

[^13]:recursive means that the same principle is applied to prove the primality of every $p_i$, and again for every prime factor of $p_i − 1$, etc.

[^14]:One could also consider a longer list of small primes for which no recursive primality proof is required.

- It is verified that

  $$g^{n-1}\equiv_{n}1$$

  and, for all $i ∈ \{1, . . . , k\}$, that

  $$g^{(n-1)/p_{i}}\not\equiv_{n}1.$$

  (This means that $g$ has order $n − 1$ in $Z^∗_n$ ).

- For every $p_i$, an analogous proof of its primality is verified (recursively).

This proof system for primality is sound because if $n$ is not a prime, then there is no element of $Z^∗_n$ of order $n − 1$ since the order of any element is at most $\phi(n)$, which is smaller than $n − 1$. The proof system is complete because if $n$ is prime, then $GF(n)$ is a finite field and the multiplicative group of any finite field, i.e., $Z^∗_n$, is cyclic and has a generator $g$. (We did not prove this statement in this course.)[^15]
:::

### 6.2.3. Discussion

The examples demonstrate the following important points:

- While proof verification must be efficient (in some sense not defined here), **proof generation** is generally not (or at least not known to be) efficient. For example, finding a proof for the Hamiltonian cycle example requires to find such a cycle, a problem that, as mentioned, is believed to be very hard. Similarly, finding a primality proof as discussed would require the factorization of $n − 1$, and the factoring problem is believed to be hard. In general, finding a proof (if it exists) is a process requiring insight and ingenuity, and it cannot be efficiently automated.
- A proof system is always restricted to a certain type of mathematical statement. For example, the proof system of [Example 6.1](#example-6-1) is very limited in the sense that it only allows to prove statements of the form "graph $G$ has a Hamiltonian cycle".
- Proof verification can in principle proceed in very different ways. The proof verification method of logic, based on checking a sequence of rule applications, is (only) a special case.
- Asymmetry of statements and their negation: Even if a proof system exists for a certain type of statements, it is quite possible that for the negation of the statements, no proof system (with efficient verification) exists.

[^15]:Actually, a quite efficient deterministic primality test was recently discovered by Agrawal et al., and this means that primality can be checked without a proof. In other words, there exists a trivial proof system for primality with empty proofs. However, this fact is mathematically considerably more involved than the arguments presented here for the soundness and completeness of the proof system for primality.

### 6.2.4. Proof Systems in Theoretical Computer Science

The concept of a proof system appears in a more concrete form in theoretical computer science (TCS), as follows. Statements and proofs are bit-strings, i.e., $\mathcal{S} = \mathcal{P} = \{0, 1\}^∗$ . The predicate $τ$ defines the set $L ⊆ \{0, 1\}^∗$ of strings that correspond to true statements:

$L = \{s~|~τ (s) = 1\}$.

Conversely, every subset $L ⊆ \{0, 1\}^∗$ defines a predicate $τ$. In TCS, such a set $L$ of strings is called a *formal language*, and one considers the problem of proving that a given string $s$ is in the language, i.e., $s ∈ L$. A proof for $s ∈ L$ is called a *witness* of $s$, often denoted as $w$, and the verification function $\phi(s, w)$ defines whether a string $w$ is a witness for $s ∈ L$.

One then considers the special case where the length of $w$ is bounded by a polynomial of the length of $s$ and where the function $\phi$ must be computable in polynomial time, i.e., by a program with worst-case running time polynomial in the length of $s$. Then, the important class $\mathsf{NP}$ of languages is the set of languages for which such a polynomialtime computable verification function exists.

As mentioned in a footnote, a type of proof system of special interest are so-called *probabilistically checkable proofs (PCP)*.

An important extension of the concept of proof systems are so-called *interactive proofs*.[^16] In such a system, the proof is not a bit-string, but it consists of an interaction (a protocol) between the prover and the verifier, where one tolerates an immensely small (e.g. exponentially small) probability that a verifier accepts a "proof" for a false statement. The reason for considering such interactive proofs are:

- Such interactive proofs can exist for statements for which a classical (noninteractive) proof does not exist. For example, there exists an interactive proof system for the *non-Hamiltonicity* of graphs.
- Such interactive proofs can have a special property, called *zero-knowledge*, which means that the verifier learns absolutely nothing (in a well-defined sense) during the protocol, except that the statement is true. In particular, the verifier cannot prove the statement to somebody else.
- Zero-knowledge proofs (especially non-interactive versions, so-called NIZK's) are of crucial importance in a large number of applications, for example in sophisticated blockchain systems.

## 6.3. Elementary General Concepts in Logic

The purpose of this section is to introduce the most basic concepts in logic in a general manner, not specific to a particular logic. However, this section is best appreciated by considering concrete examples of logics, in particular propositional logic and predicate logic. Without discussing such examples in parallel to introducing the concepts, this section will be hard to appreciate. We will discuss the general concepts and the concrete examples in parallel, going back and forth between Section 6.3 and Sections 6.5 and 6.6.

[^16]:This topic is discussed in detail in the Master-level course *Cryptographic Protocols* taught by Martin Hirt and Ueli Maurer.

### 6.3.1. The General Goal of Logic

A goal of logic is to provide a specific proof system $Π = (\mathcal{S},\mathcal{P}, τ, \phi)$ for which a very large class of mathematical statements can be expressed as an element of $\mathcal{S}$.

However, such a proof system $Π = (\mathcal{S},\mathcal{P}, τ, \phi)$ can never capture all possible mathematical statements. For example, it usually does not allow to capture (self-referential) statements about $Π$, such as "$Π$ is complete", as an element of $\mathcal{S}$. The use of common language is therefore unavoidable in mathematics and logic ([see also Section 6.7.](#_6-7-beyond-predicate-logic)).

In logic, an element $s ∈ \mathcal{S}$ consists of one or more formulas (e.g. a formula, or a set of formulas, or a set of formulas and a formula), and a proof consists of applying a certain sequence of syntactic steps, called a *derivation* or a *deduction*. Each step consists of applying one of a set of allowed syntactic rules, and the set of allowed rules is called a *calculus*. A rule generally has some place-holders that must be instantiated by concrete values.

In standard treatments of logic, the syntax of $\mathcal{S}$ and the semantics (the function $τ$) are carefully defined. In contrast, the function $\phi$, which consists of verifying the correctness of each rule application step, is not completely explicitly defined. One only defines rules, but for example one generally does not define a syntax for expressing how the place-holders of the rules are instantiated.[^17]

### **6.3.2 Syntax**

A *logic* is defined by the *syntax* and the *semantics*. The basic concept in any logic is that of a *formula*[^18] .

::: info Definition 6.4.{#definition-6-4}
The **syntax** of a logic defines an alphabet $\Lambda$ (of allowed symbols) and specifies which strings in $\Lambda^*$ are formulas (i.e., are syntactically correct).
:::

The semantics (see below) defines under which "conditions" a formula is *true* (denoted as $1$) or *false* (denoted as 0).[^19] What we mean by "conditions" needs to be made more precise and requires a few definitions.

Some of the symbols in $\Lambda$ (e.g. the symbols A and B in propositional logic or the symbols $P$ and $Q$ in predicate logic) are understood as variables, each of which can take on a value in a certain domain associated to the symbol.

[^17]:In a fully computerized system, this must of course be (and indeed is) defined.

[^18]:German: Formel

[^19]:There are logics (not considered here) with more than two truth values, for example a logic with confidence or belief values indicating the degree of confidence in the truth of a statement.

### 6.3.3. Semantics

::: info Definition 6.5.{#definition-6-5}
The **semantics** of a logic defines (among other things, see below) a function free which assigns to each formula $F = (f_1, f_2, … , f_k) ∈ \Lambda^∗$ a subset $free(F) ⊆ \{1, … , k\}$ of the indices. If $i ∈ free(F)$, then the symbol f_i is said to occur *free* in F. [^20]
:::

The same symbol $β ∈ Λ$ can occur free in one place of $F$ (say $f_3 = β$ where $3 ∈ free(F)$) and not free in another place (say $f_5 = β$ where $5 \not∈ free(F)$).

The free symbols of a formula denote kind of variables which need to be assigned fixed values in their respective associated domains before the formula has a truth value. This assignment of values is called an interpretation:

::: info Definition 6.6.{#definition-6-6}
An **interpretation** consists of a set $\mathcal{Z} ⊆ Λ$ of symbols of $Λ$, a domain (a set of possible values) for each symbol in $\mathcal{Z}$, and a function that assigns to each symbol in $\mathcal{Z}$ a value in its associated domain.[^21]
::: 

Often (but not in propositional logic), the domains are defined in terms of a so-called *universe* $U$, and the domain for a symbol in $Λ$ can for example be $U$, or a function $U^k → U$ (for some $k$), or a function $U^k → \{0, 1\}$ (for some $k$).

::: info Definition 6.7.{#definition-6-7}
An interpretation is *suitable*[^22] for a formula $F$ if it assigns a value to all symbols $β ∈ Λ$ occurring free in $F$. [^23]
:::

::: info Definition 6.8.{#definition-6-8}
The **semantics** of a logic also defines a function[^24] $σ$ assigning to each formula $F$, and each interpretation $\mathcal{A}$ suitable for $F$, a truth value $σ(F, \mathcal{A})$ in {0, 1}. [^25] In treatments of logic one often writes $\mathcal{A}(F)$ instead of $σ(F, \mathcal{A})$ and calls $\mathcal{A}(F)$ *the truth value of* $F$ *under interpretation* $\mathcal{A}$. [^26]
:::

[^20]:The term "free" is not standard in the literature which instead uses special terms for each specific logic, but as we see later it coincides for the notion of free variables in predicate logic.

[^21]:There may be restrictions for what is an allowed interpretation.

[^22]:German: passend

[^23]:A suitable interpretation can also assign values to symbols $β ∈ Λ$ not occurring free in $F$.

[^24]:We assume that the set of formulas and the set of interpretations are well-defined.

[^25]:Note that different free occurrences of a symbol $β ∈ Λ$ in $F$ are assigned the same value, namely that determined by the interpretation.

[^26]:This notation in the literature is unfortunately a bit ambiguous since $\mathcal{A}$ is used for two different things, namely for an interpretation as well as for the function induced by the interpretation which assigns to every formula the truth value (under that interpretation). We nevertheless use the notation $\mathcal{A}(F)$ instead of $σ(F, \mathcal{A})$ in order to be compatible with most of the literature.

::: info Definition 6.9.
A (suitable) interpretation $\mathcal{A}$ for which a formula $F$ is true, (i.e., $\mathcal{A}(F) = 1$) is called a *model* for $F$, and one also writes

$\mathcal{A} \models F$.

More generally, for a set M of formulas, a (suitable) interpretation for which all formulas in $M$ are true is called a model for $M$, denoted as

$\mathcal{A} \models M$.

If $\mathcal{A}$ is not a model for M one writes $\mathcal{A} \not\models M$.
:::

### 6.3.4. Connection to Proof Systems

We now explain how the semantics of a logic (the function $σ$ in [Definition 6.8](#definition-6-8)) is connected to the semantics of a proof systems (the function $τ$ in [Definition 6.1](#definition-6-1)).

First we should remark that one can treat logic in a similarly informal manner as one treats other fields of mathematics. There can be variations on how much is formalized in the sense of proof systems. Concretely, there are the following two options for formalizing a logic:

- In addition to formulas, also interpretations are considered to be formal objects, i.e., there is a syntax for writing (at least certain types of) interpretations. In this case, statements can correspond to pairs $(F, \mathcal{A})$, and the function $σ$ corresponds to the function $τ$ (in the sense of proof systems).
- Only formulas are formal objects and interpretations are treated informally, e.g. in words or some other informal notation. This is the typical approach in treatments of logic (also in this course). This makes perfect sense if the formal statements one wants to prove only refer to formulas, and not to specific interpretations. Indeed, many statements about formulas are of this form, for example the statement that a formula $F$ is a tautology, the statement that $F$ is satisfiable (or unsatisfiable), or the statement that a formula $G$ is a logical consequence of a formula $F$, i.e., $F \models G$. Note that to prove such statements it is not necessary to formalize interpretations.

### 6.3.5. Satisfiability, Tautology, Consequence, Equivalence

::: info Definition 6.10.{#definition-6-10}
A formula $F$ (or set $M$ of formulas) is called *satisfiable*[^27] if there exists a model for $F$ (or $M$),[^28] and *unsatisfiable* otherwise. The symbol $⊥$ is used for an unsatisfiable formula.[^29]
:::

[^27]:German: erfüllbar

[^28]:Note that the statement that $M$ is satisfiable is not equivalent to the statement that every formula in $M$ is satisfiable.

[^29]:The symbol $⊥$ is not a formula itself, i.e., it is not part of the syntax of a logic, but if used in expressions like $F ≡ ⊥$ it is to be understood as standing for an arbitrary unsatisfiable formula. For example, $F ≡ ⊥$ means that $F$ is unsatisfiable.

::: info Definition 6.11.{#definition-6-11}
A formula $F$ is called a *tautology*[^30] or *valid*[^31] if it is true for every suitable interpretation. The symbol $⊤$ is used for a tautology.
:::

The symbol $⊥$ is sometimes called *falsum*, and $⊤$ is sometimes called *verum*.

::: info Definition 6.12.{#definition-6-12}
A formula $G$ is a *logical consequence*[^32] of a formula $F$ (or a set $M$ of formulas), denoted

<center>

$F \models G$ (or $M \models G$),

</center>

if every interpretation suitable for both $F$ (or $M$) and $G$, which is a model for $F$ (for $M$), is also a model for $G$. [^33]
:::

::: info Definition 6.13.{#definition-6-13}
**Definition 6.13.** Two formulas $F$ and $G$ are *equivalent*, denoted $F ≡ G$, if every interpretation suitable for both $F$ and $G$ yields the same truth value for $F$ and $G$, i.e., if each one is a logical consequence of the other:

<center>

$F ≡ G \overset{_{~def}}\iff F \models G$ and $G \overset{_~}\models F$.

</center>
:::

A set $M$ of formulas can be interpreted as the conjunction (AND) of all formulas in M since an interpretation is a model for M if and only if it is a model for all formulas in M. [^34] If M is the empty set, then, by definition, every interpretation is a model for M, i.e., the empty set of formulas corresponds to a tautology.

**Definition 6.14.** If $F$ is a tautology, one also writes $\models F$.

That $F$ is unsatisfiable can be written as $F \models ⊥$.

### **6.3.6 The Logical Operators** $∧$, $∨$**, and** $¬$

Essentially all logics contain the following recursive definitions as part of the syntax definition.

::: info Definition 6.15.{#definition-6-15}
If $F$ and $G$ are formulas, then also $¬F$, $(F ∧ G)$, and $(F ∨ G)$ are formulas.
:::

[^30]:German: Tautologie

[^31]:German: gültig, allgemeingültig

[^32]:German: (logische) Folgerung, logische Konsequenz

[^33]:The symbol $\models$ is used in two slightly different ways: with a formula (or set of formulas), and also with an interpretation on the left side. This makes sense because one can consider a set $M$ of formulas as defining a set of interpretations, namely the set of models for $M$.

[^34]:More formally, let $G$ be any formula (one of the many equivalent ones) that corresponds to the conjunction of all formulas in $M$. Then $M \models F$ if and only if $G \models F$.

A formula of the form $(F ∧ G)$ is called a conjunction, and a formula of the form $(F ∨ G)$ is called a disjunction.

We introduce some notational conventions for the use of parentheses. The outermost parentheses of a formula can be dropped, i.e., we can write $F ∧ G$ instead of $(F ∧ G)$. Moreover, parentheses not needed because of associativity of $∧$ or $∨$ (which is actually a consequence of the semantics defined below) can also be dropped.

The implication introduced in Section 2.3 can be understood simply as a notational convention: $F → G$ stands for $¬F \lor G$.[^35] Similarly, the symbol $F ↔ G$ stands for $(F ∧ G) ∨ (¬F ∧ ¬G)$.

The semantics of the logical operators $∧$, $∨$, and $¬$ is defined as follows (in any logic where these operators exist):

::: info Definition 6.16.{#definition-6-16}

<div class="grid-cols"><div>

$\mathcal{A}((F ∧ G)) = 1$ 

</div><div>

if and only if $\mathcal{A}(F) = 1$ and $\mathcal{A}(G) = 1$.

</div><div>

$\mathcal{A}((F ∨ G)) = 1$

</div><div>

if and only if $\mathcal{A}(F) = 1$ or $\mathcal{A}(G) = 1$.

</div><div>

$\mathcal{A}(¬F) = 1$ 

</div><div>

if and only if $\mathcal{A}(F) = 0$.

</div></div>
:::

Some basic equivalences were already discussed in [Section 2.3.2]() and are now stated for any logic that includes the logical operators $∧$, $∨$, and $¬$:

::: info Lemma 6.1.{#lemma-6-1}
*For any formulas* $F$, $G$, *and* $H$ *we have*

1) $F ∧ F ≡ F$ and $F ∨ F ≡ F$ *(idempotence)*;

2) $F ∧ G ≡ G ∧ F$ and $F ∨ G ≡ G ∨ F$ *(commutativity)*;

3) $(F ∧G)∧H ≡ F ∧(G∧H)$ and $(F ∨G)∨H ≡ F ∨(G∨H)$ *(associativity)*;

4) $F ∧ (F ∨ G) ≡ F$ and $F ∨ (F ∧ G) ≡ F$ *(absorption)*;

5) $F ∧ (G ∨ H) ≡ (F ∧ G) ∨ (F ∧ H)$ *(distributive law)*;

6) $F ∨ (G ∧ H) ≡ (F ∨ G) ∧ (F ∨ H)$ *(distributive law)*;

7) $¬¬F ≡ F$ *(double negation)*;

8) $¬(F ∧ G) ≡ ¬F ∨ ¬G$ and $¬(F ∨ G) ≡ ¬F ∧ ¬G$ *(de Morgan's rules)*;

9) $F ∨ ⊤ ≡ ⊤$ and $F ∧ ⊤ ≡ F$ *(tautology rules)*;

10) $F ∨ ⊥ ≡ F$ and $F ∧ ⊥ ≡ ⊥$ *(unsatisfiability rules).*

11) $F ∨ ¬F ≡ ⊤$ and $F ∧ ¬F ≡ ⊥$.
:::

**Proof.** The proofs follow directly from Definition 6.16. For example, the claim

[^35]:Alternatively, one could also define $→$ to be a symbol of the syntax, in which case one would also need to extend the semantics to provide an interpretation for $→$. This subtle distinction between notational convention or syntax extension is not really relevant for us. We can simply use the symbol $→$.

$¬(F ∧ G) ≡ ¬F ∨ ¬G$ follows from the fact that for any suitable interpretation, we have $A(¬(F ∧ G)) = 1$ if and only if $A(F ∧ G) = 0$, and hence if and only if either $\mathcal{A}(F) = 0$ or $\mathcal{A}(G) = 0$, i.e., if and only if either $\mathcal{A}(¬F) = 1$ or $\mathcal{A}(¬G) = 1$, and hence if and only if $\mathcal{A}(¬F ∨ ¬G) = 1$.

### 6.3.7. Logical Consequence vs. Unsatisfiability

We state the following facts without proofs, which are rather obvious. These lemmas are needed for example to make use of the resolution calculus ([see Section 6.5.5](#_6-5-5-the-resolution-calculus-for-propositional-logic)), which allows to prove the unsatisfiability of a set of formulas, to also be able to prove that a formula $F$ is a tautology, or to prove that a formula $G$ is logical consequence of a given set $\{F_1, F_2, … , F_k\}$ of formulas.

::: info Lemma 6.2.{#lemma-6-2}
*A formula* $F$ *is a tautology if and only if* $¬F$ *is unsatisfiable.*
:::

::: info Lemma 6.3.{#lemma-6-3}
*The following three statements are equivalent:*

- 1. $\{F_1, F_2, … , F_k\} \models G$,
- 2. $(F_1 ∧ F_2 ∧ … ∧ F_k) → G$ *is a tautology,*
- 3. $\{F_1, F_2, … , F_k, ¬G\}$ *is unsatisfiable.*
:::

### 6.3.8. Theorems and Theories

We can consider at least four types of statements one may want to prove in the context of using a logic:

- 1. Theorems in an axiomatically defined theory (see below),
- 2. Statements about a formula or a set of formulas, for example that $F$ is satisfiable or that a set $M$ of formulas is unsatisfiable.
- 3. The statement $\mathcal{A} \models F$ for a given interpretation $\mathcal{A}$ and a formula $F$.
- 4. Statements *about* the logic, for example that a certain calculus for the logic is sound.

To describe the first type of statements, consider a fixed logic, for instance predicate logic discussed in [Section 6.6](#_6-6-predicate-logic-first-order-logic), and consider a set $T$ of formulas, where the formulas in $T$ are called the *axioms* of the theory. Any formula $F$ for which

$$T \models F$$

is called a *theorem* in theory $T$ . For example, the axioms of group theory are three formulas in predicate logic, and any theorem in group theory (e.g. Lagrange's theorem) is a logical consequence of the axioms.

Consider two theories $T$ and $T^′$ , where $T^′$ contains all the axioms of $T$ plus one or more additional axioms. Then every theorem in $T$ is also a theorem in $T^′$ (but not vice versa). In the special case where $T = ∅$, a theorem in $T = \emptyset$ is a tautology in the logic. Tautologies are useful because they are theorems in any theory, i.e., for any set of axioms.

::: tip Example 6.5.{#example-6-5}
The formula $¬∃x∀y( P(y, x) ↔ ¬P(y, y))$ is a tautology in predicate logic, as proved in [Section 6.6.9.](#_6-6-9-an-example-theorem-and-its-interpretations)
:::

## 6.4. Logical Calculi

### 6.4.1. Introduction

As mentioned in [Section 6.3.1](#_6-3-1-the-general-goal-of-logic), the goal of logic is to provide a framework for expressing and verifying proofs of mathematical statements. A proof of a theorem should be a purely syntactic derivation consisting of simple and easily verifiable steps. In each step, a new syntactic object (typically a formula, but it can also be a more general object involving formulas) is derived by application of a derivation rule or inference rule, and at the end of the derivation, the desired theorem appears. The syntactic verification of a proof does not require any intelligence or "reasoning between the lines", and it can in particular be performed by a computer.

Checking a proof hence simply means to execute a program. Like in computer programming, where the execution of a program is a dumb process while the design of a program is generally an intelligent, sometimes ingenious process, the verification of a proof should be a dumb process while devising a proof is an intelligent, creative, and sometimes ingenious process.

A well-defined set of rules for manipulating formulas (the syntactic objects) is called a *calculus*. Many such calculi have been proposed, and they differ in various ways, for example in the syntax, the semantics, the expressiveness, how easy or involved it is to write a proof, and how long a proof will be.

When defining a calculus, there is a trade-off between simplicity (e.g. a small number of rules) and versatility. For a small set of rules, proving even simple logical steps (like the substitution of a sub-formula by an equivalent subformula) can take a very large number of steps in the calculus.

It is beyond the scope of this course to provide an extensive treatment of various logical calculi.

### 6.4.2. Hilbert-Style Calculi

As mentioned, there are different types of logical calculi. For the perhaps most intuitive type of calculus, the syntactic objects that are manipulated are formulas. This is sometimes called a Hilbert-style calculus. There is also another type of calculi, often called *sequent calculi* (which we will not discuss in this course), where the syntactic objects are more complex objects than just formulas. The following refers to Hilbert-style calculi.

::: info Definition 6.17.{#definition-6-17}
A **derivation rule** or **inference rule** [^36] is a rule for deriving a formula from a set of formulas (called the precondition or premises). We write

$$\{F_{1},\ldots,F_{k}\}\;\;\vdash_{R}\;G$$

if $G$ can be derived from the set $\{F_1, … , F_k\}$ by rule $R$. Formally, a derivation rule $R$ is a relation from the power set of the set of formulas to the set of formulas, and the symbol $⊢_R$ can be understood as the relation symbol.
:::

The derivation rule $\{F_1, … , F_k\} ⊢_R G$ is sometimes also written as

<center>

${\frac{F_{1}\;\;F_{2}\;\;\cdots\;\;F_{k}}{G}}\;\;\;\;(R)$,

</center>

where spaces separate the formulas above the bar.

Derivation is a purely syntactic concept. Derivation rules apply to syntactically correct (sets of) formulas. Some derivation rules (e.g. resolution, see [Section 6.5.5](#_6-5-5-the-resolution-calculus-for-propositional-logic)) require the formulas to be in a specific format.

::: info Definition 6.18.{#definition-6-18}
The *application of a derivation rule* $R$ to a set $M$ of formulas means

1. Select a subset $N$ of $M$ such that $N ⊢_R G$ for some formula $G$.
2. Add $G$ to the set $M$ (i.e., replace $M$ by $M ∪ \{G\}$).
:::

::: info Definition 6.19.{#definition-6-19}
A (logical) *calculus*[^37] $K$ is a finite set of derivation rules: $K = \{R_1, … , R_m\}$. [^38]
:::

[^36]:German: Schlussregel

[^37]:German: Kalkül

[^38]:A calculus also corresponds to a relation from the power set of the set of formulas to the set of formulas, namely the union of the relations corresponding the rules of the calculus.

::: info Definition 6.20.{#definition-6-20}
A *derivation*[^39] of a formula $G$ from a set $M$ of formulas in a calculus $K$ is a finite sequence (of some length $n$) of applications of rules in $K$ (see [Def. 6.18](#definition-6-18)), leading to $G$. More precisely, we have

- $M_0 := M$,
- $M_i := M_{i−1} ∪ \{G_i\}$ for $1 ≤ i ≤ n$, where $N ⊢_{R_j} G_i$ for some $N ⊆ M_{i−1}$ and for some $R_j ∈ K$, and where
- $G_n = G$.

We write

$$M\ \vdash_{K}\ G$$

if there is a derivation of $G$ from $M$ in the calculus $K$.
:::

The above treatment of syntactic derivation is not completely general. In some contexts (e.g. in so-called Natural Deduction for predicate logic, which is a so-called sequent calculus), one needs to keep track not only of the derived formulas, but also of the history of the derivation, i.e., the derivation steps that have led to a given formula.

Typically such a derivation rule is defined as a rule that involves *place-holders* for formulas (such as $F$ and $G$), which can be instantiated with any concrete formulas. In order to apply such a rule one must instantiate each place-holder with a concrete formula.

::: tip Example 6.6. {#example-6-6}
Two derivation rules for propositional and predicate logic are

<center>

$\{F\wedge G\}\ \ \vdash_{R}\ F\quad$ and $\quad\{F,G\}\ \ \vdash_{R^{\prime}}\ F\wedge G$

</center>

The left rule states that if one has already derived a formula of the form $F ∧ G$, where $F$ and $G$ are arbitrary formulas, then one can derive $F$. The second rule states that for any two formulas $F$ and $G$ that have been derived, one can also derive the formula $F ∧ G$. For example, an application of the right rule yields

<center>

$\{A\lor B,\,C\lor D\}\ \vdash\ (A\lor B)\land(C\lor D)$,

</center>

where $F$ is instantiated as $A ∨ B$ and $G$ is instantiated as $C ∨ D$. More rules are discussed in [Section 6.4.4.](#_6-4-4-some-derivation-rules)
:::

### 6.4.3. Soundness and Completeness of a Calculus

A main goal of logic is to formalize reasoning and proofs. One wants to perform purely syntactic manipulations on given formulas, defined by a calculus, to arrive at a new formula which is a logical consequence. In other words, if we use a calculus, the syntactic concept of derivation (using the calculus) should be related to the semantic concept of logical consequence.

[^39]:German: Herleitung

::: info Definition 6.21.{#definition-6-21}
A derivation rule $R$ is *correct* if for every set $M$ of formulas and every formula $F$, $M ⊢_R F$ implies $M \models F$:

<center>

$M ⊢_R F \implies M \models F$.

</center>
:::

::: tip Example 6.7. {#example-6-7}
The two rules of [Example 6.6](#example-6-6) are correct, but the rule

$${F → G, G → F} ⊢ F ∧ G$$

is not correct. To see this, note that if F and G are both false, then F → G and G → F are true while F ∧ G is false.
:::

::: info Definition 6.22.{#definition-6-22}
A calculus $K$ is **sound**[^40] or **correct** if for every set $M$ of formulas and every formula $F$, if $F$ can be derived from $M$ then $F$ is also a logical consequence of $M$:

<center>

$M\vdash_{K}F\implies M\vDash F$,

</center>

and $K$ is **complete**[^41] if for every $M$ and $F$, if $F$ is a logical consequence of $M$, then $F$ can also be derived from $M$:

<center>

$M\models F\implies M\vdash_{K}F$.

</center>
:::

A calculus is hence sound and complete if

$$M\vdash_{K}F\iff M\models F,$$

i.e., if logical consequence and derivability are identical. Clearly, a calculus is sound if and only if every derivation rule is correct. One writes $⊢_K F$ if $F$ can be derived in $K$ from the empty set of formulas. Note that if $⊢_K F$ for a sound calculus, then $\models F$, i.e., $F$ is a tautology.

### 6.4.4. Some Derivation Rules

In this section we discuss a few derivation rules for propositional logic and any logic which contains propositional logic. We do not provide a complete and compactly defined calculus, just a few rules. For singleton sets of formulas we omit the brackets "$\{$" and "$\}$".

All equivalences, including the basic equivalences of [Lemma 6.1](#lemma-6.1), can be used as derivation rules. For example, the following derivation rules are correct:

<div class="cells">

$$¬¬F \;⊢\; F$$
$$F ∧ G \;⊢\; G ∧ F$$
$$¬(F ∨ G) \;⊢\; ¬F ∧ ¬G$$

</div>

Other natural and correct rules, which capture logical consequences, not equivalences, are:

<div class="cells">

$$F ∧ G \;⊢\; F$$
$$F ∧ G \;⊢\; G$$
$$\{F, G\} \;⊢\; F ∧ G$$
$$F\,\;⊢\; F\lor G$$
$$F\,\;⊢\; G\lor F$$
$$\{F,\,F\to G\}\,\;⊢\; G$$ 
$$\{F\lor G,\,F\to H,\,G\to H\}\,\;⊢\; H$$

</div>

[^40]:German: widerspruchsfrei

[^41]:German: vollständig

Such rules are not necessarily independent. For example, the rule $F ∧ G \;⊢\; G ∧ F$ could be derived from the above three rules as follows: $F$ can be derived from $F ∧ G$ and $G$ can also be derived from $F ∧ G$, resulting in the set $\{F ∧ G, F, G\}$. $\{G, F\}$ is a subset of $\{F ∧ G, F, G\}$ and hence one of the above rules yields $\{G, F\} \;⊢\; G ∧ F$.

The last rule discussed above captures case distinction (two cases). It states that if one knows that $F$ or $G$ is true and that each of them implies $H$, then we can conclude $H$. Such a proof step is in a sense non-constructive because it may not be known which of $F$ or $G$ is true.

To begin a derivation from the empty set of formulas, one can use any rule of the form $⊢ F$, where $F$ is a tautology. The best-known such rule is

$$\vdash\ F\lor\neg F$$

called "tertium non datur (TND)" (in English: "there is no third [alternative]"), which captures the fact that a formula $F$ can only be true or false (in which case $¬F$ is true); there is no option in between.[^42] Another rule for deriving a tautology is

$$\vdash\ \lnot(F\leftrightarrow\lnot F).$$

::: tip Example 6.8.{#example-6-8}
The following rule can be understood as capturing the principle of proof by contradiction. (Why?)

<center>

$\{F\lor G,\;\neg G\}\;\;\vdash\;\;F$.

</center>

The reader can prove the correctness as an exercise.
:::

Which set of rules constitutes an adequate calculus is generally not clear, but some calculi have received special attention. One could argue both for a small set of rules (which are considered the fundamental ones from which everything else is derived) or for a large library of rules (so there is a large degree of freedom in finding a short derivation).

### 6.4.5. Derivations from Assumptions

If in a sound calculus $K$ one can derive $G$ under the assumption $F$, i.e., one can prove $F ⊢_K G$, then one has proved that $F → G$ is a tautology, i.e., we have

<center>

$F\;\vdash_{K}G\;\;\;\Longrightarrow\;\;\models(F\to G)$.

</center>

[^42]:However, in so-called constructive or intuitionistic logic, this rule is not considered correct because its application does not require explicit knowledge of whether $F$ or $¬F$ is true.

One could therefore also extend the calculus by the new rule

$$\vdash(F\to G),$$

which is sound. Here $F$ and $G$ can be expressions involving place-holders for formulas.

::: tip Example 6.9.{#example-6-9}
As a toy example, consider the rules $¬¬F ⊢ F$ and $¬(F∨G) ⊢ ¬F$. Let $H$ be an arbitrary formula. Using the second rule (and setting $F = ¬H$) we can obtain $¬(¬H ∨G) ⊢ ¬¬H$. Thus, using the first rule (and setting $F = H$) we can obtain $¬¬H ⊢ H$. Hence we have proved $¬(¬H ∨ G) ⊢ H$. As usual, this holds for arbitrary formulas $G$ and $H$ and hence can be understood as a rule. When stated in the usual form (with place holders $F$ and $G$, the rule would be stated as $¬(¬F ∨ G) ⊢ F$.

More generally, we can derive a formula $G$ from several assumptions, for example

<center>

$\{F_1, F_2\} ⊢_K G \implies \models (F_1 ∧ F_2) → G$.

</center>
:::

### 6.4.6. Connection to Proof Systems

Let us briefly explain the connection between logical calculi and the general concept of proof systems ([Definition 6.2](#definition-6-2)).

In a proof system allowing to prove statements of the form $M \models G$, one can let the set $S$ of statements be the set of pairs $(M, G)$. One further needs a precise syntax for expressing derivations. Such a syntax would, for example, have to include a way to express how place-holders in rules are instantiated. This aspect of a calculus is usually not made precise and therefore a logical calculus (alone) does not completely constitute a proof system in the sense of [Definition 6.2](#definition-6-2). However, in a computerized system this needs to be made precise, in a language specific to that system, and such computerized system is hence a proof system in the strict sense of [Section 6.2](#_6-2-proof-systems).

## 6.5. Propositional Logic

We also refer to [Section 2.3]() where some basics of propositional logic were introduced informally and many examples were already given. This section concentrates on the formal aspects and the connection to [Section 6.3](#_6-3-elementary-general-concepts-in-logic).

### 6.5.1. Syntax

::: info Definition 6.23. **(Syntax)**{#definition-6-23} 
An *atomic formula* is a symbol of the form $A_i$ with $i ∈ ℕ$. [^43] A *formula* is defined as follows, where the second point is a restatement (for convenience) of [Definition 6.15](#definition-6-15):

- An atomic formula is a formula.
- If $F$ and $G$ are formulas, then also $¬F$, $(F ∧G)$, and $(F ∨G)$ are formulas.
:::

[^43]:$A_0$ is usually not used. This definition guarantees an unbounded supply of atomic formulas. As a notational convention we can also write $A$, $B$, $C$, … instead of $A_1$, $A_2$, $A_3$, ….

A formula built according to this inductive definition corresponds naturally to a tree where the leaves correspond to atomic formulas and the inner nodes correspond to the logical operators.

### 6.5.2. Semantics

Recall [Definitions 6.5](#definition-6-5) and [6.6](#definition-6-6). *In propositional logic, the free symbols of a formula are all the atomic formulas.* For example, the truth value of the formula $A ∧ B$ is determined only after we specify the truth values of $A$ and $B$. In propositional logic, an interpretation is called a truth assignment (see below).

::: info Definition 6.24. **(Semantics)**{#definition-6-24} 
For a set $Z$ of atomic formulas, an interpretation $\mathcal{A}$, called *truth assignment*[^44], is a function $\mathcal{A}: Z → \{0, 1\}$. A truth assignment $\mathcal{A}$ is suitable for a formula $F$ if $Z$ contains all atomic formulas appearing in $F$ (see [Definition 6.7](#definition-6-7)). The semantics (i.e., the truth value $\mathcal{A}(F)$ of a formula $F$ under interpretation $\mathcal{A}$) is defined by $\mathcal{A}(F) = \mathcal{A}(A_i)$ for any atomic formula $F = A_i$ , and by [Definition 6.16](#definition-6-16) (restated here for convenience):

<div class="grid-cols"><div>

$\mathcal{A}((F ∧ G)) = 1$

</div><div>

if and only if $\mathcal{A}(F) = 1$ and $\mathcal{A}(G) = 1$.

</div><div>

$\mathcal{A}((F ∨ G)) = 1$

</div><div>

if and only if $\mathcal{A}(F) = 1$ or $\mathcal{A}(G) = 1$.

</div><div>

$\mathcal{A}(¬F) = 1$

</div><div>

if and only if $\mathcal{A}(F) = 0$.

</div></div>
:::

::: tip Example 6.10.{#example-6-10}
Consider the formula

$$F = (A ∧ ¬B) ∨ (B ∧ ¬C)$$

already discussed in [Section 2.3.]() The truth assignment $\mathcal{A} : Z → \{0, 1\}$ for $Z = \{A, B\}$ that assigns $\mathcal{A}(A) = 0$ and $\mathcal{A}(B) = 1$ is not suitable for $F$ because no truth value is assigned to $C$, and the truth assignment $\mathcal{A} : Z → \{0, 1\}$ for $Z = \{A, B, C, D\}$ that assigns $\mathcal{A}(A) = 0$, $\mathcal{A}(B) = 1$, $\mathcal{A}(C) = 0$, and $\mathcal{A}(D) = 1$ is suitable and also a model for $F$. $F$ is satisfiable but not a tautology.
:::

### 6.5.3. Brief Discussion of General Logic Concepts

We briefly discuss the basic concepts from [Section 6.3.5](#_6-3-5-satisfiability-tautology-consequence-equivalence) in the context of propositional logic.

Specializing [Definition 6.13](#definition-6-13) to the case of propositional logic, we confirm [Definition 2.6](): Two formulas $F$ and $G$ are equivalent if, when both formulas are considered as functions $M → \{0, 1\}$, where $M$ is the union of the atomic formulas of $F$ and $G$, then the two functions are identical (i.e., have the same function table).

[^44]:German: (Wahrheits-)Belegung

Specializing [Definition 6.12](#definition-6-12) to the case of propositional logic, we see that $G$ is a logical consequence of $F$, i.e., $F \models G$, if the function table of $G$ contains a $1$ for at least all argument for which the function table of $F$ contains a $1$. [^45]

::: tip Example 6.11.{#example-6-11}
$F = (A ∧ ¬B) ∨ (B ∧ ¬C)$ is a logical consequence of $A$ and $¬C$, i.e., $\{A, ¬C\} \models F$. In contrast, $F$ is not a logical consequence of $A$ and $B$, i.e., $\{A, B\} \not\models F$.
:::

The basic equivalences of [Lemma 6.1](#lemma-6-1) apply in particular to propositional logic.

### 6.5.4. Normal Forms

::: info Definition 6.25. {#definition-6-25}
A **literal** is an atomic formula or the negation of an atomic formula.
:::

::: info Definition 6.26. {#definition-6-26}
A formula $F$ is in **conjunctive normal form (CNF)** if it is a conjunction of disjunctions of literals, i.e., if it is of the form

$$F = (L_{11} ∨ \cdots ∨ L_{1m_1} ) ∧ \cdots ∧ (L_{n1} ∨ \cdots ∨ L_{nm_n} )$$

for some literals $L_{ij}$.
:::

::: tip Example 6.12.{#example-6-12}
The formula $(A ∨ ¬B) ∧ (¬A ∨ B ∨ ¬D) ∧ ¬C$ is in CNF.
:::

::: info Definition 6.27. {#definition-6-27}
A formula F is in *disjunctive normal form (DNF)* if it is a disjunction of conjunctions of literals, i.e., if it is of the form

$$F = (L_{11} ∧ \cdots ∧ L_{1m_1} ) ∨ \cdots ∨ (L_{n1} ∧ \cdots ∧ L_{nm_n} )$$

for some literals $L_{ij}$.
:::

::: tip Example 6.13.{#example-6-13}
The formula $(B ∧ C) ∨ (¬A ∧ B ∧ ¬C)$ is in DNF.
:::

::: info Theorem 6.4. {#theorem-6-4}
*Every formula is equivalent to a formula in CNF and also to a formula in DNF.*
:::

**Proof:** Consider a formula $F$ with atomic formulas $A_1, … , A_n$ with a truth table of size $2^n$.

[^45]:If the truth values $0$ and $1$ were interpreted as numbers, then $F \models G$ means that $G$ is greater or equal to $F$ for all arguments. This also explains why $F \models G$ and $G \models H$ together imply $F \models H$.

Given such a formula $F$, one can use the truth table of $F$ to derive an equivalent formula in DNF, as follows. For every row of the function table evaluating to $1$ one takes the conjunction of the $n$ literals defined as follows: If $A_i = 0$ in the row, one takes the literal $¬A_i$ , otherwise the literal $A_i$ . This conjunction is a formula whose function table is $1$ exactly for the row under consideration (and $0$ for all other rows). Then one takes the disjunction of all these conjunctions. $F$ is true if and only if one of the conjunctions is true, i.e., the truth table of this formula in DNF is identical to that of $F$.

Given such a formula $F$, one can also use the truth table of $F$ to derive an equivalent formula in CNF, as follows. For every row of the function table evaluating to $0$ one takes the disjunction of the $n$ literals defined as follows: If $A_i = 0$ in the row, one takes the literal $A_i$ , otherwise the literal $¬A_i$ . This disjunction is a formula whose function table is $0$ exactly for the row under consideration (and $1$ for all other rows). Then one takes the conjunction of all these (row-wise) disjunctions. $F$ is false if and only if all the disjunctions are false, i.e., the truth table of this formula in CNF is identical to that of $F$.

::: tip Example 6.14.{#example-6-14}
Consider the formula $F = (A ∧ ¬B) ∨ (B ∧ ¬C)$ from above. The function table is

| $A$ | $B$ | $C$ | $(A ∧ ¬B) ∨ (B ∧ ¬C)$ |
|:---:|:---:|:---:|:---------------------:|
| $0$ | $0$ | $0$ |          $0$          |
| $0$ | $0$ | $1$ |          $0$          |
| $0$ | $1$ | $0$ |          $1$          |
| $0$ | $1$ | $1$ |          $0$          |
| $1$ | $0$ | $0$ |          $1$          |
| $1$ | $0$ | $1$ |          $1$          |
| $1$ | $1$ | $0$ |          $1$          |
| $1$ | $1$ | $1$ |          $0$          |

We therefore obtain the following DNF

$$F\;\equiv\;(\neg A\wedge B\wedge\neg C)\lor(A\wedge\neg B\wedge\neg C)\lor(A\wedge\neg B\wedge C)\lor(A\wedge B\wedge\neg C)$$

as the disjunction of 4 conjunctions. And we obtain the following CNF

$$F\;\equiv\;(A\lor B\lor C)\land(A\lor B\lor\neg C)\land(A\lor\neg B\lor\neg C)\land(\neg A\lor\neg B\lor\neg C).$$

as the conjunction of 4 disjunctions.
:::

It is often useful to transform a given formula into an equivalent formula in a certain normal form, but the CNF and the DNF resulting from the truth table as described in the proof of [Theorem 6.4](#theorem-6-4) are generally exponentially long. In fact, in the above example $F$ is already given in disjunctive normal form, and the procedure has resulted in a much longer (equivalent) formula in DNF.

A transformation to CNF or DNF can also be carried out by making use of the basic equivalences of propositional logic.

::: tip Example 6.15.{#example-6-15}
For the formula $¬((A∧¬B)∨(B∧C))∨D$ we derive an equivalent formula in CNF, using the basic equivalences of [Lemma 6.1](#lemma-6-1):

$$
\begin{aligned}
\neg\big((A \wedge \neg B) \vee (B \wedge C)\big) \lor D &\equiv \big(\neg(A \wedge \neg B) \wedge \neg(B \wedge C)\big) \lor D \\
&\equiv \big((\neg A \vee \neg\neg B) \wedge (\neg B \vee \neg C)\big) \lor D \\
&\equiv \big((\neg A \lor B) \wedge (\neg B \vee \neg C)\big) \lor D \\
&\equiv ((\neg A \lor B) \lor D) \wedge ((\neg B \vee \neg C) \lor D) \\
&\equiv (\neg A \lor B \lor D) \wedge (\neg B \vee \neg C \lor D).
\end{aligned}
$$

In the first step we have used $F ∧ G ≡ ¬(¬F ∨ ¬G)$, which is a direct consequence of rule 8) of [Lemma 6.1](#lemma-6-1). In the second step we have applied rule 8) twice, etc.
:::

### 6.5.5. The Resolution Calculus for Propositional Logic

Resolution is an important logical calculus that is used in certain computer algorithms for automated reasoning. The calculus is very simple in that it consists of a single derivation rule. The purpose of a derivation is to prove that a given set $M$ of formulas (or, equivalently, their conjunction) is unsatisfiable.

As mentioned earlier (see [Lemma 6.2](#lemma-6-2)), this also allows to prove that a formula $F$ is a tautology, which is the case if and only if $¬F$ is unsatisfiable. It also allows to prove that a formula $F$ is a logical consequence of a set $M$ of formulas (i.e., $M \models F$), as this is the case if and only if the set $M ∪ \{¬F\}$ is unsatisfiable (see [Lemma 6.3](#lemma-6-3)).

The resolution calculus assumes that all formulas of $M$ are given in conjunctive normal form (CNF, see [Definition 6.26](#definition-6-26)). This is usually not the case, and therefore the formulas of $M$ must first be transformed into equivalent formulas in CNF, as explained earlier. Moreover, instead of working with CNF-formulas (as the syntactic objects), one works with an equivalent object, namely sets of clauses.

Recall ([Definition 6.25](#definition-6-25)) that a literal is an atomic formula or the negation of an atomic formula. For example $A$ and $¬B$ are literals.

::: info Definition 6.28. {#definition-6-28}
A **clause** is a set of literals.
:::

::: tip Example 6.16.{#example-6-16}
$\{A, ¬B, ¬D\}$ and $\{B, C, ¬C, ¬D, E\}$ are clauses, and the empty set $∅$ is also a clause.
:::

::: info Definition 6.29. {#definition-6-29}
The set of clauses associated to a formula

$$
F=(L_{11}\vee\cdots\lor L_{1m_{1}})\wedge\cdots\wedge(L_{n1}\vee\cdots\lor L_{nm_{n}})
$$

in CNF, denoted as $\mathcal{K}(F)$, is the set

$$
\mathcal{K}(F)\ \stackrel{{\text{def}}}{{=}}\ \{\{L_{11},\ldots,L_{1m_{1}}\}\,\ldots,\ \{L_{n1},\ldots,L_{nm_{n}}\}\}\}
$$

The set of clauses associated with a set $M = \{F_1, … , F_k\}$ of formulas is the union of their clause sets:

$${\mathcal{K}}(M)\ \stackrel{\mathrm{def}}{=}\ \bigcup_{i=1}^{k}{\mathcal{K}}(F_{i}).$$
:::

The idea behind this definition is that a clause is satisfied by a truth assignment if and only if it contains *some* literal that evaluates to true. In other words, a clause stands for the disjunction (OR) of its literals. Likewise, a set $\mathcal{K}(M)$ of clauses is satisfied by a truth assignment if *every* clause in $\mathcal{K}(M)$ is satisfied by it. In other words, a set of clauses stands for the conjunction (AND) of the clauses. The set $M = \{F_1, … , F_k\}$ is satisfied if and only if $\bigwedge^k_{i=1} F_i$ is satisfied, i.e., if and only if all clauses in $\mathcal{K}(M)$ are satisfied. Note that *the empty clause corresponds to an unsatisfiable formula and the empty set of clauses corresponds to a tautology.*

Note that for a given formula (not necessarily in CNF) there are many equivalent formulas in CNF and hence many equivalent sets of clauses. Conversely, to a given set $\mathcal{K}$ of clauses one can associate many formulas which are, however, all equivalent. Therefore, one can naturally think of a set of clauses as a (canonical) formula, and the notions of satisfiability, equivalence, and logical consequence carry over immediately from formulas to clause sets.

::: info Definition 6.30. {#definition-6-30}
A clause $K$ is a **resolvent** of clauses $K_1$ and $K_2$ if there is a literal $L$ such that $L ∈ K_1$, $¬L ∈ K_2$, and [^46]

$K=(K_{1}\setminus\{L\})\cup(K_{2}\setminus\{-L\})$. (6.1)
:::

::: tip Example 6.17.{#example-6-17}
The clauses $\{A, ¬B, ¬C\}$ and $\{¬A, C, D, ¬E\}$ have two resolvents: If $A$ is eliminated, we obtain the clause $\{¬B, ¬C, C, D, ¬E\}$, and if $C$ is eliminated, we obtain the clause $\{A, ¬B, ¬A, D, ¬E\}$. Note that clauses are sets and we can write the elements in arbitrary order. In particular, we could write the latter clause as $\{A, ¬A, ¬B, D, ¬E\}$.

It is important to point out that resolution steps must be carried out one by one; one cannot perform two steps at once. For instance, in the above example, $\{¬B, D, ¬E\}$ is not a resolvent and can also not be obtained by two resolution steps, even though $\{¬B, D, ¬E\}$ would result from $\{A, ¬B, ¬C\}$ and $\{¬A, C, D, ¬E\}$ by eliminating $A$ and $¬C$ from the first clause and $¬A$ and $C$ from the second clause. [^47]
:::

[^46]:For a literal $L$, $¬L$ is the negation of $L$, for example if $L = ¬A$, then $¬L = A$.

[^47]:A simpler example illustrating this is that $\{\{A, B\}, \{¬A, ¬B\}\}$ is satisfiable, but a "double" resolution step would falsely yield ∅, indicating that $\{\{A, B\}, \{¬A, ¬B\}\}$ is unsatisfiable.

Given a set $\mathcal{K}$ of clauses, a resolution step takes two clauses $K_1 ∈ \mathcal{K}$ and $K_2 ∈ \mathcal{K}$, computes a resolvent $\mathcal{K}$, and adds K to $\mathcal{K}$. To be consistent with [Section 6.4.2](#_6-4-2-hilbert-style-calculi), one can write the resolution rule (6.1) as follows: [^48]

<center>

$\{K_1, K_2\} ⊢_\mathsf{res} K$,

</center>

where equation (6.1) must be satisfied. The resolution calculus, denoted Res, consists of a single rule:

<center>

$\mathsf{Res} = \{\mathsf{res}\}$.

</center>

Recall that we write $\mathcal{K} ⊢_\mathsf{Res} K$ if $K$ can be derived from K using a finite number of resolution steps.[^49]

::: info Lemma 6.5. {#lemma-6-5}
*The resolution calculus is sound, i.e., if* $K ⊢_\mathsf{Res} K$ *then* $K \models K$. [^50]
:::

**Proof:** We only need to show that the resolution rule is correct, i.e., that if $\mathcal{K}$ is a resolvent of clauses $K_1, K_2 ∈ \mathcal{K}$, then $K$ is logical consequence of $\{K_1, K_2\}$, i.e.,

<center>

$\{K_1, K_2\} ⊢_\mathsf{res} K \implies \{K_1, K_2\} \models K$.

</center>

Let $\mathcal{A}$ be an arbitrary truth assignment suitable for $\{K_1, K_2\}$ (and hence also for $K$). Recall that $\mathcal{A}$ is a model for $\{K_1, K_2\}$ if and only if $\mathcal{A}$ makes at least one literal in $K_1$ true and also makes at least one literal in $K_2$ true.

We refer to [Definition 6.30](#definition-6-30) and distinguish two cases. If $\mathcal A(L) = 1$, then $\mathcal A$ makes at least one literal in $K_2 \ \{¬L\}$ true (since $¬L$ is false). Similarly, if $\mathcal A(L) = 0$, then $\mathcal A$ makes at least one literal in $K_1 \ \{L\}$ true (since $L$ is false). Because one of the two cases occurs, $\mathcal{A}$ makes at least one literal in $K = (K_1 \ \{L\}) ∪ (K_2 \ \{¬L\})$ true, which means that $\mathcal{A}$ is a model for $K$. <span class="right">$\Box$</span>

The goal of a derivation in the resolution calculus is to derive the empty clause $∅$ by an appropriate sequence of resolution steps. The following theorem states that the resolution calculus is complete with respect to the task of proving unsatisfiability.

::: info Theorem 6.6. {#theorem-6-6}
*A set* $M$ *of formulas is unsatisfiable if and only if* $\mathcal{K}(M) ⊢_\mathsf{Res} \emptyset$.
:::

**Proof:** The "if" part (soundness) follows from [Lemma 6.5](#lemma-6-5): If $\mathcal{K}(M) ⊢_\mathsf{Res} ∅$, then $\mathcal{K}(M) \models ∅$, i.e., every model for $\mathcal{K}(M)$ is a model for $∅$. Since $∅$ has no model, $\mathcal{K}(M)$ also does not have a model. This means that $\mathcal{K}(M)$ is unsatisfiable.

[^48]:In the literature, one usually does not use the symbol $⊢$ in the context of resolution.

[^49]:In the lecture we introduce a natural graphical notation for writing a sequence of resolution steps.

[^50]:For convenience, the clause $K$ is understood to mean the singleton clause set $\{K\}$. In other words, the truth value of a clause $K$ is understood to be the same as the truth value of $\{K\}$.

It remains to prove the "only if" part (completeness with respect to unsatisfiability). We need to show that if a clause set $\mathcal{K}$ is unsatisfiable, then $∅$ can be derived by some sequence of resolution steps. The proof is by induction over the number $n$ of atomic formulas appearing in $\mathcal{K}$. The induction basis (for $n = 1$) is as follows. A clause set $\mathcal{K}$ involving only literals $A_1$ and $¬A_1$ is unsatisfiable if and only if it contains the clauses $\{A_1\}$ and $\{¬A_1\}$. One can derive $∅$ exactly if this is the case.

For the induction step, suppose that for every clause set $\mathcal K^\prime$ with $n$ atomic formulas, $\mathcal K^′$ is unsatisfiable if and only if $\mathcal K^′ ⊢_\mathsf{Res} ∅$. Given an arbitrary clause set $\mathcal K$ for the atomic formulas $A_1, … , A_{n+1}$, define the two clause sets $\mathcal K_0$ and $\mathcal K_1$ as follows. $\mathcal K_0$ is the clause set for atomic formulas $A_1, … , A_n$ obtained from $\mathcal K$ by setting $A_{n+1} = 0$, i.e.,

- by eliminating all clauses from $\mathcal K$ containing $¬A_{n+1}$ (which are satisfied since $¬A_{n+1} = 1$), and
- by eliminating from each remaining clause the literal $A_{n+1}$ if it appears in it (since having $A_{n+1}$ in it can not contribute to the clause being satisfied).

$\mathcal K$ is satisfiable under the constraint $A_{n+1} = 0$ if and only if $\mathcal K_0$ is satisfiable.

Analogously, $\mathcal K_1$ is obtained from $\mathcal K$ by eliminating all clauses containing $A_{n+1}$ and by eliminating from each remaining clause the literal $¬A_{n+1}$ if it appears in it. $\mathcal K$ is satisfiable under the constraint $A_{n+1} = 1$ if and only if $\mathcal K_1$ is satisfiable.

If $\mathcal K$ is unsatisfiable, it is unsatisfiable both for $A_{n+1} = 0$ and for $A_{n+1} = 1$, i.e., both $\mathcal K_0$ and $\mathcal K_1$ are unsatisfiable. Therefore, by the induction hypothesis, we have $\mathcal K_0 ⊢_\mathsf{Res} ∅$ and $\mathcal K_1 ⊢_\mathsf{Res} ∅$. Now imagine that the same resolution steps leading from $\mathcal K_0$ to $∅$ are carried out on $\mathcal K$, i.e., with $A_{n+1}$. This derivation may or may not involve clauses (of $\mathcal K$) that contain $A_{n+1}$. In the latter case (i.e., $A_{n+1}$ not contained), the derivation of $∅$ from $\mathcal K_0$ is also a derivation of $∅$ from $\mathcal K$, and in the other case it corresponds to a derivation of $\{A_{n+1}\}$ from $\mathcal K$.

Analogously, the derivation of $∅$ from $\mathcal K_1$ corresponds to a derivation of $∅$ from $\mathcal K$ or to a derivation of $\{¬A_{n+1}\}$ from $\mathcal K$.

If in any of the two cases we have a derivation of $∅$ from $\mathcal K$, we are done (since $∅$ can be derived from $\mathcal K$, i.e., $\mathcal K ⊢_\mathsf{Res} ∅$). If this is not the case, then we have a derivation of $\{A_{n+1}\}$ from $\mathcal K$, i.e., $\mathcal K ⊢_\mathsf{Res} \{A_{n+1}\}$ as well as a derivation of $\{¬A_{n+1}\}$ from $\mathcal K$, i.e., $\mathcal K ⊢_\mathsf{Res} \{¬A_{n+1}\}$. From these two clauses one can derive $∅$ by a final resolution step. This completes the proof. <span class="right">$\Box$</span>

## **6.6 Predicate Logic (First-order Logic)**

We also refer to [Section 2.4]() where some basics of predicate logic were introduced informally. Predicate logic is an extension of propositional logic, i.e., propositional logic is embedded in predicate logic as a special case.

### **6.6.1 Syntax**

::: info Definition 6.31. **(Syntax of predicate logic)**{#definition-6-31}

- A **variable symbol** is of the form $x_i$ with $i ∈ ℕ$. [^51]
- A **function symbol** is of the form $f^{(k)}_i$ with $i,k ∈ ℕ$, where $k$ denotes the number of arguments of the function. Function symbols for $k = 0$ are called **constants**.
- A **predicate symbol** is of the form $P^{(k)}_i$ with i$, k ∈ ℕ$, where $k$ denotes the number of arguments of the predicate.
- A **term** is defined inductively: A variable is a *term*, and if $t_1, … , t_k$ are terms, then $f^{(k)}_i (t_1, … , t_k)$ is a _term_. For $k = 0$ one writes no parentheses.
- A **formula** is defined inductively:
    - For any $i$ and $k$, if $t_1, … , t_k$ are terms, then $P^{(k)}_i (t_1, … , t_k)$ is a formula, called an **atomic** formula.
    - If $F$ and $G$ are formulas, then $¬F$, $(F ∧ G)$, and $(F ∨ G)$ are formulas.
    - If $F$ is a formula, then, for any $i$, $∀x_i~F$ and $∃x_i~F$ are formulas.
:::

$∀$ is called the *universal* quantifier, and $∃$ is called the *existential* quantifier.

A formula constructed according to this inductive definition corresponds naturally to a tree where the leaves correspond to terms and the inner nodes correspond to the logical operators and the quantifiers.

To simplify notation, one usually uses function symbols $f$, $g$, $h$, where the number of arguments is implicit, and for constants one uses the symbols $a$, $b$, $c$. Similarly, one uses predicate symbols $P$, $Q$, $R$, where the number of arguments is implicit. Moreover, one uses variable names $x$, $y$, $z$ instead of $x_i$ , and sometimes also $u$, $v$, $w$ or $k$, $m$, $n$. To avoid confusion one can also use $(∀x~F)$ and $(∃x~F)$ instead of $∀x~F$ and $∃x~F$.

### **6.6.2 Free Variables and Variable Substitution**

::: info Definition 6.32.{#definition-6-32}
Every occurrence of a variable in a formula is either *bound* or *free*. If a variable $x$ occurs in a (sub-)formula of the form $∀x~G$ or $∃x~G$, then it is bound, otherwise it is free.[^52] A formula is *closed*[^53] if it contains no free variables.

[^51]:$x_0$ is usually not used.

[^52]:The occurrence of a variable $x$ immediately following a quantifier is also bound.

Note that the same variable can occur bound and free in a formula. One can draw the construction tree (see lecture) of a formula showing how a formula is constructed according to the rules of [Definition 6.31](#definition-6-31). Within the subtree corresponding to $∀x$ or $∃x$, all occurrences of $x$ are bound.
:::

::: tip Example 6.18.{#example-6-18}
In the formula

<center>

$F = Q(x) ∨ ∀y P(f(x, y)) ∧ ∃x R(x, y)$,

</center>

the first two occurrences of $x$ are free, the other occurrences are bound. The last occurrence of $y$ is free, the other occurrences are bound.

:::

::: info Definition 6.33.{#definition-6-33}
For a formula $F$, a variable $x$ and a term $t$, $F[x/t]$ denotes the formula obtained from $F$ by substituting every free occurrence of $x$ by $t$.
:::

::: tip Example 6.19.{#example-6-19}
For the formula F of [Example 6.18](#example-6-19) we have

<center>

$F[x/g(a, z)] = Q(g(a, z)) ∨ ∀y P(f(g(a, z), y)) ∧ ∃x R(x, y)$.

</center>
:::

### 6.6.3. Semantics

Recall [Definitions 6.5](#definition-6-5) and [6.6](#definition-6-6). *In predicate logic, the free symbols of a formula are all predicate symbols, all function symbols, and all occurrences of free variables.* An interpretation, called *structure* in the context of predicate logic, must hence define a universe and the meaning of all these free symbols.

::: info Definition 6.34. (Interpretation) {#definition-6-34}
An *interpretation* or *structure* is a tuple $\mathcal{A} = (U, φ, ψ, ξ)$ where

- $U$ is a non-empty **universe**,
- $\phi$ is a function assigning to each function symbol (in a certain subset of all function symbols) a function, where for a $k$-ary function symbol $f$, $\phi(f)$ is a function $U^k → U$.
- $ψ$ is a function assigning to each predicate symbol (in a certain subset of all predicate symbols) a function, where for a $k$-ary predicate symbol $P$, $ψ(P)$ is a function $U^k → \{0, 1\}$, and where
- $ξ$ is a function assigning to each variable symbol (in a certain subset of all variable symbols) a value in $U$.
:::

For notational convenience, for a structure $\mathcal{A} = (U, φ, ψ, ξ)$ and a function symbol $f$ one usually writes $f^{\mathcal{A}}$ instead of $\phi(f)$. Similarly, one writes $P^{\mathcal{A}}$ instead of $ψ(P)$ and $x^{\mathcal{A}}$ instead of $ξ(x)$. One also writes $U^{\mathcal{A}}$ rather than $U$ to make $\mathcal{A}$ explicit.

[^53]:German: geschlossen

We instantiate [Definition 6.7](#definition-6-7) for predicate logic:

::: info Definition 6.35. (Suitable Structure) {#definition-6-35}
A interpretation (structure) $\mathcal{A}$ is *suitable* for a formula $F$ if it defines all function symbols, predicate symbols, and freely occurring variables of $F$.
:::

::: tip Example 6.20. {#example-6-20}
For the formula

$$F=\forall x\ {\big(}P(x)\lor P(f(x,a)){\big)}$$

a suitable structure $\mathcal{A}$ is given by <br>
$U^{\mathcal{A}} = ℕ$,  <br>
$a^{\mathcal{A}} = 3$,  <br>
$f^{\mathcal{A}}(x, y) = x + y$, <br>
$P^{\mathcal{A}}$ is the "evenness" predicate (i.e., $P^{\mathcal{A}}(x) = 1$ if and only if $x$ is even).

For obvious reasons, we will say (see below) that the formula evaluates to true for this structure.

Another suitable structure $\mathcal{A}$ for $F$ is defined by <br>
$U^{\mathcal{A}} = ℝ$,<br>
$a^{\mathcal{A}} = 2$,<br>
$f^{\mathcal{A}}(x, y) = xy$,<br>
$P^{\mathcal{A}}(x) = 1$ if and only if $x ≥ 0$ (i.e., $P^{\mathcal{A}}$ is the "positiveness" predicate).

For this structure, $F$ evaluates to false (since, for example, $x = −2$ makes $P(x)$ and $P(f(x, a)) = P(2x)$ false).
:::

The semantics of a formula is now defined in the natural way as already implicitly discussed in [Section 2.4]().

::: info Definition 6.36. (Semantics) {#definition-6-36}
For an interpretation (structure) $\mathcal{A} = (U, φ, ψ, ξ)$, we define the value (in $U$) of terms and the truth value of formulas under that structure.

- The value $\mathcal{A}(t)$ of a term $t$ is defined recursively as follows:
    - If $t$ is a variable, i.e., $t = x_i$, then $\mathcal(A)(t) = ξ(x_i)$.
    - If $t$ is of the form $f(t_1, … , t_k)$ for terms $t_1, … , t_k$ and a $k$-ary function symbol $f$, then $\mathcal{A}(t) = \phi(f)(\mathcal{A}(t_1), … , \mathcal{A}(t_k))$.  
  For this definition, we also allow a term to be a (fixed) element $u$ of $U$.

- The truth value of a formula $F$ is defined recursively by [Definition 6.16](#definition-6-16) and
  - If $F$ is of the form $F = P(t_1, . . . , t_k)$ for terms $t_1, … , t_k$ and a $k$-ary predicate symbol $P$, then $\mathcal{A}(F) = ψ(P)(\mathcal{A}(t_1), … , \mathcal{A}(t_k))$.
  - If F is of the form $∀x~G$ or $∃x~G$, then let $A_{[x→u]}$ for $u$ in $U$ be the same structure as $\mathcal{A}$ except that $ξ(x)$ is overwritten by u (i.e., $ξ(x) = u$):  
     
     $\mathcal{A}(\forall x\,G) =
     \begin{cases}
     1 & \text{if } \mathcal{A}_{[x \to u]}(G) = 1 \text{ for all } u \text{ in } U \\
     0 & \text{else}
     \end{cases}$
     
     $\mathcal{A}(\exists x\,G) = 
     \begin{cases}
       1 & \text{if } \mathcal{A}_{[x \to u]}(G) = 1 \text{ for some } u\text{ in }U \\
       0 & \text{else}
     \end{cases}$
:::

This definition defines the function $σ(F, \mathcal{A})$ of [Definition 6.8](#definition-6-8). Note that the definition is recursive not only on formulas (see the second bullet of the definition), but also on structures. Namely, $\mathcal{A}(∀x G)$ and $\mathcal{A}(∃x G)$ are defined in terms of all structures $\mathcal{A}_{[x→u]}(G)$ for $u$ in $U$. To evaluate the truth value of a formula $F = ∀x~G$ one needs to apply [Definition 6.36](#definition-6-36) recursively, for formula $G$ and all structures $\mathcal{A}_{[x→u]}$ .

The basic concepts discussed in [Section 6.3](#_6-3-elementary-general-concepts-in-logic) such as satisfiable, tautology, model, logical consequence, and equivalence, are now immediately instantiated for predicate logic.

Note that the syntax of predicate logic does not require nested quantified variables in a formula to be distinct, but we will avoid such overload of variable names to avoid any confusion. For example, the formula $∀x~(P(x) ∨ ∃y Q(y))$ is equivalent to $∀x~(P(x) ∨ ∃x Q(x))$.

### 6.6.4. Predicate Logic with Equality

Reexamining the syntax of predicate logic it may surprise that the equality symbol "$=$" is not allowed. For example, $∃x f(x) = g(x)$ is not a formula. However, one can extend the syntax and the semantics of predicate logic to include the equality symbol "$=$" with its usual meaning. This is left as an exercise.

### **6.6.5 Some Basic Equivalences Involving Quantifiers**

In addition to the equivalences stated in Lemma 6.1), we have:

::: info Lemma 6.7. {#lemma-6-7}
*For any formulas* $F$, $G$, *and* $H$*, where* $x$ *does not occur free in* $H$*, we have*

1) $\neg(\forall x\,F) \equiv \exists x\,\neg F$;

2) $\neg(\exists x\,F) \equiv \forall x\,\neg F$;

3) $(\forall x\,F) \wedge (\forall x\,G) \equiv \forall x\,(F \wedge G)$;

4) $(\exists x\,F) \vee (\exists x\,G) \equiv \exists x\,(F \vee G)$;

5) $\forall x\,\forall y\,F \equiv \forall y\,\forall x\,F$;

6) $\exists x\,\exists y\,F \equiv \exists y\,\exists x\,F$;

7) $(\forall x\,F) \wedge H \equiv \forall x\,(F \wedge H)$;

8) $(\forall x\,F) \vee H \equiv \forall x\,(F \vee H)$;

9) $(\exists x\,F) \wedge H \equiv \exists x\,(F \wedge H)$;

10) $(\exists x\,F) \vee H \equiv \exists x\,(F \vee H)$;
:::

**Proof.** We only prove statement 7). The other proofs are analogous.

We have to show that every structure $\mathcal{A}$ that is a model for $(∀x~F) ∧ H$ is also a model for $∀x (F ∧ H)$, and vice versa.

Recall that the definition of the semantics of a formula $∀x~G$ for a structure $\mathcal{A}$ is that, for all $u$ in $U$, $\mathcal{A}_{[x→u]}(G) = 1$.

To prove the first direction, i.e., $(∀x~F) ∧ H \models ∀x~(F ∧ H)$, suppose that $\mathcal{A}((∀x F) ∧ H) = 1$ and hence[^54] that (i) $\mathcal{A}(∀x~F) = 1$ and that (ii) $\mathcal{A}(H) = 1$. Recall that (i) means that $\mathcal{A}_{[x→u]}(F) = 1$ for all $u$ in $U$, and (ii) means that $\mathcal{A}_{[x→u]}(H) = 1$ for all $u$ in $U$ (since $x$ does not occur free in $H$ and hence $\mathcal{A}_{[x→u]}(H) = \mathcal{A}(H)$). Therefore $\mathcal{A}_{[x→u]}(F ∧ H) = 1$ for all $u$ in $U$, which means that $\mathcal{A}(∀x (F ∧ H)) = 1$, which was to be proved.

To prove the other direction, i.e. $∀x (F ∧ H) \models (∀x F) ∧ H$, suppose that $\mathcal{A}(∀x (F ∧ H)) = 1$, i.e., for all $u$ in $U$, $\mathcal{A}_{[x→u]}(F ∧ H) = 1$, which means that (i) $\mathcal{A}_{[x→u]}(F) = 1$ for all $u$ in $U$ and (ii) $\mathcal{A}_{[x→u]}(H) = 1$ for all $u$ in $U$. By definition, (i) means that $\mathcal{A}(∀x~F) = 1$. Moreover, because $x$ does not occur free in $H$, by (ii) we have $\mathcal{A}_{[x→u]}(H) = A(H) = 1$ for all $u$, which by definition means $\mathcal{A} \models H$. Hence $\mathcal{A} \models (∀x~F) ∧ H$.

The following natural lemma is stated without proof.

::: info Lemma 6.8. {#lemma-6-8}
*If one replaces a sub-formula* $G$ *of a formula* $F$ *by an equivalent (to* $G$) *formula* $H$*, then the resulting formula is equivalent to* $F$.
:::

::: tip Example 6.21. {#example-6-21}
$∀y~Q(x, y)$ is a sub-formula of $∃x~(P(x) ∨ ∀y~Q(x, y))$. Therefore

$$\exists x\;(P(x)\;\vee\;\forall y\;Q(x,y))\;\;\equiv\;\;\exists x\;(P(x)\;\vee\;\neg\exists y\;\neg Q(x,y))$$

because $∀y~Q(x, y) ≡ ¬∃y~¬Q(x, y)$.
:::

### 6.6.6. Substitution of Bound Variables

The following lemma states that the name of a bound variable carries no semantic meaning and can therefore be replaced by any other variable name that does not occur elsewhere. This is called *bound substitution*.

::: info Lemma 6.9. {#lemma-6-9}
*For a formula* $G$ *in which* $y$ *does not occur, we have*

- $∀x~G ≡ ∀y~G[x/y]$,
- $∃x~G ≡ ∃y~G[x/y]$.
:::

**Proof:** For any structure ${\mathcal A} = (U, \phi, ψ, ξ)$ and $u$ in $U$ we have

$${\mathcal A}_{[x\to u]}(G)\;=\;{\mathcal A}_{[y\to u]}(G[x/y]).$$

[^54]:according to the semantics of $∧$, see [Definition 6.36](#definition-6-36)

Therefore $∀x~G$ is true for exactly the same structures for which $∀y~G[x/y]$ is true.

::: tip Example 6.22. {#example-6-22}
The formula $∀x~∃y~(P(x, f(y)) ∨ Q(g(x), a))$ is equivalent to the formula $∀u~∃v~(P(u, f(v)) ∨ Q(g(u), a))$ obtained by substituting $x$ by $u$ and $y$ by $v$.
:::

::: info Definition 6.37. (Rectified form) {#definition-6-37}
A formula in which no variable occurs both as a bound and as a free variable and in which all variables appearing after the quantifiers are distinct is said to be in *rectified*[^55] form.
:::

By appropriately renaming quantified variables one can transform any formula into an equivalent formula in rectified form.

### 6.6.7. Normal Forms

It is often useful to transform a formula into an equivalent formula of a specific form, called a normal form. This is analogous to the conjunctive and disjunctive normal forms for formulas in propositional logic.

::: info Definition 6.38. (Prenex form) {#definition-6-38}
A formula of the form

$$Q_{1}x_{1}\;Q_{2}x_{2}\;\cdots~Q_{n}x_{n}\;G,$$

where the $Q_i$ are arbitrary quantifiers ($∀$ or $∃$) and $G$ is a formula free of quantifiers, is said to be in *prenex form* [^56].
:::

::: info Theorem 6.10. {#theorem-6-10}
*For every formula there is an equivalent formula in prenex form.*
:::

**Proof:** One first transforms the formula into an equivalent formula in rectified form and then applies the equivalences of [Lemma 6.7](#lemma-6-7) move up all quantifiers in the formula tree, resulting in a prenex form of the formula.

::: tip Example 6.23. {#example-6-23}

$$
\begin{aligned}
\neg(\forall x\, P(x,y) \wedge \exists y\, Q(x,y,z)) 
&\;\equiv\; \neg(\forall u\, P(u,y) \wedge \exists v\, Q(x,v,z)) \\
&\;\equiv\; \neg\forall u\, P(u,y) \;\vee\; \neg\exists v\, Q(x,v,z) \\
&\;\stackrel{_{(1)}}\equiv\; \exists u\, \neg P(u,y) \;\vee\; \neg\exists v\, Q(x,v,z) \\
&\;\stackrel{_{(2)}}\equiv\; \exists u\, \neg P(u,y) \;\vee\; \forall v\, \neg Q(x,v,z) \\
&\;\stackrel{_{(10)}}\equiv\; \exists u(\neg P(u,y) \;\vee\; \forall v\,\neg Q(x,v,z)) \\
&\;\equiv\; \exists u(\forall v\,\neg Q(x,v,z)\;\vee\; \neg P(u,y)) \\
&\;\stackrel{_{(8)}}\equiv\; \exists u(\forall v(\neg Q(x,v,z) \;\vee\; \neg P(u,y))) \\
&\;\equiv\; \exists u\,\forall v(\neg Q(x,v,z) \;\vee\; \neg P(u,y)) \\
&\equiv\; \exists u\,\forall v(\neg P(u,y) \;\vee\; Q(x,v,z))
\end{aligned}
$$

In the first step we have renamed the bound variables, in the second step we made use of the equivalence $¬(F ∧ G) ≡ ¬F ∨ ¬G$ ([Lemma 6.1 8)](#lemma-6-1)), and then we have applied the rules of [Lemma 6.7](#lemma-6-7), as indicated. We have also made explicit the use of the commutative law for $∨$ ([Lemma 6.1 2)](#lemma-6-1)). In the second last step, the removal of parentheses is made explicit. The last step, again making use of [Lemma 6.1 2)](#lemma-6-1), is included (only) to arrive at a form with the same order of occurrence of $P$ and $Q$.
:::

[^55]:German: bereinigt

[^56]:German: Pränexform

One can also transform every formula $F$ into a formula $G$ in prenex form that only contains universal quantifiers ($∀$). However, such a formula is in general not equivalent to $F$, but only equivalent with respect to satisfiability. In other words, $F$ is satisfiable if and only if $G$ is satisfiable. Such a normal form is called *Skolem normal form*. This topic is beyond the scope of this course.

### 6.6.8. Derivation Rules

It is beyond the scope of this course to systematically discuss derivation rules for predicate logic, let alone an entire calculus. But, as an example, we discuss one such rule, called *universal instantiation* (or also *universal elimination*). It states that for any formula $F$ and any term $t$, one can derive from the formula $∀xF$ the formula $F[x/t]$, thus eliminating the quantifier $∀$: [^57]

$$\forall x F\ \vdash\ F[x/t]$$

This rule is justified by the following lemma (proof left as an exercise).

::: info Lemma 6.11. {#lemma-6-11}
*For any formula* $F$ *and any term* $t$ *we have*

<center>

$∀xF \models F[x/t]$.
</center>
:::

### 6.6.9. An Example Theorem and its Interpretations

The following apparently innocent theorem is a powerful statement from which several important corollaries follow as special cases. The example illustrates

[^57]:Note that if $x$ does not occur free in $F$, the statement still holds but in this case is trivial.

that one can prove a general theorem in predicate logic and, because it is a tautology, it can then be instantiated for different structures (i.e., interpretations), for each of which it is true.

::: info Theorem 6.12. {#theorem-6-12}
$$¬∃x∀y~(P(y, x) ↔ ¬P(y, y))$$
:::

Recall that the statement of the theorem means that the formula $¬∃x∀y P(y, x) ↔ ¬P(y, y)$ is a tautology, i.e., true for any suitable structure, i.e., for any universe and any choice of the predicate $P$.

**Proof:** We can transform the formula by equivalence transformations:

$$
\begin{aligned}
\neg \exists x~\forall y~(P(y,x) \leftrightarrow \neg P(y,y))
&\;\equiv\; \forall x~\neg \forall y~(P(y,x) \leftrightarrow \neg P(y,y)) \\
&\;\equiv\; \forall x~\exists y~\neg (P(y,x) \leftrightarrow \neg P(y,y)) \\
&\;\equiv\; \forall x~\exists y~(P(y,x) \leftrightarrow P(y,y))
\end{aligned}
$$



where we have made use of $¬(F ↔ ¬G) ≡ (F ↔ G)$, which is easily checked to hold by comparing the truth tables of $¬(A ↔ ¬B)$ and $(A ↔ B)$

To see that the latter formula (i.e., $∀x~∃y~(P(y, x) ↔ P(y, y))$ ) is a tautology, let $\mathcal{A}$ be an arbitrary suitable interpretation, which defines the universe $U^\mathcal{A}$ and the predicate $P^\mathcal{A}$. Below we omit the superscripts $\mathcal{A}$ and write simply $U$ and $P$. Since $\mathcal{A}$ is arbitrary, it suffices to show that

$${\mathcal{A}}(\forall x\ \exists y\ {\big(}P(y,x)\leftrightarrow P(y,y){\big)}{\big)}=1.$$

This can be shown as follows: For every $u$ in $U$ we have

$${\mathcal{A}}{\big(}P(u,u)\leftrightarrow P(u,u){\big)}=1.$$

Hence for every $u$ in $U$ we have

$${\mathcal{A}}_{[x\to u][y\to u]}\left(P(y,x)\leftrightarrow P(y,y)\right)=1,$$

and therefore for every fixed $u$ in $U$ we have

$${\mathcal{A}}_{[x\to u]}{\big(}\exists y\ P(y,x)\leftrightarrow P(y,y){\big)}=1,$$

and therefore we have

$${\mathcal{A}}{\big(}\forall x\;\exists y\;P(y,x)\leftrightarrow P(y,y){\big)}=1,$$

as was to be shown.

Let us now interpret [Theorem 6.12](#theorem-6-12). We can instantiate it for different universes and predicates. The first interpretation is Russel's paradox:

::: info Corollary 6.13. {#corollary-6-13}
*There exists no set that contains all sets* $S$ *that do not contain themselves, i.e.,* $\{S| S \not∈ S\}$ *is not a set.*
:::

**Proof:** We consider the universe of all sets[^58] and, to be consistent with the chapter on set theory, use the variable names $R$ instead of $x$ and $S$ instead of $y$. [^59] Moreover, we consider the specific predicate $P$ defined as $P(S, R) = 1$ if and only if $S ∈ R$. Then [Theorem 6.12](#theorem-6-12) specializes to

$$\neg\exists R\ \forall S\ (S\in R\leftrightarrow S\not\in S).$$

This formula states that there is no set $R$ such that for a set (say $S$) to be in $R$ is equivalent to not being contained in itself ($S \not∈ S$).

It is interesting to observe that Russell's paradox is a fact that holds more generally than in the universe of sets and where $P(x, y)$ is defined as $x ∈ y$. We state another corollary:

::: tip Example 6.24. {#example-6-24}
The reader can investigate as an exercise that [Theorem 6.12](#theorem-6-12) also explains the so-called barber paradox (e.g. see Wikipedia) which considers a town with a single barber as well as the set of men that do not shave themselves.
:::

The following corollary was already stated as [Theorem 3.23]().

::: info Corollary 6.14. {#corollary-6-14}
*The set* $\{0, 1\}^∞$ *is uncountable.*
:::

We prove the equivalent statement: Every enumeration of elements of $\{0, 1\}^∞$ does not contain all elements of $\{0, 1\}^∞$.

**Proof:** We consider the universe $\mathbb{N}$ and a fixed enumeration of elements of $\{0, 1\}^∞$, and we interpret $P(y, x)$ as the $y$th bit of the $x$th sequence of the enumeration. Then [Theorem 6.12](#theorem-6-12), $¬∃x∀y P(y, x) ↔ ¬P(y, y)$, states that there exists no index $x$, i.e., no sequence in the enumeration, such that for all $y$, the $y$th bit on that sequence is equal to the negation of the $y$th bit on the yth sequence. But the sequence given by $y → ¬P(y, y)$ is a well-defined sequence in $\{0, 1\}^∞$, and we just proved that it does not occur in the enumeration.

Note that the proof of this corollary contains Cantor's diagonalization argument, which is hence implicite in [Theorem 6.12](#theorem-6-12).

We discuss a further use of the theorem. If we understand a program as describable by a finite bit-string, or, equivalently, a natural number (since there is a bijection between finite bit-strings and natural numbers), and if we consider programs that take a natural number as input and output $0$ or $1$, then we obtain the following theorem. (Here we ignore programs that do not halt (i.e., loop forever), or, equivalently, we interpret looping as output $0$.) The following corollary was already stated as [Corollary 3.24](). [^60]

[^58]:The universe of all sets is not a set itself. Formally, the universe in predicate logic need not be a set (in the sense of set theory), it can be a "collection" of objects.

[^59]:The particular variable names ($R$ and $S$) are not relevant and are chosen simply to be compatible with the chapter on set theory where sets were denoted by capital letters and Russel's proposed set was called $R$. Here we have deviated from the convention to use only small letters for variables.

::: info Corollary 6.15. {#corollary-6-15}
*There are uncomputable functions* $ℕ → \{0, 1\}$.
:::

**Proof:** We consider the universe $ℕ$, and a program is thought of as represented by a natural number. Let $P(y, x) = 1$ if and only if the bit that program $x$ outputs for input $y$ is $1$. [Theorem 6.12](#theorem-6-12), $¬∃x∀y~(P(y, x) ↔ ¬P(y, y))$, states that there exists no program $x$ that (for all inputs $y$) computes the function $y \mapsto ¬P(y, y)$, i.e., this function is uncomputable. <span class="right">$\Box$</span>

The above corollary was already discussed as [Corollary 3.24](#corollary-3-24), as a direct consequence of [Corollary 6.14](#corollary-6-14) (i.e., of [Theorem 3.23]()). The proof given here is stronger in the sense that it provides a concrete function, namely the function $y ↦ ¬P(y, y)$, that is not computable.[^61] We state this as a corollary:

::: info Corollary 6.16 {#corollary-6-16}
*The function* $ℕ → \{0, 1\}$ *assigning to each* $y ∈ ℕ$ *the complement of what program* $y$ *outputs on input* $y$*, is uncomputable.*
:::

We point out that the corollary does not exclude the existence of a program that computes the function for an overwhelming fraction of the $y$, it excludes only the existence of a program that computes the function for all but finitely many arguments.

## **6.7 Beyond Predicate Logic**

The expressiveness of every logic is limited. For example, one can not express metatheorems about the logic as formulas within the logic. It is therefore no surprise that the expressiveness of predicate logic is also limited.

The formula $F = ∀x∃y~P(x, y)$ can equivalently be stated as follows: There exists a (unary) function $f : U ↦ U$ such that $∀x~P(x, f(x))$. The function $f$ assigns to every $x$ one of the $y$ for which $P(x, y)$. Such a $y$ must exist according to $F$.

In other words, the pair of quantifiers $∀x∃y$ is equivalent to the existence of a function. However, we can not write this as a formula since function symbols are not variables and can not be used with a quantifier. The formula $∃f~P(x, f(x))$ is not a formula in predicate (or first-order) logic. Such formulas exist only in second-order logic, which is substantially more involved and not discussed here.

Predicate logic is actually more limited than one might think. As an example, consider the formula

<center>

$∀w~∀x~∃y~∃z~P(w, x, y, z)$.

</center>

[^60]:Explaining the so-called Halting problem, namely to decide whether a given program halts for a given input, would require a more general theorem than [Theorem 6.12](#theorem-6-12), but it could be explained in the same spirit.

[^61]:This function of course depends on the concrete programming language which determines the exact meaning of a program and hence determines $P$.

In this formula, $y$ and $z$ can depend on both $w$ and $x$. It is not possible to express, as a formula in predicate logic, that in the above formula, $y$ must only depend on $w$ and $z$ must only depend on $x$. This appears to be an artificial restriction that is not desirable.

