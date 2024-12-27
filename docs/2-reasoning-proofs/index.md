# <small>Chapter 2</small><br>Mathematical Reasoning, Proofs, and a First Approach to Logic


## 2.1. Mathematical Statements

### 2.1.1. The Concept of a Mathematical Statement

People make many statements in life, like "I love you", "tomorrow it will rain", "birds can fly", or "Roger Federer is the best tennis player". By making the statement, the person making it intends to claim that it is true. However, most such statements are not sufficiently precise to be considered true or false, and often they are subjective. This is in contrast to mathematical statements.

::: info Definition 2.1.{#definition-2-1}
A *mathematical statement* (also called *proposition*) is a statement that is true or false in an absolute, indisputable sense, according to the laws of mathematics.
:::

We often simply say "statement" instead of "mathematical statement". A mathematical statement that is known to be true is often called a **theorem**, a **lemma**, or a **corollary**. [^1] A mathematical statement not known (but believed) to be true or false is often called a *conjecture*. An *assumption* is a statement not known to be true but assumed to be true in a certain line of reasoning. Sometimes, before a proof of a true mathematical statement is given, it is also called *assertion*[^2] or *claim*. Examples of mathematical statements are

[^1]:The term "theorem" is usually used for an important result, whereas a lemma is an intermediate, often technical result, possibly used in several subsequent proofs. A corollary is a simple consequence (e.g. a special case) of a theorem or lemma.

- $71$ is a prime number.
- If $p$ is a prime number, then $2^p − 1$ is also a prime number.
- Every natural number is the sum of at most four square numbers.  
  (Example: $22 = 4^2 + 2^2 + 1^2 + 1^2$ and $74 = 6^2 + 5^2 + 3^2 + 2^2$ .)
- Every even natural number greater than $2$ can be expressed as the sum of two primes.[^3] For example, $108 = 37 + 71$ and $162 = 73 + 89$.
- Any $n$ lines $ℓ_1$, … , $ℓ_n$ in the plane, no two of which are parallel, intersect in one point (see [Example 2.4](#example-2-4)).
- For the chess game there exists a winning strategy for the player making the first move (playing "white").

The first statement is easily shown to be true. The second statement is false, and this can be proved by giving a counter-example: $11$ is prime but $2^{11} − 1 = 2047 = 23·89$ is not prime.[^4] The third statement is true but by no means obvious (and requires a sophisticated proof). The fourth statement is not known to be true (or false). The fifth statement is false. The sixth statement is not known to be true (or false).

::: tip Example 2.1.
Consider the following statement which sounds like a statement of interest in Computer Science: "There is no algorithm for factoring any $n$-bit integer in $n^3$ steps". This is not a precise mathematical statement because its truth (namely the complexity of the best algorithm) generally depends on the particular computational model one is considering. A goal of Theoretical Computer Science (TCS) is therefore to define precise models of computation and the complexity of algorithms, allowing to make such claims precise.
:::

If one makes a statement, say $S$, for example in the context of these lecture notes, there can be two different meanings. The first meaning is that by stating it one claims that $S$ is true, and the second meaning is simply to discuss the statement itself (for example as an assumption), independently of whether it is true or not. We should try to distinguish clearly between these two meanings.

### 2.1.2. Composition of Mathematical Statements

We can derive new mathematical statements from given statements. For example, when given three statements $S$, $T$ , and $U$, then we can define the following well-defined statement: Exactly two the statements $S$, $T$, and $U$ are true. Four specific forms of derived statements are discussed below. Let $S$ and $T$ be mathematical statements.

[^2]: German: Behauptung

[^3]: This statement is called the Goldbach conjecture and is one of the oldest unproven conjectures in mathematics.

[^4]: $2^p − 1$ is prime for most primes p (e.g. for $2$, $3$, $5$, $7$, $13$ and many more), but not all.

- **Negation:** $S$ is false.
- **And:** $S$ and $T$ are (both) true.
- **Or**: At least one of $S$ and $T$ is true.
- **Implication:** If $S$ is true, then $T$ is true.

Examples of such derived statements are:

- "$4$ is even" is false.
- $4$ is an even number "_and_" $71$ is a prime number.
- $5$ is an even number "_and_" $71$ is a prime number.
- $5$ is an even number "_or_" $71$ is a prime number.

The first statement is false because "$4$ is even" is true. The second statement is true because both statements "$4$ is an even number" and "$71$ is a prime number" are true. In contrast, the third statement is false because the statement "$5$ is an even number" is false. However, the fourth statement is again true because "$71$ is a prime number" is true and hence it is irrelevant whether "$5$ is an even number" is true or false.

For the first three types of statements, there is no particular notation used in mathematics.[^5] However, interestingly, for the fourth type (implication) there exists a notation that is often used, namely

$S \implies T$.

One also says *"*$S$ *implies* $T$*"*. The statement $S \implies T$ is false if $S$ is true and $T$ is false, and in all other three cases, $S \implies T$ is true. In other words, the first three statements below are true while the last one is false.

- $4$ is an even number $\implies$ $71$ is a prime number.
- $5$ is an even number $\implies$ $71$ is a prime number.
- $5$ is an even number $\implies$ $70$ is a prime number.
- $4$ is an even number $\implies$ $70$ is a prime number.

We point out that $S \implies T$ does not express any kind of *causality* like "*because* $S$ is true, $T$ is also true" (but see the discussion in [Section 2.2.3](#_2-2-3-two-meanings-of-the-symbol)).

Similarly, $S \iff T$ means that $S$ is true if and only if $T$ is true. This can equivalently be stated as "$S$ implies $T$ and $T$ implies $S$."

[^5]: Note that, when introducing logic and its symbols, we will for example use the symbol $∧$ for the logical "and" of two formulas, but we avoid using the symbols of logic outside of logic. Thus, in order to avoid confusion, we avoid writing something like $S ∧ T$ for "$S$ and $T$."

### 2.1.3. Mathematical Statements in Computer Science

Many statements relevant in Computer Science are mathematical statements which one would like to prove. We give a few examples of such statements:

- Program $P$ terminates (i.e., does not enter an infinite loop) for all inputs.
- Program $P$ terminates within $k$ computation steps for all inputs.
- Program $P$ computes $f(x)$ for every input $x$, where $f$ is a function of interest.
- Algorithm $A$ solves problem $S$ within accuracy $ε$.
- The error probability of file transmission system $F$ in a file transmission is at most $p$ (where $p$ can be a function of the file length).
- The computer network $C$ has the property that if any $t$ links are deleted, every node is still connected with every other node.
- Encryption scheme $E$ is secure (for a suitable definition of security).
- Cryptocurrency system $C$ operates correctly as long as a majority of the involved nodes behave honestly, even if all the other nodes behave arbitrarily maliciously.
- Database system $D$ provides data privacy (for a suitable definition of privacy).

Programs, algorithms, encryption schemes, etc., are (complex) discrete mathematical objects, and proving statements like those mentioned above is highly non-trivial. This course is not about programs or algorithms, let alone encryption schemes, but it provides the foundations so that later courses can reason mathematically about these objects.

## 2.2. The Concept of a Proof

The purpose of a proof is to demonstrate (or prove) a mathematical statement $S$. In this section we informally discuss the notion of a proof. We also discuss several proof strategies. In [Chapter 6](/6-logic) about logic, the notion of a proof in a proof calculus will be formalized.

### 2.2.1. Examples of Proofs

We already gave examples of proofs in Chapter 1. We give one more simple example.

::: tip Example 2.2.{#example-2-2}
**Claim**: The number $n = 2^{143} - 1$ is not a prime.

**Proof:** $n$ is divisible by $2047$, as one can check by a (for a computer) simple calculation.

That this is true can even be easily seen without doing a calculation, by proving a more general claim of which the above one is a special case:

**Claim:** $n$ is not prime $\implies 2^n − 1$ is not prime.[^6]

**Proof:** If $n$ is not a prime, then (by definition of prime numbers) $n = ab$ with $a > 1$ and $a < n$. Now we observe that $2^a − 1$ divides $2^{ab} − 1$:

$$2^{a b}-1\;=\;(2^{a}-1)\sum_{i=0}^{b-1}2^{i a}\;=\;(2^{a}-1)\,\left(2^{(b-1)a}+2^{(b-2)a}+\cdots+2^{a}+1\right)$$

as can easily be verified by a simple calculation. Since $2^a − 1 > 1$ and $2^a − 1 < 2^{ab} − 1$, i.e., $2^a − 1$ is a non-trivial divisor of $2^{ab} − 1$, this means that $2^{ab} − 1$ is not a prime, concluding the proof of the claim.

Let us state a warning. Recall from the previous section that


[^6]: It is understood that this statement is meant to hold for an arbitrary $n$.

<center>

$n$ is prime $\quad\implies\quad2^n-1$ is prime

</center> 

is a *false* statement, even though it may appear at first sight to follow from the above claim. However, we observe that if $S \implies T$ is true, then generally it does not follow that if $S$ is false, then $T$ is false.
:::

::: tip Example 2.3. {#example-2-3}
An integer $n$ is called a *square* if $n = m · m$ for some integer $m$. Prove that if $a$ and $b$ are squares, then so is $a · b$.


<div class="grid-rows">
<div><div>

$a$ and $b$ are squares

</div><div></div></div>
<div>
<div>

$\dot\implies\quad a=u\cdot u$ and $\ b=v\cdot v$ for some $u$ and $v$

</div>
<div>

(def. of squares)

</div></div>
<div>
<div>

$\dot\implies\quad a\cdot b=(u\cdot u)\cdot(v\cdot v)$

</div>
<div>

(replace $a$ by $u\cdot u$ and $b$ by $v\cdot v$)

</div></div>
<div>
<div>

$\dot\implies\quad a\cdot b=(u\cdot v)\cdot(u\cdot v)$.

</div>
<div>

(commutative and associative laws)

</div></div>
<div>
<div>

$\dot\implies\quad a\cdot b$ is a square

</div>
<div>

(def. of squares)

</div></div></div>

The above proof follows a standard pattern of proofs as a sequence of implications, each step using the symbol $\dot\implies$. Such a proof step requires that the justification for doing the step is clear. Often one justifies the proof step either in the accompanying text or as a remark on the same line as the implication statement (as in the above proof). But even more often the justification for the step is simply assumed to be understood from the context and not explicitly stated, which can sometimes make proofs hard to follow or even ambiguous.
:::

### 2.2.2. Examples of False Proofs

As a next motivating example, let us prove a quite surprising assertion.[^7]

[^7]: This example is taken from the book by Matousek and Nesetril.

::: tip Example 2.4.{#example-2-4}
**Claim:** Any $n$ lines $ℓ_1,$ … $,ℓ_n$ in the plane, no two of which are parallel, intersect in one point (i.e., have one point in common).

**Proof:** The proof proceeds by induction.[^8] The induction basis is the case $n = 2$: Any two non-parallel lines intersect in one point. The induction hypothesis is that any $n$ lines intersect in one point. The induction step states that then this must be true for any $n+1$ lines. The proof goes as follows. By the hypothesis, the $n$ lines $ℓ_1, … ,ℓ_n$ intersect in a point $P$. Similarly, the $n$ lines $ℓ_1, … ,ℓ_{n−1}$, $ℓ_{n+1}$ intersect in a point $Q$. The line $ℓ_1$ lies in both groups, so it contains both $P$ and $Q$. The same is true for line $ℓ_{n−1}$. But $ℓ_1$ and $ℓ_{n−1}$ intersect at a single point, hence $P = Q$. This is the common point of all lines $ℓ1, … ,ℓ_{n+1}$.
:::

Something must be wrong! (What?) This example illustrates that proofs must be designed with care. Heuristics and intuition, though essential in any engineering discipline as well as in mathematics, can sometimes be wrong.

:::tip Example 2.5.{#example-2-5}
In the lecture we present a "proof" for the statement $2 = 1$.
:::

### 2.2.3. Two Meanings of the Symbol $\implies$

It is important to note that the symbol $\implies$ is used in the mathematical literature for two different (but related) things:

- to express composed statements of the form $S \implies T$ [(see Section 2.1.2)](#_2-1-2-composition-of-mathematical-statements),
- to express a derivation step in a proof, as above.

To make this explicit and avoid confusion, we use a slightly different symbol $\dot\implies$ for the second meaning.[^9] Hence $S \dot\implies T$ means that $T$ can be obtained from $S$ by a proof step, and in this case we also know that the statement $S \implies T$ is true. However, conversely, if $S \implies T$ is true for some statements $S$ and $T$ , there may not exist a proof step demonstrating this, i.e. $S \dot\implies T$ may not hold.

An analogous comment applies to the symbol $\iff$, i.e., $S \dot\iff T$ can be used to express that $T$ follows from $S$ by a simply proof step, and also $S$ follows from $T$ by a simply proof step.

### 2.2.4. Proofs Using Several Implications

[Example 2.3](#example-2-3) showed a proof of a statement of the form $S \implies T$ using a sequence of several implications of the form $S \dot\implies S_2$, $S_2 \dot\implies S_3$, $S_3 \dot\implies S_4$, and $S_4 \dot\implies T$.

[^8]:Here we assume some familiarity with proofs by induction; in [Section 2.6.10](#_2-6-10-proofs-by-induction) we discuss them in depth.

[^9]:This notation is not standard and only used in these lecture notes. The symbol $\dot\implies$ is intentionally chosen very close to the symbol $\implies$ to allow someone not used to this to easily overlook the difference.

A proof based on several implications often has a more general form: The implications do not form a linear sequence but a more general configuration, where each implication can assume several of the already proved statements. For example, one can imagine that in order to prove a given statement $T$, one starts with two (known to be) true statements $S_1$ and $S_2$ and then, for some statements $S_3, … ,S_7$, proves the following six implications:

- $S_1 \dot\implies S_3$,
- $S_1 \dot\implies S_4$,
- $S_2 \dot\implies S_5$,
- $S_3$ and $S_5 \dot\implies S_6$,
- $S_1$ and $S_4 \dot\implies S_7$, as well as
- $S_6$ and $S_7 \dot\implies T$.

::: tip Example 2.6.{#example-2-6}
In the lecture we demonstrate the proof of [Example 2.2](#example-2-2) in the above format, making every intermediate statement explicit.
:::

### 2.2.5. An Informal Understanding of the Proof Concept

There is a common informal understanding of what constitutes a proof of a mathematical statement S. Informally, we could define a proof as follows:

::: info Definition 2.2. *(Informal.)*
A *proof* of a statement $S$ is a sequence of simple, easily verifiable, consecutive steps. The proof starts from a set of axioms (things postulated to be true) and known (previously proved) facts. Each step corresponds to the application of a derivation rule to a few already proven statements, resulting in a newly proved statement, until the final step results in $S$.
:::

Concrete proofs vary in length and style according to

- which axioms and known facts one is assuming,
- what is considered to be easy to verify,
- how much is made explicit and how much is only implicit in the proof text, and
- to what extent one uses mathematical symbols (like $\dot\implies$) as opposed to just writing text.

### 2.2.6. Informal vs. Formal Proofs

Most proofs taught in school, in textbooks, or in the scientific literature are intuitive but quite informal, often not making the axioms and the proof rules explicit. They are usually formulated in common language rather than in a rigorous mathematical language. Such proofs can be considered completely correct if the reasoning is clear. An informal proof is often easier to read than a pedantic formal proof.

However, a proof, like every mathematical object, can be made rigorous and formally precise. This is a major goal of *logic* (see [Section 2.2.7](#_2-2-7-the-role-of-logic) and [Chapter 6](/6-logic)). There are at least three (related) reasons for using a more rigorous and formal type of proof.

- **Prevention of errors.** Errors are quite frequently found in the scientific literature. Most errors can be fixed, but some can not. In contrast, a completely formal proof leaves no room for interpretation and hence allows to exclude errors.
- **Proof complexity and automatic verification.** Certain proofs in Computer Science, like proving the correctness of a safety-critical program or the security of an information system, are too complex to be carried out and verified "by hand". A computer is required for the verification. A computer can only deal with rigorously formalized statements, not with semiprecise common language, hence a formal proof is required.[^10]
- **Precision and deeper understanding.** Informal proofs often hide subtle steps. A formal proof requires the formalization of the arguments and can lead to a deeper understanding (also for the author of the proof).

There is a trade-off between mathematical rigor and an intuitive, easy-toread (for humans) treatment. In this course, our goal is to do precise mathematical reasoning, but at the same time we will try to strike a reasonable balance between formal rigor and intuition. In Chapters 3 to 5, our proofs will be informal, and the Chapter 6 on logic is devoted to understanding the notion of a formal proof.

A main problem in teaching mathematical proofs (for example in this course) is that it is hard to define exactly when an informal proof is actually a valid proof. In most scientific communities there is a quite clear understanding of what constitutes a valid proof, but this understanding can vary from community to community (e.g. from physics to Computer Science). A student must learn this culture over the years, starting in high school where proof strategies like proofs by induction have probably been discussed. There is no quick and easy path to understanding exactly what constitutes a proof.

The alternative to a relatively informal treatment would be to do everything rigorously, in a formal system as discussed in Chapter 6, but this would probably turn away most students and would for the most parts simply not be manageable. A book that tries to teach discrete mathematics very rigorously is A *logical approach to discrete math* by Gries and Schneider.

[^10]:A crucial issue is that the translation of an informal statement to a formal statement can be error-prone.

### **2.2.7. The Role of Logic**

Logic is the mathematical discipline laying the foundations for rigorous mathematical reasoning. Using logic, every mathematical statement as well as a proof for it (if a proof exists) can, in principle, be formalized rigorously. As mentioned above, rigorous formalization, and hence logic, is especially important in Computer Science where one sometimes wants to automate the process of proving or verifying certain statements like the correctness of a program.

Some principle tasks of logic [(see Chapter 6)](/6-logic) are to answer the following three questions:
 
1. What is a mathematical statement, i.e., in which language do we write statements?
2. What does it mean for a statement to be true?
3. What constitutes a proof for a statement from a given set of axioms?

Logic (see [Chapter 6](/6-logic)) defines the syntax of a language for expressing statements and the semantics of such a language, defining which statements are true and which are false. A logical calculus allows to express and verify proofs in a purely syntactic fashion, for example by a computer.

### **2.2.8. Proofs in this Course**

As mentioned above, in the literature and also in this course we will see proofs at different levels of detail. This may be a bit confusing for the reader, especially in the context of an exam question asking for a proof. We will try to be always clear about the level of detail that is expected in an exercise or in the exam. For this purpose, we distinguish between the following three levels:

- **Proof sketch** or **proof idea:** The non-obvious ideas used in the proof are described, but the proof is not spelled out in detail with explicit reference to all definitions that are used.
- **Complete proof:** The use of every definition is made explicit. Every proof step is justified by stating the rule or the definition that is applied.
- **Formal proof:** The proof is entirely phrased in a given proof calculus.

Proof sketches are often used when the proof requires some clever ideas and the main point of a task or example is to describe these ideas and how they fit together. Complete proofs are usually used when one systematically applies the definitions and certain logical proof patterns, for example in our treatments of relations and of algebra. Proofs in the resolution calculus in [Chapter 6](/6-logic) can be considered to be formal proofs.

## 2.3. A First Introduction to Propositional Logic

We give a brief introduction to some elementary concepts of logic. We point out that this section is somewhat informal and that in the chapter on logic ([Chapter 6](/6-logic)) we will be more rigorous. In particular, we will there distinguish between the *syntax* of the language for describing mathematical statements (called formulas) and the *semantics*, i.e., the definition of the meaning (or validity) of a formula. In this section, the boundary between syntax and semantics is (intentionally) not made explicit.

### 2.3.1. Logical Constants, Operators, and Formulas

::: info Definition 2.3.{#definition-2-3}

The logical values (constants) "$true$" and "$false$" are usually denoted as $1$ and $0$, respectively [^11].

:::

One can define operations on logical values:

::: info Definition 2.4.{#definition-2-4}

- The **negation** (logical $NOT$) of a propositional symbol $A$, denoted as $¬A$,  
 is true if and only if $A$ is false.
- The **conjunction** (logical $AND$) of two propositional symbol $A$ and $B$, denoted $A ∧ B$,  
 is true if and only if both $A$ and $B$ are true.
- The **disjunction** (logical $OR$) of two propositional symbols $A$ and $B$, denoted $A ∨ B$,  
 is true if and only if $A$ or $B$ (or both) are true. [^12]
{.lower-roman}
:::

The logical operators are functions, where $¬$ is a function $\{0, 1\} → \{0, 1\}$ and $∧$ and $∨$ are functions $\{0, 1\} × \{0, 1\} → \{0, 1\}$. These functions can be described by function tables, as follows:

<div class="flex-center">


$A$ | $\lnot A$ 
--|:---------:
 $0$| $1$        
$1$ | $0$

$A$ | $B$ | $A \land B$
:--:|:---:|:--:
$0$ | $0$ | $0$
$0$ | $1$ | $0$
$1$ | $0$ | $0$
$1$ | $1$ | $1$

$A$ | $B$ | $A \lor B$
:--:|:---:|:--:
$0$ | $0$ | $0$
$0$ | $1$ | $1$
$1$ | $0$ | $1$
$1$ | $1$ | $1$

</div>

[^11]:These values $1$ and $0$ are not meant to be the corresponding numbers, even though the same symbols are used.

[^12]:Sometimes $¬A$, $A∧B$, and $A∨B$ are also denoted as $\text{NOT}(A)$, $A~\text{AND}~B$, and $A~\text{OR}~B$, respectively, or a similar notation.

Logical operators can also be combined, in the usual way of combining functions. For example, the formula $A\lor(B\land C)$ has function table

<div class="flex-center">

| $A$ | $B$ | $C$ | $A ∨ (B ∧ C)$ |
|:---:|:---:|:---:|:-------------:|
| $0$ | $0$ | $0$ |      $0$      |
| $0$ | $0$ | $1$ |      $0$      | 
| $0$ | $1$ | $0$ |      $0$      | 
| $0$ | $1$ | $1$ |      $1$      |
| $1$ | $0$ | $0$ |      $1$      |
| $1$ | $0$ | $1$ |      $1$      |
| $1$ | $1$ | $0$ |      $1$      |
| $1$ | $1$ | $1$ |      $1$      |

</div>

A slightly more complicated example is $(A ∧ (¬B)) ∨ (B ∧ (¬C))$ with function table


<div class="flex-center">

| $A$ | $B$ | $C$ | $(A ∧ (¬B)) ∨ (B ∧ (¬C))$ |
|:---:|:---:|:---:|:-------------------------:|
| $0$ | $0$ | $0$ |            $0$            |
| $0$ | $0$ | $1$ |            $0$            | 
| $0$ | $1$ | $0$ |            $1$            | 
| $0$ | $1$ | $1$ |            $0$            |
| $1$ | $0$ | $0$ |            $1$            |
| $1$ | $0$ | $1$ |            $1$            |
| $1$ | $1$ | $0$ |            $1$            |
| $1$ | $1$ | $1$ |            $0$            |

</div>

:::info Definition 2.5. {#definition-2-5}
A correctly formed expression involving the propositional symbols $A, B, C,$ … and logical operators is called a *formula* (of propositional logic).
:::

We introduce a new, logical operator, *implication*, denoted as $A → B$ and defined by the function table


<div class="flex-center">

| $A$ | $B$ | $A → B$ |
|:---:|:---:|:-------:|
| $0$ | $0$ |   $1$   |
| $0$ | $1$ |   $1$   |
| $1$ | $0$ |   $0$   |
| $1$ | $1$ |   $1$   |

</div>

Note that $A → B$ is true if and only if $A$ implies $B$. This means that when $A$ is true, then also $B$ is true. Note that $A → B$ is false if and only if $A$ is true and $B$ is false, or, stated differently, if $B$ is false despite that $A$ is true. $A → B$ can be understood as an alternative notation for $¬A ∨ B$, which has the same function table.

:::tip Example 2.7.{#example-2-7}
Consider the following sentence: If student $X$ reads the lecture notes every week and solves the exercises ($A$), then student $X$ will get a good grade in the exam ($B$). This is an example of an implication $A → B$. Saying that $A → B$ is true does not mean that $A$ is true and it is not excluded that $B$ is true even if $A$ is false, but it is excluded that $B$ is false when $A$ is true. Let's hope the statement $A → B$ is true for you 😄.
:::

*Two-sided implication*, denoted $A ↔ B$, is defined as follows:

| $A$ | $B$ | $A ↔ B$ |
|:---:|:---:|:-------:|
| $0$ | $0$ |   $1$   |
| $0$ | $1$ |   $0$   |
| $1$ | $0$ |   $0$   |
| $1$ | $1$ |   $1$   |

Note that $A ↔ B$ is equivalent to $(A → B) ∧ (B → A)$ in the sense that the two formulas have the same function table.

We now discuss a few notational simplifications. We have already seen that parentheses can sometimes be dropped in a formula without changing its meaning. For example, we can write $A ∨ B ∨ C$ instead of $A ∨ (B ∨ C)$ or $(A ∨ B) ∨ C$.

There are also precedence rules for logical operators which allow to simplify the notation, in the same sense as in algebra one can write $ab + c$ rather than $(a · b) + c$ because $·$ binds stronger than $+$. However, to keep things simple and avoid confusion, we will generally not make use of such rules, except that we adopt the convention that $¬$ binds stronger than anything else. For example, we can write $¬A ∧ B$ instead of $(¬A) ∧ B$, or we can write $A → ¬B$ instead of $A → (¬B)$.

### 2.3.2. Formulas as Functions

An arithmetic expression such as $(a+b)·c$ can be understood as a function. If we consider as domain the natural numbers $\mathbb{N}$, the arithmetic expression $(a + b) · c$ corresponds to the function $\mathbb{N}^3 \mapsto \mathbb{N}$ assigning to every triple $(a, b, c)$ the value $(a + b)· c$, for example the value $42$ to the triple $(4, 2, 7)$ (because $(4 + 2)· 7 = 42$).

Analogously, a logical formula such as $(A ∨ B) ∧ C$ can be interpreted as a *function* from the set of truth assignments for the proposition symbols $A$, $B$, and $C$ to truth values, i.e., as a function $\{0, 1\}^3 \mapsto \{0, 1\}$. For example, the function evaluates to $1$ for $A = 0$, $B = 1$, and $C = 1$.

Since in propositional logic[^13] the domain is finite, a function can be completely characterized by a function table. For example, the function table of the function $\{0, 1\}^3 \mapsto \{0, 1\}$ corresponding to the formula $(A ∧ (¬B)) ∨ (B ∧ (¬C))$ is shown in the previous section.

[^13]:but not for other logics such as predicate logic

### **2.3.3. Logical Equivalence and some Basic Laws**

Different arithmetic expressions can correspond to the same function. For example, the expressions $(a + b) · c$ and $(c · a) + (b · c)$ denote the same functions. Analogously, different logical formulas can correspond to the same function.

::: info Definition 2.6.{#definition-2-6}
Two formulas $F$ and $G$ (in propositional logic) are called **equivalent**, denoted as $F ≡ G$, if they correspond to the same function, i.e., if the truth values are equal for all truth assignments to the propositional symbols appearing in $F$ or $G$.
:::

For example, it is easy to see that $∧$ and $∨$ are commutative and associative, i.e.,

<center>

$A\wedge B\:\equiv\:B\wedge A$ &emsp;  and &emsp; $A\lor B\:\equiv\:B\lor A$.

</center>

as well as

<center>

$A\land(B\wedge C)\ \equiv\ (A\wedge B)\wedge C$.

</center>

Because of this equivalence, we introduce the notational convention that such unnecessary parentheses can be dropped:

<center>

$A\wedge B\wedge C\;\equiv\;A\wedge(B\wedge C)$.

</center>

Similarly we have

$$A\lor(B\lor C)~\equiv~(A\lor B)\lor C$$

and can write $A ∨ B ∨ C$ instead, and we also have

<center>

$\neg(\neg A)\;\equiv\;A$.

</center>

Let us look at some equivalences involving more than one operation, which are easy to check. The operator $∨$ can be expressed in terms of $¬$ and $∧$, as follows:

<center>

$\neg(A\lor B)~\equiv~\neg A\land\neg B$,

</center>

which also means that $A ∨ B ≡ ¬(¬A ∧ ¬B)$. In fact, $¬$ and $∧$ are sufficient to express every logical function (of propositional logic). Similarly we have

<center>

$\neg(A\wedge B)~\equiv~\neg A\vee\neg B$.

</center>

::: tip Example 2.8.{#example-2-8}
$A ↔ B ≡ (A → B) ∧ (B → A) ≡ (A ∧ B) ∨ (¬A ∧ ¬B)$.
:::

::: tip Example 2.9.{#example-2-9}
Here is a more complicated example which the reader can verify as an exercise:

$(A\land(\neg B))\lor(B\land(\neg C))\ \ \equiv\ \ (A\lor B)\land\neg(B\wedge C)$.
:::

The following example shows a distributive law for $∧$ and $∨$. Such laws will be discussed more systematically in [Chapter 6](/6-logic).

::: tip Example 2.10.{#example-2-10}
$(A ∧ B) ∨ C ≡ (A ∨ C) ∧ (B ∨ C)$.
:::

We summarize the basic equivalences of propositional logic:

::: info Lemma 2.1.{#lemma-2-1}
1) $A ∧ A ≡ A$ and $A ∨ A ≡ A$ *(idempotence)*{.right}
2) $A ∧ B ≡ B ∧ A$ and $A ∨ B ≡ B ∨ A$ *(commutativity of $∧$ and $∨$)*{.right}
3) $(A ∧ B)∧ C ≡ A ∧(B ∧ C)$ and $(A ∨ B)∨ C ≡ A ∨(B ∨ C)$ *(associativity)*{.right}
4) $A ∧ (A ∨ B) ≡ A$ and $A ∨ (A ∧ B) ≡ A$ *(absorption)*{.right}
5) $A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C)$ *(first distributive law)*{.right}
6) $A ∨ (B ∧ C) ≡ (A ∨ B) ∧ (A ∨ C)$ *(second distributive law)*{.right}
7) $¬¬A ≡ A$ *(double negation)*{.right}
8) $¬(A ∧ B) ≡ ¬A ∨ ¬B$ and $¬(A ∨ B) ≡ ¬A ∧ ¬B$ *(de Morgan's rules).*{.right}
:::

### 2.3.4. Logical Consequence (for Propositional Logic)

For arithmetic expressions one can state relations between them that are more general than equivalence. For example the relation $a+b ≤ a+b+ (c · c)$ between the expressions $a + b$ and $a + b + (c · c)$. What is meant by the relation is that for all values that $a$, $b$, and $c$ can take on, the inequality holds, i.e., it holds for the functions corresponding to the expressions.

Analogously, one can state relations between formulas. The perhaps most important relation is logical consequence which is analogous to the relation $≤$ between arithmetic expressions.

::: info Definition 2.7.{#definition-2-7}
A formula $G$ is a **logical consequence**[^14] of a formula $F$, denoted

<center>

$F\;\models\;G$,
</center>

if for all truth assignments to the propositional symbols appearing in $F$ or $G$, the truth value of $G$ is $1$ if the truth value of $F$ is $1$.
:::

Intuitively, if we would interpret the truth values $0$ and $1$ as the numbers $0$ and $1$ (which we don't!), then $F \models G$ would mean $F ≤ G$ (as functions).

::: tip Example 2.11.{#example-2-11}
$A ∧ B \models A ∨ B$.
:::

::: tip Example 2.12.{#example-2-12}
Comparing the truth tables of the two formulas $(A∧B)∨(A∧C)$ and $¬B → (A ∨ C)$ one can verify that

$(A ∧ B) ∨ (A ∧ C) \quad\models\quad ¬B → (A ∨ C)$.

Note that the two formulas are not equivalent.
:::

[^14]:German: (logische) Folgerung, logische Konsequenz

::: tip Example 2.13.
The following logical consequence, which the reader can prove as an exercise, captures a fact intuitively known to us, namely that implication is transitive:[^15]

$(A\to B)\wedge(B\to C)\;\models\;A\to C$.

We point out (see also [Chapter 6](#/6-logic)) that two formulas $F$ and $G$ are equivalent if and only if each one is a logical consequence of the other, i.e.,[^16]

$F\equiv G\quad\iff\quad F\models G\quad$and$\quad G\models F$.
:::

### 2.3.5 Lifting Equivalences and Consequences to Formulas

Logical equivalences and consequences continue to hold if the propositional symbols $A$, $B$, $C$,… are replaced by other propositional symbols or by formulas $F$, $G$, $H$, … . At this point, we do not provide a proof of this intuitive fact. For example, because of the logical consequences stated in the previous section we have

<center>

$F\wedge G\equiv G\wedge F$ &emsp;and&emsp; $F\lor G\equiv G\lor F$.
</center>

as well as

$$F\land(G\wedge H)~\equiv~(F\land G)\wedge H$$

for any formulas $F$, $G$, and $H$.

The described lifting is analogous to the case of arithmetic expressions. For example, we have

<center>

$(a+b)\cdot c\;=\;(a\cdot c)+(b\cdot c)$.
</center>

for any real numbers $a$, $b$, and $c$. Therefore, for any arithmetic expressions $f$, $g$, and $h$, we have

<center>

$(f+g)\cdot h\ =\ (f\cdot h)+(g\cdot h)$.
</center>

::: tip Example 2.14.{#example-2-14}
We give a more complex example of such a lifting. Because of the logical consequence stated in [Example 2.13](#example-2-13), we have

$$(F\to G)\land(G\to H)\ \ \models\ \ F\to H$$

for any formulas $F$, $G$, and $H$.
:::

[^15]:The term "transitive" will be discussed in Chapter 3.

[^16]:Note that we DO NOT write $F \models G ∧ G \models F$ because the symbol $∧$ is used only between two formulas in order to form a new (combined) formula, and $F \models G$ and $G \models F$ are not formulas.

### 2.3.6 Tautologies and Satisfiability

::: info Definition 2.8.{#definition-2-8}
A formula $F$ (in propositional logic) is called a **tautology**[^17] or **valid**[^18] if it is true for all truth assignments of the involved propositional symbols. One often writes $\models F$ to say that $F$ is a tautology.
:::

::: tip Example 2.15.{#example-2-15}
The formulas $A∨(¬A)$ and $(A∧(A → B)) → B$ are tautologies.
:::

One often wants to make statements of the form that some formula $F$ is a tautology. As stated in [Definition 2.8](#definition-2-8), one also says "$F$ is valid" instead of "$F$ is a tautology".

::: info Definition 2.9.{#definition-2-9}
A formula $F$ (in propositional logic) is called **satisfiable**[^19] if it is true for at least one truth assignment of the involved propositional symbols, and it is called **unsatisfiable** otherwise.
:::

The symbol $⊤$ is sometimes used to denote a tautology, and the symbol $⊥$ is sometimes used to denote an unsatisfiable formula. One sometimes writes $F ≡ ⊤$ to say that $F$ is a tautology, and $F ≡ ⊥$ to say that $F$ is unsatisfiable. For example, for any formula $F$ we have

<center>

$F\vee\neg F\ \equiv\ \top$ &emsp;and&emsp; $F\land\neg F\ \equiv\bot$.
</center>

::: tip Example 2.16.{#example-2-16}
The formula $(A∧¬A)∧(B ∨C)$ is unsatisfiable, and the formula $A ∧ B$ is satisfiable.
:::

The following lemmas state two simple facts that follow immediately from the definitions. We only prove the second one.

:::info Lemma 2.2.{#lemma-2-2}
*A formula* $F$ *is a tautology if and only if* $¬F$ *is unsatisfiable.*
:::

:::info Lemma 2.3.{#lemma-2-3}
*For any formulas* $F$ *and* $G$, $F → G$ *is a tautology if and only if* $F \models G$.
:::

**Proof:** The lemma has two directions which we need to prove. To prove the first direction ($\implies$), assume that $F → G$ is a tautology. Then, for any truth assignment to the propositional symbols, the truth values of $F$ and $G$ are either both $0$, or $0$ and $1$, or both $1$ (but not $1$ and $0$). In each of the three cases it holds that $G$ is true if $F$ is true, i.e., $F \models G$. To prove the other direction ($\impliedby$), assume $F \models G$. This means that for any truth assignment to the propositional symbols, the truth values of $G$ is $1$ if it is $1$ for $F$. In other words, there is no truth assignment such that the truth value of $F$ is $1$ and that of $G$ is $0$. This means that the truth value of $F → G$ is always $1$, which means that $F → G$ is a tautology.

[^17]:German: Tautologie

[^18]:German: allgemeingültig

[^19]:German: erfüllbar

### 2.3.7. Logical Circuits<sup>*</sup>

A logical formula as discussed above can be represented as a tree where the leaves correspond to the propositions and each node corresponds to a logical operator. Such a tree can be implemented as a digital circuit where the operators correspond to the logical gates. This topic will be discussed in a course on the design of digital circuits[^20]. The two main components of digital circuits in computers are such logical circuits and memory cells.

## 2.4. A First Introduction to Predicate Logic

The elements of logic we have discussed so far belong to the realm of so-called *propositional logic*[^21]. Propositional logic is not sufficiently expressive to capture most statements of interest in mathematics in terms of formulas. For example, the statement *"There are infinitely many prime numbers"* cannot be expressed as a formula in propositional logic (though it can of course be expressed as a sentence in common language). We need *quantifiers*[^22] , *predicates*, and *functions*. The corresponding extension of propositional logic is called *predicate logic*[^23] and is substantially more involved than propositional logic. Again, we refer to [Chapter 6](/6-logic) for a more thorough discussion.

### 2.4.1. Predicates

Let us consider a non-empty set $U$ as the *universe* in which we want to reason. For example, $U$ could be the set $ℕ$ of natural numbers, the set $\mathbb{R}$ of real numbers, the set $\{0, 1\}^∗$ of finite-length bit-strings, or a finite set like $\{0, 1, 2, 3, 4, 5, 6\}$.

::: info Definition 2.10.{#definition-2-10}
A $k$-ary *predicate*[^24] $P$ on $U$ is a function $U^k \mapsto \{0, 1\}$.
:::

A $k$-ary predicate $P$ assigns to each list $(x_1, … , x_k)$ of $k$ elements of $U$ the value $P(x_1, …, x_k)$ which is either true ($1$) or false ($0$).

For example, for $U = ℕ$ we can consider the unary ($k = 1$) predicate $\mathtt{prime}(x)$ defined by

$$\mathtt{prime}(x)\;=\;\begin{cases}1&\text{if}~x~\text{is prime}\\ 0&\text{else.}\end{cases}$$

[^20]:German: Digitaltechnik

[^21]:German: Aussagenlogik

[^22]:German: Quantoren

[^23]:German: Prädikatenlogik

[^24]:German: Prädikat

Similarly, one can naturally define the unary predicates $\mathtt{even}(x)$ and $\mathtt{odd}(x)$.

For any universe $U$ with an order relation $≤$ (e.g. $U = ℕ$ or $U = ℝ$), the binary (i.e., $k = 2$) predicate $\mathtt{less}(x, y)$ can be defined as

$$\operatorname{\mathtt{less}}(x,y)\;=\;{\left\{\begin{array}{l l}{1}&{\mathrm{if~}x<y}\\ {0}&{\mathrm{else.}}\end{array}\right.}$$

However, in many cases we write binary predicates in a so-called "infix" notation, i.e., we simply write $x < y$ instead of $\mathtt{less}(x, y)$.

For the universe of all human beings, we can define a binary predicate child as follows: $\mathtt{child}(x, y) = 1$ if and only if $x$ is $y$'s child. One can similarly define predicates $\mathtt{parent}$, $\mathtt{grandparent}$, etc.

### **2.4.2 Functions and Constants**

In predicate logic one can also use functions on $U$ and constants (i.e., fixed elements) in $U$. For example, if the universe is $U = ℕ$, we can use the functions add addition and multiplication $\mathtt{mult}$ and the constants $3$ and $5$. The formula

$$\mathtt{less}(\mathtt{add}(x,3),\mathtt{add}(x,5))$$

can also be written in infix notation as

<center>

$x+3<x+5$.
</center>

This is a true statement for *every* value $x$ in $U$. In the next section we see how we can express this as a formula.

### 2.4.3. The Quantifiers $∃$ and $∀$

::: info Definition 2.11.{#definition-2-11}
For a universe $U$ and predicate $P(x)$ we define the following logical statements:[^25]

<div class="grid-cols">
<div>

$\forall x\ P(x)$ stands for:
</div><div>

$P(x)$ is true _for all $x$_ in $U$.
</div><div>

$\exists x\ P(x)$ stands for:
</div><div>

$P(x)$ is true for _some_ $x$ in $U$, i.e., there _exists_ an $x$ in $U$ for which $P(x)$ is true.
</div>
</div>


More generally, for a formula $F$ with a variable $x$, which for each value $x$ in $U$ is either true or false, the formula $∀x~F$ is true if and only if $F$ is true for all $x$ in $U$, and the formula $∃x~F$ is true if and only if $F$ is true for some $x$ in $U$.
:::

[^25]:In the literature one also finds the notations $∀x$: $P(x)$ and $∀x$. $P(x)$ instead of $∀x~P(x)$, and similarly for $∃$.

::: tip Example 2.17.{#example-2-17}
Consider the universe $U = ℕ$. Then $∀x (x ≥ 0)$ is true.[^26] Also, $∀x (x ≥ 2)$ is false, and $∃x (x + 5 = 3)$ is false.
:::

The name of the variable $x$ is irrelevant. For example, the formula $∃x (x+5 = 3)$ is equivalent to the formula $∃y (y + 5 = 3)$. The formula could be stated in words as: "There exists a natural number (let us call it $y$) which, if $5$ is added to it, the result is $3$." How the number is called, $x$ or $y$ or $z$, is irrelevant for the truth or falsity of the statement. (Of course the statement is false; it would be true if the universe were the integers $ℤ$.)

Sometimes one wants to state only that a certain formula containing $x$ is true for all $x$ that satisfy a certain condition. For example, to state that $x 2 ≥ 25$ whenever $x ≥ 5$, one can write

<center>

$\forall x\ {\big(}(x\geq5)\to{\big(}x^{2}\geq25{\big)}{\big)}$.
</center>

A different notation sometimes used to express the same statement is to state the condition on $x$ directly after the quantifier:

<center>

$\forall x\geq5:\ \ (x^{2}\geq25)$.
</center>

### 2.4.4. Nested Quantifiers

Quantifiers can also be nested[^27]. For example, if $P(x)$ and $Q(x, y)$ are predicates, then

$$\forall x\;{\big(}P(x)\;\vee\;\exists y\;Q(x,y){\big)}$$

is a logical formula.

::: tip Example 2.18.{#example-2-18}
The formula

$$\forall x\;\exists y\;\;(y<x)$$

states that for every $x$ there is a smaller $y$. In other words, it states that there is no smallest $x$ (in the universe under consideration). This formula is true for the universe of the integers or the universe of the real numbers, but it is false for the universe $U = ℕ$.
:::

::: tip Example 2.19.{#example-2-19}
For the universe of the natural numbers, $U = ℕ$, the predicate $\mathtt{prime}(x)$ can be defined as follows:[^28]

$$
\mathtt{prime}(x)\ \ \stackrel{{\mathrm{def}}}{{\iff}}\ \ x>1\ \ \land\ \ \forall y\,\forall z\ \left((y z=x)\to((y=1)\lor(z=1))\right).
$$
:::

[^26]:But note that $∀x (x ≥ 0)$ is false for the universe $U = ℝ$.

[^27]:German: verschachtelt

[^28]:We use the symbol "$\stackrel{{\mathrm{def}}}{{\iff}}$" if the object on the left side is defined as being equivalent to the object on the right side.

::: tip Example 2.20. {#example-2-20}
Fermat's last theorem can be stated as follows: For universe $ℕ\backslash \{0\}$, [^29]

$$\lnot\left(\exists x\ \exists y\ \exists z\ \exists n\ \left(n\geq3\ \land\ x^{n}+y^{n}\!=\!z^{n}\right)\right).$$
:::

::: tip Example 2.21.{#example-2-21}
The statement "for every natural number there is a larger prime" can be phrased as

$$\forall x\;\exists y\;(y>x\;\land\;\mathtt{prime}(y))$$

and means that there is no largest prime and hence that there are infinitely many primes.

If the universe is $ℕ$, then one sometimes uses $m$, $n$, or $k$ instead of $x$ and $y$. The above formula could hence equivalently be written as

$$\forall m\ \exists n\ {\bigl(}n>m\ \land\ {\mathtt{p r i m e}}(n){\bigr)}.$$
:::

::: tip Example 2.22.{#example-2-22}
Let $U = ℝ$. What is the meaning of the following formula, and does it correspond to a true statement?

$$\forall x\;{\big(}x=0\;\vee\;\exists y\;{\big(}x y=1{\big)}{\big)}$$
:::

::: tip Example 2.23.{#example-2-23}
What is the meaning of the following formula, and for which universes is it true (or false)?

$$\forall x\;\forall y\;{\big(}\;(x<y)\to\exists z{\big(}(x<z)\land(z<y){\big)}\;{\big)}$$
:::

### 2.4.5. Interpretation of Formulas

A formula generally has some "free parts" that are left open for interpretation. To begin with, the universe is often not fixed, but it is also quite common to write formulas when the universe is understood and fixed. Next, we observe that the formula

$$\forall x\ {\big(}P(x)\to Q(x){\big)}$$

contains the predicate symbols $P$ and $Q$ which can be interpreted in different ways. Depending on the choice of universe and on the interpretation of $P $and $Q$, the formula can either be true or false. For example let the universe be $ℕ$ and let $P(x)$ mean that "$x$ is divisible by $4$". Now, if $Q(x)$ is interpreted as "$x$ is odd", then $∀x (P(x) → Q(x))$ is false, but if $Q(x)$ is interpreted as "$x$ is even", then $∀x (P(x) → Q(x))$ is true. However, the precise definition of an interpretation is quite involved and deferred to [Chapter 6](/6-logic).

[^29]:In formulas with sequences of quantifiers of the same type one sometimes omits parentheses or even multiple copies of the quantifier. For example one writes $∃xyz$ instead of $∃x ∃y ∃z$. We will not use such a convention in this course.

### 2.4.6. Tautologies and Satisfiability

The concepts interpretation, tautology, and satisfiability for predicate logic will be defined in [Chapter 6](/6-logic).

Informally, a formula is **satisfiable** if there is an interpretation of the involved symbols that makes the formula true. Hence $∀x (P(x) → Q(x))$ is satisfiable as shown above. Moreover, a formula is a *tautology* (or *valid*) if it is true for all interpretations, i.e., for all choices of the universe and for all interpretations of the predicates.[^30]

We will use the terms "tautology" and "valid" interchangeably. For example,

$$\forall x\,\left((P(x)\wedge Q(x))\to(P(x)\lor Q(x))\right)$$

is a tautology, or valid.

### 2.4.7. Equivalence and Logical Consequence

One can define the equivalence of formulas and logical consequence for predicate logic analogously to propositional logic, but again the precise definition is quite involved and deferred to [Chapter 6](/6-logic). Intuitively, two formulas are equivalent if they evaluate to the same truth value for any interpretation of the symbols in the formula.

::: tip Example 2.24.{#example-2-24}
Recall [Example 2.22.](#example-2-22) The formula can be written in an equivalent form, as:

<center>

$\forall x\left(x=0\ \vee\ \exists y\left(xy=1\right)\right)\ \equiv\ \forall x\left(\neg(x=0)\ \rightarrow\ \exists y\left(xy=1\right)\right)$.
</center>

The order of identical quantifiers does not matter, i.e., we have for example:

<center>

$\exists x\exists y\;P(x,y)\;\equiv\;\exists y\exists x\;P(x,y)\;\;\;\;\;\mbox{and}\;\;\;\;\;\forall x\forall y\;P(x,y)\;\equiv\;\forall y\forall x\;P(x,y)$.
</center>

A simple example of a logical consequence is

$$\forall x\;P(x)\;\models\;\exists x\;P(x).$$

It holds because if $P(x)$ is true for all $x$ in the universe, then it is also true for some (actually an arbitrary) $x$. (Recall that the universe is non-empty.)
:::

Some more involved examples of equivalences and logical consequences are stated in the next section.

[^30]:We will see in Chapter 6 that predicate logic also involves function symbols, and an interpretation also instantiates the function symbols by concrete functions.

### 2.4.8. Some Useful Rules

We list a few useful rules for predicate logic. This will be discussed in more detail in Chapter 6. We have

$$∀x P(x) ∧ ∀x Q(x)  ≡  ∀x P(x) ∧ Q(x)$$

since if $P(x)$ is true for all $x$ and also $Q(x)$ is true for all $x$, then $P(x) ∧ Q(x)$ is true for all $x$, and vice versa. Also,[^31]

$$∃x P(x) ∧ Q(x)  \models  ∃x P(x) ∧ ∃x Q(x)$$

since, no matter what $P$ and $Q$ actually mean, any $x$ that makes $P(x)∧Q(x)$ true (according to the left side) also makes $P(x)$ and $Q(x)$ individually true. But, in contrast, $∃x (P(x)∧ Q(x))$ is not a logical consequence of $∃x P(x) ∧ ∃x Q(x)$, as the reader can verify. We can write

<center>

$\exists x\;P(x)\;\land\;\exists x\;Q(x) \not\models \exists x\;(P(x)\wedge Q(x))$.
</center>

We also have:

$$¬∀x~P(x) ≡ ∃x~¬P(x)$$

and

$$\neg\exists x\;P(x) \equiv \forall x\;\neg P(x).$$

The reader can prove as an exercise that

$$∃y ∀x P(x, y)  \models  ∀x ∃y P(x, y)$$

but that

<center>

$∀x ∃y P(x, y)  \not\models  ∃y ∀x P(x, y)$.
</center>

## 2.5. Logical Formulas vs. Mathematical Statements

A logical formula is generally not a mathematical statement because the symbols in it can be interpreted differently, and depending on the interpretation, the formula is true or false. Without fixing an interpretation, the formula is not a mathematical statement.

### **2.5.1. Fixed Interpretations and Formulas as Statements**

If for a formula $F$ the interpretation (including the universe and the meaning of the predicate and function symbols) is fixed, then this can be a mathematical statement that is either true or false. Therefore, if an interpretation is understood, we can use formulas as mathematical statements, for example in a proof with implication steps. In this case (but only if a fixed interpretation is understood) it is also meaningful to say that a formula is true or that it is false.

[^31]:We point out that defining logical consequence for predicate logic is quite involved (see [Chapter 6](/6-logic)), but intuitively it should be quite clear.

::: tip Example 2.25.{#example-2-25}
For the universe $ℕ$ and the usual interpretation of $<$ and $>$, the formula $∃n (n < 4 ∧ n > 5)$ is false and the formula $∀n (n > 0 → (∃m m < n))$ is true.
:::

### 2.5.2. Mathematical Statements about Formulas

As mentioned, logical formulas are often not mathematical statements themselves, but one makes mathematical statements *about* formulas. Examples of such mathematical statements are:

- $F$ is valid (i.e., a tautology, also written as $\models F$),
- $F$ is unsatisfiable,
- $F \models G$.

The statement "$F$ is valid" is a mathematical statement (*about* the formula $F$). Therefore, we may for example write

<center id="2-1">

$F$ is valid $\implies G$ is valid, <span class=right>(2.1)</span>
</center>

as a mathematical statement about the formulas $F$ and $G$. This statement is different from the statement $F \models G$. In fact, for any formulas $F$ and $G$, the statement $F \models G$ implies statement (2.1), but the converse is generally false:

::: info Lemma 2.4.{#lemma-2-4}
*For any two formulas* $F$ and $G$*, if* $F \models G$*, then [(2.1)](#2-1) is true.*

**Proof:** $F \models G$ states that for every interpretation, if $F$ is true (for that interpretation), then also $G$ is true (for that interpretation). Therefore, if $F$ is true for every interpretation, then also $G$ is true for every interpretation, which is [statement (2.1)](#2-1). <span class="right">$\Box$</span>
:::

## 2.6. Some Proof Patterns

In this section we discuss a few important proof patterns (which we could also call proof methods or proof techniques). Such a proof pattern can be used to prove one step within a longer proof, or sometimes also to directly prove a theorem of interest. Many proof patterns correspond to logical deduction rules. One can define a logical calculus consisting of such deduction rules, but we will defer the discussion of this topic to Chapter 6. Often, a given statement can be proved in different ways, i.e., by using different proof patterns.

### **2.6.1 Composition of Implications**

We first explain why the composition of implications, as occurring in many proofs, is sound.

::: info Definition 2.12. Proof Composition{#definition-2-12}
The proof step of *composing implications* is as follows: If $S \implies T$ and $T \implies U$ are both true, then one concludes that $S \implies U$ is also true.
:::

The soundness of this principle is explained by the following lemma of propositional logic which was already stated in [Example 2.13.](#example-2-13)

::: info Lemma 2.5.{#lemma-2-5}
$(A → B) ∧ (B → C) \models A → C$.

**Proof:** One writes down the truth tables of the formulas $(A → B) ∧ (B → C)$ and $A → C$ and checks that whenever the first evaluates to true, then also the second evaluates to true.
:::

### 2.6.2. Direct Proof of an Implication

Many statements of interest (as intermediate steps or as the final statement of interest) are implications of the form $S \implies T$ for some statements $S$ and $T$. [^32]

::: info Definition 2.13. Direct Proof{#definition-2-13}
A *direct proof* of an implication $S \implies T$ works by *assuming* $S$ and then proving $T$ under this assumption.
:::

### 2.6.3. Indirect Proof of an Implication

::: info Definition 2.14. Indirect Proof{#definition-2-14}
An *indirect proof* of an implication $S \implies T$ proceeds by assuming that $T$ is false and proving that $S$ is false, under this assumption.
:::

The soundness of this principle is explained by the following simple lemma of propositional logic, where $A$ stands for "statement $S$ is true" and $B$ stands for "statement $T$ is true".

::: info Lemma 2.6.{#lemma-2-6}
$¬B → ¬A  \models  A → B$.

**Proof:** One can actually prove the stronger statement, namely that $¬B → ¬A ≡ A → B$, simply by examination of the truth table which is identical for both formulas $¬B → ¬A$ and $A → B$. <span class="right">$\Box$</span>
:::

::: tip Example 2.26.{#example-2-26}
Prove the following claim: If $x > 0$ is irrational, then also $\sqrt{x}$ is irrational. The indirect proof proceeds by assuming that $\sqrt{x}$ is not irrational and showing that then $x$ is also not irrational. Here "not irrational" means rational, i.e., we prove

<center>

$\sqrt{x}$ is rational $\implies x$ is rational
</center>

Assume hence that $\sqrt{x}$ is rational, i.e., that $\sqrt{x} = m/n$ for $m, n ∈ ℤ$. This means that $x = m^2/n^2$ , i.e., $x$ is the quotient of two natural numbers (namely $m^2$ and $n^ 2$ ) and thus is rational. This completes the proof of the claim.
:::

[^32]:Recall [Section 2.1.2.](#_2-1-2-composition-of-mathematical-statements)

### 2.6.4. Modus Ponens

::: info Definition 2.15. Modus Ponens{#definition-2-15}
A proof of a statement $S$ by use of the so-called *modus ponens* proceeds in three steps:

1. Find a suitable mathematical statement $R$.
2. Prove $R$.
3. Prove $R \implies S$.
:::

The soundness of this principle is explained by the following lemma of propositional logic. Again, the proof is by a simple comparison of truth tables.

::: info Lemma 2.7.{#lemma-2-7}
$A ∧ (A → B) \models B$.
:::

Examples will be discussed in the lecture and the exercises.

### 2.6.5. Case Distinction

::: info Definition 2.16. Case Distinction{#definition-2-16}
A proof of a statement $S$ by *case distinction* proceeds in three steps:

1. Find a finite list $R_1, … , R_k$ of mathematical statements (the *cases*).
2. Prove that at least one of the $R_i$ is true (at least one case occurs).
3. Prove $R_i \implies S$ for $i = 1, … , k$.
:::

More informally, one proves for a *complete list* of cases that the statement $S$ holds in all the cases.

The soundness of this principle is explained by the following lemma of propositional logic.

::: info Lemma 2.8.{#lemma-2-8}
*For every* $k$ *we have*

<center>

$(A_1 ∨ \cdots ∨ A_k) ∧ (A_1 → B) ∧ \cdots ∧ (A_k → B) \models B$.
</center>

**Proof:** For a fixed $k$ (say $k = 2$) one can verify the statement by examination of the truth table. The statement for general $k$ can be proved by induction (see [Section 2.6.10](#_2-6-10-proofs-by-induction)). <span class="right">$\Box$</span>

Note that for $k = 1$ (i.e., there is only one case), case distinction corresponds to the modus ponens discussed above.
:::

::: tip Example 2.27.{#example-2-27}
Prove the following statement $S$: The $4$th power of every natural number $n$, which is not divisible by $5$, is one more than a multiple of $5$.

To prove the statement, let $n = 5k + c$, where $1 ≤ c ≤ 4$. Using the usual binomial formula $(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$ we obtain:

$$n^{4}=(5k+c)^{4}=5^{4}k^{4}+4\cdot5^{3}k^{3}c+6\cdot5^{2}k^{2}c^{2}+4\cdot5kc^{3}+c^{4}.$$

Each summand is divisible by $5$, except for the last term $c^4$ . The statement $S$ is hence equivalent to the statement that $c^4$ is one more than a multiple of $5$, for $1 ≤ c ≤ 4$.

This statement $S$ can be proved by case distinction, i.e., by considering all four choices for $c$. For $c = 1$ we have $c^4 = 1$, which is trivially one more than a multiple of $5$. For $c = 2$ we have $c^ 4 = 16$, which is also one more than a multiple of $5$. The same is true for $c = 3$ where $c^ 4 = 81$ and for $c = 4$ where $c^ 4 = 256$. This concludes the proof.
:::

With a few insights from number theory and algebra we will see later that the above statement holds when $5$ is replaced by any odd prime number.

### 2.6.6. Proofs by Contradiction

::: info Definition 2.17. Proof by Contradiction{#definition-2-17}
A *proof by contradiction* of a statement $S$ proceeds in three steps:

1. Find a suitable mathematical statement $T$.
2. Prove that $T$ is false.
3. Assume that $S$ is false and prove (from this assumption) that $T$ is true (a contradiction).
:::

In many cases, the proof steps appear in a different order: One starts from assuming that $S$ is false, derives statements from it until one observes that one of these statements is false (i.e., is the statement $T$ in the above description). In this case, the fact that $T$ is false (step 2) is obvious and requires no proof.

The soundness of this principle is explained by the following lemma of propositional logic which can again be proved by comparing the truth tables of the involved formulas.

::: info Lemma 2.9.{#lemma-2-9}
($\neg A\to B$) $\wedge\neg B$ = $A$.

Since $¬A → B$ is equivalent to $A ∨ B$, the principle of a proof by contradiction can alternatively be described as follows: To prove $S$, one proves for some statement $T$ that either $S$ or $T$ is true (or both) and that $T$ is false. This is justified because we have

<center>

$(A\lor B)\land\neg B\quad\models\quad A$.
</center>
:::

::: tip Example 2.28.{#example-2-28}
We discuss the classical proof of three statement that $\sqrt{2}$ is irrational. (This is the statement $S$ to be proved.) Recall (from basic number theory) that a number $a$ is rational if and only if $a = m/n$ (i.e., $m = a\times n$) for two relatively prime[^33] integers $m$ and $n$ (i.e., with $gcd(m, n) = 1$).[^34]

The proof by contradiction starts by assuming that $S$ is false and deriving, from this assumption, a false statement $T$. In the following derivation we may use formulas as a compact way of writing statements, but the derivation itself is "normal" mathematical reasoning and is not to be understood as a formula-based logical reasoning.[^35]

$$
\begin{aligned}
\text{S is false}  &\dot\iff  \sqrt{2} \text{ is rational} \\
&\dot\iff  \exists m \, \exists n \, \left(m^2 = 2n^2 \land \operatorname{gcd}(m, n) = 1\right)
\end{aligned}
$$

We now consider, in isolation, the statement m2 = 2n 2 appearing in the above formula, derive from it another statement (namely gcd(m, n) ≥ 2), and then plug this into the above formula. Each step below is easy to verify. For arbitrary m and n we have

$$
\begin{aligned}
m^{2}=2n^{2}  &\dot\implies   m^2\ \text{is even} \\
&\dot\implies   m\ \text{is even} \\
&\dot\implies   4\ \text{divides}\ m^2 \\
&\dot\implies   4\ \text{divides}\ 2n^2 \quad \text{(also using }m^2 = 2n^2) \\
&\dot\implies   2\ \text{divides}\ n^2 \\
&\dot\implies   n\ \text{is even} \\
&\dot\implies \operatorname{gcd}(m, n) ≥ 2 \quad \text{(also using that } m \text{ is even)}
\end{aligned}
$$

Hence we have

$\exists m\,\exists n\,\bigl(m^{2}=2n^{2}\land\operatorname*{gcd}(m,n)=1\bigr)$

$$
\begin{array}{r l}
&{{}\dot\implies\ \underbrace{\exists m\,\exists n\,\left(m^{2}=2n^{2}\,\land\,\underbrace{\operatorname*{gcd}(m,n)\geq2\,\land\,\operatorname*{gcd}(m,n)=1}_{\mathrm{false~for~arbitrary~}m{\mathrm{~and~}}n}\right)}_\text{statement T, which is false}}
\end{array}
$$

This concludes the proof by contradiction. <span class="right">$\Box$</span>
:::

[^33]:German: teilerfremd

[^34]:$\operatorname{gcd}(m, n)$ denotes the greatest common divisor of $m$ and $n$ (see [Section 4.2.3](/4#_4-2-3)).

[^35]:We can write $\dot\iff$ if the implication holds in both directions, but it would be sufficient to always replace $\dot\iff$ by $\dot\implies$.

### **2.6.7 Existence Proofs**

::: info Definition 2.18. Existence Proofs{#definition-2-18}
Consider a universe $\mathcal X$ of parameters and consider for each $x$ in $\mathcal X$ a statement, denoted $S_x$. An *existence proof* is a proof of the statement that $S_x$ is true for at least one $x ∈ \mathcal{X}$. An existence proof is **constructive** if it exhibits an $a$ for which $S_a$ is true, and otherwise it is **non-constructive**.
:::

::: tip Example 2.29.{#example-2-29}
Prove that there exists a prime[^36] number $n$ such that $n − 10$ and $n + 10$ are also primes, i.e., prove

<center>

$\exists n \bigl(\underbrace{{\mathtt{prime}(n) \land \mathtt{prime}(n-10) \land \mathtt{prime}(n+10)}}_{S_n}\bigr)$.
</center>

A constructive proof is obtained by giving the example $n = 13$ and verifying that $S_{13}$ is true.
:::

::: tip Example 2.30.{#example-2-30}
We prove that there are infinitely many primes by involving a non-constructive existence proof.[^37] This statement can be rephrased as follows: For every number $m$ there exists a prime $p$ greater than $m$; as a formula:

<center>

$\forall m\ \exists p\ \ {\bigl(}{\underbrace{{\mathtt{prime}}(p)\ \land\ p>m}_{S_{p}}}{\bigr)}$.
</center>

To prove this, consider an arbitrary but fixed number $m$ and consider the statements $S_p$ parameterized by $p$:   
There exists a prime $p$ greater than $m$, i.e., such that $\mathtt{prime}(p) ∧ p > m$ is true.

To prove this, we use the known fact (which has been proved) that every natural number $n ≥ 2$ has at least one prime divisor. We consider the specific number $m! + 1$ (where $m! = 2 \times 3 \times \cdots  \times (m − 1) \times m$). We observe that for all $k$ in the range $2 ≤ k ≤ m$, $k$ does not divide $m! + 1$. In particular, no prime smaller than $m$ divides $m! + 1$. Because $m! + 1$ has at least one prime divisor, there exists a prime $p$ greater than $m$ which divides $m! + 1$. Hence there exists a prime $p$ greater than $m$. [^38]
:::

### **2.6.8 Existence Proofs via the Pigeonhole Principle**

The following simple but powerful fact is known as the **pigeonhole principle**[^39] . This principle is used as a proof technique for certain existence proofs.[^40]

[^36]:Recall that $\mathtt{prime}(n)$ is the predicate that is true if and only if $n$ is a prime number.

[^37]:See also [Example 2.21](#example-2-21), where different variable names are used.

[^38]:Note that $p$ is not known explicitly, it is only known to exist. In particular, $p$ is generally not equal to $m! + 1$.

[^39]:German: *Schubfachprinzip*

[^40]:This principle is often described as follows: If there are more pigeons than pigeon holes, then there must be at least one pigeon hole with more than one pigeon in it. Hence the name of the principle.

::: info Theorem 2.10. Pigeonhole Principle{#theorem-2-10}
*If a set of* $n$ *objects is partitioned into* $k < n$ *sets, then at least one of these sets contains at least* $⌈ \frac{n}{k} ⌉$ *objects.*[^41]

**Proof:** The proof is by contradiction. Suppose that all sets in the partition have at most $⌈ \frac{n}{k} ⌉ − 1$ objects. Then the total number of objects is at most $k(⌈ \frac{n}{k} ⌉ − 1$ , which is smaller than $n$ because

<span class="right">$\Box$</span>
<center>

$k\left(\left\lceil\frac{n}{k}\right\rceil-1\right)\ <\ k\left(\left(\frac{n}{k}+1\right)-1\right)\ =\ k\left(\frac{n}{k}\right)\ =\ n$.
</center>
:::

::: tip Example 2.31.{#example-2-31}
**Claim:** Among $100$ people, there are at least nine who were born in the same month. The claim can be equivalently stated as an existence claim: Considering any $100$ people, *there exists* a month in which at least nine of them have their birthday.

**Proof:** Set $n = 100$ and $k = 12$, and observe that $⌈100/12⌉ = 9$.
:::

::: tip Example 2.32.{#example-2-32}
**Claim:** In any subset $A$ of $\{1, 2, … , 2n\}$ of size $|A| = n + 1$, there exist distinct $a, b ∈ A$ such that $a \mid b$ ($a$ divides $b$).[^42]

For example, in the set {2, 3, 5, 7, 9, 10} we see that 3 | 9.

**Proof:** We write every $a_i ∈ A$ as $2^{e_i}u_i$ with $u_i$ odd. There are only $n$ possible values $\{1, 3, 5, . . ., 2n − 1\}$ for $u_i$. Thus there must exist two numbers $a_i$ and $a_j$ with the same odd part ($u_i = u_j$). Therefore one of them has fewer factors $2$ than the other and must hence divide it.
:::

::: tip Example 2.33.{#example-2-33}
Let $a_1, a_2, … , a_n$ be a sequence of numbers (real or integer). A subsequence of length k of this sequence is a sequence of the form $a_{i_1}, a_{i_2} , … , a_{i_k}$ , where $1 ≤ i_1 < i_2 < \cdots < i_k ≤ n$. A sequence is called strictly increasing (decreasing) if each term is strictly greater (smaller) than the preceding one. For example, the sequence $3, 8, 2, 11, 1, 5, 7, 4, 14, 9$ contains the increasing subsequences $3, 5, 7, 9$ and $2, 5, 7, 14$ and the decreasing subsequences $3, 2, 1$ and $8, 5, 4$.

**Claim:** Every sequence of $m^2 + 1$ *distinct* numbers (real or integer) contains either an increasing or a decreasing subsequence of length $m + 1$. (Note that in the above example, $m = 3$ and $m^2 + 1 = 10$, and there is indeed an increasing subsequence of length $4$.)

**Proof:** We can associate with every position $(1 ≤ ℓ ≤ m^2 + 1)$ a pair $(i_ℓ, d_ℓ)$, where $i_ℓ$ ($d_ℓ$) is the length of the longest increasing (decreasing) subsequence beginning at position $ℓ$. The proof is by contradiction. Suppose the claim is false, i.e., $1 ≤ i_ℓ ≤ m$ and $1 ≤ d_ℓ ≤ m$ for all $ℓ$. Then there are at most $m^2$ pairs $(i_ℓ, d_ℓ)$ that can occur. Thus the pigeonhole principle guarantees that there must be two indices $s < t$ with $(i_s, d_s) = (i_t, d_t)$. But this leads to a contradiction. Because the numbers are distinct, either $a_s < a_t$ or $a_s > a_t$. If $a_s < a_t$, then, since $i_s = i_t$, an increasing subsequence of length $i_t + 1$ can be built starting at position $s$, taking as followed by the increasing subsequence beginning at $a_t$. This is a contradiction. A similar contradiction is obtained if $a_s > a_t$.
:::

[^41]:In the literature, the pigeonhole principle often states only that there must be a set containing at least two elements.

[^42]:Note that this is tight. If we lower $|A|$ from $n + 1$ to $n$, then the set $A = \{n, n + 1, … , 2n − 1\}$ contains no $a, b ∈ A$ such that $a | b$.

### 2.6.9. Proofs by Counterexample

Proofs by counterexample are a specific type of constructive existence proof, namely the proof that a counterexample exists.

::: info Definition 2.19. Proof by Counterexample{#definition-2-19}
Consider a universe $\mathcal{X}$ of parameters and consider for each $x$ in $\mathcal{X}$ a statement, denoted $S_x$. A *proof by counterexample* is a proof of the statement that $S_x$ is not true for all $x ∈ X$, by exhibiting an a (called *counterexample*) such that $S_a$ is false.
:::

Note that a proof by counterexample corresponds to an existence proof.

::: tip Example 2.34.{#example-2-34}
Prove or disprove that for every integer $n$, the number $n^2−n+41$ is prime, i.e., prove

$$\forall n\;\;\mathtt{{\tt~prime}}(n^{2}-n+41).$$

One can verify the quite surprising fact that $\mathtt{prime}(n^2 − n + 41)$ is true for $n = 1, 2, 3, 4, 5, 6, …$ , for as long as the reader has the patience to continue to do the calculation. But is it true for all $n$? To prove that the assertion ∀$n \mathtt{prime}(n 2− n + 41)$ is false, i.e., to prove

$$\lnot\forall n\ \mathtt{prime}(n^{2}-n+41),$$

it suffices to exhibit a counterexample, i.e., an a such that $¬\mathtt{prime}(a^2 − a + 41)$. The smallest such $a$ is $a = 41$; note that $41^2 − 41 + 41 = 41^2$ is not a prime.
:::

::: tip Example 2.35.{#example-2-35}
Prove or disprove that every positive integer $≥ 10$ can be written as the sum of at most three squares (e.g. $10 = 3^2 + 1^2$, $11 = 3^2 + 1^2 + 1^2$, $12 = 2^2 + 2^2 + 2^2$, $13 = 3^2 + 2^2$, and $14 = 3^2 + 2^2 + 1^2$). The statement can be written as

<center>

$∀n ≥ 10 → ∃x~∃y~∃z~(n = x^2 + y^2 + z^2 )$.
</center>

The statement is false because $n = 15$ is a counterexample.
:::

### 2.6.10. Proofs by Induction

One of the most important proof technique in discrete mathematics are proofs by induction, which are used to prove statements of the form $∀n~P(n)$, where the universe $U$ is the set $ℕ = \{0, 1, 2, 3, …\}$ of natural numbers. Alternatively, it can also be the set $\{1, 2, 3, …\}$ of positive integers, in which case $P(0)$ below must be replaced by $P(1)$. More generally, it can be the set $\{k, k + 1, k + 2, …\}$ for some $k$.

A proof by induction consists of two steps:

::: info Proof by induction{#definition-induction}

1. **Basis step.**[^43]  
  Prove $P(0)$.

2. **Induction step.**  
  Prove that for any arbitrary $n$ we have $P(n) \implies P(n+1)$.
:::

The induction step is performed by assuming $P(n)$ (for an arbitrary $n$) and deriving $P(n+1)$. This proof technique is justified by the following theorem.[^44]

::: info Theorem 2.11. Principle of Mathematical Induction{#theorem-2-11}
*For the universe* $ℕ$ *and an arbitrary unary predicate* $P$ *we have*

<center>

$P(0)~∧~∀n~(P(n) → P(n+1))  \implies  ∀n P(n)$.
</center>
:::

Let us discuss a few examples of proofs by induction.

::: tip Example 2.36.{#example-2-36}
Prove that $\sum^n_{i=0}2^i = 2^{n+1} - 1$ holds for all $n$. To do a proof by induction, let $P(n)$ be defined by $P(n) = 1$ if and only if $\sum^n_{ i=0} 2^i = 2^{n+1} − 1$.  
Step 1 is to prove $P(0)$; this holds trivially because the sum consists of the single term $2^0 = 1$ and we also have $2^{0+1} − 1 = 2 − 1 = 1$.  
Step 2 is to prove that for an arbitrary $n$, under the assumption $P(n)$, i.e., $\sum^n_{i=0}2^i = 2^{n+1} − 1$, also $P(n + 1)$ is true, i.e., $\sum^{n+1}_{i=0}2^i = 2^{(n+1)+1} − 1$:

<center>

$\displaystyle\sum^n_{i=0}2^i = \displaystyle\sum_{i=0}^n2^i + 2^{n+1} = (2^{n+1} - 1) + 2^{n+1} = 2^{(n+1)+1} - 1$.
</center>

This concludes the proof of $∀n~P(n)$.
:::

::: tip Example 2.37.{#example-2-37}
Determine the set of postages you can generate using only 4-cent stamps and 5-cent stamps!

Obviously $1$, $2$, $3$, $6$, $7$, and $11$ cents cannot be obtained, while $4$, $5$, $8 = 4 + 4$, $9 = 4 + 5$, $10 = 5 + 5$, $12 = 4 + 4 + 4$, $13 = 4 + 4 + 5$, $14 = 4 + 5 + 5$, and $15 = 5 + 5 + 5$, can be obtained. One can prove by induction that all amounts of $15$ or more cents can indeed be obtained.

Let $P(n)$ be the predicate that is true if and only if there exists a decomposition of $n + 15$ into summands $4$ and $5$. We have just seen that $P(0)$ is true. To prove the induction step, i.e., $∀n(P(n) → P(n + 1))$, assume that $P(n)$ is true for an arbitrary $n$. We distinguish two cases,[^45] namely whether or not the decomposition of $n + 15$ contains a $4$. If this is the case, then one can replace the $4$ in the decomposition by a $5$, resulting in the sum $n + 16$. If the decomposition of $n + 15$ contains no $4$, then it contains at least three times the $5$. We can therefore obtain a decomposition of $n + 16$ by replacing the three $5$ by four $4$. In both cases, $P(n + 1)$ is true, hence we have proved $P(n) → P(n + 1)$ and can apply [Theorem 2.11](#theorem-2-11).
:::

[^43]:German: Verankerung

[^44]:This theorem is actually one of the Peano axioms used to axiomatize the natural numbers. In this view, it is an axiom and not a theorem. However, one can also define the natural numbers from axiomatic set theory and then prove the Peano axioms as theorems. This topic is beyond the scope of this course.

[^45]:Note that this proof step is a proof by case distinction.
