---
prev:
    text: Mathematical Reasoning, Proofs, and a First Approach to Logic
    link: /2-reasoning-proofs
next:
    text: Number Theory
    link: /4-number-theory
---

# <small>Chapter 3:</small><br> Sets, Relations, and Functions

In this chapter we provide a treatment of the elementary concepts of set theory, with the goal of being able to use sets in later parts of the course, for example to define relations and functions. We will be more precise than the typical (very informal) treatment of set theory in highschool, but we will also avoid the intricacies of a full-fledged axiomatic treatment of set theory, showing only minor parts of it.

## 3.1. Introduction

There seems to be no simpler mathematical concept than a set[^1], a collection of objects. Although intuitively used for a long time,[^2] the formulation of a set as a mathematical concept happened as late as the end of the 19th century. For example, in 1895 Cantor proposed the following wording: "Unter einer 'Menge' verstehen wir jede Zusammenfassung $M$ von bestimmten wohlunterschiedenen Objekten unserer Anschauung oder unseres Denkens (welche die 'Elemente' von $M$ genannt werden) zu einem Ganzen".

### 3.1.1. An Intuitive Understanding of Sets

The reader is certainly familiar with statements like

- $5 ∈ ℕ$ (where $ℕ$ denotes the set of natural numbers),
- $-3 \not∈ ℕ$,
- $\{3, 5, 7\} ⊆ ℕ$, and
- $\{a, b\} ∪ \{b, c\} = \{a, b, c\}$,

as well as with simple definitions like the following:

[^1]:German: Menge

[^2]:In fact, almost all of mathematics is based on the notion of sets.


::: definition Definition 3.1 (Informal) {#definition-3-1}
The number of elements of a finite set $A$ is called its *cardinality* and is denoted $|A|$.
:::

Also, facts like

$$A\subseteq B\,\land\,B\subseteq C\implies A\subseteq C$$

or

$$A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$$

are well-known and seem obvious if one draws a figure with intersecting circles representing sets (so-called Venn-diagrams). However, many issues do not seem to be clear mathematically, for example:

- Which objects can one use as elements of a set?
- Can a set itself be an element of a set?
- Can a set be an element of itself?
- How is set intersection or set union defined?
- How should the elements of a set be counted?
- Do the above-stated facts require a proof, or are they just "obvious" in an informal sense?

This calls for a precise mathematical treatment with clear definitions, lemmas, and proofs. The need for such a precise treatment also becomes obvious when considering Russell's paradox discussed below.

### 3.1.2. Russell's Paradox

The set concept introduced by Cantor and axiomatized further by Frege seemed very innocent and safe to work with. But in 1903, Bertrand Russell[^3] (1872-1970) showed that set theory as understood at that point in time is inherently contradictory. This came as a shock to the mathematics community. As a consequence, set theory had to be based on much more rigorous grounds, on an axiomatic foundation, a process started by Ernst Zermelo. It is still an active area of research in mathematics which axioms can and should be used as the foundation of set theory. The most widely considered set of axioms is called Zermelo-Fraenkel (ZF) set theory. Axiomatic set theory is beyond the scope of this course.

[^3]:Russell was a very remarkable person. He was not only an outstanding philosopher and mathematician, but also politically active as a pacifist. Because of his protests against World War I he was dismissed from his position at Trinity College in Cambridge and imprisoned for 6 months. In 1961, at the age of 89, he was arrested again for his protests against nuclear armament. In 1950 he received the Nobel Prize for literature.

The problem with Cantor's intuitive set theory is that, because it was not clearly axiomatized, it makes the following apparently innocent (yet false) assumption. Whenever one specifies a precise condition (i.e., a logical predicate $P$), allowing to distinguish between objects that satisfy the predicate and objects that don't, then $\{x | P(x)\}$, the set of objects satisfying the predicate is well-defined. Russell proposed the set

$$R=\{A\mid\ A\notin A\}$$

of sets that are not elements of themselves. Note that there seems to be nothing wrong with a set being an element of itself. For example, the set of sets containing at least 10 elements seems to be an element of itself, as it contains more than 10 elements. Similarly, the set of sets containing *at most* 10 elements is not an element of itself.

Either $R ∈ R$ or $R \not∈ R$. If $R ∈ R$, then by the definition of $R$, this implies $R \not∈ R$, a contradiction. Thus the only alternative is $R \not∈ R$. But again, by the definition of $R$, this implies $R ∈ R$, again a contradiction. In other words, $R ∈ R$ if and only if $R \not∈ R$, a paradox that requires an explanation.

The problem, subsequently addressed by Zermelo's axiomatization, is the following: While for any set $B$ and predicate $P$, $\{x ∈ B | P(x)\}$ is actually a well-defined set, $\{x | P(x)\}$ is not. We must have a set to begin with before being able to create new sets by selecting the elements satisfying a certain condition. In other words, the universe $U$ of objects one has in mind when writing $\{x | P(x)\}$ is not itself a set.[^4]

## 3.2. Sets and Operations on Sets

### 3.2.1. The Set Concept

In set theory one postulates that there is a universe of possible sets and a universe of objects which can be elements of sets. Nothing prevents us from thinking that the two universes are the same, i.e., the elements of sets are also sets. We further postulate a binary predicate $E$ to be given, and if $E(x, y) = 1$ we say that $x$ *is an element of* $y$. We can call $E$ the elementhood predicate. Instead of the predicate $E$ we use an infix notation and write $x ∈ y$ rather than $E(x, y) = 1$. We also use the shorthand $x \not∈ y$ for $¬(x ∈ y)$, i.e., if $x$ is not an element of $y$.

[^4]: In fact, in Zermelo-Fraenkel (ZF) set theory, the axioms exclude that a set can be an element of itself.

Now we can postulate certain properties that the elementhood predicate $E$ should satisfy, capturing the essence of set theory. This makes explicit that $E$ is not some arbitrary predicate, but that it really captures natural properties of sets. In a systematic mathematical approach, one carefully chooses a list of axioms and develops a theory (set theory) based on these axioms. There are indeed several different (but related) axiom systems for set theory, and it is beyond the scope of this course to discuss set theory in a formal sense.[^5] However, we will informally introduce some of these properties/axioms in order to arrive at a sufficiently precise treatment of sets.

When writing formulas, it will often be convenient to not only use the usual logical variable symbols $x$, $y$, etc., but to use in the same formula symbols like $A$, $B$, etc. This is convenient because it makes the formulas look closer to how set theory is usually informally discussed. However, whether we use the symbol $x$ or $A$ for a set is not mathematically relevant.

### 3.2.2. Set Equality and Constructing Sets From Sets

A set is completely specified by its elements, regardless of how it is described.[^6] There is no other relevant information about a set than what its elements are. In other words, two sets $A$ and $B$ are equal ($A = B$) if (and only if) they contain the same elements, independently of how $A$ and $B$ are described. In other words, there can not be two different sets A and B which contain exactly the same elements. This is called the *axiom of extensionality* in set theory. Since we are not aiming for an axiomatic treatment of set theory, we state this simply as a definition.

::: definition Definition 3.2{#definition-3-2}
$A=B   \stackrel{{\mbox{\scriptsize def}}}{{\Longleftrightarrow}}   \forall x\;(x\in A\;\leftrightarrow\;x\in B)$.
:::

We postulate[^7] that if $a$ is a set, then the set containing exactly (and only) $a$ exists, and is usually denoted as $\{a\}$. Similarly, for any finite list of sets, say $a$, $b$, and $c$, the set containing exactly these elements exists and is usually denoted as $\{a, b, c\}$.

Since a set is specified by its elements, we can conclude that if two sets, each containing a single element, are equal, then the elements are equal. This can be stated as a lemma (in set theory), and it actually requires a proof.

::: proposition Lemma 3.1 {#lemma-3-1}
_For any (sets) $a$ and $b$, $\{a\}=\{b\}\implies a=b$ ._

**Proof:** Consider any fixed $a$ and $b$. The statement is an implication, which we prove indirectly. Assume that $a ≠ b$. Then $\{a\} ≠ \{b\}$ because there exists an element, namely $a$, that is contained in the first set, but not in the second. Thus we have proved that $a ≠ b \implies \{a\} ≠ \{b\}$. According to [Definition 2.14](/2-reasoning-proofs#definition-2-14), this proves $\{a\} = \{b\} \implies a = b$.
:::

[^5]: Indeed, mathematicians are still working on fundamental questions regarding the theory of sets (but not questions relevant to us).

[^6]:For example, the set containing exactly the three natural numbers $1$, $2$, and $3$ has many different descriptions, including $\{1, 2, 3\}$, $\{3, 1, 2\}$, $\{1, 1 + 1, 1 + 1 + 1\}$, etc. All these descriptions refer to the **same** set.

[^7]: In axiomatic set theory this is guaranteed by appropriate axioms.

Note that, in contrast, $\{a, b\} = \{c, d\}$ neither implies that $a = c$ nor that $b = d$.  
In a set, say $\{a, b\}$, there is no order of the elements, i.e.,

$$\{a,b\}=\{b,a\}.$$

However, in mathematics one wants to also define the concept of an (ordered) list of objects. Let us consider the special case of *ordered pairs*. For the operation of forming an ordered pair of two objects $a$ and $b$, denoted $(a, b)$, we define

<center>

$(a,b)=(c,d)\ \ \stackrel{\mathrm{def}}{\Longleftrightarrow}\ \ a=c\wedge b=d$.
</center>

::: example Example 3.1
This example shows that one can model ordered pairs by using only (unordered) sets?[^8] This means that the sets corresponding to two ordered pairs must be equal if and only if the ordered pairs are equal. A first approach is to define $(a, b) \stackrel{_{\text{def}}}{=} \{a, \{b\}\}$. However, this definition of an ordered pair fails because one could not distinguish whether the set $\{\{b\}, \{c\}\}$ denotes the ordered pair $(\{b\}, c)$ or the ordered pair $(\{c\}, b)$. The reader can verify as an exercise that the following definition is correct:

$$(a,b)\ {\stackrel{\mathrm{def}}{=}}\ \{\{a\},\{a,b\}\}.$$
:::

### **3.2.3 Subsets**

::: definition Definition 3.3 {#definition-3-3}
The set $A$ is a subset of the set $B$, denoted $A ⊆ B$, if every element of $A$ is also an element of $B$, i.e.,

$A\subseteq B\ \stackrel{\mathrm{def}}{\Longleftrightarrow}\ \forall x\ (x\in A\to x\in B)$.
:::

The following lemma states an alternative way for capturing the equality of sets, via the subset relation. In fact, this is often the best way to prove that two sets are equal.

::: proposition Lemma 3.2 {#lemma-3-2}
$A = B  \iff  (A ⊆ B) ∧ (B ⊆ A)$.

**Proof:** The proof first makes use (twice) of [Definition 3.3](#definition-3-3), then uses the fact from predicate logic that $∀F~∧~∀G ≡ ∀(F ∧ G)$, then uses the fact from propositional logic that $(C → D)∧(D → C) ≡ C ↔ D$, [^9] and then makes use of [Definitions 3.2](#definition-3-2). For any sets $A$ and $B$ we have the following equivalences of statements about $A$ and $B$:

$$
\begin{align*}
(A\subseteq B) \land (B \subseteq A)  &\dot\iff  \forall x\ (x\in A\to x\in B)\ \land\ \forall x\ (x\in B\to x\in A) \\
&\dot\iff  \forall x\ \big{(}(x\in A\to x\in B)\ \land\ (x\in B\to x\in A)\big{)} \\
&\dot\iff  \forall x\ (x\in A\leftrightarrow x\in B) \\
&\dot\iff  A = B
\end{align*}
$$
This concludes the proof. <span class=right>$\Box$</span>
:::

[^8]:We briefly address this question, although we will not make use of this later and will continue to think about ordered pairs and lists in a conventional sense and with conventional notation.

The next lemma states that the subset relation is transitive (a term discussed later). The proof is left as an exercise.

::: proposition Lemma 3.3{#lemma-3-3}
*For any sets* $A$, $B$*, and* $C$,

<center>

$A\subseteq B\,\land\,B\subseteq C\implies A\subseteq C$.
</center>
:::

### 3.2.4. Union and Intersection

Let us discuss a few well-known operations on sets and the laws for these operations.

::: definition Definition 3.4 Union & Intersection{#definition-3-4}
The *union* of two sets $A$ and $B$ is defined as

<center>

$A ∪ B  \stackrel{\text{def}}{=}  \{~x~|~ x ∈ A ∨ x ∈ B\}$,
</center>

and their *intersection* is defined as

$$A\cap B\  {\stackrel{\mathrm{def}}{=}} \{~x~|~x\in A\wedge x\in B\}.$$
:::

The above definition can be extended from two to several sets, i.e., to a set (or collection) of sets. Let $\mathcal A$ be a non-empty set of sets, with finite or infinite cardinality. The only restriction on $\mathcal A$ is that its elements must be sets. Then we define the union of all sets in $\mathcal A$ as the set of all $x$ that are an element of at least one of the sets in $\mathcal A$:

<center>

$\bigcup{\mathcal{A}} {\stackrel{\mathrm{def}}{=}} \{~x~|~x\in A\ {\mathrm{for~some}}\ \ A\in{\mathcal{A}}\}$.
</center>

Similarly, we define the intersection of all sets in $\mathcal A$ as the set of all $x$ that are an element of every set in $\mathcal A$:

<center>

$\bigcap{\mathcal{A}} {\stackrel{\mathrm{def}}{=}} \ \{~x~|~x\in A\ {\mathrm{for~all}}\ \ A\in{\mathcal{A}}\}$.
</center>

[^9]:Here we use $C$ and $D$ rather than $A$ and $B$ to avoid confusion because $A$ and $B$ are used here to denotes sets.

::: example Example 3.1{#example-3-1}
Consider the set of sets

$${\mathcal{A}}={\big\{}{\big\{}{a,b,c,d}{\big\}},{\big\{}{a,c,e}{\big\}},{\big\{}{a,b,c,f}{\big\}},{\big\{}{a,c,d}{\big\}}{\big\}}.$$

Then we have $\bigcup{\mathcal A} = \{a, b, c, d, e, f\}$ and $\bigcap{\mathcal A} = \{a, c\}$.
:::

Typically, the sets (elements) in a set $\mathcal A$ of sets are indexed by some index set $I: \mathcal{A} = \{~A_i~ |~ i ∈ I\}$. In this case, one also writes $\{A_i\}_{i∈I}$, and for the intersection and union one writes $\bigcap_{i∈I}{A_i}$ and $\bigcup_{i∈I}{A_i}$, respectively.

::: definition Definition 3.5 Difference{#definition-3-5}
The *difference* of sets $B$ and $A$, denoted $B\backslash A$ is the set of elements of $B$ without those that are elements of $A$:

$$B\setminus A  {\stackrel{\mathrm{def}}{=}} \{~x\in B~|~x\notin A\}.$$
:::

Since union and intersection are defined by logical operations on set membership expressions (e.g. $a ∈ A$), these set operations satisfy the corresponding statements of [Lemma 2.1](/2-reasoning-proofs#lemma-2-1). This is stated as a theorem:

::: proposition Theorem 3.4{#theorem-3-4}
*For any sets $A$, $B$, and* $C$*, the following laws hold:*

<div class="grid-cols">
<div>
Idempotence:
</div><div>

$A ∩ A = A$;  
$A ∪ A = A$;

</div><div>
Commutativity:
</div><div>

$A ∩ B = B ∩ A$;  
$A ∪ B = B ∪ A$;

</div><div>
Associativity:
</div><div>

$A ∩ (B ∩ C) = (A ∩ B) ∩ C$;  
$A ∪ (B ∪ C) = (A ∪ B) ∪ C$;

</div><div>
Absorption:
</div><div>

$A ∩ (A ∪ B) = A$;  
$A ∪ (A ∩ B) = A$;

</div><div>
Distributivity:
</div><div>

$A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)$;  
$A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)$;

</div><div>
Consistency:
</div><div>

$A ⊆ B \iff A ∩ B = A \iff A ∪ B = B$.

</div>
</div>

**Proof:** The proof is straight-forward and exploits the related laws for logical operations. For example, the two associative laws are implied by the associativity of the logical AND and OR, respectively. The proof is left as an exercise. <span class=right>$\Box$</span>
:::

### 3.2.5. The Empty Set

::: definition Definition 3.6 Empty Set{#definition-3-6}
A set A is called *empty* if it contains no elements, i.e., if $∀x~¬(x ∈ A)$.
:::

::: proposition Lemma 3.5{#lemma-3-5}
*There is only one empty set (which is often denoted as* $∅$ or $\{\}$).[^10]

**Proof:** Let $∅$ and $∅^′$ both be arbitrary empty sets. Since both are empty, every element that is in $∅$ (namely none) is also in $∅^′$ , and vice versa. This means according to [Definition 3.2](#definition-3-2) that $∅ = ∅^′$ , which means that there is only one empty set. <span class=right>$\Box$</span>
:::

::: proposition Lemma 3.6{#lemma-3-6}
*The empty set is a subset of every set, i.e.,* $∀A~(∅ ⊆ A)$

**Proof:** The proof is by contradiction: Assume that there is a set $A$ for which $∅ \not⊆ A$. This means that there exists an $x$ for which $x ∈ ∅$ but $x \not∈ A$. But such an $x$ cannot exist because $∅$ contains no element, which is a contradiction. <span class=right>$\Box$</span>

**Alternative Proof:** The above is a valid proof. Just to illustrate (as an example) that the same proof could be made more formal and more precise we can write the proof as follows, making use of logical transformation rules for formulas with quantifiers. Let $A$ be an arbitrary (but fixed) set. The proof is by contradiction (see [Definition 2.17](/2-reasoning-proofs#definition-2-17)), where the statement $S$ to be proved is $∅ ⊆ A$ and as the statement $T$ we choose ¬$∀x~(x \not∈ ∅)$, which is false because it is the negation of the definition of $∅$. The proof that the negation of $S$ implies $T$ (step 3 in [Definition 2.17](/2-reasoning-proofs#definition-2-17)) is as follows:

$$
\begin{align*}
\neg (\emptyset \subseteq A)  
&\dot\iff \neg \forall x (x \in \emptyset \to x \in A) && \text{(def. of } \emptyset \subseteq A\text{)} \\
&\dot\iff \exists x \, \neg (x \in \emptyset \to x \in A) && (\neg \forall x F \equiv \exists x \neg F) \\
&\dot\iff \exists x \, \neg (\neg (x \in \emptyset) \lor x \in A) && (\text{def. of } \to) \\
&\dot\iff \exists x (x \in \emptyset \land \neg (x \in A)) && (\text{de Morgan's rule}) \\
&\dot\implies \exists x (x \in \emptyset) \land \exists x \, \neg (x \in A) && (\exists x (F \land G) \models (\exists x F) \land (\exists x G)) \\
&\dot\implies \exists x (x \in \emptyset) && (F \land G \text{ implies } F) \\
&\dot\iff \neg \forall x \, \neg (x \in \emptyset) && (\neg \forall x F \equiv \exists x \neg F) \\
&\dot\iff \emptyset \text{ is not the empty set} && (\text{Definition 3.6}) \\
\end{align*}
$$

which is false, and hence we have arrived at a contradiction. <span class=right>$\Box$</span>
:::

### 3.2.6. Constructing Sets from the Empty Set

At this point, the only set we know to exist, because we have postulated it, is the empty set. We can hence construct new sets $∅$. The set $\{∅\}$ is a set with a single element (namely $∅$). It is important to note that $\{∅\}$ is not the empty set $∅$, i.e., $\{∅\} ≠ ∅$. Note that $|\{∅\}| = 1$ while $|∅| = 0$. One can thus define a whole sequence of such sets:

$$\varnothing,\;\{\varnothing\},\;\{\{\varnothing\}\},\;\{\{\{\varnothing\}\}\},\ldots$$

Note that, except for the empty set, all these sets have cardinality 1.

[^10]:We take it for granted that ∅ is actually a set. But in an axiomatic treatment of set theory, this must be stated as an axiom.

::: example Example 3.3{#example-3-3}
A few other sets constructed from the empty set are:

$A = \{∅, \{∅\}\}$,  
$B = \{\{∅, \{∅\}\}\}$, and  
$C = \{∅, \{∅\}, \{∅, \{∅\}\}\}$.

Their cardinalities are $|A| = 2$, $|B| = 1$, and $|C| = 3$. Also, $A ⊆ C$ and $B ⊆ C$.
:::

::: example Example 3.4{#example-3-4}
We have considered three relations between sets: $∈$, $=$, and $⊆$. Which of these relations hold for the following sets?

$A = \{\{∅\}\}$,  
$B = \{\{∅\}, \{∅, ∅\}\}$,  
$C = \{∅, \{∅\}\}$, and  
$D = \{∅, \{∅, \{∅\}\}\}$. 

The answer is: $B = A ⊆ C ∈ D$.
:::

### 3.2.7. A Construction of the Natural Numbers

We briefly discuss a way to define the natural numbers from basic set theory. We use bold-face font to denote objects that we define here as special sets, and then can observe that they can be seen as corresponding to the natural numbers with the same symbol (but written in non-bold font). We define the sets

$$\mathbf{0}\ \stackrel{{\rm def}}{{=}}\ \varnothing,  \mathbf{1}\ \stackrel{{\rm def}}{{=}}\ \{\varnothing\},  \mathbf{2}\ \stackrel{{\rm def}}{{=}}\ \{\varnothing,\{\varnothing\}\}, \mathbf 3\ \stackrel{{\rm def}}{{=}}\ \{\varnothing,\{\varnothing\},\{\varnothing,\{\varnothing\}\}\},~\ldots$$

The successor of a set n, which we can denote by s(n), is defined as

$$s(\mathbf{n})\ {\stackrel{\mathrm{def}}{=}}\ \mathbf{n}\cup\{\mathbf{n}\}.$$

For example, we have $\mathbf 1 = s(\mathbf 0)$ and $\mathbf 2 = s(\mathbf 1)$. We note that $|\mathbf 0| = 0$, $|\mathbf 1| = 1$, $|\mathbf 2| = 2$, $|\mathbf 3| = 3$, …, and, more generally, that $|s(\mathbf n)| = |\mathbf n| + 1$.

An operation $\boldsymbol{+}$ on these sets $\mathbf 0$, $\mathbf 1$, $\mathbf 2$, $\mathbf 3$, . . ., which corresponds to addition of numbers, can be defined recursively as follows:

$$\begin{array}{l l l l l}{{\bf m}{\boldsymbol{+}}{\bf0}}&{{\stackrel{\mathrm{def}}{=}}}&{{\bf m}}&{{}}&{{}}&{{\mathrm{and}}}&{{}}&{{}}&{{\bf m}{\bf+}s({\bf n})}&{{\stackrel{\mathrm{def}}{=}}}&{{s(\bf{m+n})}}\end{array}$$

One can also define a multiplication operation and prove that these operations satisfy the usual laws of the natural numbers (commutative, associative, and distributive laws).

### 3.2.8. The Power Set of a Set

::: definition Definition 3.7 Power Set{#definition-3-7}
The *power set* of a set $A$, denoted $\cf P(A)$, is the set of all subsets of $A$: [^11]

$${\mathcal{P}}(A)\ \stackrel{\mathrm{def}}{=}\ \{~S~|\ S\subseteq A\}$$
:::

For a finite set with cardinality $k$, the power set has cardinality $2^k$ (hence the name "power set" and the alternative notation $2^A$).

::: example Example 3.5{#example-3-5}
$\cf P(\{a, b, c\}) = \{∅, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}$ and

$|\cf P(\{a, b, c\})| = 8$.
:::

::: example Example 3.6{#example-3-6}
We have

$\cf P(∅) = \{∅\}$,  
$\cf P(\{∅\}) = \{∅, \{∅\}\}$,  
$\cf P(\{∅, \{∅\}\}) = \{∅, \{∅\}, \{\{∅\}\}, \{∅, \{∅\}\}\}$,  
$\{1, 7, 9\} ∈ \cf P(ℕ)$.
:::

### 3.2.9. The Cartesian Product of Sets

Recall that two ordered pairs are equal if and only if both components agree, i.e.,

$$(a,b)=(c,d) {\stackrel{\mathrm{def}}{\iff}}  a=c\,\land\,b=d$$

More generally, we denote an (ordered) list of $k$ objects $a_1, …, a_k$ as $(a_1, …, a_k)$. Two lists of the same length are equal if they agree in every component.

::: definition Definition 3.8 Cartesian Product{#definition-3-8}
The *Cartesian product* $A × B$ of two sets $A$ and $B$ is the set of all ordered pairs with the first component from $A$ and the second component from $B$:

<center>

$A\times B=\{~(a,b)~|~ a\in A~\land~b\in B\}$.
</center>
:::

For finite sets, the cardinality of the Cartesian product of some sets is the product of their cardinalities: $|A × B| = |A| · |B|$.

::: example Example 3.7{#example-3-7}
Prove or disprove the following statements:

1. $\emptyset\times A=\emptyset$.
2. $A × B = B × A$.
:::

More generally, the Cartesian product of $k$ sets $A_1, …, A_k$ is the set of all lists of length $k$ (also called $k$-tuples) with the $i$-th component from $A_i$:

$$\bigtimes_{i=1}^{k}A_{i}=\{~(a_{1},...,a_{k})~|~a_{i}\in A_{i}\ \ \mbox{for}\ 1\leq i\leq k\}$$

We point out that the Cartesian product is not associative, and in particular

$$\bigtimes_{i=1}^{3}A_{i}≠(A_1 × A_2) × A_3$$

[^11]:In axiomatic set theory, the existence of the power set of every set must be postulated as an axiom.

## 3.3. Relations

Relations are a fundamental concept in discrete mathematics and Computer Science. Many special types of relations (e.g., equivalence relations, order relations, and lattices) capture concepts naturally arising in applications. Functions are also a special type of relation.

### 3.3.1. The Relation Concept
::: definition Definition 3.9{#definition-3-9}
A *(binary) relation* $ρ$ *from a set* $A$ *to a set* $B$ (also called an $(A, B)$ *relation*) is a subset of $A × B$.  
If $A = B$, then $ρ$ is called a relation on $A$.
:::

Instead of $(a, b) ∈ ρ$ one usually writes

<center>

$a \operatorname\rho b$,
</center>

and sometimes we write $a \!\not\!\rho\; b$ if $(a, b) \not∈ ρ$.

::: example Example 3.8{#example-3-8}
Let $S$ be the set of students at ETH and let $C$ be the set of courses taught at ETH. Then a natural relation from $S$ to $C$ is the "takes" relation. If $s ∈ S$ is a student and $c ∈ C$ is a course, then $(s, c)$ is in the relation if and only if s takes course $c$. If we denote the relation by $\mathtt{takes}$, we can write $(s, c) ∈ \mathtt{takes}$ or $s~\mathtt{takes}~ y$.[^12] We can also consider the set $P$ of professors at ETH and the natural relation from $P$ to $C$.
:::

::: example Example 3.9{#example-3-9}
Let $H$ be the set of all human beings (alive or dead). Then "child of" is a relation on $H$. If we denote the relation by $\mathtt{childof}$, then $(x, y) ∈~\mathtt{childof}$ (or equivalently $x~\mathtt{childof}~y$) means that $x$ is $y$'s child. Other relations on $H$ are "parent of", "grandparent of", "cousin of", "ancestor of", "married to", etc.
:::

::: example Example 3.10{#example-3-10}
On the integers $ℤ$ we already know a number of very natural relations: $=$, $≠$, $≤$, $≥$, $<$, $>$, $|$ (the 'divides' relation), and $\mathord{\not}\,|$ (does not divide).
:::

::: example Example 3.11{#example-3-11}
The relation $≡_m$ on $ℤ$ is defined as follows:

<center>

$a\equiv_{m}b\quad{\stackrel{\mathrm{def}}{\iff}}\quad a-b=k m$&emsp; for some $k$,
</center>

i.e., $a ≡_m b$ if and only if $a$ and $b$ have the same remainder when divided by $m$. (See [Section 4.2.](/4-number-theory#section-4-2))
:::

[^12]:Note that the relation takes can change over time, and in such an example we consider the relation at a certain point in time.

::: example Example 3.12{#example-3-12}
The relation $\{(x, y)~|~x^2 + y^2 = 1\}$ on $ℝ$ is the set of points on the unit circle, which is a subset of $ℝ × ℝ$.
:::

::: example Example 3.13{#example-3-13}
For any set $S$, the subset relation ($⊆$) is a relation on $\cf P(S)$.
:::

::: example Example 3.14{#example-3-14}
Two special relations from $A$ to $B$ are the empty relation (i.e., the empty set $∅$) and the complete relation $A × B$ consisting of all pairs $(a, b)$.
:::

::: definition Definition 3.10{#definition-3-10}
For any set $A$, the *identity relation* on $A$, denoted $\mathsf{id}_A$ (or simply $\mathsf{id}$), is the relation $\mathsf{id}_A = \{(a, a)~|~a ∈ A\}$.
:::

Relations on a finite set are of special interest. There are $2^{n^2}$ different relations on a set of cardinality $n$. (Why?)

The relation concept can be generalized from binary to $k$-ary relations for given sets $A_1, …, A_k$. A $k$-ary relation is a subset of $A_1× \cdots ×A_k$. Such relations play an important role in modeling relational databases. Here we only consider binary relations.

### 3.3.2. Representations of Relations

For finite sets $A$ and $B$, a (binary) relation $ρ$ from $A$ to $B$ can be represented as a Boolean $|A|×|B|$ matrix $M^ρ$ with the rows and columns labeled by the elements of $A$ and $B$, respectively. For $a ∈ A$ and $b ∈ B$, the matrix entry $M^ρ_{a,b}$ is $1$ if $a ρ b$, and $0$ otherwise.

::: example Example 3.15{#example-3-15}
Let $A = \{a, b, c, d\}$ and $B = \{q, r, s, t, u\}$, and consider the relation $ρ = \{(a, r),(a, s),(a, u),(b, q),(b, s),(c, r),(c, t),(c, u),(d, s),(d, u)\}$. The matrix representation is

$$
M^{\rho} = 
\begin{array}{c}
\begin{matrix}
& q & r & s & t & u\;
\end{matrix}
\\
\begin{matrix}
a \\ b \\ c \\ d
\end{matrix}
\left[
\begin{matrix}
\;0 & 1 & 1 & 0 & 1\; \\
\;1 & 0 & 1 & 0 & 0\; \\
\;0 & 1 & 0 & 1 & 1\; \\
\;0 & 0 & 1 & 0 & 1\;
\end{matrix}
\right]
\end{array}
$$

where the rows and columns are labeled by the elements of $A$ and $B$, respectively.
:::

For relations on a set $A$, the matrix is an $|A| × |A|$ square matrix.

::: example Example 3.16{#example-3-16}
For the set $A = \{1, 2, 3, 4, 5\}$, the relations $=$, $≥$, and $≤$ correspond to the identity matrix,[^13] the lower triangular matrix, and the upper triangular matrix, respectively.
:::

[^13]:The identity relation ($=$) on any finite set corresponds to the identity matrix.

An alternative representation of a relation $ρ$ from $A$ to $B$ is by a directed graph with $|A| + |B|$ vertices[^14] labeled by the elements of $A$ and $B$. The graph contains the edge[^15] from $a$ to $b$ if and only if $a \operatorname\rho b$. For a relation on a set $A$, the graph contains only $|A|$ vertices, but it can contain loops (edges from a vertex to itself).

### 3.3.3. Set Operations on Relations

Relations from $A$ to $B$ are sets, and therefore we can apply any operation defined on sets: union, intersection, and complement. In the matrix representation of relations, these operations correspond to the position-wise logical $\text{OR}$, $\text{AND}$, and negation, respectively. A relation can also be a subset of another relation.

::: example Example 3.17{#example-3-17}
On the set $ℤ$, the relation $≤ ∪ ≥$ is the complete relation, $≤ ∩ ≥$ is the identity relation, and the complement of $≤$ is the relation $>$. Moreover, we have $<\operatorname ⊆ ≤$ and $=\operatorname ⊆ ≥$.
:::

::: example Example 3.18{#example-3-18}
For any relatively prime integers $m$ and $n$, the relation $≡_m \operatorname ∩ ≡_n$ is $≡_{mn}$, as will be shown in Chapter 4. More generally, For general $m$ and $n$, the relation $≡_m ∩ ≡_n$ is $≡_{\operatorname{lcm}(m,n)}$, where $\operatorname{lcm}(m, n)$ denotes the least common multiple of $m$ and $n$.
:::

### 3.3.4. The Inverse of a Relation

::: definition Definition 3.11 Inverse{#definition-3-11}
The *inverse* of a relation $ρ$ from $A$ to $B$ is the relation $\hat ρ$ from $B$ to $A$ defined by

<center>

$\widehat ρ\ \stackrel{\text{def}}{=}\ \{(b, a)~|~(a, b) ∈ ρ\}$.
</center>
:::

Note that for all $a$ and $b$ we have $b \operatorname{\widehat\rho} a \iff a \operatorname\rho b$. An alternative notation for the inverse of $ρ$ is $ρ^{ −1}$ .

::: example Example 3.19{#example-3-19}
Let $H$ be the set of people, $O$ the set of objects, and $π$ the ownership relation from $H$ to $O$. The inverse $\widehat π$ is the "owned by" relation determining who owns an object.
:::

::: example Example 3.20{#example-3-20}
If $\phi$ is the parenthood relation on the set $H$ of humans (i.e., $a \operatorname\phi  b$ if $a$ is a parent of $b$), then the inverse relation $\widehat\phi$ is the childhood relation.
:::

::: example Example 3.21{#example-3-21}
On the set $ℤ$, the inverse of the relation $≤$ is the relation $≥$. The inverse of $\mathsf{id}$ is again $\mathsf{id}$.
:::

In the matrix representation, taking the inverse of a relation corresponds to the transposition of the matrix. In the graph representation, taking the inverse corresponds to inverting the direction of all edges.

[^14]:German: Knoten

[^15]:German: Kante

### 3.3.5. Composition of Relations

::: definition Definition 3.12 Composition{#definition-3-12}
Let $ρ$ be a relation from $A$ to $B$ and let $σ$ be a relation from $B$ to $C$. Then the *composition* of $ρ$ and $σ$, denoted $ρ ◦ σ$ (or also $ρσ$), is the relation from $A$ to $C$ defined by

<center>

$\rho\circ\sigma\ \stackrel{{\text{def}}}{{=}}\ \{(a,c)\mid\exists b\left((a,b)\in\rho\ \wedge\ (b,c)\in\sigma\right)\}$.
</center>

The $n$-fold composition of a relation $ρ$ on a set $A$ with itself is denoted $ρ^n$.
:::

::: proposition Lemma 3.7{#lemma-3-7}
*The composition of relations is associative, i.e., we have* $ρ ◦ (σ ◦ \phi) = (ρ ◦ σ) ◦ \phi$.

**Proof:** We use the short notation $ρσ$ instead of $ρ ◦ σ$. The claim of the lemma, $ρ(σ\phi) = (ρσ)\phi$, states an equality of sets, which can be proved by proving that each set is contained in the other (see [Section 3.2.3](#_3-2-3-subsets)). We prove $ρ(σ\phi) ⊆ (ρσ)\phi$; the other inclusion is proved analogously. Suppose that $(a, d) ∈ ρ(σ\phi)$. We need to prove that $(a, d) ∈ (ρσ)\phi$. For illustrative purposes, We provide two formulations of this proof, first as a text and then in logical formulas.

Because $(a, d) ∈ ρ(σ\phi)$, there exists $b$ such that $(a, b) ∈ ρ$ and $(b, d) ∈ σ\phi$. The latter implies that there exists $c$ such that $(b, c) ∈ σ$ and $(c, d) ∈ \phi$. Now, $(a, b) ∈ ρ$ and $(b, c) ∈ σ$ imply that $(a, c) ∈ ρσ$, which together with $(c, d) ∈ \phi$ implies $(a, d) ∈ (ρσ)\phi$.

Now comes the more formal version of the same proof, where the justification for each step is omitted:[^16]

$$
\begin{align*}
(a, d) \in \rho (\sigma \phi) 
&\dot\implies  \exists b \, ((a, b) \in \rho \land (b, d) \in \sigma \phi) \\[2pt]
&\dot\implies  \exists b \, ((a, b) \in \rho \land \exists c \, ((b, c) \in \sigma \land (c, d) \in \phi)) \\[2pt]
&\dot\implies  \exists b \exists c \, ((a, b) \in \rho \land ((b, c) \in \sigma \land (c, d) \in \phi)) \\[2pt]
&\dot\implies  \exists b \exists c \, (((a, b) \in \rho \land (b, c) \in \sigma) \land (c, d) \in \phi) \\[2pt]
&\dot\implies  \exists c \exists b \, (((a, b) \in \rho \land (b, c) \in \sigma) \land (c, d) \in \phi) \\[2pt]
&\dot\implies  \exists c \, (\exists b \, ((a, b) \in \rho \land (b, c) \in \sigma) \land (c, d) \in \phi) \\[2pt]
&\dot\implies  \exists c \, ((a, c) \in \rho \sigma \land (c, d) \in \phi) \\[2pt]
&\dot\implies  (a, d) \in (\rho \sigma) \phi.
\end{align*}
$$

Both formulations prove the lemma. <span class=right>$\Box$</span>
:::

[^16]:The justifications should be obvious, except perhaps for the following fact from predicate logic (explained in Chapter 6) used several times in the proof: $∃x(F ∧G) ≡ F ∧ ∃xG$ if $x$ does not appear in $F$.

::: example Example 3.22{#example-3-22}
Consider the ownership relation $π$ and the parenthood relation $\phi$ as above. Then the relation $\phiπ$ from $H$ to $O$ can be interpreted as follows: $a \operatorname{\phi\pi} b$ if and only if person $a$ has a child who owns object $b$.
:::

::: example Example 3.23{#example-3-23}
If $\phi$ is the parenthood relation on the set $H$ of humans, then the relation $\phi^2$ is the grand-parenthood relation.[^17]
:::

In the matrix representation, composing two relations corresponds to a special type of matrix multiplication. If the matrices are considered as integer matrices (with $0$ and $1$ entries), then after the multiplication all entries $> 1$ are set to $1$. [^18] In the graph representation the composition corresponds to the natural composition of the graphs, where $a \operatorname{\rho\sigma} c$ if and only if there is a path from $a$ (over some $b$) to $c$.

The proof of the following lemma is left as an exercise.

::: proposition Lemma 3.8{#lemma-3-8}
Let $ρ$ *be a relation from* $A$ to $B$ *and let* $σ$ *be a relation from* $B$ to $C$*. Then the inverse* $\widehat{ρσ}$ of $ρσ$ *is the relation* $\widehat\sigma\widehat\rho$.
:::

### 3.3.6. Special Properties of Relations
::: definition Definition 3.13 Reflexive Relation{#definition-3-13}
A relation $ρ$ on a set $A$ is called *reflexive* if

$$a \operatorname\rho a$$

is true for all $a ∈ A$, i.e., if

<center>

$\mathsf{id}\subseteq\rho$.
</center>
:::

In other words, a relation is reflexive if it contains the identity relation $\mathsf{id}$. In the matrix representation of relations, reflexive means that the diagonal is all $1$. In a graph representation, reflexive means that every vertex has a loop (an edge from the vertex to itself).

::: example Example 3.24{#example-3-24}
The relations $≤$, $≥$, and $|$ (divides) on $ℤ\backslash\{0\}$ are reflexive, but the relations $<$ and $>$ are not.
:::


::: definition Definition 3.14 Irreflexive Relation{#definition-3-14}
A relation $ρ$ on a set $A$ is called *irreflexive* if $a \operatorname{\not\!\rho} a$ for all $a ∈ A$, i.e., if $ρ ∩ \mathsf{id} = ∅$. [^19]
:::

[^17]:Note that the notation $\phi^2$ is actually ambiguous; it could also denote the Cartesian product $\phi × \phi$. But in these lecture notes no ambiguity will arise.

[^18]:If the matrices are considered as Boolean matrices, then for multiplying two matrices one takes the OR of all product terms contributing to an entry in the product matrix.

[^19]:Note that irreflexive is not the negation of reflexive, i.e., a relation that is not reflexive is not necessarily irreflexive.

::: definition Definition 3.15 Symmetric Relation{#definition-3-15}
A relation $ρ$ on a set $A$ is called *symmetric* if

$$a \operatorname\rho b\ \iff\ b\operatorname\rho a$$

is true for all $a, b ∈ A$, i.e., if 

<center>

$ρ = \widehat\rho$.
</center>
:::

In the matrix representation of relations, symmetric means that the matrix is symmetric (with respect to the diagonal).

A symmetric relation ρ on a set A can be represented as an undirected graph, possibly with loops from a node to itself.

::: example Example 3.25{#example-3-25}
The relation $≡_m$ on $ℤ$ is symmetric.
:::

::: example Example 3.26{#example-3-26}
The "married to" relation on the set $H$ of humans is symmetric.
:::

::: definition Definition 3.16 Antisymmetric Relation{#definition-3-16}
A relation $ρ$ on a set $A$ is called *antisymmetric* if

$$a \operatorname\rho b \land b \operatorname\rho a\ \implies\ a = b$$

is true for all $a, b ∈ A$, i.e., if

<center>

$ρ ∩ \widehat ρ ⊆ \mathsf{id}$.
</center>
:::

In a graph representation, antisymmetric means that there is no cycle of length $2$, i.e., no distinct vertices $a$ and $b$ with edges both from $a$ to $b$ and from $b$ to $a$. Note that antisymmetric is not the negation of symmetric.

::: example Example 3.27{#example-3-27}
The relations $≤$ and $≥$ are antisymmetric, and so is the division relation $|$ on $ℕ$: If $a | b$ and $b | a$, then $a = b$. But note that the division relation $|$ on $ℤ$ is not antisymmetric. Why?
:::

::: definition Definition 3.17 Transitive Relation{#definition-3-17}
A relation $ρ$ on a set $A$ is called *transitive* if

$$a \operatorname\rho b \land b \operatorname\rho c\ \implies\ a \operatorname\rho c$$

is true for all $a, b, c ∈ A$.
:::

::: example Example 3.28{#example-3-28}
The relations $≤$, $≥$, $<$, $>$, $|$, and $≡_m$ on $ℤ$ are transitive.
:::

::: example Example 3.29{#example-3-29}
Let $ρ$ be the ancestor relation on the set $H$ of humans, i.e., $a \operatorname\phi b$ if $a$ is an ancestor of $b$. This relation is transitive.
:::

::: proposition Lemma 3.9{#lemma-3-9}
*A relation* $ρ$ *is transitive if and only if* $ρ^2 ⊆ ρ$.

**Proof:** The "if" part of the theorem ($\impliedby$) follows from the definition of composition: If $a \operatorname\rho b$ and $b \operatorname\rho c$, then $a \operatorname\rho^2 c$. Therefore also $a \operatorname\rho c$ since $ρ^2 ⊆ ρ$. [^20] This means transitivity.

Proof of the "only if" part ($\implies$): Assume that $ρ$ is transitive. To show that $ρ^2 ⊆ ρ$, assume that $a \operatorname\rho^2 b$ for some $a$ and $b$. We must prove that $a \operatorname\rho b$. The definition of $a \operatorname\rho^2 b$ states that there exists $c$ such that $a \operatorname\rho c$ and $c \operatorname\rho b$. Transitivity of $ρ$ thus implies that $a \operatorname\rho b$, which concludes the proof. <span class=right>$\Box$</span>
:::

[^20]:In set-theoretic notation: $(a, c) ∈ ρ^2 ∧ ρ^2 ⊆ ρ \implies (a, c) ∈ ρ$.

### 3.3.7. Transitive Closure

The reader can verify as an exercise that for a transitive relation $ρ$ we have $ρ^n ⊆ ρ$ for all $n > 1$.

::: definition Definition 3.18 Transitive Closure{#definition-3-18}
The *transitive closure* of a relation $ρ$ on a set $A$, denoted $ρ^∗$, is

<center>

$\rho^{*}\ =\ \displaystyle\bigcup_{n\in\mathbb{N}\backslash\{0\}}\rho^{n}$.
</center>
:::

In the graph representation of a relation $ρ$ on $A$, we have $a \operatorname\rho^k b$ if and only if there is a walk of length $k$ from $a$ to $b$ in the graph, where a walk may visit a node multiple times. The transitive closure is the reachability relation, i.e., $a \operatorname\rho^* b$ if and only if there is a path (of arbitrary finite length) from $a$ to $b$.

::: example Example 3.30{#example-3-30}
Consider the set $P$ of all convex polygons. We can think of them as being given as pieces of paper. By cutting a piece into two pieces with a straight cut one can obtain new polygons. Let $\succeq$ be the relation defined as follows: $a \succeq b$ if and only if with a single straight-line cut (or no cut) one can obtain $b$ from $a$. Moreover, consider the covering relation $⊒$, where $a ⊒ b$ if and only if $a$ can completely cover $b$ (if appropriately positioned). It is easy to see that $⊒$ is reflexive, anti-symmetric, and transitive[^21] whereas $\succeq$ is only reflexive and antisymmetric. Note that $⊒$ is the transitive closure of $\succeq$.
:::

## 3.4. Equivalence Relations

### 3.4.1. Definition of Equivalence Relations
::: definition Definition 3.19 Equivalence Relation{#definition-3-19}
An *equivalence relation* is a relation on a set $A$ that is reflexive, symmetric, and transitive.
:::

::: example Example 3.31{#example-3-31}
The relation $≡_m$ is an equivalence relation on $ℤ$.
:::

[^21]:Such a relation will be defined below as a partial order relation.

::: definition Definition 3.20 Equivalence Class{#definition-3-20}
For an equivalence relation $θ$ on a set $A$ and for $a ∈ A$, the set of elements of $A$ that are equivalent to $a$ is called the *equivalence class of* $a$ and is denoted as $[a]_θ$: [^22]

<center>

$[a]_{\theta}~{\stackrel{\mathrm{def}}{=}}~\{b\in A~|~b \operatorname\theta a\}$.
</center>
:::

Two trivial equivalence relations on a set $A$ are the complete relation $A × A$, for which there is only one equivalence class $A$, and the identity relation for which the equivalence classes are all singletons[^23] $\{a\}$ for $a ∈ A$.

::: example Example 3.32{#example-3-32}
The equivalence classes of the relation $≡_3$ are the sets

$[0] = \{. . . , −6, −3, 0, 3, 6, . . .\}$,  
$[1] = \{. . . , −5, −2, 1, 4, 7, . . .\}$,  
$[2] = \{. . . , −4, −1, 2, 5, 8, . . .\}$.
:::

::: example Example 3.33{#example-3-33}
Consider the set $ℝ^2$ of points $(x, y)$ in the plane, and consider the relation $ρ$ defined by $(x, y)~\operatorname\rho~(x^′, y^′ ) \iff x+y = x^\prime +y^′$. Clearly, this relation is reflexive, symmetric, and transitive. The equivalence classes are the set of lines in the plane parallel to the diagonal of the second quadrant.

:::
The proof of the following theorem is left as an exercise.

::: proposition Lemma 3.10{#lemma-3-10}
*The intersection of two equivalence relations (on the same set) is an equivalence relation.*
:::

::: example Example 3.34{#example-3-34}
The intersection of $≡_5$ and $≡_3$ is $≡_{15}$.
:::

### 3.4.2. Equivalence Classes Form a Partition

::: definition Definition 3.21 Partition{#definition-3-21}
A *partition* of a set $A$ is a set of mutually disjoint subsets of $A$ that cover $A$, i.e., a set $\{S_i~|~i ∈ \cf I\}$ of sets $S_i$ (for some index set $\cf I$) satisfying

<center>

$S_{i}\cap S_{j}=\varnothing$&ensp; for $i\neq j$&emsp; and &emsp;$\displaystyle\bigcup_{i \in \cf I} S_{i}=A$.
</center>
:::

Consider any partition of a set $A$ and define the relation $≡$ such that two elements are $≡$-related if and only if they are in the same set of the partition. It is easy to see that this relation is an equivalence relation. The following theorem states that the converse also holds. In other words, partitions and equivalence relations capture the same (simple) abstraction.

[^22]:When the relation $θ$ is understood, we can drop the subscript $θ$.

[^23]:A singleton is a set with one element.

::: definition Definition 3.22 Quotient Set{#definition-3-22}
The set of equivalence classes of an equivalence relation $θ$, denoted by

<center>

$A/θ  \stackrel{\text{def}}{=}  \{[a]_θ~|~a ∈ A\}$,
</center>

is called the *quotient set of* $A$ by $θ$, or simply $A$ *modulo* $θ$, or $A \operatorname{mod} θ$.
:::

::: proposition Theorem 3.11{#theorem-3-11}
*The set* $A/θ$ *of equivalence classes of an equivalence relation* $θ$ on $A$ is *a partition of* $A$.

**Proof:** Since $a ∈ [a]$ for all $a ∈ A$ (reflexivity of $θ$), the union of all equivalence classes is equal to $A$. It remains to prove that equivalence classes are disjoint. This is proved by proving, for any fixed $a$ and $b$, that

$$a\;\theta\;b\implies[a]=[b]$$

and

<center>

$a\operatorname{\not\!\theta} b\implies[a]\cap[b]=\emptyset$.
</center>

To prove the first statement we consider an arbitrary $c ∈ [a]$ and observe that

$$
\begin{align*}
c \in [a] 
&\dot\iff c \, \theta \, a && \text{(def. of } [a]\text{)} \\
&\;\dot\implies c \, \theta \, b && \text{(use } a \, \theta \, b \text{ and transitivity)} \\
&\dot\iff c \in [b] && \text{(def. of } [b]\text{)}
\end{align*}
$$

Note that $c ∈ [a] \implies c ∈ [b]$ (for all $c ∈ A$) is the definition of $[a] ⊆ [b]$. The statement $[b] ⊆ [a]$ is proved analogously but additionally requires the application of symmetry. (This is an exercise.) Together this implies $[a] = [b]$.

The second statement is proved by contradiction. Suppose it is false[^24], i.e., $a \operatorname{\not\!\theta} b$ and $[a] ∩ [b] ≠ ∅$, i.e., there exists some $c ∈ [a] ∩ [b]$, which means that $c \operatorname\theta a$ and $c \operatorname\theta b$. By symmetry we have $a \operatorname\theta c$ and thus, by transitivity, we have $a \operatorname\theta b$, a contradiction. (As an exercise, the reader can write this proof as a sequence of implications.) <span class=right>$\Box$</span>
:::

### 3.4.3. Example: Definition of the Rational Numbers

We consider the set $A = ℤ × (ℤ\backslash\{0\})$ and define the equivalence relation $∼$ on $A$ as follows:

<center>

$(a,b)\sim(c,d)  {\stackrel{\mathrm{def}}{\iff}} a d=b c$.
</center>

This relation is reflexive ($(a, b) ∼ (a, b)$ since $ab = ba$), symmetric (since $ad = bc \implies cb = da$), and transitive. For the latter, assume $(a, b) ∼ (c, d)$ and $(c, d) ∼ (e, f)$. Then $ad = bc$ and $cf = de$, and thus $adcf = bcde$. Canceling $d$ (which is $≠ 0$) gives 

<center>

$acf = bce$.
</center>

We have to consider the cases $c ≠ 0$ and $c = 0$ separately. If $c ≠ 0$, then $c$ can be canceled, giving $af = be$. If $c = 0$, then $a = 0$ since $d ≠ 0$ but $ad = bc$. Similarly, $e = 0$, and thus we also have $af = be$. Therefore $∼$ is transitive and hence an equivalence relation.
[^24]:Recall that $¬(A → B) ≡ A ∧ ¬B$.

To every equivalence class $[(a, b)]$ we can associate the rational number $a/b (b ≠ 0)$. It is easy to see that all pairs $(u, v) ∈ [(a, b)]$ correspond to the same rational number, and two distinct rational numbers correspond to distinct equivalence classes. Thus[^25]

<center>

$\mathbb{Q}\ \ {\stackrel{\mathrm{def}}{=}}\ \ \left(\mathbb{Z}\times\left(\mathbb{Z}\backslash\{0\}\right)\right)~/\sim$.
</center>

## 3.5. Partial Order Relations

### 3.5.1. Definition

Taking the definition of an equivalence relation and simply replacing the symmetry condition by the anti-symmetry condition results in a completely different, but even more interesting type of relation.

::: definition Definition 3.23 Partial Order{#definition-3-23}
A *partial order* (or simply an *order relation*[^26]) on a set $A$ is a relation that is reflexive, antisymmetric, and transitive. A set $A$ together with a partial order $\preceq$ on $A$ is called a *partially ordered set* (or simply *poset*) and is denoted as $(A;\preceq)$. [^27]
:::

In a graph representation of relations, a partial order has no cycles (but this is of course not a complete characterization).

::: example Example 3.35{#example-3-35}
The relations $≤$ and $≥$ are partial orders on $ℤ$, $ℚ$, or $ℝ$. The relations $<$ and $>$ are not partial orders because they are not reflexive (though they are both transitive and, in fact, also antisymmetric because $a < b ∧ b < a$ is never true, i.e., $< \operatorname ∩ \widehat< = ∅$).
:::

::: example Example 3.36{#example-3-36}
The division relation ($|$) is a partial order on $ℕ\backslash \{0\}$ or any subset of $ℕ\backslash \{0\}$.
:::

::: example Example 3.37{#example-3-37}
The subset relation on the power set of a set $A$ is a partial order. In other words, for any set $A$, $(\cf P(A); ⊆)$ is a poset.
:::

[^25]:This is a more fancy way of saying that two rational numbers $a/b$ and $c/d$ are the same number if and only if the ratio is the same. But actually, this is the definition of the rational numbers. If the reader is surprised, he or she is challenged to come up with a simpler definition.

[^26]:German: Ordnungsrelation

[^27]:Partial orders are often denoted by $≤$ or by a similar symbol like $\preceq$ or $⊑$.

::: example Example 3.38{#example-3-38}
The covering relation on convex polygons (see [Example 3.30](#example-3-30)) is a partial order.
:::

For a partial order relation $\preceq$ we can define the relation $a ≺ b$ similar to how the relation $<$ is obtained from $≤$:

$$a\prec b\ \ \stackrel{\mathrm{def}}{\Longleftrightarrow}\ \ a\preceq b\ \land\ a\neq b.$$

::: definition Definition 3.24 Comparable{#definition-3-24}
For a poset $(A;\preceq)$, two elements $a$ and $b$ are called *comparable*[^28] if $a ⪯ b$ or $b ⪯ a$; otherwise they are called *incomparable*.
:::

::: definition Definition 3.25 Total Order{#definition-3-25}
If any two elements of a poset $(A;⪯)$ are comparable, then $A$ is called *totally ordered* (or *linearly ordered*) by $\preceq$.
:::

::: example Example 3.39{#example-3-39}
$(ℤ; ≤)$ and $(ℤ; ≥)$ are totally ordered posets (or simply totally ordered sets), and so is any subset of $ℤ$ with respect to $≤$ or $≥$. For instance, $(\{2, 5, 7, 10\}; ≤)$ is a totally ordered set.
:::

::: example Example 3.40{#example-3-40}
The poset $(\cf P(A); ⊆)$ is not totally ordered if $|A| ≥ 2$, nor is the poset $(ℕ; |)$.
:::

### 3.5.2. Hasse Diagrams

::: definition Definition 3.26 Cover{#definition-3-26}
In a poset $(A;⪯)$ an element $b$ is said to *cover*[^29] an element $a$ if $a ≺ b$ and there exists no $c$ with $a ≺ c$ and $c ≺ b$ (i.e., between $a$ and $b$).
:::

::: example Example 3.41{#example-3-41}
In a hierarchy (say of a company), if $a ≺ b$ means that $b$ is superior to $a$, then $b$ covers $a$ means that $b$ is the direct superior of $a$.
:::

::: definition Definition 3.27 Hasse Diagram{#definition-3-27}
The *Hasse diagram* of a (finite) poset $(A; ⪯)$ is the directed graph whose vertices are labeled with the elements of $A$ and where there is an edge from $a$ to $b$ if and only if $b$ covers $a$.
:::

The Hasse diagram is a graph with directed edges. It is usually drawn such that whenever $a ≺ b$, then $b$ is placed higher than $a$. This means that all arrows are directed upwards and therefore can be omitted.

::: example Example 3.42{#example-3-42}
The Hasse diagram of the poset $(\{2, 3, 4, 5, 6, 7, 8, 9\}; |)$ is shown in Figure 3.1 on the left.

<figure id="figure-3-1-left">

<svg class="center" width="130" height="120" viewBox="0 0 391 364" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="52"  cy="301" r="10" fill="currentColor"/>
<circle cx="52"  cy="301" r="10" fill="currentColor"/>
<circle cx="162" cy="162" r="10" fill="currentColor"/>
<circle cx="161" cy="301" r="10" fill="currentColor"/>
<circle cx="270" cy="301" r="10" fill="currentColor"/>
<circle cx="379" cy="301" r="10" fill="currentColor"/>
<circle cx="270" cy="161" r="10" fill="currentColor"/>
<circle cx="52"  cy="161" r="10" fill="currentColor"/>
<circle cx="52"  cy="21"  r="10" fill="currentColor"/>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="41.1621" y="355.091">2</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="149.135" y="355.091">3</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="259.398" y="355.091">5</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="369.295" y="355.091">7</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="150.117" y="131.091">6</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="259.117" y="131.091">9</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="1.19922" y="35.0909">8</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="0.601562" y="176.091">4</tspan></text>
<path d="M53 22.5V161.5V301.5L162 161.5V301.5L271 161.5V301.5" stroke="currentColor" stroke-width="3.45"/>
</svg>

<figcaption>Figure 3.1: on the left</figcaption>
</figure>
:::

[^28]:German: vergleichbar

[^29]:German: überdecken

::: example Example 3.43{#example-3-43}
A nicer diagram is obtained when $A$ is the set of all divisors of an integer $n$. The Hasse diagram of the poset $(\{1, 2, 3, 4, 6, 8, 12, 24\}; |)$ is shown in Figure 3.1 in the middle.

<figure id="figure-3-1-middle">

<svg class="center" width="120" height="240" viewBox="0 0 341 677" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="162" cy="614" r="10" fill="currentColor"/>
<circle cx="162" cy="614" r="10" fill="currentColor"/>
<circle cx="162" cy="63"  r="10" fill="currentColor"/>
<circle cx="272" cy="475" r="10" fill="currentColor"/>
<circle cx="272" cy="338" r="10" fill="currentColor"/>
<circle cx="272" cy="205" r="10" fill="currentColor"/>
<circle cx="52.6167" cy="475.57" r="10.6167" fill="currentColor"/>
<circle cx="52.6167" cy="338.945" r="10.6167" fill="currentColor"/>
<circle cx="52.6167" cy="205.241" r="10.6167" fill="currentColor"/>
<path d="M272.384 339.476V475.669L162.567 614.217L52.6172 475.669M272.384 339.476V203.283M272.384 339.476L52.6172 475.669M272.384 203.283L162.567 63.6396L52.6172 203.283V339.476M272.384 203.283L52.6172 339.476M52.6172 339.476V475.669" stroke="currentColor" stroke-width="3.45044"/>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="300" y="217.091">12</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="139.244" y="35.0909">24</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="153.193" y="668.091">1</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="300" y="351.091">6</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="300" y="488.091">3</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="1.19922" y="217.091">8</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="0.601562" y="351.091">4</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="2.32422" y="488.091">2</tspan></text>
</svg>

<figcaption>Figure 3.1: in the middle</figcaption>
</figure>
:::

::: example Example 3.44{#example-3-44}
The Hasse diagram of the poset $(\cf P(\{a, b, c\}); ⊆)$ is shown in Figure 3.1 on the right.

<figure id="figure-3-1-right">

<svg class="center" width="180" height="220" viewBox="0 0 499 549" fill="none" xmlns="http://www.w3.org/2000/svg">
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="194.422" y="35.0909">{a,b,c}</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="237.27" y="540.091">{}</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="414" y="360.091">{c}</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="414" y="222.091">{b,c}</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="0.363281" y="222.091">{a,b}</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="33.6562" y="360.091">{a}</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="176.145" y="360.091">{b}</tspan></text>
<text fill="currentColor" font-size="36" font-weight="bold"><tspan x="145.629" y="222.091">{a,c}</tspan></text>
<circle cx="251" cy="347" r="10" fill="currentColor"/>
<circle cx="251" cy="208" r="10" fill="currentColor"/>
<circle cx="251" cy="69" r="10" fill="currentColor"/>
<circle cx="391" cy="208" r="10" fill="currentColor"/>
<circle cx="111" cy="208" r="10" fill="currentColor"/>
<circle cx="391" cy="347" r="10" fill="currentColor"/>
<circle cx="111" cy="347" r="10" fill="currentColor"/>
<circle cx="251" cy="486" r="10" fill="currentColor"/>
<path d="M252.5 488V348.5M252.5 488L393.5 348.5M252.5 488L111.5 348.5M252.5 348.5L393.5 208.5M252.5 348.5L111.5 208.5M393.5 208.5L252.5 68.5M393.5 208.5V348.5M252.5 68.5L111.5 208.5M252.5 68.5V208.5M111.5 208.5V348.5M111.5 348.5L252.5 208.5M252.5 208.5L393.5 348.5" stroke="currentColor" stroke-width="3.45"/>
</svg>

<figcaption>Figure 3.1: on the right</figcaption>
</figure>
:::

::: example Example 3.45{#example-3-45}
For the two Hasse diagrams in [Figure 3.2](#figure-3-2), give a realization as the divisibility poset of a set of integers.

<figure id="figure-3-2">

<svg class="center" width="280" height="180" viewBox="0 0 757 433" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="120" cy="422" r="10" fill="currentColor"/>
<circle cx="120" cy="422" r="10" fill="currentColor"/>
<circle cx="120" cy="10" r="10" fill="currentColor"/>
<circle cx="230" cy="283" r="10" fill="currentColor"/>
<circle cx="230" cy="146" r="10" fill="currentColor"/>
<circle cx="10" cy="283" r="10" fill="currentColor"/>
<circle cx="10" cy="146" r="10" fill="currentColor"/>
<path d="M230.384 283.669L120.567 422.218L10.6172 283.669M230.384 283.669V147.476M230.384 283.669L10.6172 147.476M230.384 147.476L10.6172 283.669M230.384 147.476L120.567 11.2832L10.6172 147.476M10.6172 147.476V283.669" stroke="currentColor" stroke-width="3.45044"/>
<circle cx="636" cy="422" r="10" fill="currentColor"/>
<circle cx="636" cy="422" r="10" fill="currentColor"/>
<circle cx="636" cy="10" r="10" fill="currentColor"/>
<circle cx="636" cy="283" r="10" fill="currentColor"/>
<circle cx="746" cy="216" r="10" fill="currentColor"/>
<circle cx="526" cy="216" r="10" fill="currentColor"/>
<circle cx="636" cy="146" r="10" fill="currentColor"/>
<path d="M636.567 422.218V283.669M636.567 146L748 216.5L636.567 283.669M636.567 146L526.617 216.5L636.567 283.669M636.567 146V11.2832" stroke="currentColor" stroke-width="3.45044"/>
</svg>

<figcaption>Figure 3.2: Two Hasse diagrams.</figcaption>
</figure>


:::

::: example Example 3.46{#example-3-46}
Consider the covering[^30] relation on the convex polygons discussed in [Example 3.30](#example-3-30). A polygon $a$ is covered by a polygon $b$ if $b$ can be placed on top of $a$ such that $a$ disappears completely. Are there sets of six polygons resulting in a poset with the left (or right) Hasse diagram in [Figure 3.2](#figure-3-2)?
:::

[^30]:The term "cover" is used here in a physical sense, not in the sense of [Definition 3.26.](#definition-3-26)

### 3.5.3. Combinations of Posets and the Lexicographic Order

::: definition Definition 3.28 Direct Product{#definition-3-28}
The *direct product* of posets $(A;⪯)$ and $(B; ⊑)$, denoted $(A;⪯) × (B; ⊑)$, is the set $A × B$ with the relation $≤$ (on $A × B$) defined by

<center>

$(a_1, b_1) ≤ (a_2, b_2) \stackrel{\text{def}}{\iff}  a_1 ⪯ a_2 \land b_1 ⊑ b_2$.
</center>
:::

::: proposition Theorem 3.12{#theorem-3-12}
$(A;⪯) × (B; ⊑)$ *is a partially ordered set.*

The proof is left as an exercise. The reader can verify that when replacing $∧$ by $∨$, the resulting relation is in general not a partial order relation.
:::

A more interesting order relation on $A × B$ is defined in the following theorem, whose proof is left as an exercise.

::: proposition Theorem 3.13 Lexicographic Order{#theorem-3-13}
*For given posets* $(A;⪯) and (B; ⊑)$*, the relation* $≤_{lex}$ *defined on* $A×B$ by

$$(a_{1},b_{1})\leq_{\mathrm{lex}}(a_{2},b_{2})\quad\stackrel{\mathrm{def}}{\Longleftrightarrow}\quad a_{1}\prec a_{2}\ \vee\ (a_{1}=a_{2}\wedge b_{1}\sqsubseteq b_{2})$$

*is a partial order relation.*[^31]
:::

The relation $≤_{lex}$ is the well-known *lexicographic order* of pairs, usually considered when both posets are identical. The lexicographic order $≤_{lex}$ is useful because if both $(A;⪯)$ and $(B; ⊑)$ are totally ordered (e.g. the alphabetical order of the letters), then so is the lexicographic order on $A × B$ (prove this!).

The lexicographic order can easily be generalized to the $k$-tuples over some alphabet $Σ$ (denoted $Σ^k$) and more generally to the set $Σ^*$ of finite-length strings over $Σ$. The fact that a total order on the alphabet results in a total order on $Σ^*$ is well-known: The telephone book has a total order on all entries.

### 3.5.4. Special Elements in Posets

We define a few types of special elements that a poset can have.

::: definition Definition 3.29 Minimal, Maximal, Least, and Greatest Elements{#definition-3-29}
Let $(A;⪯)$ be a poset, and let $S ⊆ A$ be some subset of $A$. Then

1. $a ∈ A$ is a *minimal (maximal) element* of $A$ if there exists no $b ∈ A$ with $b ≺ a$ ($b ≻ a$).[^32]

2. $a ∈ A$ is the *least (greatest) element* of $A$ if $a ⪯ b$ ($a ⪰ b$) for all $b ∈ A$. [^33]
3. $a ∈ A$ is a *lower (upper) bound*[^34] of $S$ if $a ⪯ b$ ($a ⪰ b$) for all $b ∈ S$. [^35]
4. $a ∈ A$ is the *greatest lower bound (least upper bound)* of $S$ if $a$ is the greatest (least) element of the set of all lower (upper) bounds of $S$. [^36]
:::

[^31]:Recall that for a partial order $\preceq$ we can define the relation $≺$ as $a ≺ b \stackrel{\text{def}}{\iff} a ⪯ b ∧ a ≠ b$. 
[^32]:The relations $⪰$ and $≻$ are defined naturally by $a ⪰ b \stackrel{\text{def}}{\iff} b ⪯ a$ and $a ≻ b \stackrel{\text{def}}{\iff} b ≺ a$.

Minimal, maximal, least, and greatest elements are easily identified in a Hasse diagram.

The greatest lower bound and the least upper bound of a set $S$ are sometimes denoted as $\operatorname{glb}(S)$ and $\operatorname{lub}(S)$, respectively.

::: example Example 3.47{#example-3-47}
Consider the poset $(\{2, 3, 4, 5, 6, 7, 8, 9\}; |)$ shown in [Figure 3.1](#example-3-42). It has no least or greatest elements, but $2$, $3$, $5$, and $7$ are minimal elements, and $5$, $6$, $7$, $8$ and $9$ are maximal elements. The number $2$ is a lower bound (actually the greatest lower bound) of the subset $\{4, 6, 8\}$, and the subset $\{4, 9\}$ has no lower (nor upper) bound.
:::

::: example Example 3.48{#example-3-48}
The poset $(\{1, 2, 3, 4, 6, 8, 12, 24\}; |)$ shown in [Figure 3.1](#example-3-43) has both a least ($1$) and a greatest ($24$) element. The subset $\{8, 12\}$ has the three lower bounds $1$, $2$, and $4$, and $4$ is the greatest lower bound of $\{8, 12\}$. Actually, this poset is special in that any set of elements has a greatest lower bound and a least upper bound. How can $\operatorname{glb}(S)$ and $\operatorname{lub}(S)$ be defined?
:::

::: example Example 3.49{#example-3-49}
The poset $(\cf P(\{a, b, c\}); ⊆)$ shown in [Figure 3.1](#example-3-44) has both a least element, namely $∅$, and a greatest element, namely $\{a, b, c\}$.
:::

::: example Example 3.50{#example-3-50}
In the poset $(ℤ^+; |)$, $1$ is a least element but there is no greatest element.
:::

::: definition Definition 3.30 Well-Ordered Poset{#definition-3-30}
A poset $(A;⪯)$ is *well-ordered*[^37] if it is totally ordered and if every non-empty subset of $A$ has a least element.[^38]
:::

Note that every totally ordered finite poset is well-ordered. The property of being well-ordered is of interest only for infinite posets. The natural numbers ℕ are well-ordered by $≤$. Any subset of the natural numbers is also well-ordered. More generally, any subset of a well-ordered set is well-ordered (by the same order relation).

[^33]:Note that a least or a greatest element need not exist. However, there can be at most one least element, as suggested by the word "the" in the definition. This follows directly from the antisymmetry of $\preceq$. If there were two least elements, they would be mutually comparable, and hence must be equal.

[^34]:German: untere (obere) Schranke

[^35]:Note that the definitions of the least element and of a lower bound differ only in that a lower bound can be outside of the considered subset $S$ (and therefore need not be unique).

[^36]:Note that for a poset $(A;⪯)$ and a subset $S ⊆ A$, restricting to $S$ results in a poset $(S;⪯)$.

[^37]:German: wohlgeordnet

[^38]:The least element is defined naturally (see [Definition 3.29](#definition-3-29)).

### 3.5.5. Meet, Join, and Lattices

::: definition Definition 3.31 Meet and Join{#definition-3-31}
Let $(A;⪯)$ be a poset. If $a$ and $b$ (i.e., the set $\{a, b\} ⊆ A$) have a greatest lower bound, then it is called the *meet* of $a$ and $b$, often denoted $a ∧ b$. If $a$ and $b$ have a least upper bound, then it is called the *join* of $a$ and $b$, often denoted $a ∨ b$.
:::

::: definition Definition 3.32 Lattice{#definition-3-32}
A poset $(A;⪯)$ in which every pair of elements has a meet and a join is called a *lattice*[^39].
:::

::: example Example 3.51{#example-3-51}
The posets $(ℕ; ≤)$, $(ℕ \backslash \{0\}; | )$, and $(\cf P(S); ⊆)$ are lattices, as the reader can verify.
:::

::: example Example 3.52{#example-3-52}
The poset $(\{1, 2, 3, 4, 6, 8, 12, 24\}; |)$ shown in [Figure 3.1](#example-3-43) is a lattice. The meet of two elements is their greatest common divisor, and their join is the least common multiple. For example, $6 ∧ 8 = 2$, $6 ∨ 8 = 24$, $3 ∧ 4 = 1$, and $3 ∨ 4 = 12$. In contrast, the poset $(\{2, 3, 4, 5, 6, 7, 8, 9\}; |)$ is not a lattice.
:::

## 3.6. Functions

The concept of a function is perhaps the second most fundamental concept in mathematics (after the concept of a set). We discuss functions only now, after having introduced relations, because functions are a special type of relation, and several concepts defined for relations (e.g. inversion and composition) apply to functions as well.

::: definition Definition 3.33 Function{#definition-3-33}
A *function* $f : A \to B$ from a *domain*[^40] $A$ to a *codomain*[^41] $B$ is a relation from $A$ to $B$ with the special properties (using the relation notation $a\ f\ b$):[^42]

1. $∀a ∈ A   ∃b ∈ B   a\ f\ b$ <span class=right>(the function is *totally defined*),</span>
2. $∀a ∈ A   ∀b, b' ∈ B   (a\ f\ b\ ∧\ a\ f\ b'\   \to  b = b')$ <span class=right>(the function is *well-defined*).</span>
:::

As the reader certainly knows, a function $f$ can be understood as a mapping from $A$ to $B$, assigning to every $a ∈ A$ a unique element in $B$, usually denoted as $f(a)$. One writes $f : A \to B$ to indicate the domain and codomain of $f$, and

$$f : a \mapsto \text{"expression in a"}$$

(e.g. $f : a \mapsto a^2$ or, equivalently, $f : x \mapsto x^2$) to define the function.

[^39]:German: Verband

[^40]:German: Definitionsbereich

[^41]:German: Bildbereich, Wertebereich

[^42]:Here we use the convenient notation $∀a ∈A$ and $∃b ∈B$.

::: definition Definition 3.34 Function Set{#definition-3-34}
The set of all functions $A \to B$ is denoted as $B^A$. [^43]
:::

One can generalize the function concept by dropping the first condition (totally defined), i.e., allowing that there can exist elements $a ∈ A$ for which $f(a)$ is not defined.

::: definition Definition 3.35 Partial Function{#definition-3-35}
A *partial function* $A \to B$ is a relation from $A$ to $B$ such that condition 2. above holds.
:::

Two (partial) functions with common domain $A$ and codomain $B$ are *equal* if they are equal as relations (i.e., as sets). $f = g$ is equivalent to saying that the function values of $f$ and $g$ agree for all arguments (including, in case of partial functions, whether or not it is defined).

::: definition Definition 3.36 Image{#definition-3-36}
For a function $f : A → B$ and a subset $S$ of $A$, the *image*[^44] of $S$ under $f$, denoted $f(S)$, is the set

$$f(S)  {\stackrel{\mathrm{def}}{=}}  \{f(a)~|~a\in S\}.$$
:::

::: definition Definition 3.37 Image{#definition-3-37}
The subset $f(A)$ of $B$ is called the *image* (or *range*) of $f$ and is also denoted $Im(f)$.
:::

::: example Example 3.53{#example-3-53}
Consider the function $f : ℝ → ℝ$ defined by $f(x) = x^2$. The image of the interval $[2, 3]$ is the interval $[4, 9]$. The range of $f$ is the set $ℝ^{≥0}$ of non-negative real numbers.
:::

::: definition Definition 3.38 Preimage{#definition-3-38}
For a subset $T$ of $B$, the *preimage*[^45] of $T$, denoted $f^{−1}(T)$, is the set of values in $A$ that map into $T$:

<center>

$f^{-1}(T)  {\stackrel{\mathrm{def}}{=}}  \{a\in A~|~f(a)\in T\}$.
</center>
:::

::: example Example 3.54{#example-3-54}
Consider again the function $f(x) = x^2$. The preimage of the interval $[4, 9]$ is $[−3, −2] ∪ [2, 3]$.
:::

[^43]:This notation is motivated by the fact that if $A$ and $B$ are finite, then there are $|B|^{|A|}$ such functions.

[^44]:German: Bild

[^45]:German: Urbild

::: definition Definition 3.39 Injective, Surjective, Bijective{#definition-3-39}
A function $f : A → B$ is called

1. **injective** (or *one-to-one* or an *injection*) if for $a ≠ a^′$ we have $f(a) ≠ f(a^′)$, i.e., no two distinct values are mapped to the same function value (there are no "collisions").
2. **surjective** (or *onto*) if $f(A) = B$, i.e., if for every $b ∈ B$, $b = f(a)$ for some $a ∈ A$ (every value in the codomain is taken on for some argument).
3. **bijective** (or a *bijection*) if it is both injective and surjective.
:::

::: definition Definition 3.40 Inverse Function{#definition-3-40}
For a bijective function $f$, the *inverse* (as a relation, see [Definition 3.11](#definition-3-11)) is called the inverse function[^46] of $f$, usually denoted as $f^{-1}$ .
:::

::: definition Definition 3.41 Composition of Functions{#definition-3-41}
The *composition* of a function $f : A → B$ and a function $g : B → C$, denoted by $g◦f$ or simply $gf$, is defined by $(g◦f)(a) = g(f(a))$. [^47]
:::

::: example Example 3.55{#example-3-55}
Consider again the function $f(x) = x^ 3 + 3$ and $g(x) = 2x^ 2 + x$. Then $g ◦ f (x) = 2(f(x))2 + f(x) = 2x 6 + 13x 3 + 21$.
:::

::: proposition Lemma 3.14 Associativity{#lemma-3-14}
*Function composition is associative, i.e.,* $(h ◦ g) ◦ f = h ◦ (g ◦ f)$.

**Proof:** This is a direct consequence of the fact that relation composition is associative (see [Lemma 3.7](#lemma-3-7)). <span class=right>$\Box$</span>
:::

## 3.7. Countable and Uncountable Sets

### 3.7.1. Countability of Sets

Countability is an important concept in Computer Science. A set that is countable can be enumerated by a program (even though this would take unbounded time), while an uncountable set can, in principle, not be enumerated.

[^46]:It is easy to see that this is a function

[^47]:Note that the composition of functions is the same as the composition of relations. However, unfortunately, different notation is used: The composition of relations $f$ and $g$ is denoted $f ◦g$ while, if considered as functions, the same resulting composition is denoted as $g ◦ f$. (The reason is that one thinks of functions as mapping "from right to left".) Because of this ambiguity one must make explicit whether the symbol $◦$ refers to function or relation composition.

::: definition Definition 3.42.{#definition-3-42}
1. Two sets $A$ and $B$ **equinumerous**[^48], denoted $A ∼ B$, if there exists a bijection $A → B$.
2. The set $B$ **dominates** the set $A$, denoted $A ⪯ B$, if $A ∼ C$ for some subset $C ⊆ B$ or, equivalently, if there exists an injective function $A → B$.
3. A set $A$ is called **countable**[^49] if $A ⪯ ℕ$, and **uncountable**[^50] otherwise.[^51]

{.lower-roman}
:::

::: example Example 3.56{#example-3-56}
The set $ℤ = \{…, −2, −1, 0, 1, 2, …\}$ of integers is countable, and $ℤ ∼ ℕ$. A bijection $f : ℕ → ℤ$ is given by $f(n) = (−1)^n⌈n/2⌉$.
:::

::: proposition Lemma 3.15{#lemma-3-15}
1. *The relation* $∼$ *is an equivalence relation.*
2. *The relation* $\preceq$ *is transitive:* $A ⪯ B ∧ B ⪯ C \implies A ⪯ C$.
3. $A ⊆ B \implies A ⪯ B$.

{.lower-roman}

**Proof:**[^52]  
(i): Assume $A ∼ B$ and $B ∼ C$, i.e., there exist bijections $f : A → B$ and $g : B → C$. Then $g ◦ f$ is a bijection $A → C$ and hence we have $A ∼ C$.

(ii): If there is an injection from $A$ to $B$ and also an injection from $B$ to $C$, then their composition is an injection from $A$ to $C$. (We omit the proof of this statement.)

(iii): If $A ⊆ B$, then the identity function on $A$ is an injection from $A$ to $B$. <span class=right>$\Box$</span>
:::

A non-trivial theorem, called the Bernstein-Schröder theorem, is stated without proof.[^53] It is not needed in this course.

::: proposition Theorem 3.16 Bernstein-Schröder{#theorem-3-16}
$A ⪯ B ∧ B ⪯ A \implies A ∼ B$.
:::

### 3.7.2. Between Finite and Countably Infinite

For finite sets $A$ and $B$, we have $A ∼ B$ if and only if $|A| = |B|$. A finite set has never the same cardinality as one of its proper subsets. Somewhat surprisingly, for infinite sets this is possible.

[^48]:German: gleich mächtig

[^49]:German: abzählbar

[^50]:German:überabzählbar

[^51]:Recall that $ℕ = \{0, 1, 2, 3, . . .\}$.

[^52]:Here $∼$ and $⪯$ should be understood as relations on a given set of sets.

[^53]:An elegant proof of this theorem is given in *Proofs from THE BOOK* by M. Aigner and G. Ziegler.

::: example Example 3.57{#example-3-57}
Let $\bf{O} = \{1, 3, 5, . . .\}$ be the set of odd natural numbers. Of course, $\bf O$ is countable since the identity function is a (trivial) injection from $\bf O$ to $ℕ$. Actually, there is even a *bijection* $f : ℕ → \bf O$, namely $f(n) = 2n + 1$. Indeed, [Theorem 3.17](#theorem-3-17) below states a more general fact.
:::

::: proposition Theorem 3.17{#theorem-3-17}
*A set* $A$ *is countable if and only if it is finite or if* $A ∼ ℕ$.

The theorem can be restated as follows: There is no cardinality level between finite and countably infinite.

In the proof we make use (without proof) of the fact that every set of natural number has a least element. This fact is called the *well-ordering principle of* N.

**Proof:** A statement of the form "if and only if" has two directions. To prove the direction $\impliedby$, note that if $A$ is finite, then it is countable, and also if $A ∼ ℕ$, then $A$ is countable.

To prove the other direction ($\implies$), we prove that if $A$ is countable and infinite, then $A ∼ ℕ$. According to the definition, $A ⪯ ℕ$ means that there is a bijection $f : A → C$ for a set $C ⊆ ℕ$. For any infinite subset of $ℕ$, say $C$, one can define a bijection $g : C → ℕ$ by counting the elements of $C$ one by one.

More precisely, we define the bijection as follows. According to the wellordering principle, there exists a least element of $C$, say $c_0$. Define $g(c_0) = 0$. Define $C_1 = C \backslash \{c_0\}$. Again, according to the well-ordering principle, there exists a least element of $C_1$, say $c_1$. Define $g(c_1) = 1$. This process can be continued, defining inductively a bijection $g : C → ℕ$. Now $g ◦ f$ is a bijection $A → ℕ$, which proves $A ∼ ℕ$. <span class=right>$\Box$</span>
:::

### 3.7.3. Important Countable Sets

::: proposition Theorem 3.18{#theorem-3-18}
*The set* $\{0, 1\}^*  \stackrel{\text{def}}{=}  \{\epsilon, 0, 1, 00, 01, 10, 11, 000, 001, . . .\}$ *of finite binary sequences is countable.*[^54]

**Proof:** We could give an enumeration of the set $\{0, 1\}^*$ , i.e., a bijection between $\{0, 1\}^*$ and $ℕ$, but to prove the theorem it suffices to provide an injection $\{0, 1\}^* → ℕ$, which we define as follows. We put a "$1$" at the beginning of the string and then interpret it as an natural number using the usual binary representation of the natural numbers. For example, the string $0010$ is mapped to the number $18$.[^55] <span class=right>$\Box$</span>
:::

[^54]:Here $\epsilon$ denotes the empty string.

[^55]:Note that without prepending a $1$, different strings (e.g. $0010$ and $00010$) would result in the same integer and hence the mapping would not be an injection.

::: proposition Theorem 3.19{#theorem-3-19}
*The set* $ℕ×ℕ (= ℕ^2)$ *of ordered pairs of natural numbers is countable.*

**Proof:** A possible bijection $f : ℕ → ℕ^2$ is given by $f(n) = (k, m)$, where $k$ and $m$ are determined using the following equations: $k + m = t − 1$ and $m = n − {t \choose 2}$ , where $t > 0$ is the smallest integer such that ${t+1 \choose 2} > n$. This corresponds to the enumeration of the pairs $(k, m)$ along diagonals with constant sum $k + m$. More concretely, we enumerate the pairs as follows: $(0, 0), (1, 0), (0, 1),(2, 0),(1, 1),(0, 2),(3, 0), (2, 1), (1, 2), (0, 3), (4, 0), (3, 1),…$.  
It is easy to see that this is a bijection $ℕ → ℕ^2$ , hence $ℕ^2$ is countable. <span class=right>$\Box$</span>

An alternative proof works as follows. We have $ℕ ∼ \{0, 1\}^*$ and hence $ℕ × ℕ ∼ \{0, 1\}^* × \{0, 1\}^*$. Therefore it suffices to demonstrate an injection

<center>

$\{0,1\}^{*}\times\{0,1\}^{*}\rightarrow\{0,1\}^{*}$.
</center>

Note that concatenation of bit-strings, denoted as $||$, and is a function $\{0, 1\}^* × \{0, 1\}^* → \{0, 1\}^*$, but the function $(a, b) \mapsto a||b$ is not a injection $\{0, 1\}^* × \{0, 1\}^* → \{0, 1\}^*$ because a bit-string $c$ can be split in many ways into two bit-strings $a$ and $b$ such that $c = a||b$. One possibility to define an injection $\{0, 1\}^* × \{0, 1\}^* → \{0, 1\}^*$ is as follows:

<center>

$(a,b)\;\mapsto\;0^{|a|}||1||a||b$,
</center>

i.e., we first encode the length $|a|$ of $a$ by a unary encoding, append $1$ to mark the end of this encoding of $|a|$, and then append $a$ and $b$.
:::

::: proposition Corollary 3.20{#corollary-3-20}
*The Cartesian product* $A× B$ *of two countable sets* $A$ and $B$ *is countable, i.e.,* $A ⪯ ℕ ∧ B ⪯ ℕ \implies A × B ⪯ ℕ$.

**Proof:** We first prove $A×B ⪯ ℕ×ℕ$ by exhibiting an injection $g : A×B → ℕ×ℕ$, namely $g(a, b) = (f_1(a), f_2(b))$. That $g$ is an injection can be proved as follows:

$$
\begin{align*}
(a, b) \neq (a', b') 
&\dot\implies   a \neq a' \lor b \neq b' && \text{(definition of pairs)} \\
&\dot\implies  f_1(a) \neq f_1(a') \lor f_2(b) \neq f_2(b') && \text{(} f_1 \text{ and } f_2 \text{ are injections)} \\
&\dot\implies  (f_1(a), f_2(b)) \neq (f_1(a'), f_2(b')) && \text{(definition of pairs)}
\end{align*}
$$

Using $A × B ⪯ ℕ × ℕ$ (just proved) and $ℕ × ℕ ⪯ ℕ$ ([Theorem 3.19](#theorem-3-19)) now gives $A × B ⪯ ℕ$ because is transitive ([Lemma 3.15(i)](#lemma-3-15)). <span class=right>$\Box$</span>
:::

::: proposition Corollary 3.21{#corollary-3-21}
*The rational numbers* $ℚ$ *are countable.*

**Proof:** Every rational number can be represented uniquely as a pair $(m, n)$ where $m ∈ ℤ$, $n ∈ ℕ \backslash \{0\}$, and where $m$ and $n$ are relatively prime. Hence $ℚ ⪯ ℤ × ℕ$. According to [Example 3.56](#example-3-56), $ℤ$ is countable, i.e., $ℤ ⪯ ℕ$. Thus, according to [Corollary 3.20](#corollary-3-20), $ℤ × ℕ ⪯ ℕ$. Hence, using transitivity of , we have $ℚ ⪯ ℕ$ (i.e., $ℚ$ is countable). <span class=right>$\Box$</span>
:::

The next theorem provides some other important sets that are countable.

::: proposition Theorem 3.22{#theorem-3-22}
Let $A$ and $A_i$ for $i ∈ ℕ$ *be countable sets.*
1. *For any* $n ∈ ℕ$, *the set* $A^n$ *of $n$-tuples over* $A$ *is countable.*
2. *The union* $∪_{i∈N}A_i$ *of a countable list* $A_0, A_1, A_2, …$ *of countable sets is countable.*
3. *The set* $A^*$ *of finite sequences of elements from* $A$ *is countable.*

{.lower-roman}

**Proof:** Statement (i) can be proved by induction. The (trivial) induction basis is that $A_1 = A$ is countable. The induction step shows that if $A^n$ is countable, then also $A^{n+1} ∼ A^n ×A$ is countable. This follows from [Corollary 3.20](#corollary-3-20) because both $A^n$ and $A$ are countable.

We omit the proof of (ii).

We now prove (iii), which implies (i), and hence gives an alternative proof for (i). We define an injection $A^* → \{0, 1\}^*$. This is achieved by using an arbitrary injection $f : A → \{0, 1\}^*$ and defining the natural injection $g : A^* → (\{0, 1\}^*)^*$ as follows: For a sequence of length $n$ in $A^*$, say $(a_1, …, a_n)$, we let

<center>

$g((a_{1},\ldots,a_{n}))=(f(a_{1}),\ldots,f(a_{n}))$.
</center>

i.e., each element in the sequence is mapped separately using $f$. Now it only remains to demonstrate an injection

<center>

$(\{0,1\}^{*})^{*}\to\{0,1\}^{*}$,
</center>

which can be achieved as follows.[^56] We replace every $0$-bit in a sequence by $00$ and every $1$-bit by $01$, which defines a (length-doubling) injection $\{0, 1\}^* → \{0, 1\}^*$. Then we concatenate all obtained expanded sequences, always separated by $11$. This is an injection because the separator symbols $11$ can be detected and removed and the extra $0$'s can also be removed. Hence a given sequence can be uniquely decomposed into the component sequences, and hence no two different sequences of binary (component) sequences can result in the same concatenated sequence. <span class=right>$\Box$</span>
:::

::: example Example 3.58{#example-3-58}
We illustrate the above injection $(\{0, 1\}^*)^* → \{0, 1\}^*$ by an example. Consider the sequence $(0100, 10111, 01, 1)$ of bit-sequences. Now $0100$ is mapped to $00010000$, $10111$ is mapped to $0100010101$, etc. and the final concatenated sequence (with separators $11$) is

<center>

$000100001101000101011100011101$,
</center>

which can uniquely be decomposed into the original four sequences.
:::

[^56]:Note that a simple concatenation of the sequences does not work because the concatenated sequences can not uniquely be decomposed into the original sequences, i.e., this is not an injection.

### 3.7.4. Uncountability of $\{0, 1\}^∞$

We now consider semi-infinite binary sequences $(s_0, s_1, s_2, s_3, …)$. One can interpret such a binary sequence as specifying a subset of $ℕ$: If $s_i = 1$, then $i$ is in the set, otherwise it is not. Equivalently, we can understand a semiinfinite sequence $(s_0, s_1, s_2, s_3, …)$ as a function $ℕ → \{0, 1\}$, i.e., as a predicate on $ℕ$. For example, the primality predicate $\mathtt{prime} : ℕ → \{0, 1\}$ (where $\mathtt{prime}(n) = 1$ if and only if $n$ is prime) corresponds to the semi-infinite sequence $001101010001010001010001000001010000001…$.

::: definition Definition 3.43{#definition-3-43}
Let $\{0, 1\}^∞$ denote the set of semi-infinite binary sequences or, equivalently, the set of functions $ℕ → \{0, 1\}$.
:::

::: proposition Theorem 3.23{#theorem-3-23}
**Theorem 3.23.** *The set* $\{0, 1\}^∞$ *is uncountable.*

**Proof:** This is a proof by contradiction. To arrive at a contradiction, assume that a bijection $f : ℕ → \{0, 1\}^∞$ exists.[^57] Let $β_{i,j}$ be the $j$th bit in the $i$-th sequence $f(i)$, where for convenience we begin numbering the bits with $j = 0$:

$$\begin{array}{r l}{f(i)}&{{}{\stackrel{\mathrm{def}}{=}}}&{\beta_{i,0},\beta_{i,1},\beta_{i,2},\beta_{i,3},\ldots,}\end{array}$$

Let b be the complement of a bit b ∈ {0, 1}. We define a new semi-infinite binary sequence α as follows:

$$\alpha   {\stackrel{\mathrm{def}}{=}}  {\overline{{\beta_{0,0}}}},\ {\overline{{\beta_{1,1}}}},\ {\overline{{\beta_{2,2}}}},\ {\overline{{\beta_{3,3}}}}\ \ldots.$$

Obviously, $α ∈ \{0, 1\}^∞$, but there is no $n ∈ ℕ$ such that $α = f(n)$ since $α$ is constructed so as to disagree in at least one bit (actually the $n$-th bit) with every sequence $f(n)$ for $n ∈ ℕ$. This shows that $f$ cannot be a bijection, which concludes the proof. <span class=right>$\Box$</span>
:::

This proof technique is known as Cantor's *diagonalization argument*; it has also other applications.

By interpreting the elements of $\{0, 1\}^∞$ as the binary expansion of a real number in the interval $[0, 1]$, and vice versa, one can show that the interval $[0, 1]$ (and hence $ℝ$ itself), is uncountable.[^58]

[^57]:Here we make use of [Theorem 3.17](#theorem--3-17) which implies that $\{0, 1\}^∞$ is countable if and only if such a bijection exists.

[^58]:A subtlety, which is not a problem in the proof, is that some real numbers have two representations as bit-strings. For example, the number $0.5$ has representations $10000000\cdots$ and $0111111\cdots$.

### 3.7.5. Existence of Uncomputable Functions

The above theorem states that there are uncountably many functions $ℕ → \{0, 1\}$. On the other hand, every computer program, regardless of the programming language it is written in, corresponds to a *finite* string of symbols. Without loss of generality, one can think of a program as a finite binary sequence $p ∈ \{0, 1\}^*$). Hence the set of programs is countable, whereas the set of functions $ℕ → \{0, 1\}$ is uncountable. If every program computes at most one function, there must be functions $ℕ → \{0, 1\}$ not computed by a program. This for Computer Science fundamental consequence of [Theorem 3.23](#theorem-3-23) is stated below.

::: definition Definition 3.44{#definition-3-44}
A function $f : N → \{0, 1\}$ is called *computable* if there is a program that, for every $n ∈ ℕ$, when given $n$ as input, outputs $f(n)$.
:::

::: proposition Corollary 3.24{#corollary-3-24}
*There are uncomputable functions* $ℕ → \{0, 1\}$.
:::

In fact, essentially all such functions are uncomputable. Those that are computable are rare exceptions. For example, the function $\mathtt{prime} : ℕ → \{0, 1\}$ is computable.

Is there a specific uncomputable function? A prominent example is the socalled *Halting problem* defined as follows: Given as input a program (encoded as a bit-string or natural number) together with an input (to the program), determine whether the program will eventually stop (function value $1$) or loop forever (function value $0$) on that input. This function is uncomputable. This is usually stated as: *The Halting problem is undecidable.*

This theorem can also be proved by a diagonalization argument similar to the one above. The theorem has far-reaching consequences in theoretical and practical Computer Science. It implies, for example, that it is impossible to write a program that can verify (in the most general case) whether a given program satisfies its specification, or whether a given program contains malicious parts.
