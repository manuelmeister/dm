# **Chapter 5**: Algebra

### **5.1 Introduction**

#### **5.1.1 What Algebra is About**

In a nutshell, algebra is the mathematical study of structures consisting of a set and certain operations on the set. Examples are the integers Z, the rational numbers Q, and the set of polynomials with coefficients from some domain, with the respective addition and multiplication operations. A main goal in algebra is to understand the properties of such algebraic systems at the highest level of generality and abstraction. For us, an equally important goal is to understand the algebraic systems that have applications in Computer Science.

For instance, one is interested in investigating which properties of the integers are responsible for the unique factorization theorem. What do the integers, the polynomials with rational or real coefficients, and several other structures have in common so that the unique factorization theorem holds? Why does it not hold for certain other structures?

The benefit of identifying the highest level of generality and abstraction is that things often become simpler when unnecessary details are eliminated from consideration, and that a proof must be carried out only once and applies to all structures captured at the given level of generality.

#### **5.1.2 Algebraic Structures**

**Definition 5.1.** An *operation* on a set S is a function1 S n → S, where n ≥ 0 is called the *"arity"*2 of the operation.

<sup>1</sup> In some cases, the function is only partial.

<sup>2</sup>German: Stelligkeit

Operations with arity 1 and 2 are called unary and binary operations, respectively. An operation with arity 0 is called a constant; it is a fixed element from the set S, for instance the special element 1 in Z. In many cases, only binary operations are actually listed explicitly,

**Definition 5.2.** An *algebra* (or *algebraic structure* or Ω*-algebra*) is a pair hS; Ωi where S is a set (the *carrier*3 of the algebra) and Ω = (ω1, . . . , ωn) is a list of operations on S. 4

#### **5.1.3 Some Examples of Algebras**

We give a few examples of algebras, some of which we will discuss in more detail later.

**Example 5.1.** hZ; +, −, 0, ·, 1i denotes the integers with the two binary operations + and ·, the unary operation − (taking the negative) and the two constants 0 and 1, the neutral elements of addition and multiplication.

We sometimes omit some details and write simply hZ; +, ·i instead of hZ; +, −, 0, ·, 1i when the negation operation and the special elements 0 and 1 are understood. More generally, we sometimes drop unary and nullary operations. This notation is actually more common in the literature (but less precise). This is a purely notational issue.

**Example 5.2.** hZm; ⊕i (and hZm; ⊙i) denote the integers modulo m with addition modulo m (and multiplication modulo m) as the only binary operation.

**Example 5.3.** hP(A); ∪, ∩, i is the power set of a set A with union, intersection, and complement operations.

### **5.2 Monoids and Groups**

In this section we look at algebras hS; ∗i with one binary operation and possibly one unary and one nullary operation. The binary operation can be denoted arbitrarily, for instance by ∗. It is often denoted +, in which case it is called *addition*, or ·, in which case it is called *multiplication*. But it is important to note that the name of the operation is not of mathematical relevance.

We discuss three special properties that hS; ∗i can have, (1) neutral elements, (2) associativity, and (3) inverse elements, as well as combinations of these.

<sup>3</sup>German: Trägermenge

<sup>4</sup>This definition, though very general, does not capture all algebraic systems one might be interested in. A more general type of algebraic system, called *heterogeneous* algebraic systems, can have several carrier sets.

#### **5.2.1 Neutral Elements**

**Definition 5.3.** A *left [right] neutral element* (or *identity element*) of an algebra hS; ∗i is an element e ∈ S such that e ∗ a = a [a ∗ e = a] for all a ∈ S. If e ∗ a = a ∗ e = a for all a ∈ S, then e is simply called *neutral element*.

If the operation is called addition, then e is usually denoted as 0, and if it is called multiplication, then e is usually denoted as 1.

**Lemma 5.1.** If hS; ∗i *has both a left and a right neutral element, then they are equal. In particular* hS; ∗i *can have at most one neutral element.*

*Proof.* Suppose that e and e ′ are left and right neutral elements, respectively. Then, by definition, e ∗ e ′ = e ′ (considering e as a left neutral element), but also e ∗ e ′ = e (considering e ′ as a right neutral element). Thus e ′ = e.

**Example 5.4.** The empty sequence ǫ is the neutral element of hΣ ∗ ; |i, where Σ ∗ is the set of sequences over the alphabet Σ and | denotes concatenation of sequences.

#### **5.2.2 Associativity and Monoids**

The operation in the previous example, sequence concatenation, has a very useful property: When all sequences are written one after the other, with spaces between sequences, it does not matter in which order one performs the concatenation operations. In short, sequence concatenation is associative.

**Definition 5.4.** A binary operation ∗ on a set S is *associative*if a∗(b∗c) = (a∗b)∗c for all a, b, c ∈ S.

Not all operations are associative:

**Example 5.5.** An example of a non-associative operation on the integers is exponentiation: (a b ) c 6= a (b c ) in general.

Associativity is a very special property of an operation, but it is of crucial importance in algebra. Associativity of ∗ means that the element a1 ∗ a2 ∗· · · ∗ an (for any a1, . . . , an ∈ S) is uniquely defined and independent of the order in which elements are combined. For example,

$$(((a*b)*c)*d)=((a*b)*(c*d))=(a*((b*c)*d)).$$

This justifies the use of the notation Pn i=1 ai if the operation ∗ is called addition, and Qn i=1 ai if the operation ∗ is called multiplication.

Note that up to now, and also in the next section, we do not yet pay attention to the fact that some operations are commutative. In a sense, commutativity is less important than associativity.

Some standard examples of associate operations are addition and multiplication in various structures: Z, N, Q, R, and Zm.

**Definition 5.5.** A *monoid* is an algebra hM; ∗, ei where ∗ is associative and e is the neutral element.

Some standard examples of monoids are hZ; +, 0i, hZ; ·, 1i, hQ; +, 0i, hQ; ·, 1i, hR; +, 0i, hR; ·, 1i, hZm; ⊕, 0i, and hZm; ⊙, 1i.

**Example 5.6.** hΣ ∗ ; | , ǫi is a monoid since, as mentioned above, concatenation of sequences is associative.

**Example 5.7.** For a set A, the set AA of functions A → A form a monoid with respect to function composition. The identity function id (defined by id(a) = a for all a ∈ A) is the neutral element. According to Lemma 3.7, relation composition, and therefore also function composition, is associative. The algebra hAA; ◦, idi is thus a monoid.

#### **5.2.3 Inverses and Groups**

**Definition 5.6.** A *left [right] inverse element*5 of an element a in an algebra hS; ∗, ei with neutral element e is an element b ∈ S such that b ∗ a = e [a ∗ b = e]. If b ∗ a = a ∗ b = e, then b is simply called an *inverse* of a.

To prove the uniqueness of the inverse (if it exists), we need ∗ to be associative:

**Lemma 5.2.** *In a monoid* hM; ∗, ei*, if* a ∈ M *has a left and a right inverse, then they are equal. In particular,* a *has at most one inverse.*

*Proof.* Let b and c be left and right inverses of a, respectively, i.e., we have b ∗a = e and a ∗ c = e, Then

$b=b*e=b*(a*c)=(b*a)*c=e*c=c$,

where we have omitted the justifications for the steps.

**Example 5.8.** Consider again hAA; ◦, idi. A function f ∈ AA has a left inverse only if it is injective, and it has a right inverse only if it is surjective. Hence f has an inverse f −1 if and only if f is bijective. In this case, f ◦ f −1 = f −1 ◦ f = id.

<sup>5</sup>or simply *left [right] inverse*.

Now follows one of the most fundamental definitions of algebra.

**Definition 5.7.** A *group* is an algebra hG; ∗,b, ei satisfying the following axioms:

```
G1 ∗ is associative.
G2 e is a neutral element: a ∗ e = e ∗ a = a for all a ∈ G.
G3 Every a ∈ G has an inverse element ba, i.e., a ∗ ba = ba ∗ a = e.
```
We can write hG; ∗i (or simply G if ∗ is understood) instead of hG; ∗,b, ei. If the operation ∗ is called addition (+) [multiplication (·)], then the inverse of a is denoted −a [a −1 or 1/a] and the neutral element is denoted 0 [1].

Some standard examples of groups are hZ; +, −, 0i, hQ; +, −, 0i, hQ \ {0}; ·, −1 , 1i, hR; +, −, 0i, hR \ {0}; ·, −1 , 1i, and hZm; ⊕, ⊖, 0i.

**Definition 5.8.** A group hG; ∗i (or monoid) is called *commutative* or *abelian*6 if a ∗ b = b ∗ a for all a, b ∈ G.

We summarize a few facts we encountered already earlier for the special case of the integers Z. The group is the right level of abstraction for describing these facts. The proofs are left as exercises.

**Lemma 5.3.** *For a group* hG; ∗,b, ei*, we have for all* a, b, c ∈ G:

- (i) (cba) = a.
- **(ii)** ad∗ b = bb ∗ ba.
- **(iii)** *Left cancellation law:* a ∗ b = a ∗ c =⇒ b = c.
- **(iv)** *Right cancellation law:* b ∗ a = c ∗ a =⇒ b = c.
- (v) *The equation* a ∗ x = b *has a unique solution* x *for any* a and b. *So does the equation* x ∗ a = b.

#### **5.2.4 (Non-)minimality of the Group Axioms**

In mathematics, one generally wants the axioms of a theory to be minimal. One can show that the group axioms as stated are not minimal. One can simplify axiom G2 by only requesting that a ∗ e = a; call this new axiom **G2'**. The equation e ∗ a = a is then implied (by all axioms). The proof of this fact is left as an exercise. Similarly, one can simplify G3 by only requesting that a ∗ ba = e; call this new axiom **G3'**. The equation ba ∗ a = e is then implied. The proof for this is as follows:

> ba ∗ a = (ba ∗ a) ∗ e (**G2'** ) = (ba ∗ a) ∗ (ba ∗ bba) (**G3'**, i.e., def. of right inverse of ba)

<sup>6</sup>Named after the Norwegian mathematician Niels Henrik Abel.

$=\quad\widehat{a}*(a*(\widehat{a}*\widehat{\widehat{a}}))$ (G1)

$=\quad\widehat{a}*((a*\widehat{a})*\widehat{\widehat{a}})$ (G1)

$=\quad\widehat{a}*(e*\widehat{\widehat{a}})$ (G3${}^{\prime}$)

$=\quad(\widehat{a}*e)*\widehat{\widehat{a}}$ (G1)

$=\quad\widehat{a}*\widehat{\widehat{a}}$ (G2${}^{\prime}$)

$=\quad e$ (G3${}^{\prime}$, i.e., def. of right inverse of $\widehat{a}$)

#### **5.2.5 Some Examples of Groups**

**Example 5.9.** The set of invertible (non-singular) n × n matrices over the real numbers with matrix multiplication form a group, with the identity matrix as the neutral element. This group is not commutative for n ≥ 2.

**Example 5.10.** Recall that the sequences with concatenation and the empty sequence as the neutral element form a non-commutative monoid. This is not a group because inverses cannot be defined (except for the empty sequence).

**Example 5.11.** For a given structure R supporting addition and multiplication (to be called a *ring* later), let R[x] denote the set of polynomials with coefficients in R. hZ[x]; +i, hQ[x]; +i, and hR[x]; +i are abelian groups, where + denotes polynomial addition. hZ[x]; ·i, hQ[x]; ·i, and hR[x]; ·i are commutative monoids, where · denotes polynomial multiplication. The neutral element is the polynomial 1. Like hZ; ·i, hR[x]; ·i is not a group, for any R.

**Example 5.12.** Let Sn be the set of n! permutations of n elements, i.e., the set of bijections {1, . . . , n} → {1, . . . , n}. A bijection f has an inverse f −1 . Sn is a subset of the set of functions {1, . . . , n} → {1, . . . , n}. It follows from the associativity of function composition that the composition of permutations is also associative. The group hSn; ◦, −1 , idi is called the *symmetric group* on n elements. Sn is non-abelian for n ≥ 3.

Another important source of (usually non-abelian) groups are symmetries and rotations of a geometric figure, mapping the figure to itself (but permuting the vertices). The neutral element is the identity mapping and the inverse element is, for an axial or point symmetry, the element itself. For a rotation, the inverse element is the inverse rotation. To form a group, the closure under composition must be considered. For example, the composition of two axial symmetries corresponds to a rotation by twice the angle between the axes. Such a group is a subset (a subgroup) of the set of permutations of the vertices.

**Example 5.13.** Consider a square in the plane, with nodes labeled A, B, C, D. Now consider operations which map the square to itself, but with the vertices permuted. Consider the four reflections with respect to one of the two middle parallels or one of the two diagonals. The closure under composition of these four elements also includes the four rotations by 0 ◦ (the neutral element), by 90◦ , 180◦ , and by 270◦ . These 8 elements (reflections and rotations) form a group, which we denote by S✷. It is called the symmetry group of the square. If the vertices of the square are labeled A, B, C, D, then these eight geometric operations each corresponds to a permutation of the set {A, B, C, D}. For example, the rotation by 90◦ corresponds to the permutation (A, B, C, D) → (B, C, D, A). Note that the set of four rotations also form a group, actually a subgroup of the above described group and also a subgroup of the group of permutations on {A, B, C, D}. 7

**Example 5.14.** It is left as an exercise to figure out the symmetry group of the three-dimensional cube.

### **5.3 The Structure of Groups**

#### **5.3.1 Direct Products of Groups**

**Definition 5.9.** The *direct product* of n groups hG1; ∗1i , . . . , hGn; ∗ni is the algebra

$$\langle G_{1}\times\cdots\times G_{n};\star\rangle,$$

where the operation ⋆ is component-wise:

$(a_{1},\ldots,a_{n})\star(b_{1},\ldots,b_{n})=(a_{1}\ast_{1}b_{1},\ldots,a_{n}\ast_{n}b_{n})$.

**Lemma 5.4.** hG1 ×· · ·×Gn; ⋆i *is a group, where the neutral element and the inversion operation are component-wise in the respective groups.*

*Proof.* Left as an exercise.

**Example 5.15.** Consider the group hZ5; ⊕i × hZ7; ⊕i. The carrier of the group is Z5 × Z7. The neutral element is (0, 0). If we denote the group operation by ⋆, then we have (2, 6) ⋆ (4, 3) = (1, 2). Also, (2[, 6) = (3, 1). It follows from the Chinese remainder theorem that hZ5; ⊕i × hZ7; ⊕i is isomorphic to hZ35; ⊕i, a concept introduced in the following subsection.

$\boxed{\begin{array}{c}\blacksquare\end{array}}$

<sup>7</sup>We point out that one can consider the described operations also as bijections of the real plane, i.e., as functions R 2 → R 2 .

#### **5.3.2 Group Homomorphisms**

Homomorphisms are a central concept in mathematics and also in Computer Science. A homomorphism is a structure-preserving function from an algebraic structure into another algebraic structure. Here we only introduce homomorphisms of groups.

**Definition 5.10.** For two groups hG; ∗,b, ei and hH; ⋆,e, e′ i, a function ψ : G → H is called a *group homomorphism* if, for all a and b,

$$\psi(a*b)\;=\;\psi(a)*\psi(b).$$

If ψ is a bijection from G to H, then it is called an *isomorphism*, and we say that G and H are isomorphic and write G ≃ H.

We use the symbole for the inverse operation in the group H. The proof of the following lemma is left as an exercise:

**Lemma 5.5.** *A group homomorphism* ψ *from* hG; ∗,b, ei to hH; ⋆,e, e′ i *satisfies*

$$\begin{array}{r l}{(i)}&{{}\psi(e)=e^{\prime},}\\ {(i)}&{{}\psi({\widehat{a}})={\widehat{\psi(a)}}\quad{\mathrm{for~all~}}a.}\end{array}$$

The concept of an isomorphism is more general than for algebraic systems in the strict sense, and it applies to more general algebraic structures, for instance also to relations and hence to graphs.

**Example 5.16.** The group hZ6; ⊕i × hZ10; ⊕i is isomorphic to hZ2; ⊕i × hZ30; ⊕i. The isomorphism ψ : Z6 × Z10 → Z2 × Z30 is easily checked to be given by ψ((a, b)) = (a ′ , b′ ) where a ′ ≡2 a (i.e., a ′ = R2(a)) and b ′ is given by b ′ ≡3 a and b ′ ≡10 b (where the Chinese remainder theorem can be applied).

**Example 5.17.** The logarithm function is a group homomorphism from hR >0 , ·i to hR, +i since log(a · b) = log a + log b.

We give two familiar examples of relevant homomorphisms that are not isomorphisms.

**Example 5.18.** If one considers the three-dimensional space R 3 with vector addition, then any projection on a plane through the origin or a line through the origin are homomorphic images of R 3 . A special case is the projection onto an axis of the coordinate system, which abstracts away all but one coordinate.

**Example 5.19.** Consider the set of real-valued n × n matrices. The determinant is a homomorphism (with respect to multiplication) from the set of matrices to R. We have det(AB) = det(A) det(B).

#### **5.3.3 Subgroups**

For a given algebra, for example a group or a ring (see Section 5.5), a subalgebra is a subset that is by itself an algebra of the same type, i.e., a subalgebra is a subset of an algebra closed under all operations. For groups we have specifically:

**Definition 5.11.** A subset H ⊆ G of a group hG; ∗,b, ei is called a *subgroup* of G if hH; ∗,b, ei is a group, i.e., if H is closed with respect to all operations: (1) a ∗ b ∈ H for all a, b ∈ H, (2) e ∈ H, and

(3) ba ∈ H for all a ∈ H.

**Example 5.20.** For any group hG; ∗,b, ei, there exist two trivial subgroups: the subset {e} and G itself.

**Example 5.21.** Consider the group Z12 (more precisely hZ12; ⊕, ⊖, 0i). The following subsets are all the subgroups: {0}, {0, 6}, {0, 4, 8}, {0, 3, 6, 9}, {0, 2, 4, 6, 8, 10}, and Z12.

**Example 5.22.** The set of symmetries and rotations discussed in example 5.13, denoted S✷, constitutes a subgroup (with 8 elements) of the set of 24 permutations on 4 elements.

#### **5.3.4 The Order of Group Elements and of a Group**

In the remainder of Section 5.3 we will use a *multiplicative notation* for groups, i.e., we denote the group operation as "·" (which can also be omitted) and use the corresponding multiplicative notation. But it is important to point out that this is only a notational convention that entails no loss of generality of the kind of group operation. In many cases (but not always) we denote the neutral element of a multiplicatively written group as 1. The inverse of a is denoted a −1 or 1/a, and a/b stands for ab−1 . Furthermore, we use the common notation for powers of elements: For n ∈ Z, a n is defined recursively:

* $a^{0}=e$,
* $a^{n}=a\cdot a^{n-1}$ for $n\geq1$, and $\cdot$

- a n = (a −1 ) |n| for n ≤ −1.
  It is easy to see that for all m, n ∈ Z

a m · a n = a m+n and (a m) n = a mn . **Definition 5.12.** Let G be a group and let a be an element of G. The *order*8 of a, denoted ord(a), is the least m ≥ 1 such that a m = e, if such an m exists, and ord(a) is said to be infinite otherwise, written ord(a) = ∞.

By definition, ord(e) = 1. If ord(a) = 2 for some a, then a −1 = a; such an a is called self-inverse.

**Example 5.23.** The order of 6 in hZ20; ⊕, ⊖, 0i is 10. This can be seen easily since 60 = 10 · 6 is the least common multiple of 6 and 20. The order of 10 is 2, and we note that 10 is self-inverse.

**Example 5.24.** The order of any axial symmetry in the group S✷ (see example 5.13) is 2, while the order of the 90◦ -rotation (and also of the 270◦ -rotation) is 4.

**Example 5.25.** The order of any integer a 6= 0 in hZ; +i is ∞.

**Example 5.26.** Consider the group S5 of permutations on the set {1, 2, 3, 4, 5}. What is the order of the permutations described by (1, 2, 3, 4, 5) → (3, 1, 2, 4, 5), by (1, 2, 3, 4, 5) → (1, 2, 3, 5, 4), and by (1, 2, 3, 4, 5) → (2, 3, 1, 5, 4)?

The following lemma implies that the sequence of powers of an element of a finite group is periodic. It does not hold in every monoid (why?).

**Lemma 5.6.** *In a finite group* G*, every element has a finite order.*

*Proof.* Since G is finite, we must have a r = a s = b for some r and s with r < s (and some b). Then a s−r = a s · a −r = b · b −1 = e.

**Definition 5.13.** For a finite group G, |G| is called the *order* of G. 9

#### **5.3.5 Cyclic Groups**

If G is a group and a ∈ G has finite order, then for any m ∈ Z we have

$$a^{m}=a^{R_{\mathrm{ord}\,(a)}\,(m)}.$$

**Definition 5.14.** For a group G and a ∈ G, the *group generated by* a, denoted hai, is defined as

$$\langle a\rangle\ {\stackrel{\mathrm{def}}{=}}\ \{a^{n}|\ n\in\mathbb{Z}\}.$$

<sup>8</sup>German: Ordnung

<sup>9</sup>Note that the term "order" has two different (but related) meanings.

It is easy to see that hai is a group, actually the smallest subgroup of a group G containing the element a ∈ G. For finite groups we have

$$\langle a\rangle\ {\stackrel{\mathrm{def}}{=}}\ \{e,a,a^{2},\ldots,a^{\mathrm{ord}(a)-1}\}.$$

**Definition 5.15.** A group G = hgi generated by an element g ∈ G is called *cyclic*, and g is called a *generator* of G.

Being cyclic is a special property of a group. Not all groups are cyclic! A cyclic group can have many generators. In particular, if g is a generator, then so is g −1 .

**Example 5.27.** The group hZn; ⊕i is cyclic for every n, where 1 is a generator. The generators of hZn; ⊕i are all g ∈ Zn for which gcd(g, n) = 1, as the reader can prove as an exercise.

**Example 5.28.** The additive group of the integers, hZ; +, −, 0i, is an infinite cyclic group generated by 1. The only other generator is −1.

**Theorem 5.7.** *A cyclic group of order* n *is isomorphic to* hZn; ⊕i *(and hence abelian).*

In fact, we use hZn; ⊕i as our standard notation of a cyclic group of order n.

*Proof.* Let G = hgi be a cyclic group of order n (with neutral element e). The bijection Zn → G : i 7→ g i is a group isomorphism since i ⊕ j 7→ g i+j = g i ∗ g j .

#### **5.3.6 Application: Diffie-Hellman for General Groups**

The Diffie-Hellman protocol was described in Section 4.6 for the group Z ∗ p (this notation is defined below), but the concept of a group was not yet introduced there. As an application of general cyclic groups we mention that the Diffie-Hellman protocol works just as well in any cyclic group G = hgi for which computing x from g x (i.e., the *discrete logarithm problem*) is computationally infeasible. Of course, one needs to apply a suitable mapping from G to a reasonable key space.

Elliptic curves (not discussed here) are an important class of cyclic groups used in cryptography.

#### **5.3.7 The Order of Subgroups**

The following theorem is one of the fundamental results in group theory. We state it without proof.

**Theorem 5.8** (Lagrange). Let G *be a finite group and let* H *be a subgroup of* G*. Then the order of* H *divides the order of* G*, i.e.,* |H| *divides* |G|.

The following corollaries are direct applications of Lagrange's theorem.

**Corollary 5.9.** *For a finite group* G*, the order of every elements divides the group order, i.e.,* ord(a) *divides* |G| *for every* a ∈ G.

*Proof.* hai is a subgroup of G of order ord(a), which according to Theorem 5.8 must divide |G|.

**Corollary 5.10.** Let G *be a finite group. Then* a |G| = e *for every* a ∈ G.

*Proof.* We have |G| = k · ord(a) for some k. Hence

$a^{|G|}=a^{k\cdot\text{ord}(a)}=\left(a^{\text{ord}(a)}\right)^{k}=e^{k}=e$.

**Corollary 5.11.** *Every group of prime order*10 *is cyclic, and in such a group every element except the neutral element is a generator.*

*Proof.* Let |G| = p with p prime. For any a, the order of the subgroup hai divides p. Thus either ord(a) = 1 or ord(a) = p. In the first case, a = e and in the latter case G = hai.

Groups of prime order play a very important role in cryptography.

#### **5.3.8 The Group** Z ∗ m **and Euler's Function**

We noted earlier that the set Zm = {0, . . . , m − 1} is a group with respect to addition modulo m, denoted ⊕. We also noted that multiplication modulo m, denoted ⊙ (where the modulus m is usually clear from the context), is of interest as well. However, Zm is not a group with respect to multiplication modulo m. For example, in Z12, 8 has no inverse. We remember (see Section 4.5.3) that a ∈ Zm has a multiplicative inverse if and only if gcd(a, m) = 1. In order to obtain a group, we must exclude those a from Zm for which gcd(a, m) 6= 1. Thus we define

**Definition 5.16.** Z ∗ m def = {a ∈ Zm | gcd(a, m) = 1}.

<sup>10</sup>i.e., |G| = p for some prime p.

**Definition 5.17.** The *Euler function* ϕ : Z + → Z + is defined as the cardinality of Z ∗ m:

$$\varphi(m)=|\mathbb{Z}_{m}^{*}|.$$

**Example 5.29.** Z ∗ 18 = {1, 5, 7, 11, 13, 17}. Hence ϕ(18) = 6.

If p is a prime, then Z ∗ p = {1, . . . , p − 1} = Zp \ {0}, and ϕ(p) = p − 1.

**Lemma 5.12.** *If the prime factorization of* m is m = Qr i=1 p ei i *, then*11

$$\varphi(m)=\prod_{i=1}^{r}(p_{i}-1)p_{i}^{e_{i}-1}.$$

*Proof.* For a prime p and e ≥ 1 we have

$$\varphi(p^{e})=p^{e-1}(p-1)$$

since exactly every pth integer in Zpe contains a factor p and hence ϕ(p e ) = p e−1 (p − 1) elements contain no factor p. For a ∈ Zm we have gcd(a, m) = 1 if and only if gcd(a, p ei i ) = 1 for i = 1, . . . , r. Since the numbers p ei i are pairwise relatively prime, the Chinese remainder theorem implies that there is a oneto-one correspondence between elements of Zm and lists (a1, . . . , ar) with ai ∈ Zp ei i . Hence, using the above, there is also a one-to-one correspondence between elements of Z ∗ m and lists (a1, . . . , ar) with ai ∈ Z ∗ p ei i . There are Qr i=1(pi − 1)p ei−1 i such lists.

**Theorem 5.13.** hZ ∗ m; ⊙, −1 , 1i *is a group.*

*Proof.* Z ∗ m is closed under ⊙ because if gcd(a, m) = 1 and gcd(b, m) = 1, then gcd(ab, m) = 1. This is true since if ab and m have a common divisor > 1, then they also have a common prime divisor > 1, which would be a divisor of either a or b, and hence a common divisor of a and m or of b and m, contradicting that gcd(a, m) = 1 and gcd(b, m) = 1.

The associativity of ⊙ is inherited from the associativity of multiplication in Z. Moreover, 1 is a neutral element and inverses exist (see Section 4.5.3). Thus hZ ∗ m; ⊙, −1 , 1i is a group.

**Example 5.30.** In Z ∗ 18 = {1, 5, 7, 11, 13, 17} we have 5 ⊙ 13 = 11 and 11−1 = 5 since 11 ⊙ 5 = 1 (i.e., R18(11 · 5) = 1).

$\underset{p\text{\hspace{0.17em}}\mathrm{lim}}{p|m}$

p primero

<sup>11</sup>Alternatively, ϕ(m) could be defined as ϕ(m) = m · Y 1 − 1 p .

**Example 5.31.** In Z ∗ 11 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} we have 4 ⊙ 6 = 2 and 7 −1 = 8 since 7 ⊙ 8 = 1.

Now we obtain the following simple but powerful corollary to Theorem 5.8.

**Corollary 5.14** (Fermat, Euler). *For all* m ≥ 2 *and all* a *with* gcd(a, m) = 1,

a ϕ(m) ≡m 1.

*In particular, for every prime* p *and every* a *not divisible by* p,

a p−1 ≡p 1.

*Proof.* This follows from Corollary 5.10 for the group Z ∗ m of order ϕ(m).

The special case for primes was known already to Fermat.12 The general case was proved by Euler, actually before the concept of a group was explicitly introduced in mathematics.

We state the following theorem about the structure of Z ∗ m without proof. Of particular importance and interest is the fact that Z ∗ p is cyclic for every prime p.

**Theorem 5.15.** *The group* Z ∗ m *is cyclic if and only if* m = 2, m = 4, m = p e *, or* m = 2p e *, where* p *is an odd prime and* e ≥ 1.

**Example 5.32.** The group Z ∗ 19 is cyclic, and 2 is a generator. The powers of 2 are 2, 4, 8, 16, 13, 7, 14, 9, 18, 17, 15, 11, 3, 6, 12, 5, 10, 1. The other generators are 3, 10, 13, 14, and 15.

### **5.4 Application: RSA Public-Key Encryption**

The RSA public-key cryptosystem, invented in 1977 by Rivest, Shamir, and Adleman13, is used in many security protocols on the Internet, for instance in TLS/SSL. Like the Diffie-Hellman protocol it allows two parties to communicate securely, even if the communication channel is insecure, provided only that

<sup>12</sup>This result can be used as a primality test. Actually, the term "compositeness test" is more appropriate. To test whether a number n is prime one chooses a base a and checks whether a n−1 ≡n 1. If the condition is violated, then n is clearly composite, otherwise n could be a prime. Unfortunately, it is not guaranteed to be a prime. In fact, there are composite integers n for which a n−1 ≡n 1 for all a with gcd(a, n) = 1. The smallest such n is 561 = 3·11·17. For more sophisticated versions of such a probabilistic test one can prove that for every composite n, the fraction of test values for which the corresponding condition is satisfied is at most 1/4. Thus, by repeating the test sufficiently many times, the confidence that n is prime can be increased beyond any doubt. This is useful in practice, but it does not provide a proof that n is prime.

<sup>13</sup>R. L. Rivest, A. Shamir, and L. Adleman, A method for obtaining digital signatures and publickey cryptosystems, *Communications of the ACM*, Vol. 21, No. 2, pp. 120–126, 1978.

they can authenticate each other's public keys (respectively the Diffie-Hellman values). Moreover, the RSA system can be used as a digital signature scheme (see below). RSA was the first cryptographic system offering this important functionality.

### **5.4.1** e**-th Roots in a Group**

To understand the RSA system, all we need is the following simple theorem which is a consequence of Lagrange's theorem (Theorem 5.8).

**Theorem 5.16.** Let G *be some finite group (multiplicatively written), and let* e ∈ Z be *relatively prime to* |G| *(i.e.* gcd(e, |G|) = 1*). The function* x 7→ x e *is a bijection and the (unique)* e*-th root of* y ∈ G*, namely* x ∈ G *satisfying* x e = y*, is*

$x=y^d\,$, .

*where* d *is the multiplicative inverse of* e *modulo* |G|*, i.e.,*

$$e d\equiv_{|G|}1.$$

*Proof.* We have ed = k · |G| + 1 for some k. Thus, for any x ∈ G we have

$$(x^{e})^{d}=x^{e d}=x^{k\cdot|G|+1}=\underbrace{\left(x^{|G|}\right)^{k}}_{=1}\cdot x=x,$$

which means that the function y 7→ y d is the inverse function of the function x 7→ x e (which is hence a bijection). The under-braced term is equal to 1 because of Corollary 5.10.

When |G| is known, then d can be computed from ed ≡|G| 1 by using the extended Euclidean algorithm No general method is known for computing e-th roots in a group G without knowing its order. This can be exploited to define a public-key cryptosystem.

#### **5.4.2 Description of RSA**

Motivated by the Diffie-Hellman protocol also based on modular exponentiation, Rivest, Shamir and Adleman suggested as a possible class of groups the groups Z ∗ n, where n = pq is the product of two sufficiently large secret primes, p and q. The order of Z ∗ n ,

$$|\mathbb{Z}_{n}^{*}|=\varphi(n)=(p-1)(q-1),$$

```
Alice insecure channel Bob
Generate
primes p and q
n = p · q
f = (p−1)(q−1)
select e
d ≡f e
−1 ✲
                   n, e plaintext
                              m ∈ {1, . . . , n−1}
                              ciphertext
               c = Rn(me ✛ )
                    c
m = Rn(c
       d
)
```
- Figure 5.1: The na¨ıve RSA public-key cryptosystem. Alice's public key is the pair (n, e) and her secret key is d. The public key must be sent to Bob via an authenticated channel. Bob can encrypt a message, represented as a number in Zn, by raising it to the eth power modulo n. Alice decrypts a ciphertext by raising it to the dth power modulo n.
  can be computed only if the prime factors p and q of n are known.14 The (public) encryption transformation is defined by

$$m\mapsto c=R_{n}(m^{e}),$$

and the (secret) decryption transformation is defined by

$$c\mapsto m=R_{n}(c^{d}),$$

where d can be computed according to

$$e d\equiv_{(p-1)(q-1)}\;1.$$

The na¨ıve15 RSA public-key cryptosystem16 is summarized in Figure 5.1.

The RSA system is usually (for instance in the TLS/SSL protocol) used only for *key management*, not for encrypting actual application data. The message

<sup>14</sup>One can show that one can efficiently compute p and q when given (p − 1)(q − 1). (How?)

<sup>15</sup>The described version of using RSA is not secure, for several reasons. One reason is that it is deterministic and therefore an attacker can check potential messages by encrypting them himself and comparing the result with the ciphertext.

<sup>16</sup>The RSA encryption was defined above as a permutation on Z ∗ n. But one can show that encryption and decryption work for all m ∈ Zn. Thus the condition gcd(m, n) = 1 need not be checked.

m is an encryption key (typically a short-term session key) for a conventional cryptosystem which is used to encrypt the actual application data (e.g. of a TLS session).

#### **5.4.3 On the Security of RSA**

Let us have a brief look at the security of the RSA public-key system.17 It is not known whether computing e-th roots modulo n (when gcd(e, ϕ(n)) = 1) is easier than factoring n, but it is widely believed that the two problems are computationally equivalent.18 Factoring large integers is believed by many to be computationally infeasible on classical computers. However, Shor's algorithm can factor integers efficiently on a *quantum computer* of sufficient size, which puts RSA-based systems at risk.19

Obviously, the system is insecure unless Bob can make sure he obtains the correct public key from Alice rather than a public key generated by an adversary and posted in the name of Alice. In other words, the public key must be sent from Alice to Bob via an authenticated channel. This is usually achieved (indirectly) using a so-called public-key certificate signed by a trusted certification authority. One also uses the term *public-key infrastructure (PKI)*. Explaining these concepts is beyond the scope of this course.

It is important to point out that for a public-key system to be secure, the message must be randomized in an appropriate manner. Otherwise, when given an encrypted message, an adversary can check plaintext messages by encrypting them and comparing them with the given encrypted message. If the message space is small (e.g. a bit), then this would allow to efficiently break the system.

#### **5.4.4 Digital Signatures**

The RSA system can also be used for generating digital signatures. A digital signature can only be generated by the entity knowing the secret key, but it can be verified by anyone, e.g. by a judge, knowing the public key. Alice's signature s for a message m is

$$s=R_{n}(z^{d})\;\;\;\;\;\;\mathrm{for}\;\;\;\;\;z=m||h(m),$$

where || denotes concatenation and h is a suitable function introducing redundancy into the message and the string z is naturally understood as an element of Zn. 20 A signature can be verified by raising it to the e-th power modulo n and checking that it is of the correct form m||h(m). The message is recovered from the signature.

<sup>17</sup>But note that a cryptographic security analysis is much more involved.

<sup>18</sup>In fact, for a generic model of computation, this equivalence was proved in: D. Aggarwal and U. Maurer, *Breaking RSA generically is equivalent to factoring*, IEEE Transactions on Information Theory, vol. 62, pp. 6251–6259, 2016.

<sup>19</sup>The scientific field of finding public-key cryptographic schemes not known to be breakable by quantum computers is called *post-quantum cryptography*.

<sup>20</sup>This can be a so-called cryptographic hash function. Without such additional redundancy, every s ∈ Z∗ n would be a legitimate signature, and hence forging a signature would be trivial.

### **5.5 Rings and Fields**

We now consider algebraic systems with two binary operations, usually called addition and multiplication.

#### **5.5.1 Definition of a Ring**

**Definition 5.18.** A *ring* hR; +, −, 0, ·, 1i is an algebra for which

- (i) hR; +, −, 0i is a commutative group.
- (ii) hR; ·, 1i is a monoid.
- (iii) a(b + c) = (ab) + (ac) and (b + c)a = (ba) + (ca) for all a, b, c ∈ R (left and right distributive laws).

A ring is called *commutative* if multiplication is commutative (ab = ba).21

**Example 5.33.** Z, Q, R, and C are (commutative) rings.

**Example 5.34.** hZm; ⊕, ⊖, 0, ⊙, 1i is a commutative ring. Since hZm; ⊕, ⊖, 0i is an abelian group and hZm; ⊙, 1i is a monoid, it only remains to check the distributive law, which is inherited from the distributive law for the integers.

We list some simple facts about rings.

**Lemma 5.17.** *For any ring* hR; +, −, 0, ·, 1i*, and for all* a, b ∈ R,

- (i) 0a = a0 = 0.

$${\mathrm{(ii)}}\quad(-a)b=-(a b).$$

- **(iii)** (−a)(−b) = ab.
- **(iv)** If R *is non-trivial (i.e., if it has more than one element), then* 1 6= 0.

*Proof.* Proof of (i): We have

- = −(a0) + a(0 + 0) (0 + 0 = 0) = −(a0) + (a0 + a0) (distributive law) = (−(a0) + a0) + a0 (associativity of +) = 0 + a0 (−b + b = 0 for all b ∈ R ) = a0 (0 + b = b for all b ∈ R)
  0 = −(a0) + a0 (0 = −b + b for all b ∈ R, e.g. for b = a0)

-
<sup>21</sup>One can show (as an exercise) that ring addition must be commutative, i.e., commutativity of addition follows from the remaining ring axioms. The stated ring axioms are hence not minimal. The word "commutative" in (i) could be dropped.

The dual equation 0a = 0 is proved similarly.22

The proofs of (ii), (iii), and (iv) are left as exercises.

This lemma makes explicit that in a non-trivial ring, 0 has no multiplicative inverse since, according to (i) and (iv), 0a = 1 is not possible. Thus requesting hR; ·, 1i to be a group rather than a monoid would make no sense.

**Definition 5.19.** The *characteristic* of a ring is the order of 1 in the additive group if it is finite, and otherwise the characteristic is defined to be 0 (not infinite).

**Example 5.35.** The characteristic of hZm; ⊕, ⊖, 0, ⊙, 1iis m. The characteristic of Z is 0.

#### **5.5.2 Units and the Multiplicative Group of a Ring**

**Definition 5.20.** An element u of a ring R is called a unit23 if u is invertible, i.e., uv = vu = 1 for some v ∈ R. (We write v = u −1 . 24) The set of units of R is denoted by R∗ .

**Example 5.36.** The units of Z are −1 and 1: Z ∗ = {−1, 1}.

**Example 5.37.** The units of R are all non-zero elements of R: R ∗ = R \ {0}.

**Example 5.38.** The ring of Gaussian integers (see Example 4.5) contains four units: 1, i, −1, and −i. For example, the inverse of i is −i.

**Example 5.39.** The set of units of Zm is Z ∗ m (Definition 5.16).25

**Lemma 5.18.** *For a ring* R, R∗ *is a group (the multiplicative group of units of* R).

*Proof.* We need to show that R∗ is closed under multiplication, i.e., that for u ∈ R∗ and v ∈ R∗ , we also have uv ∈ R∗ , which means that uv has an inverse. The inverse of uv is v −1u −1 since (uv)(v −1u −1 ) = uvv−1u −1 = uu−1 = 1. R∗ also contains the neutral element 1 (since 1 has an inverse). Moreover, the associativity of multiplication in R∗ is inherited from the associativity of multiplication in R (since elements of R∗ are also elements of R and the multiplication operation is the same).

$\square$

<sup>22</sup>This also follows from commutativity of multiplication, but the proof shows that the statement holds even for non-commutative rings.

<sup>23</sup>German: Einheit

<sup>24</sup>The inverse, if it exists, is unique.

<sup>25</sup>In fact, we now see the justification for the notation Z ∗m already introduced in Definition 5.16.

#### **5.5.3 Divisors**

In the following R denotes a commutative ring.

**Definition 5.21.** 26 For a, b ∈ R we say that a *divides* b, denoted a | b, if there exists c ∈ R such that b = ac. In this case, a is called a *divisor*27 of b and b is called a *multiple*28 of a.

Note that every non-zero element is a divisor of 0. Moreover, 1 and −1 are divisors of every element.

**Lemma 5.19.** *In any commutative ring,*

(i) If a | b and b | c*, then* a | c*, i.e., the relation* | *is transitive.*

- **(ii)** If a | b*, then* a | bc *for all* c.
  **(iii)** If a | b and a | c*, then* a | (b + c).

*Proof.* Proof of (i). a | b =⇒ ∃d (b = ad). Also, b | c =⇒ ∃e (c = be). Thus c = be = (ad)e = a(de), i.e., a | c.

The proofs of (ii) and (iii) are left as an exercise.

As mentioned in Section 4.2.3, the concept of a greatest common divisor not only applies to integers, but to any commutative ring:

**Definition 5.22.** For ring elements a and b (not both 0), a ring element d is called a *greatest common divisor* of a and b if d divides both a and b and if every common divisor of a and b divides d, i.e., if

$d\mid a\ \wedge\ d\mid b\ \wedge\ \forall c\ ((c\mid a\ \wedge\ c\mid b)\ \rightarrow\ c\mid d)$.

#### **5.5.4 Zerodivisors and Integral Domains**

**Definition 5.23.** An element a 6= 0 of a commutative ring R is called a *zerodivi*sor29 if ab = 0 for some b 6= 0 in R.

**Definition 5.24.** An *integral domain*30 D is a (nontrivial31) commutative ring without zerodivisors: For all a, b ∈ D we have ab = 0 =⇒ a = 0 ∨ b = 0.

$\boxed{\begin{array}{c}\blacksquare\end{array}}$

<sup>26</sup>Recall that this definition was already stated as Definition 4.1 for the special case of integers. 27German: Teiler

<sup>28</sup>German: Vielfaches

<sup>29</sup>German: Nullteiler

<sup>30</sup>German: Integritätsbereich

<sup>31</sup>i.e., 1 6= 0

**Example 5.40.** Z, Q, R, and C are integral domains.

**Example 5.41.** Zm is not an integral domain if m is not a prime. Any element of Zm not relatively prime to m is a zerodivisor.

**Lemma 5.20.** *In an integral domain, if* a | b*, then* c *with* b = ac *is unique (and is denoted by* c = b a or c = b/a *and called quotient).*32

*Proof.* Suppose that b = ac = ac′ for some c and c ′ . Then

$$0=a c+(-(a c^{\prime}))=a(c+(-c^{\prime}))$$

and thus, because a 6= 0 and there are no zero-divisors, we must have c+(−c ′ ) = 0 and hence c = c ′ .

#### **5.5.5 Polynomial Rings**

**Definition 5.25.** A *polynomial* a(x) over a commutative ring R in the indeterminate x is a formal expression of the form

$$a(x)=a_{d}x^{d}+a_{d-1}x^{d-1}+\cdots+a_{1}x+a_{0}\ \ =\sum_{i=0}^{d}a_{i}x^{i}.$$

for some non-negative integer d, with ai ∈ R. The *degree* of a(x), denoted deg(a(x)), is the greatest i for which ai 6= 0. The special polynomial 0 (i.e., all the ai are 0) is defined to have degree "minus infinity".33 Let R[x] denote the set of polynomials (in x) over R.

Actually, it is mathematically better (but less common) to think of a polynomial simply as a finite list (a0, a1, . . . , ad−1, ad) of elements of R. There is no need to think of a variable x which suggests that it can be understood as a function R → R. A polynomial can, but need not, be considered as such a function (see Section 5.7).

Addition and multiplication in R[x] are defined as usual. Consider polynomials a(x) = Pd i=0 aix i of degree d and b(x) = Pd ′ i=0 bix i of degree d ′ . The sum of a(x) and b(x) is a polynomial of degree at most max(d, d′ ) and is defined as

$$a(x)+b(x)\ =\ \sum_{i=0}^{\operatorname*{max}(d,d^{\prime})}(a_{i}+b_{i})\;x^{i},$$

<sup>32</sup>Note that the terms b a (or b/a) are defined only if a | b.

<sup>33</sup>The interpretation of "minus infinity" is that it is a quantity which remains unchanged when an arbitrary integer is added to it.

where here and in the following coefficients with index greater than the degree are understood to be 0. The product of a(x) and b(x) is defined as34

$$a(x)b(x)=\sum_{i=0}^{d+d^{\prime}}\,\left(\sum_{k=0}^{i}a_{k}b_{i-k}\right)\,x^{i}\ \ =\ \sum_{i=0}^{d+d^{\prime}}\,\left(\sum_{u+v=i}a_{u}b_{v}\right)\,x^{i}$$ $$=a_{d}b_{d^{\prime}}x^{d+d^{\prime}}+\cdots+(a_{0}b_{2}+a_{1}b_{1}+a_{2}b_{0})x^{2}+(a_{0}b_{1}+a_{1}b_{0})x+a_{0}b_{0}.$$

The i-th coefficient of a(x)b(x) is Pi k=0 akbi−k = P u+v=i aubv, where the sum is over all pairs (u, v) for which u + v = i as well as u ≥ 0 and v ≥ 0.

The degree of the product of polynomials over a ring R is, by definition, at most the sum of the degrees. It is equal to the sum if R is an integral domain, which implies that the highest coefficient is non-zero: adbd′ 6= 0 if ad 6= 0 and bd′ 6= 0.

**Example 5.42.** Consider the ring Z7 and let a(x) = 2x 2+3x+1 and b(x) = 5x+6. Then

$a(x)+b(x)\;=\;2x^2+(3+5)x+(1+6)\;=\;2x^2+x$

.

and

$a(x)b(x)\;=\;(2\cdot5)x^3+(3\cdot5+2\cdot6)x^2+(1\cdot5+3\cdot6)x+1\cdot6\;=\;3x^3+6x^2+2x+6$.

#### **Theorem 5.21.** *For any commutative ring* R, R[x] *is a commutative ring.*

*Proof.* We need to prove that the conditions of Definition 5.18 (i.e., the ring axioms) are satisfied for R[x], assuming they are satisfied for R. We first observe that since multiplication in R is commutative, so is multiplication in R[x].

Condition (i) requires that R[x] is an abelian group with respect to (polynomial) addition. This is obvious from the definition of addition. Associativity and commutativity of (polynomial) addition are inherited from associativity and commutativity of addition in R (because R is a ring). The neutral element is the polynomial 0, and the inverse in the group (i.e., the negative) of a(x) = Pd i=0 aix i is −a(x) = Pd i=0(−ai)x i .

Condition (ii) requires that R[x] is a monoid with respect to (polynomial) multiplication. The polynomial 1 is the neutral element, which is easy to see. That multiplication is associative can be seen as follows. Let a(x) and b(x) as above, and c(x) = Pd ′′ i=0 cix i . Using the above definition of a(x)b(x), we have

$$\begin{array}{r c l}{{\big(a(x)b(x)\big)c(x)}}&{{=}}&{{\sum_{i=0}^{d+d^{\prime}+d^{\prime\prime}}\left(\sum_{j=0}^{i}\left(\sum_{u+v=j}a_{u}b_{v}\right)c_{i-j}\right)\ x^{i}}}\end{array}$$

<sup>34</sup>Note that, for example, the highest coefficient Pd+d ′ k=0 akbi−k is in the formula defined as a sum of d + d ′ + 1 terms, but all but one of them (namely for k = d) are zero.

$ =\quad\sum_{i=0}^{d+d'+d'^{\prime\prime}}\left(\sum_{u+v+w=i}(a_u b_v)c_w\right)\;x^i$.

If one computes a(x) b(x)c(x) , one arrives at the same expression, by making use of associativity of multiplication in R, i.e., the fact that (aubv)cw = au(bvcw) = aubvcw.

Condition (iii), the distributive law, can also be shown to follow from the distributive law holding for R.

**Lemma 5.22.** Let D *be an integral domain. Then*

- (i) D[x] *is an integral domain.*
- **(ii)** *The degree of the product of two polynomial is the sum of their degrees.*

**(iii)** *The units of* D[x] *are the constant polynomials that are units of* D: D[x] ∗ = D∗ .

*Proof.* Left as an exercise.

**Example 5.43.** Lemma 5.22 implies that for an integral domain D, the set D[x][y] of polynomials in y with coefficients in D[x], is also an integral domain. One can also view the elements of D[x][y] as polynomials in two indeterminates, denoted D[x, y].

#### **5.5.6 Fields**

**Definition 5.26.** A *field*35 is a nontrivial commutative ring F in which every nonzero element is a unit, i.e., F ∗ = F \ {0}.

In other words, a ring F is a field if and only if hF \ {0}; ·, −1 , 1i is an abelian group.

**Example 5.44.** Q, R, and C are fields, but Z and R[x] (for any ring R) are not fields.

**Theorem 5.23.** Zp *is a field if and only if* p *is prime.*

*Proof.* This follows from our earlier analysis of Z ∗ p , namely that Zp \ {0} is a multiplicative group if and only if p is prime.

In the following we denote the field with p elements by GF(p) rather than Zp. As explained later, "GF" stands for Galois field. Galois discovered finite fields around 1830.

<sup>35</sup>German: Körper

Fields are of crucial importance because in a field one can not only add, subtract, and multiply, but one can also divide by any nonzero element. This is the abstraction underlying many algorithms like those for solving systems of linear equations (e.g. by Gaussian elimination) or for polynomial interpolation. Also, a vector space, a crucial concept in mathematics, is defined over a field, the so-called base field. Vector spaces over R are just a special case.

**Example 5.45.** Solve the following system of linear equations over Z11:

$5x\oplus2y\;\;=\;\;4$

$2x\oplus7y\;\;=\;\;9$

.

Solution: Eliminate x by adding 2 times the first and ⊖5 = 6 times the second equation, resulting in

$${\underbrace{(2\odot5\oplus6\odot2)}_{=0}}\,x+{\underbrace{(2\odot2\oplus6\odot7)}_{=2}}\,y={\underbrace{2\odot4\oplus6\odot9}_{=7}},$$

which is equivalent to 2y = 7. Thus y = 2−1 ⊙ 7 = 6 ⊙ 7 = 9. This yields

$x=2^{-1}\odot(9\odot7\odot y)=6\odot(9\oplus4\odot9)=6\odot1=6$.

Later we will describe a few applications of finite fields. Here we give another example of a finite field.

**Example 5.46.** We describe a field with 4 elements, F = {0, 1, A, B}, by giving the function tables of addition and multiplication:

| + | 0 | 1 | A | B | · | 0 | 1 | A | B |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | A | B | 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | B | A | 1 | 0 | 1 | A | B |
| A | A | B | 0 | 1 | A | 0 | A | B | 1 |
| B | B | A | 1 | 0 | B | 0 | B | 1 | A |

This field is not isomorphic to the ring Z4, which is not a field. We explain the construction of this 4-element field in Section 5.8.2.

**Theorem 5.24.** *A field is an integral domain.*

*Proof.* In a field, every non-zero element is a unit, and in an integral domain, every non-zero element must not be a zero-divisor. It hence suffices to show that in any commutative ring, a unit u ∈ R is not a zerodivisor. To arrive at a contradiction, assume that uv = 0 for some v. Then we must have v = 0 since

$v\;=\;1v\;=\;u^{-1}uv\;=\;u^{-1}0\;=\;0,$
.

and hence u is not a zerodivisor.

### **5.6 Polynomials over a Field**

Recall Definition 5.25 of a polynomial over a ring R. As mentioned several times, the set R[x] of polynomials over R is a ring with respect to the standard polynomial addition and multiplication. The neutral elements of addition and multiplication are the polynomials 0 and 1, respectively.

Polynomials over a field F are of special interest, for reasons to become clear. Namely, they have properties in common with the integers, Z.

#### **5.6.1 Factorization and Irreducible Polynomials**

For a, b ∈ Z, if b divides a, then also −b divides a. The analogy for polynomials is as follows. If b(x) divides a(x), then so does v · b(x) for any nonzero v ∈ F because if a(x) = b(x)· c(x), then a(x) = vb(x)· v −1 c(x) . Among the polynomials vb(x) (for v ∈ F), which are in a certain sense associated to each other, there is a distinguished one, namely that with leading coefficient 1. This is analogous to b and −b being associated in Z (see Section 5.6.3) and the positive one being distinguished.

**Definition 5.27.** A polynomial a(x) ∈ F[x] is called *monic*36 if the leading coefficient is 1.

**Example 5.47.** In GF(5)[x], x + 2 divides x + 1 since x + 1 = (x + 2)(x + 3). Also, 2x + 4 divides x + 1 since x + 1 = (2x + 4)(3x + 4). More generally, v ·(x+ 2) divides x + 1 for any v ∈ GF(5) because x + 1 = v(x+ 2)· v −1 (x+ 3).

One can factor polynomials, similarly to the factorization of integers.

**Example 5.48.** In GF(7)[x] we have

$x^3+2x^2+5x+2\;=\;(x+5)(x^2+4x+6)$.

In GF(2)[x] we have

$x^6+x^5+x^4+x^3+1\;=\;(x^2+x+1)(x^4+x+1)$.

**Definition 5.28.** A polynomial a(x) ∈ F[x] with degree at least 1 is called *irreducible* if it is divisible only by constant polynomials and by constant multiples of a(x).

The notion of irreducibility in F[x] corresponds to the notion of primality in Z, in a sense to be made more precise in Section 5.6.3.

<sup>36</sup>German: monisch, normiert

It follows immediately from the definition (and from the fact that the degrees are added when polynomials are multiplied) that every polynomial of degree 1 is irreducible. Moreover, a polynomial of degree 2 is either irreducible or the product of two polynomials of degree 1. A polynomial of degree 3 is either irreducible or it has at least one factor of degree 1. Similarly, a polynomial of degree 4 is either irreducible, has a factor of degree 1, or has an irreducible factor of degree 2.

Irreducibility of a polynomial of degree d can be checked by testing all irreducible polynomials of degree ≤ d/2 as possible divisors. Actually, it suffices to test only the monic polynomials because one could always multiply a divisor by a constant, for example the inverse of the highest coefficient. This irreducibility test is very similar to the primality test which checks all divisors up to the square root of the number to be tested.

**Example 5.49.** In GF(5)[x], x 2 + 2 is irreducible since (as one can check) x + α does not divide x 2 + 2, for all α ∈ GF(5).

**Example 5.50.** In GF(7)[x], x 2 + 4x+ 6 is irreducible since x+ α does not divide x 2 + 4x + 6, for all α ∈ GF(7).

**Example 5.51.** In GF(2)[x], x 2 + x + 1 is irreducible because neither x nor x + 1 divides x 2 + x + 1. It is easy to see that this is the only irreducible polynomial of degree 2 over GF(2). There are two irreducible polynomials of degree 3 over GF(2), namely x 3 + x + 1 and x 3 + x 2 + 1. Moreover, there are three irreducible polynomials of degree 4 over GF(2), which the reader can find as an exercise.

Not only the concepts of divisors and division with remainders (see below) carries over from Z to F[x], also the concept of the greatest common divisor can be carried over. Recall that F[x] is a ring and hence the notion of a greatest common divisor is defined. For the special type of ring F[x], as for Z, one can single out one of them.

**Definition 5.29.** The monic polynomial g(x) of largest degree such that g(x) | a(x) and g(x) | b(x) is called the greatest common divisor of a(x) and b(x), denoted gcd(a(x), b(x)).

**Example 5.52.** Consider GF(7)[x]. Let a(x) = x 3 + 4x 2 + 5x + 2 and b(x) = x 3 + 6x 2 + 4x + 6. One can easily check that a(x) = (x + 1)(x 2 + 3x + 2) and b(x) = (x + 3)(x 2 + 3x + 2). Thus gcd(a(x), b(x)) = x 2 + 3x + 2.

**Example 5.53.** Consider GF(2)[x]. Let a(x) = x 3+x 2+x+1 and b(x) = x 2+x+1. Then gcd(a(x), b(x)) = 1.

#### **5.6.2 The Division Property in** F[x]

Let F be a field. The ring F[x] has strong similarities with the integers Z (see Section 5.6.3). Both these integral domains have the special property that one can divide one element a by another element b 6= 0, resulting in a quotient q and a remainder r which are unique when r is required to be "smaller" than the divisor. In case of the integers, the "size" of b ∈ Z is given by the absolute value |b|, and the "size" of a polynomial b(x) ∈ F[x] can be defined as its degree deg(b(x)).

**Theorem 5.25.** Let F *be a field. For any* a(x) and b(x) 6= 0 in F[x] *there exist a unique* q(x) *(the quotient) and a unique* r(x) *(the remainder) such that*

$a(x)=b(x)\cdot q(x)+r(x)$ and $\deg(r(x))<\deg(b(x))$.

*Proof sketch.* We first prove the existence of q(x) and r(x) and then the uniqueness. If deg(b(x)) > deg(a(x)), then q(x) = 0 and r(x) = a(x). We thus assume that deg(b(x)) ≤ deg(a(x)). Let a(x) = amx m + · · · and b(x) = bnx n + · · · with n ≤ m, where "· · ·" stands for lower order terms. The first step of polynomial division consists of subtracting amb −1 n b(x)x m−n from a(x), resulting in a polynomial of degree at most m−1. 37 Continuing polynomial division finally yields q(x) and r(x), where deg(r(x)) < deg(b(x)) since otherwise one could still subtract a multiple of b(x).

To prove the uniqueness, suppose that

$$a(x)=b(x)q(x)+r(x)=b(x)q^{\prime}(x)+r^{\prime}(x),$$

where deg(r(x)) < deg(b(x)) and deg(r ′ (x)) < deg(b(x)). Then

$$b(x)[q(x)-q^{\prime}(x)]=r^{\prime}(x)-r(x).$$

Since deg(r ′ (x) − r(x)) < deg(b(x)), this is possible only if q(x) − q ′ (x) = 0, i.e., q(x) = q ′ (x), which also implies r ′ (x) = r(x). 38

In analogy to the notation Rm(a), we will denote the remainder r(x) of the above theorem by Rb(x)(a(x)).

**Example 5.54.** Let F be the field GF(7) and let a(x) = x 3 + 2x 2 + 5x + 4 and b(x) = 2x 2 + x + 1. Then q(x) = 4x + 6 and r(x) = 2x + 5 since

> (x 3 + 2x 2 + 5x + 4) = (2x 2 + x + 1) · (4x + 6) + (2x + 5),

<sup>37</sup>Note that here it is important that F is a field since otherwise the existence of b −1 n is not guaranteed.

<sup>38</sup>Note that here we have made use of the fact that deg(u(x)v(x)) = deg(u(x)) + deg(v(x)). We point out that this only holds in an integral domain. (Why?) Recall that a field is an integral domain (Theorem 5.24).

**Example 5.55.** In GF(2)[x] we have

$(x^{4}+x^{3}+x^{2}+1):(x^{2}+1)=x^{2}+x$ with remainder $x+1$.

Note that in GF(2), −1 = 1. For example, −x = x and −x 2 = x 2

#### **5.6.3 Analogies Between** Z and F[x]**, Euclidean Domains**

In this section we describe the abstraction underlying both Z and F[x].

**Definition 5.30.** In an integral domain, a and b are called *associates*, denoted a ∼ b, if a = ub for some unit u.

**Definition 5.31.** In an integral domain, a non-unit p ∈ D \ {0} is *irreducible* if, whenever p = ab, then either a or b is a unit.39

The units in Z are 1 and −1 and the units in F[x] are the non-zero constant polynomials (of degree 0). In Z, a and −a are associates.

**Example 5.56.** In Z, 6 and −6 are associates. In GF(5)[x], x + 2x + 3, 2x + 4x + 1, 3x + x + 4, and 4x + 3x + 2 are associates.

For a ∈ D one can define one associate to be distinguished. For Z the distinguished associate of a is |a|, and for a(x) ∈ F[x] the distinguished associate of a(x) is the monic polynomial associated with a(x). If we consider only the distinguished associates of irreducible elements, then for Z we arrive at the usual notion of prime numbers.40

We point out that the association relation is closely related to divisibility. The proof of the following lemma is left as an exercise.

**Lemma 5.26.** a ∼ b ⇐⇒ a | b ∧ b | a.

There is one more crucial property shared by both integral domains Z and F[x] (for any field F), described in the following abstract definition.

**Definition 5.32.** A *Euclidean domain* is an integral domain D together with a so-called *degree function* d : D \ {0} → N such that

- (i) For every a and b 6= 0 in D there exist q and r such that a = bq + r and d(r) < d(b) or r = 0.
- (ii) For all nonzero a and b in D, d(a) ≤ d(ab).

**Example 5.57.** The Gaussian integers Z[ √ −1] discussed earlier are a Euclidean domain where the degree of a + bi is √ a 2 + b 2, i.e., the absolute value (of complex numbers).

One can prove that in a Euclidean domain, the greatest (according to the degree function) common divisor is well-defined, up to taking associates, i.e., up to multiplication

<sup>39</sup>In other words, p is divisible only by units and associates of p.

<sup>40</sup>There is a notion of a *prime* element of a ring, which is different from the notion of an irreducible element, but for the integers Z the two concepts coincide.

by a unit. The condition d(r) < d(b) guarantees that the gcd can be computed in the well-known manner by continuous division. This procedure terminates because d(r) decreases monotonically in each division step.

The following theorem can be proved in a manner analogous to the proof of the unique factorization theorem for Z. One step is to show that a Euclidean domain is a principle ideal domain.

**Theorem 5.27.** *In a Euclidean domain every element can be factored uniquely (up to taking associates) into irreducible elements.*

### **5.7 Polynomials as Functions**

#### **5.7.1 Polynomial Evaluation**

For a ring R, a polynomial a(x) ∈ R[x] can be interpreted as a function R → R by defining *evaluation* of a(x) at α ∈ R in the usual manner. This defines a function R → R : α 7→ a(α).

**Example 5.58.** Consider the field GF(5) and the polynomial a(x) = 2x 3+3x+1. Then a(0) = 1, a(1) = 1, a(2) = 3, a(3) = 4, and a(4) = 1.

The following lemma is easy to prove:

**Lemma 5.28.** *Polynomial evaluation is compatible with the ring operations:*

- If c(x) = a(x) + b(x)*, then* c(α) = a(α) + b(α) *for any* α.
- If c(x) = a(x) · b(x)*, then* c(α) = a(α) · b(α) *for any* α.

#### **5.7.2 Roots**

**Definition 5.33.** Let a(x) ∈ R[x]. An element α ∈ R for which a(α) = 0 is called a *root*41 of a(x).

**Example 5.59.** The polynomial x 3 − 7x + 6 in R[x] has 3 roots: −3, 1, and 2. The polynomial x 2 + 1 in R[x] has no root. The polynomial (x 3 + 2x 2 + 5x + 2) in GF(7)[x] has 2 as its only root. The polynomial (x 4 + x 3 + x + 1) in GF(2)[x] has the root 1.

**Lemma 5.29.** *For a field* F, α ∈ F *is a root of* a(x) *if and only if* x − α *divides* a(x).

<sup>41</sup>German: Nullstelle oder Wurzel

*Proof.* (=⇒) Assume that α is a root, i.e., a(α) = 0. Then, according to Theorem 5.25, we can write a(x) as

$$a(x)=(x-\alpha)q(x)+r(x),$$

where deg(r(x)) < deg(x − α) = 1, i.e., r(x) is a constant r, where

$$r\;=\;a(x)-(x-\alpha)q(x).$$

Setting x = α in the above equation gives

$r=a(\alpha)-(\alpha-\alpha)q(\alpha)=0-0\cdot q(\alpha)=0$.

Hence x − α divides a(x).

(⇐=) To prove the other direction, assume that x − α divides a(x), i.e., a(x) = (x − α)q(x) for some q(x). Then a(α) = (α − α)q(α) = 0, i.e., α is a root of a(x).

Lemma 5.29 implies that an irreducible polynomial of degree ≥ 2 has no roots.

**Corollary 5.30.** *A polynomial* a(x) *of degree* 2 or 3 *over a field* F *is irreducible if and only if it has no root.*42

*Proof.* A reducible polynomial of degree 2 or 3 has a factor of degree 1 and hence a root. An irreducible polynomial has no root because according to Lemma 5.29, such a root would correspond to a (linear) factor.

**Theorem 5.31.** *For a field* F*, a nonzero*43 *polynomial* a(x) ∈ F[x] *of degree* d *has at most* d *roots.*

*Proof.* To arrive at a contradiction, suppose that a(x) has degree d but e > d roots, say α1, . . . , αe. Then the polynomial Qe i=1(x−αi) divides a(x). Since this is a polynomial of degree e, a(x) has degree at least e, and hence more than d, which is a contradiction.

#### **5.7.3 Polynomial Interpolation**

It is well-known that a polynomial of degree d over R can be interpolated from any d + 1 values. Since the proof requires only the properties of a field (rather than the special properties of R), this interpolation property holds for polynomials over any field F. This fact is of crucial importance in many applications.

<sup>42</sup>Note that this statement is not true for polynomials of degree ≥ 4.

<sup>43</sup>Note that every α ∈ F is a root of the polynomial 0.

**Lemma 5.32.** *A polynomial* a(x) ∈ F[x] *of degree at most* d *is uniquely determined by* any d+1 *values of* a(x)*, i.e., by* a(α1), . . . , a(αd+1) *for any distinct* α1, . . . , αd+1 ∈ F.

*Proof.* Let βi = a(αi) for i = 1, . . . , d + 1. Then a(x) is given by Lagrange's interpolation formula:

$$a(x)=\sum_{i=1}^{d+1}\beta_{i}u_{i}(x),$$

where the polynomial ui(x) is given by

$$u_{i}(x)=\frac{(x-\alpha_{1})\cdots(x-\alpha_{i-1})(x-\alpha_{i+1})\cdots(x-\alpha_{d+1})}{(\alpha_{i}-\alpha_{1})\cdots(\alpha_{i}-\alpha_{i-1})(\alpha_{i}-\alpha_{i+1})\cdots(\alpha_{i}-\alpha_{d+1})}.$$

Note that for ui(x) to be well-defined, all constant terms αi − αj in the denominator must be invertible. This is guaranteed if F is a field since αi − αj 6= 0 for i 6= j. Note also that the denominator is simply a constant and hence ui(x) is indeed a polynomial of degree d. It is easy to verify that ui(αi) = 1 and ui(αj ) = 0 for j 6= i. Thus the polynomials a(x) and Pd+1 i=1 βiui(x) agree when evaluated at any αi , for all i. We note that a(x) has degree at most d. 44

It remains to prove the uniqueness. Suppose there is another polynomial a ′ (x) of degree at most d such that βi = a ′ (αi) for i = 1, . . . , d + 1. Then a(x) − a ′ (x) is also a polynomial of degree at most d, which (according to Theorem 5.31) can have at most d roots, unless it is 0. But a(x)−a ′ (x) has indeed the d+ 1 roots α1, . . . , αd+1. Thus it must be the 0-polynomial, which implies a(x) = a ′ (x).

### **5.8 Finite Fields**

So far we have seen the finite field GF(p), where p is prime. In this section we discuss all other finite fields.

#### **5.8.1 The Ring** F[x]m(x)

We continue to explore the analogies between the rings Z and F[x]. In the same way as we can compute in the integers Z modulo an integer m, yielding the ring hZm; ⊕, ⊖, 0, ⊙, 1i, we can also compute in F[x] modulo a polynomial m(x). Let Rm(x)(a(x)) denote the (unique) remainder when a(x) is divided by m(x). The concept of congruence modulo m(x) is defined like congruence modulo m. For a(x), b(x) ∈ F[x],

$$a(x)\equiv_{m(x)}\,b(x)\ \ \ \stackrel{\mathrm{def}}{\Longleftarrow}\ \ m(x)\ |\ \big(a(x)-b(x)\big).$$

<sup>44</sup>The degree can be smaller than d.

The proof of the following lemma is analogous to the proof that congruence modulo m is an equivalence relation on Z.

**Lemma 5.33.** *Congruence modulo* m(x) *is an equivalence relation on* F[x]*, and each equivalence class has a unique representative of degree less than* deg(m(x)).

**Example 5.60.** Consider R[x] or Q[x]. We have, for example,

$5x^3\,-\,2x\,+\,1\;\;\;\equiv_{3x^2\,+\,2}\;\;\;8x^3\,+\,1\;\;\;\equiv_{3x^2\,+\,2}\;\;\;-\frac{16}{3}x\,+\,1$

.

as one can easily check. Actually, the remainder when 5x 3 − 2x + 1 is divided by 3x 2 + 2 is −16 3 x + 1.

**Example 5.61.** Consider GF(2)[x]. Example 5.55 can be rephrased as Rx2+1(x 4+ x 3 + x 2 + 1) = x + 1.

**Definition 5.34.** Let m(x) be a polynomial of degree d over F. Then

$F[x]_{m(x)}\stackrel{{\mbox{def}}}{{=}}\{a(x)\in F[x]\mid\mbox{deg}(a(x))<d\}$.

We state a simple fact about the cardinality of F[x]m(x) when F is finite.

**Lemma 5.34.** Let F *be a finite field with* q *elements and let* m(x) *be a polynomial of degree* d *over* F*. Then* |F[x]m(x) | = q d .

*Proof.* We have

$F[x]_{m(x)}=\left\{a_{d-1}x^{d-1}+\cdots+a_{1}x+a_{0}\mid a_{0},\ldots,a_{d-1}\in F\right\}.$

There are q d choices for a0, . . . , ad−1.

F[x]m(x) is derived from F[x] in close analogy to how the ring Zm is derived from the ring Z.

**Lemma 5.35.** F[x]m(x) *is a ring with respect to addition and multiplication mod*ulo m(x). 45

*Proof.* F[x]m(x) is a group with respect to polynomial addition.46 The neutral element is the polynomial 0 and the negative of a(x) ∈ F[x]m(x) is −a(x). Associativity is inherited from F[x].

46Note that the sum of two polynomials is never reduced modulo m(x) because the degree of the sum is at most the maximum of the two degrees. In other words, a(x)+b(x) in F[x] and a(x)+b(x) in F[x]m(x) are the same operation when restricted to polynomials of degree less than deg(m(x)).

$\boxed{\begin{array}{c}\blacksquare\end{array}}$

<sup>45</sup>It is important to point out that we are considering three algebraic systems, namely F, F[x], and F[x]m(x) . Each system has an addition and a multiplication operation, and we use the same symbols "+" and "·" in each case, letting the context decide which one we mean. This should cause no confusion. The alternative would have been to always use different symbols, but this would be too cumbersome. Note that, as mentioned above, addition (but not multiplication) in F[x] and F[x]m(x) are identical.

F[x]m(x) is a monoid with respect to polynomial multiplication. The neutral element is the polynomial 1. Associativity of multiplication is inherited from F[x], as is the distributive law.

The following lemma can be proved in analogy to Lemma 4.18.

**Lemma 5.36.** *The congruence equation*

$$a(x)b(x)\equiv_{m(x)}1$$

*(for a given* a(x)*) has a solution* b(x) ∈ F[x]m(x) *if and only if* gcd(a(x), m(x)) = 1. *The solution is unique.*47 *In other words,*

$F[x]^{*}_{m(x)}=\left\{a(x)\in F[x]_{m(x)}\ |\ \gcd(a(x),m(x))=1\right\}$.

Inverses in F[x] ∗ m(x) can be computed efficiently by a generalized version of Euclid's gcd-algorithm, which we do not discuss here.

#### **5.8.2 Constructing Extension Fields**

The following theorem is analogous to Theorem 5.23 stating that Zm is a field if and only if m is prime.

**Theorem 5.37.** *The ring* F[x]m(x) *is a field if and only if* m(x) *is irreducible.*48

*Proof.* For an irreducible polynomial m(x), we have gcd(a(x), m(x)) = 1 for all a(x) 6= 0 with deg(a(x)) < deg(m(x)) and therefore, according to Lemma 5.36, a(x) is invertible in F[x]m(x) . In other words, F[x] ∗ m(x) = F[x]m(x) \ {0}. If m(x) is not irreducible, then F[x]m(x) is not a field because nontrivial factors of m(x) have no multiplicative inverse.

In Computer Science, the fields of most interest are finite fields, i.e., F[x]m(x) where F itself is a finite field. But before we discuss finite fields, we illustrate this new type of field based on polynomial arithmetic using a well-known example of an infinite field.

**Example 5.62.** The polynomial x 2 + 1 is irreducible in R[x] because x 2 + 1 has no root in R. Hence, according to Theorem 5.37, R[x]x2+1 is a field. The elements of R[x]x2+1 are the polynomials of degree at most 1, i.e., of the form ax + b. Addition and multiplication are defined by

(ax + b) + (cx + d) = (a + c)x + (b + d)

<sup>47</sup>This b(x) (if it exists) is called the inverse of a(x) modulo m(x).

<sup>48</sup>F[x]m(x) is called an *extension field* of F.

and

$$(ax+b)\cdot(cx+d)=R_{x^{2}+1}((ax+b)\cdot(cx+d))$$ $$=R_{x^{2}+1}(acx^{2}+(bc+ad)x+bd)$$ $$=(bc+ad)x+(bd-ac).$$

The last step follows from the fact that Rx2+1(x 2 ) = −1. The reader may have noticed already that these addition and multiplication laws correspond to those of the complex numbers C when ax + b is interpreted as the complex number b + ai. Indeed, R[x]x2+1 is simply C or, more precisely, R[x]x2+1 is isomorphic to C. In fact, this appears to be the most natural way of defining C.

This example raises a natural question: Can we define other extension fields of R, or, what is special about C? There are many other irreducible polynomials of degree 2, namely all those corresponding to a parabola not intersecting with the x-axis. What is, for example, the field R[x]2x2+x+1? One can show that R[x]m(x) is isomorphic to C for every irreducible polynomial of degree 2 over R. Are there irreducible polynomials of higher degree over R? The answer, as we know, is negative. Every polynomial in R[x] can be factored into a product of polynomials of degree 1 (corresponding to real roots) and polynomials of degree 2 (corresponding to pairs of conjugate complex roots). The field C has the special property that a polynomial of degree d has *exactly* d roots in C. For the field R, this is not true. There are no irreducible polynomials of degree > 1 over C.

**Example 5.63.** The polynomial x 2 + x + 1 is irreducible in GF(2)[x] because it has no roots. Hence, according to Theorem 5.37, GF(2)[x]x2+x+1 is a field. The elements of GF(2)[x]x2+x+1 are the polynomials of degree at most 1, i.e., of the form ax + b. Addition is defined by

$(ax+b)+(cx+d)=(a+c)x+(b+d)$.

Note that the "+" in ax + b is in GF(2) (i.e., in Z2), and the middle "+" in (ax + b) + (cx + d) is to be understood in GF(2)[x]x2+x+1, i.e., as polynomial addition. Multiplication is defined by

$$(ax+b)\cdot(cx+d)=R_{x^{2}+x+1}((ax+b)\cdot(cx+d))$$ $$=R_{x^{2}+x+1}(acx^{2}+(bc+ad)x+bd)$$ $$=(bc+ad+ac)x+(bd+ac).$$

The last step follows from the fact that Rx2+x+1(x 2 ) = −x − 1 = x + 1 (since −1 = 1 in GF(2)). It now becomes clear that this field with 4 elements is that of Example 5.46. The reader can check that A = x and B = x+ 1 works just as well as A = x + 1 and B = x.

| + |  | 0 | 1 | x | x | + 1 |  | 2 x |  | x | 2 + 1 |  | x | 2 + x | 2 + x | x | + 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 |  | 0 | 1 | x | x | + 1 |  | 2 x |  | x | 2 + 1 |  | x | 2 + x | x 2 + | x | + 1 |
| 1 |  |  | 0 | x + 1 |  | x | x | 2 + 1 |  |  | 2 x |  | 2 + x | x + 1 | x | 2 + | x |
| x |  |  |  | 0 |  | 1 | x | 2 + | x | x 2 + | x | + 1 |  | 2 x | x | 2 + 1 |  |
| x | + 1 |  |  |  |  | 0 | x 2 + | x | + 1 | x | 2 + | x | x | 2 + 1 |  | 2 x |  |
| 2 x |  |  |  |  |  |  |  | 0 |  |  | 1 |  |  | x |  | x + 1 |  |
| x 2 + 1 |  |  |  |  |  |  |  |  |  |  | 0 |  | x | + 1 |  | x |  |
| x 2 + x |  |  |  |  |  |  |  |  |  |  |  |  |  | 0 |  | 1 |  |
| x 2 + x + 1 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | 0 |  |

Figure 5.2: The addition table for GF(8) constructed with the irreducible polynomial x 3 + x + 1.

| · |  | 0 | 1 | x | x | + 1 |  | x | 2 | x | 2 + 1 | x | 2 + | x | x 2 + | x | + 1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 |  | 0 | 0 | 0 |  | 0 |  | 0 |  |  | 0 |  | 0 |  |  | 0 |  |
| 1 |  |  | 1 | x | x | + 1 |  | x | 2 | x | 2 + 1 | x | 2 + | x | x 2 + | x | + 1 |
| x |  |  |  | 2 x | x | 2 + x |  | x | + 1 |  | 1 | x 2 + | x | + 1 | x | 2 + 1 |  |
| x + 1 |  |  |  |  | x | 2 + 1 | x | 2 + | x + 1 |  | 2 x |  | 1 |  |  | x |  |
| 2 x |  |  |  |  |  |  |  | x 2 + | x |  | x | x | 2 + 1 |  |  | 1 |  |
| 2 + 1 x |  |  |  |  |  |  |  |  |  | 2 + x | x + 1 |  | x + 1 |  | x | 2 + | x |
| 2 + x | x |  |  |  |  |  |  |  |  |  |  |  | x |  |  | 2 x |  |
| 2 + x x | + 1 |  |  |  |  |  |  |  |  |  |  |  |  |  | x | + 1 |  |

Figure 5.3: The multiplication table for GF(8) constructed with the irreducible polynomial x 3 + x + 1.

**Example 5.64.** The polynomial x 3 + x + 1 over GF(2) is irreducible since it has no roots (it evaluates to 1 for both 0 and 1). The field GF(8) (also written GF(23 )) consists of the 8 polynomials of degree ≤ 2 over GF(2). The tables for addition and multiplication are shown in Figures 5.2 and 5.3. In this field we have, for example,

$(x+1)/(x^{2}+1)=(x+1)(x^{2}+1)^{-1}=(x+1)x=x^{2}+x$.

#### **5.8.3 Some Facts About Finite Fields**

Theorem 5.37 gives us a method for constructing a new field from an existing field F, provided we can find an irreducible polynomial m(x) in F[x]. When F is a finite field, then so is F[x]m(x) . The proofs of most facts stated in this section are beyond the scope of this course.

The theory of finite fields was founded by the French mathematician Evariste Galois

(1811–1832).49 In his honor, finite fields are called *Galois fields*. A field with q elements is usually denoted by GF(q) (independently of how it is constructed).

**Theorem 5.38.** *For every prime* p *and every* d ≥ 1 *there exists an irreducible polynomial of degree* d in GF(p)[x]*. In particular, there exists a finite field with* p d *elements.*

The following theorem states that the finite fields we have seen so far, Zp for prime p and GF(p)[x]m(x) for an irreducible m(x), are all finite fields. There are no other finite fields. Moreover, one obtains no new finite fields by taking an irreducible polynomial, say of degree d ′ , over some extension field GF(p d ), resulting in the field GF(p dd′ ). Such a field can always be constructed directly using an irreducible polynomial of degree dd′ over GF(p).

**Theorem 5.39.** *There exists a finite field with* q *elements if and only if* q *is a power of a prime. Moreover, any two finite fields of the same size* q *are isomorphic.*

The last claim justifies the use of the notation GF(q) without making explicit how the field is constructed. Different constructions yield different representations (naming) of the field elements, but not different fields. However, it is possible that some representations are better suited than others for the efficient hardware or software implementation of the field arithmetic.

**Theorem 5.40.** *The multiplicative group of every finite field* GF(q) *is cyclic.*

Note that the multiplicative group of GF(q) has order q − 1 and has ϕ(q − 1) generators.

**Example 5.65.** One can check that the fields GF(22 ) and GF(23 ) have multiplicative groups of orders 3 and 7, which are both prime. Therefore all elements except 1 (and 0 of course) are generators of the multiplicative group.

### **5.9 Application: Error-Correcting Codes**

#### **5.9.1 Definition of Error-Correcting Codes**

Finite fields are of great importance in Computer Science and have many applications, one of which is discussed in this section.

Error-correcting codes are used in many communication protocols and other applications. For example, the digital information on a CD is stored in such a manner that even if some of the information is lost (e.g. because of a scratch or dirt on the disc), the entire information can still be reconstructed without quality degradation, as long as sufficiently much of the data is still available.

<sup>49</sup>His interest was in proving that polynomial equations over R of fifth or higher degree have in general no closed form solution in radicals (while equations of up to fourth degree do). His major contributions to mathematics were recognized by the leading mathematicians only many years after his death. He died in a duel at the age of 21. The story goes that he wrote down major parts of his theory during the last night before the duel.

There are two types of problems that can occur in data transmission or when reading data from a storage medium. First, data can be erased, meaning that when reading (or receiving) it one realizes that it is missing. Second, data can contain errors. The second type of problem is more severe because it is not even known where in a data stream the errors occurred. A good error-correcting scheme can handle both problems.

**Definition 5.35.** A (n, k)*-encoding function* E for some alphabet A is an injective function that maps a list (a0, . . . , ak−1) ∈ Ak of k (information) symbols to a list (c0, . . . , cn−1) ∈ An of n > k (encoded) symbols in A, called *codeword*:

> E : A k → An : (a0, . . . , ak−1) 7→ E((a0, . . . , ak−1)) = (c0, . . . , cn−1).

For an encoding function E one often consider the set

C = Im(E) = {E((a0, . . . , ak−1)) | a0, . . . , ak−1 ∈ A}

of codewords, which is called an error-correcting code.

**Definition 5.36.** An (n, k)*-error-correcting code* over the alphabet A with |A| = q is a subset of An of cardinality q k .

It is natural to use as the alphabet A = {0, 1}, i.e., to take bits as the basic unit of information. However, for several reasons (one being the efficiency of encoding and in particular decoding), one often considers larger units of information, for example bytes (i.e., A = {0, 1} 8 ).

**Definition 5.37.** The *Hamming distance* between two strings of equal length over a finite alphabet A is the number of positions at which the two strings differ.

**Definition 5.38.** The *minimum distance* of an error-correcting code C, denoted dmin(C), is the minimum of the *Hamming distance* between any two codewords.

**Example 5.66.** The following code is a (5, 2)-code over the alphabet {0, 1}:

{(0, 0, 0, 0, 0), (1, 1, 1, 0, 0), (0, 0, 1, 1, 1), (1, 1, 0, 1, 1)}.

The minimum distance is 3.

#### **5.9.2 Decoding**

**Definition 5.39.** A *decoding function* D for an (n, k)-encoding function is a function D : An → Ak .

The idea is that a good decoding function takes an arbitrary list (r0, . . . , rn−1) ∈ An of symbols50 and decodes it to the most plausible (in some sense) information vector (a0, . . . , ak−1). Moreover, a good decoding function should be efficiently computable.

The error-correcting capability of a code C can be characterized in terms of the number t of errors that can be corrected. More precisely:

**Definition 5.40.** A decoding function D is t*-error correcting* for encoding function E if for any (a0, . . . , ak−1)

$D((r_{0},\ldots,r_{n-1}))=(a_{0},\ldots,a_{k-1})$

for any (r0, . . . , rn−1) with Hamming distance at most t from E (a0, . . . , ak−1) . A code C is t*-error correcting* if there exists E and D with C = Im(E) where D is t-error correcting.

**Theorem 5.41.** *A code* C *with minimum distance* d is t*-error correcting if and only if* d ≥ 2t + 1.

*Proof.* (⇐=) If any two codewords have Hamming distance at least 2t + 1 (i.e., differ in at least 2t+1 positions), then it is impossible that a word (r0, . . . , rn−1) ∈ An could result from two different codewords by changing t positions. Thus if (r0, . . . , rn−1) has distance at most t from a codeword (c0, . . . , cn−1), then this codeword is uniquely determined. The decoding function D can be defined to decode to (one of) the nearest codeword(s) (more precisely, to the information resulting (by E) in that codeword).

(=⇒) If there are two codewords that differ in at most 2t positions, then there exists a word (r0, . . . , rn−1) which differs from both codewords in at most t positions; hence it is possible that t errors can not be corrected.

**Example 5.67.** A code with minimum distance d = 5 can correct t = 2 errors. The code in Example 5.66 can correct a single error (t = 1).

#### **5.9.3 Codes based on Polynomial Evaluation**

A very powerful class of codes is obtained by polynomial interpolation if A has a field structure, i.e., A = GF(q) for some q:

<sup>50</sup>For example the list of symbols received after transmission of a codeword over a noisy channel or read from a storage medium like a CD.

**Theorem 5.42.** Let A = GF(q) *and let* α0, . . . , αn−1 *be arbitrary distinct elements of* GF(q)*. Consider the encoding function*

$E((a_{0},...,a_{k-1}))=(a(a_{0}),...,a(a_{n-1}))$,

*where* a(x) *is the polynomial*

$$a(x)=a_{k-1}x^{k-1}+\cdots+a_{1}x+a_{0}.$$

*This code has minimum distance* n − k + 1.

*Proof.* The polynomial a(x) of degree k−1 can be interpolated from any k values, i.e., from any k codeword symbols. If two polynomials agree for k arguments (or, equivalently, if two codewords agree at k positions), then they are equal. This means that two *different* codewords cannot agree at k positions. Hence any two codewords disagree in at least n − k + 1 positions.

An (n, k)-code over the field GF(2d ) can be interpreted as a binary (dn, dk) code (over GF(2)). The minimum distance of this binary code is at least that of the original code because two different GF(2d )-symbols must differ in at least one bit (but can of course differ in more than one bit).

**Example 5.68.** Polynomial codes as described are used for storing information on Compact Discs. In fact, the coding scheme of CD's makes use of two different such codes, but explaining the complete scheme is beyond the scope of this course on discrete mathematics. The field is GF(28 ) defined by an irreducible polynomial of degree 8 over GF(2) and the two codes are a (32, 28)-code over GF(28 ) and a (28, 24)-code over GF(28 ), both with minimum distance 5.

