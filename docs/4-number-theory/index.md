---
prev:
    text: Sets, Relations, and Functions
    link: 3-sets-relations-functions
next:
    text: Algebra
    link: 5-algebra
---

# <small>Chapter 4:</small><br> Number Theory 

<div v-pre>

## 4.1. Introduction

Number theory is one of the most intriguing branches of mathematics. For a long time, number theory was considered one of the purest areas of mathematics, in the sense of being most remote from having applications. However, since the 1970's number theory has turned out to have intriguing and unexpected applications, primarily in cryptography.

In this course we discuss only some basic number-theoretic topics that have applications in Computer Science. In addition to the rich applications, a second reason for discussing the basics of number theory in a course in Computer Science is as a preparation for the chapter on algebra ([Chapter 5](/5-algebra)).

### 4.1.1. Number Theory as a Mathematical Discipline

Number theory (in a strict sense[^1]) is the mathematical theory of the natural numbers $ℕ = \{0, 1, 2, …\}$ or, more generally, of the integers, $ℤ$. The laws of the integers are so natural, simple, and well-known to us that it is amazing how apparently simple questions about the integers turn out to be extremely difficult and have resisted all attacks by the brightest mathematicians.

::: example Example 4.1. {#example-4-1}
A simple conjecture unproven to date is that there are infinitely many prime pairs, i.e., primes $p$ such that $p + 2$ is also prime. The first prime pairs are $(3, 5)$, $(5, 7)$, $(11, 13)$, and $(17, 19)$.
:::

::: example Example 4.2. {#example-4-2}
Can one find a triangle with a $90°$ angle whose three sides $a$, $b$, and $c$ have integer lengths? An equivalent question is whether there exist positive integers $a$, $b$, and $c$ such that $a^2 + b^2 = c^2$. The answer is yes. Examples are $3^2 + 4^2 = 5^2$ and $12^2 + 5^2 = 13^2$ . A straight-forward generalization of this question is whether there exist positive integers $a$, $b$, $c$, and $n ≥ 3$ such that $a^n + b^n = c^n$. The answer (no such integers exist) is known as *Fermat's last theorem*, which remained one of the most famous open conjectures until Andrew Wiles settled the question some years ago, using highly sophisticated mathematics.
:::

[^1]: In a more comprehensive understanding, number theory refers to a richer mathematical theory which also includes topics like, for instance, algebraic extensions of the rational numbers.

::: example Example 4.3. {#example-4-3}
The recent proof of the *Catalan conjecture* by Preda Mihailescu, who worked at ETH Zürich, is another break-through in number theory. This theorem states that the equation $a^m − b^n = 1$ has no other integer solutions but $3^2 − 2^3 = 1$ (for $m, n ≥ 2$).
:::

### 4.1.2. What are the Integers?

In this course we are trying to present a rigorous mathematical treatment of the material. Consequently, in order to present number theory, it appears that we would first have to define the integers, so we know what we are talking about, in contrast to the intuitive understanding of numbers acquired since the early years at school. However, such a formal, axiomatic treatment of the integers is beyond the scope of the course.

In this chapter we take the usual approach where we assume that we know what numbers and operations on numbers are and that we also know the basic facts about numbers (e.g. the commutative, associative and distributive laws, etc.) which we can use to prove statements. But we should point out that in such an informal approach it is difficult (if not impossible) to draw the dividing line between facts that are well-known and facts that require a proof. For example, why is there no integer between $0$ and $1$, why is $−0 = 0$, and why is $a^2 ≥ 0$ for all $a ∈ ℤ$? What is the complete list of facts we consider known, and which facts require a proof? The answer is not clear unless one states a list of axioms. For example, we will show an interesting proof of the fact that every number can be factored uniquely into primes. This is definitely a theorem that requires a proof, even though, after many years of mathematical education, the reader may consider it a well-known basic fact.

The integers are a special case of a mathematical structure called a *ring*, which will be discussed in Chapter 5. In this chapter we mention in a few places that concepts like divisors, greatest common divisors, ideals, etc. can be defined for any ring, not just for the integers.

## 4.2. Divisors and Division

### 4.2.1 Divisors

::: definition Definition 4.1.{#definition-4-1}
For integers $a$ and $b$ we say that $a$ *divides* $b$, denoted $a | b$, if there exists an integer $c$ such that $b = ac$. In this case, $a$ is called a *divisor*[^2] of $b$, and $b$ is called a *multiple*[^3] of $a$. If $a ≠ 0$ and a divisor $c$ exists it is called the[^4] *quotient* when $b$ is divided by $a$, and we write $c = \frac{b}{a}$ or $c = b/a$. We write $a \operatorname{\not\!|}\ b$ if $a$ does not divide $b$.
:::

Note that every non-zero integer is a divisor of $0$. Moreover, $1$ and $−1$ are divisors of every integer.

### 4.2.2. Division with Remainders

In the previous section we defined division of $a$ by $d$ for any divisor $d$ of $a$. In this section we generalize division to the case where $d$ is not a divisor of $a$ and hence division yields a remainder[^5]. The following theorem was proved by Euclid around 300 B.C.

::: proposition Theorem 4.1 (Euclid){#theorem-4-1}
*For all integers* $a$ and $d ≠ 0$ *there exist unique integers* $q$ and $r$ *satisfying*

<center>

$a=d q+r$ &emsp;and&emsp; $0\leq r<|d|$.
</center>

Here $a$ is called the *dividend*, $d$ is called the *divisor*, $q$ is called the *quotient*, and $r$ is called the *remainder*. The remainder $r$ is often denoted as $R_d(a)$ or sometimes as $a \operatorname{mod} d$.

**Proof:** We carry out this proof in a detailed manner, also to serve as an example of a systematic proof.

We define $S$ to be the set of possible nonnegative remainders:

<center>

$S  \stackrel{def}{=}  \{s~|~s\geq0\ \ \mbox{and}\ \ a=dt+s\ \ \mbox{for some}\ t\in\mathbb{Z}\}$.
</center>

We prove the following three claims by first proving $1)$, then proving that $1)$ implies $2)$, and then proving that $2)$ implies $3)$.

1) $S$ is not empty.

2) $S$ contains an $r < |d|$.

3) The $r$ of claim $2)$ is unique.

[^2]:German: Teiler

[^3]:German: Vielfaches

[^4]:One can prove that it is unique.

[^5]:German: Rest

*Proof of 1):* We use case distinction and prove the statement for three cases (one of which is always satisfied):

Case 1: $a ≥ 0$. Then $a = d0 + a$ and hence $a ∈ S$.

Case 2: $a < 0$ and $d > 0$. Then $a = da + (1 − d)a$ and thus $(1 − d)a ∈ S$ since $(1 − d)a ≥ 0$ because both $(1 − d)$ and $a$ are $≤ 0$.

Case 3: $a < 0$ and $d < 0$. Then $a = d(−a) + (1 + d)a$ and thus $(1 + d)a ∈ S$ since $(1 + d)a ≥ 0$ because both $(1 + d)$ and $a$ are $≤ 0$.

*Proof that 1) implies 2):* Because $S$ is not empty, it has a smallest element (due to the well-ordering principle), which we denote by $r$. We now prove that $r < |d|$, by contradiction, i.e., assuming $r ≥ |d|$. By definition of $S$ we have $a = dq + r$ for some $q$. We make a case distinction: $d > 0$ and $d < 0$. If $d > 0$, then

<center>

$a=d(q+1)+(r-|d|)$,
</center>

hence $r−|d| ≥ 0$ and therefore $r−|d| ∈ S$, which means that $r$ is not the smallest element of $S$, a contradiction. If $d < 0$, then $a = d(q −1)+ (r−|d|)$, and the same argument as above shows that $r − |d| ∈ S$, a contradiction.

*Proof that 2) implies 3):* It remains to prove that $r$ is unique. We give a proof only for $d > 0$; the case $d < 0$ is analogous and is left as an exercise. The proof is by contradiction. Suppose that there also exist $r^′ ≠ r$ with $0 ≤ r^′ < |d|$ and such that $a = dq^′ + r^′$ for some $q^′$. We distinguish the three cases $q^′ = q$, $q^′ < q$ , and $q^′ > q$. If $q^′ = q$, then $r^′ = a − dq^′ = a − dq = r$, a contradiction since we assumed $r^′ ≠ r$. If $q^′ < q$, then $q − q^′ ≥ 1$, so

$$r^{\prime}=a-d q^{\prime}=(a-d q)+d(q-q^{\prime})\;\geq\;r+d.$$

Since $r^′ ≥ r + d ≥ d$, the condition $0 ≤ r^′ < |d|$ is violated, which is a contradiction. A symmetric argument shows that $q^′ > q$ also results in a contradiction. Hence $r$ is unique. <span class="right">$\Box$</span>
:::

### 4.2.3. Greatest Common Divisors

::: definition Definition 4.2.{#definition-4-2}
For integers $a$ and $b$ (not both $0$), an integer $d$ is called a *greatest common divisor*[^6] of $a$ and $b$ if $d$ divides both $a$ and $b$ and if every common divisor of $a$ and $b$ divides $d$, i.e., if

<center>

$d\mid a\ \wedge\ d\mid b\ \wedge\ \forall c\ ((c\mid a\ \wedge\ c\mid b)\ \rightarrow\ c\mid d)$.
</center>
:::

The concept of a greatest common divisor applies not only to $ℤ$, but to more general structures (e.g. polynomial rings). If $d$ and $d^′$ are both greatest common divisors of $a$ and $b$, then $d | d^′$ and $d^′ | d$. For the integers $ℤ$, this means that $d^′ = ±d$, i.e., there are two greatest common divisors. (But for more general structures there can be more than two greatest common divisors.)

[^6]:Note that the term "greatest" does not refer to the order relation $≤$ but to the divisibility relation.

::: definition Definition 4.3.{#definition-4-3}
For $a, b ∈ ℤ$ (not both $0$) one denotes the unique positive greatest common divisor by $\operatorname{gcd}(a, b)$ and usually calls it the greatest common divisor. If $\operatorname{gcd}(a, b) = 1$, then $a$ and $b$ are called *relatively prime*[^7].
:::

::: proposition Lemma 4.1.{#lemma-4-1}
*For any integers* $m$, $n$ and $q$*, we have*

<center>

$\operatorname*{gcd}(m,n-q m)=\operatorname*{gcd}(m,n)$.
</center>

**Proof:** It is easy to prove (as an exercise) that every common divisor of $m$ and $n − qm$ (and therefore also the greatest) is also a common divisor of $m$ and $n$, and vice versa. <span class="right">$\Box$</span>
:::

This lemma implies in particular that

$$\operatorname*{gcd}(m,R_{m}(n))=\operatorname*{gcd}(m,n),$$

which is the basis for Euclid's well-known $\operatorname{gcd}$-algorithm: Start with $m < n$ and repeatedly replace the pair $(m, n)$ by the pair $(R_m(n), m)$ until the remainder is $0$, at which point the last non-zero number is equal to $\operatorname{gcd}(m, n)$.

::: definition Definition 4.4. Ideal{#definition-4-4}
For $a, b ∈ ℤ$, the *ideal generated by* $a$ and $b$[^8], denoted $(a, b)$, is the set

<center>

$(a,b)\ {\stackrel{\mathrm{def} }{=} }\ \{u a+v b\mid u,v\in\mathbb{Z}\}$.
</center>

Similarly, the ideal generated by a single integer $a$ is

<center>

$(a)\;\stackrel{\text{def} }{=}\;\{ua\mid u\in\mathbb{Z}\}$.
</center>
:::

The following lemma implies that every ideal in $ℤ$ can be generated by a single integer.

::: proposition Lemma 4.3.{#lemma-4-3}
For $a, b ∈ ℤ$ *there exists* $d ∈ ℤ$ *such that* $(a, b) = (d)$.

**Proof:** If $a = b = 0$, then $d = 0$. Assume now that at least one of the numbers is non-zero. Then $(a, b)$ contains some positive numbers, so (by the well-ordering principle) let $d$ be the smallest positive element in $(a, b)$. Clearly $(d) ⊆ (a, b)$ since every multiple of $d$ is also in $(a, b)$. It remains to prove $(a, b) ⊆ (d)$. For any $c ∈ (a, b)$ there exist $q$ and $r$ with $0 ≤ r < d$ such that $c = qd + r$. Since both $c$ and $d$ are in $(a, b)$, so is $r = c − qd$. Since $0 ≤ r < d$ and $d$ is (by assumption) the smallest positive element in $(a, b)$, we must have $r = 0$. Thus $c = qd ∈ (d)$.
:::

::: proposition Lemma 4.4.{#lemma-4-4}
*Let* $a, b ∈ ℤ$ (*not both* $0$). *If* $(a, b) = (d)$*, then* $d$ *is a greatest common divisor of* $a$ *and* $b$.

**Proof:** $d$ is a common divisor of $a$ and $b$ since $a ∈ (d)$ and $b ∈ (d)$. To show that $d$ is a greatest common divisor, i.e., that every common divisor $c$ of $a$ and $b$ divides $d$, note that $c$ divides every integer of the form $ua + vb$, in particular $d$.
:::

[^7]:German: teilerfremd

[^8]:German: durch a und b erzeugtes Ideal

The following corollary follows from [Lemmas 4.3](#lemma-4-3) and [4.4](#lemma-4-4).

::: proposition Corollary 4.1.{#corollary-4-1}
*For* $a, b ∈ ℤ$ (*not both* $0$*), there exist* $u, v ∈ ℤ$ *such that*

<center>
$\operatorname*{gcd}(a,b)=ua+vb$.
</center>
:::

::: example Example 4.4.{#example-4-4}
For $a = 26$ and $b = 18$ we have

<center>

$\operatorname*{gcd}(26,18)=2=(-2)⋅26+3⋅18$.
</center>

Also, for $a = 17$ and $b = 13$ we have

<center>

$\operatorname*{gcd}(17,13)=1=(-3)⋅17+4⋅13$.
</center>
:::

An extension of Euclid's well-known gcd-algorithm allows to efficiently compute not only $\operatorname{gcd}(a, b)$, but also $u$ and $v$ such that $\operatorname{gcd}(a, b) = ua + vb$.

### 4.2.4. Least Common Multiples

The least common multiple is a dual concept of the greatest common divisor.

::: definition Definition 4.5.{#definition-4-5}
The *least common multiple* $l$ of two positive integers $a$ and $b$, denoted $l = \operatorname{lcm}(a, b)$, is the common multiple of $a$ and $b$ which divides every common multiple of $a$ and $b$, i.e.,

<center>

$a\mid l\ \wedge\ b\mid l\ \wedge\ \forall m\ ((a\mid m\ \wedge\ b\mid m)\ \rightarrow\ l\mid m)$.
</center>
:::

## 4.3. Factorization into Primes

### 4.3.1. Primes and the Fundamental Theorem of Arithmetic

In this section we prove the well-known fact that prime factorization of integers is unique. This statement is true more generally for certain types of rings (see [Chapter 5](/5-algebra)), for example for the ring of polynomials over a field. Even though rings were not introduced so far, we give hints as to how a formulation can be generalized from the integers to more general rings.

::: definition Definition 4.6.{#definition-4-6}
A positive integer $p > 1$ is called *prime* if the only positive divisors of $p$ are $1$ and $p$. An integer greater than $1$ that is not a prime is called *composite*[^9].[^10]
:::

[^9]:German: zusammengesetzt

[^10]:Note that $1$ is neither prime nor composite.

This notion of having only trivial divisors extends to other rings, for example the ring of polynomials over $ℝ$. In such a general context, the property is called *irreducible* rather than *prime*. The term *prime* is in general used for the property that if $p$ divides a product of elements, then it divides at least one of them (see [Lemma 4.7](#lemma-4-7) below). For the integers, these two concepts are equivalent. The next lemma states one direction of this equivalence.

The following theorem is called the fundamental theorem of arithmetic.

::: proposition Theorem 4.6.{#theorem-4-6}
*Every positive integer can be written uniquely (up to the order in which factors are listed) as the product of primes.*[^11]
:::

### 4.3.2. Proof of the Fundamental Theorem of Arithmetic<sup>*</sup>

::: proposition Lemma 4.7.{#lemma-4-7}
*If* $p$ *is a prime which divides the product* $x_1 x_2 \cdots x_n$ *of some integers* $x_1, …, x_n$, *then* $p$ *divides one of them, i.e.,* $p \operatorname | x_i$ *for some* $i ∈ \{1, …, n\}$.

**Proof:** The proof is by induction on $n$. The claim is trivially true for $n = 1$ (induction basis). Suppose it is true for some general $n$ (induction hypothesis). To prove the claim for $n + 1$ (induction step), suppose that $p \operatorname | x_1 x_2 \cdots x_{n+1}$. We let $y = x_1 x_2 \cdots x_n$ (and hence $p \operatorname | y x_{n+1}$) and look at the two cases $p \operatorname| y$ and $p \nmid y$ separately. If $p \operatorname| y$, then $p \operatorname| x_i$ for some $1 ≤ i ≤ n$, due to the induction hypothesis, and we are done. If $p ∤ y$, then, since $p$ has no positive divisor except $1$ and $p$, we have $\operatorname{gcd}(p, y) = 1$. By [Corollary 4.5](#corollary-4-5) there are integers $u$ and $v$ such that $up + vy = 1$. Hence we have

<center>

$x_{n+1}=(up+vy)x_{n+1}=(ux_{n+1})p+v(yx_{n+1})$.
</center>

Because $p$ divides both terms $(ux_{n+1})p$ and $v(yx_{n+1})$ in the sum on the right side, it follows that it also divides the sum, i.e., $p \operatorname | x_{n+1}$, which concludes the proof. <span class="right">$\Box$</span>
:::

We now prove Theorem 4.6:

**Proof for [Theorem 4.6](#theorem-4-6):** We first need to prove that a factorization into primes exists and then that it is unique.

The existence is proved by contradiction. Every prime can obviously be factored into primes. Let $n$ be the smallest positive integer which has no prime factorization. Since it can not be a prime, we have $n = km$ with $1 < k, m < n$. Since both $k$ and $m$ can be factored into primes, so can $km = n$, a contradiction. Hence there is no smallest $n$ that cannot be factored into primes, and therefore every $n ≥ 1$ can be factored into primes.

To prove the uniqueness of the prime factorization, suppose towards a contradiction that an integer $n$ can be factored in two (possibly different) ways as a product of primes,

<center>

$n=p_{1}^{a_{1} }p_{2}^{a_{2} }\cdot\cdot\cdot p_{r}^{a_{r} }=q_{1}^{b_{1} }q_{2}^{b_{2} }\cdot\cdot\cdot q_{s}^{b_{s} }$,
</center>

where the primes $p_1, …, p_r$ and also the primes $q_1, …, q_s$ are put in an increasing order and where we have written products of identical primes as powers (here $a_i > 0$ and $b_i > 0$). Then for every $i$, $p_i \operatorname | n$ and thus $p_i \operatorname | q^{b_1}_1 q^{b_2}_2 \cdots q^{b_S}_s$. Hence, by [Lemma 4.7](#lemma-4-7), $p_i \operatorname | q_j$ for some $j$ and, because $q_j$ is a prime and $p_i > 1$, we have $p_i = q_j$. Similarly for every $j$, $q_j = p_i$ for some $i$. Thus the set of primes are identical, i.e., $r = s$ and $p_i = q_i$ for $1 ≤ i ≤ r$. To show that the corresponding exponents $a_i$ and $b_i$ are also identical, suppose that $a_i < b_i$ for some $i$. We can divide both expressions by $p_{i}^{a_{i} }$, which results in two numbers that are equal, yet one is divisible by $p_i$ while the other is not. This is impossible since if two numbers are equal, then they have the same divisors. <span class="right">$\Box$</span>

[^11]:Note that $1$ has zero prime factors, which is allowed.

### 4.3.3. Expressing $\operatorname{gcd}$ and $\operatorname{lcm}$

The fundamental theorem of arithmetic assures that integers $a$ and $b$ can be written as

<center>

$a=\displaystyle\prod_{i}p_{i}^{e_{i} }$ &emsp;&emsp;&emsp;and&emsp;&emsp;&emsp;  $b=\displaystyle\prod_{i}p_{i}^{f_{i} }$.
</center>

This product can be understood in two different ways. Either it is over all primes, where all but finitely many of the $e_i$ are $0$, or it is over a fixed agreed set of primes. Either view is correct. Now we have

$$\operatorname*{gcd}(a,b)=\prod_{i}p_{i}^{\operatorname*{min}(e_{i}\,,\,f_{i})}$$

and

<center>

$\operatorname{lcm}(a,b)=\prod_{i}p_{i}^{\operatorname*{max}(e_{i}\,,\,f_{i})}$.
</center>

It is easy to see that

$$\operatorname*{gcd}(a,b)\cdot\operatorname{lcm}(a,b)=ab$$

because for all $i$ we have

<center>

$\operatorname*{min}(e_{i}\,,\,f_{i})+\operatorname*{max}(e_{i}\,,\,f_{i})=e_{i}+f_{i}$.
</center>

### 4.3.4. Non-triviality of Unique Factorization<sup>*</sup>

It is worth-while pointing out that this theorem is not self-evident, as it may appear to the reader completely familiar with it. There are in fact examples of rings in which the unique factorization into irreducible elements does not hold. We give two examples, one with unique factorization into irreducible elements, and one without.

::: example Example 4.5.{#example-4-5}
Let $i = \sqrt{-1}$ denote the complex imaginary unit. The Gaussian integers 

$$\mathbb{Z}[i]=\mathbb{Z}\left[{\sqrt{-1} }\right]=\{a+b i\mid a,b\in\mathbb{Z}\}$$

are the complex numbers whose real and imaginary parts are both integers. Since the norm (as complex numbers) is multiplied when two elements of $ℤ[i]$ are multiplied, the units (actually four) are the elements with norm $1$, namely $1$, $i$, $−1$, and $−i$. Units are elements that divide every other element. An irreducible element $p$ in $ℤ[i]$ is an element whose only divisors are units and associates of $p$ (i.e., elements $up$ where $u$ is a unit). By a generalization of the arguments given for $ℤ$ one can show that factorization into irreducible elements is unique in $ℤ[i]$. (This is not obvious.)
:::

::: example Example 4.6.{#example-4-6}
Consider now a slightly twisted version of the Gaussian integers:

$$\mathbb{Z}\left[{\sqrt{-5} }\right]=\{a+b{\sqrt{5} }i\mid a,b\in\mathbb{Z}\}.$$

Like the Gaussian integers, this set is closed with respect to addition and multiplication (of complex numbers). For example,

<center>

$(a+b\sqrt{5}i)(c+d\sqrt{5}i)=ac-5bd+(bc+ad)\sqrt{5}i$.
</center>

The only units in $ℤ\left[\sqrt{−5}\right]$ are $1$ and $−1$. One can check easily, by ruling out all possible divisors with smaller norm, that the elements $2$, $3$, $1 + \sqrt{5}i$, and $1 − \sqrt{5}i$ are irreducible. The element $6$ can be factored in two different ways into irreducible elements:

<center>

$6=2\cdot3=(1+{\sqrt{5} }i)(1-{\sqrt{5} }i)$.
</center>
:::

### 4.3.5. Irrationality of Roots<sup>*</sup>

As a consequence of the unique prime factorization we can prove:

::: proposition Theorem 4.8.{#theorem-4-8}
$\sqrt{n}$ *is irrational unless* $n$ *is a square* ($n = c^2$ *for some* $c ∈ ℤ$).

**Proof:** Suppose $\sqrt{n} = a/b$ for two integers $a$ and $b$. Then $a^2 = nb^2$. If $n$ is not a square, it contains at least one prime factor $p$ with an odd power. Since the number of prime factors $p$ in any square is even, we have a contradiction: $a^2$ contains an even number of factors $p$ while $nb^2$ contains an odd number of factors $p$. This is impossible according to [Theorem 4.6](#theorem-4-6). <span class="right">$\Box$</span>
:::

Note that this proof is simpler and more general than the proof given in [Example 2.28](/2-reasoning-proofs#example-2-28) because there we have not made use of the unique prime factorization of the integers.

### 4.3.6. A Digression to Music Theory<sup>*</sup>

An octave in music corresponds to the doubling of the frequency of a tone. Similarly, a fifth[^12] corresponds to a ratio $3 : 2$, a musical fourth[^13] corresponds to a ratio $4 : 3$, and a major and minor third[^14] correspond to the ratios $5 : 4$ and $6 : 5$, respectively.

No multiple of fifths (or fourths) yields a multiple of octaves, since otherwise we would have $(\frac{3}{2})^n = 2^m$ for some $n$ and $m$, which is equivalent to $3^n = 2^{m+n}$. This implies that one cannot tune a piano so that all intervals are correct since on the piano (considered to be extended to many octaves), one hits a higher octave after a certain number (namely $12$) of fifths. It can be viewed as a number-theoretic miracle that tuning a piano is nevertheless possible with only very small inaccuracies. If one divides the octave into $12$ equal (half-tone) intervals, a half-tone corresponds to a frequency ratio of $\sqrt[12]{2} ≈ 1.05946$. Three, four, five, and seven half-tones yield frequency ratios of

$2^{1/4} = 1.1892 ≈ 6/5$,  
$2^{1/3} = 1.2599 ≈ 5/4$,  
$2^{5/12} = 1.33482 ≈ 4/3$, and  
$2^{7/12} = 1.49828 ≈ 3/2$,

approximating the minor third, major third, fourth, and fifth astonishingly well.

One can view these relations also as integer approximations. For example, we have $531'441 = 3^{12} ≈ 2^{19} = 524'288$, which implies that $(\frac{3}{2})^{12} ≈ 2^7$ , i.e., $12$ fifths are approximately seven octaves.

A piano for which every half-tone has the same frequency ratio, namely $\sqrt[12]{2}$, is called a *well-tempered*[^15] piano. The reason why music is a pleasure, despite its theoretically unavoidable inaccuracy, is that our ear is trained to "round tones up or down" as needed.

[^12]:German: Quinte

[^13]:German: Quarte

[^14]:German: Terz

## 4.4. Some Basic Facts About Primes<sup>*</sup>

### 4.4.1. The Density of Primes

The following fact was known already to Euclid.

::: proposition Theorem 4.9.{#theorem-4-9}
*There are infinitely many primes.*

**Proof:** To arrive at a contradiction, suppose that the set of primes is finite, say $P = \{p_1, …, p_m\}$. Then the number $n = \prod^m_{i=1} p_i + 1$ is not divisible by any of the primes $p_1, …, p_m$ and hence $n$ is either itself a prime, or divisible by a prime not in $\{p_1, …, p_m\}$. In either case, this contradicts the assumption that $p_1, …, p_m$ are the only primes. <span class="right">$\Box$</span>
:::

This is a non-constructive existence proof. We now give a constructive existence proof for another number-theoretic fact.

::: proposition Theorem 4.10.{#theorem-4-10}
*Gaps between primes can be arbitrarily large, i.e., for every* $k ∈ ℕ$ *there exists* $n ∈ ℕ$ *such that the set* $\{n, n + 1, \cdots, n + k − 1\}$ *contains no prime.*

**Proof:** Let $n = (k + 1)! + 2$. Then for any $l$ with $2 ≤ l ≤ k + 1$, $l$ divides $(k + 1)! = n − 2$ and hence $l$ also divides $(k + 1)! + l = n − 2 + l$, ruling out $n, n + 1, …, n + k − 1$ as possible primes. <span class="right">$\Box$</span>
:::

::: example Example 4.7.{#example-4-7}
The largest gap between two primes below $100$ is $8$. Which are these primes?
:::

There exists a huge body of literature on the density and distribution of primes. We only state the most important one of them.

::: definition Definition 4.7.{#definition-4-7}
The *prime counting function* $\pi : ℝ → ℕ$ is defined as follows: For any real $x$, $\pi(x)$ is the number of primes $≤ x$.
:::

[^15]:German: wohltemperiert

The following theorem proved by Hadamard and de la Vall´ee Poussin in the 19th century states that the density of primes $≤ x$ is approximately $1/ \operatorname{ln}(x)$. This shows that if one tries to find a large (say $1024$ bit) prime, for instance for cryptographic purposes, then a randomly selected odd integer has reasonable chances of being prime. Much more precise estimates for $π(x)$ are known today.

::: proposition Theorem 4.11.{#theorem-4-11}
<center>

$\displaystyle\lim_{x→∞} \frac{\pi(x) \operatorname{ln}(x)}{x} = 1$.
</center>
:::

Two of the main open conjectures on prime numbers are the following:

::: info Conjecture 4.1.{#conjecture-4-1}
There exist infinitely many twin primes, i.e., primes $p$ for which also $p + 2$ is prime.
:::

::: info Conjecture 4.2. (Goldbach){#conjecture-4-2}
Every even number greater than $2$ is the sum of two primes.
:::

### 4.4.2. Remarks on Primality Testing

How can we test whether a given integer $n$ is a prime? We can test whether any smaller prime is a divisor of $n$. The following lemma provides a well-known short-cut. In a practical implementation, one might not have a list of primes up to $\sqrt n$ and can instead simply try all odd numbers as possible divisors.

::: proposition Lemma 4.12.{#lemma-4-12}
*Every composite integer* $n$ *has a prime divisor* $≤ \sqrt n$.

**Proof:** If $n$ is composite, it has a divisor $a$ with $1 < a < n$. Hence $n = ab$ for $b > 1$. Either $a ≤ \sqrt n$ or $b ≤ \sqrt n$ since otherwise $ab > \sqrt n \cdot \sqrt n = n$. Hence $n$ has a divisor $c$ with $1 < c ≤ \sqrt n$. Either $c$ is prime or, by [Theorem 4.6](#theorem-4-6), has a prime divisor $d < c ≤ \sqrt n$. <span class="right">$\Box$</span>
:::

For large integers, trial-division up to the square root is hopelessly inefficient. Let us briefly discuss the algorithmic problem of testing primality.

Primes are of great importance in cryptography. In many applications, one needs to generate very large primes, with $1024$ or even $2048$ bits. In many cases, the primes must remain secret and it must be infeasible to guess them. They should therefore be selected uniformly at random from the set of primes in a certain interval, possibly satisfying some further restrictions for security or operational reasons.

Such primes can be generated in three different ways. The first approach is to select a random (odd) integer from the given interval (e.g. $[10^{1023}, 10^{1024} − 1]$) and to apply a general primality test. Primality testing is a very active research area. The record in general primality testing is around $8\,000$ decimal digits and required sophisticated techniques and very massive computing power. As a celebrated theoretical breakthrough (with probably little practical relevance), it was proved in 2002 that primality testing is in $\bf P$, i.e., there is a worst-case polynomial-time algorithm for deciding primality of an integer.[^16]

The second approach is like the first, but instead of a primality test one performs a probabilistic compositeness test. Such a test has two outcomes, "composite" and "possibly prime". In the first case, one is certain that the number is composite, while in the other case one has good chances that the number is a prime, without being certain. More precisely, one can fix a (very small) probability $\epsilon$ (e.g. $\epsilon = 10^{−100}$) and then perform a test such that for any composite integer, the probability that the test does not output "composite" is bounded by $\epsilon$.

A third approach is to construct a prime together with a proof of primality. As we might see later, the primality of an integer $n$ can be proved if one knows part of the factorization of $n − 1$.

[^16]:M. Agrawal, N. Kayal, and N. Saxena, PRIMES is in P, *Annals of Mathematics* vol. 160, pp. 781– 793.

## 4.5. Congruences and Modular Arithmetic

### 4.5.1. Modular Congruences

We consider the following motivating example:

::: example Example 4.8.{#example-4-8}
Fermat's famous "last theorem", proved recently by Wiles, states that the equation $x^n + y^n = z^n$ has no solution in positive integers $x, y, z$ for $n ≥ 3$. Here we consider a similar question. Does $x^3 + x^2 = y^4 + y + 1$ have a solution in integers $x$ and $y$?

The answer is "no", and the proof is surprisingly simple: Obviously, $x$ must be either even or odd. In both cases, $x^3 + x^2$ is even. On the other hand, $y^4 + y + 1$ is odd no matter whether $y$ is even or odd. But an even number cannot be equal to an odd number.
:::

Here is another example whose solution requires a generalization of the above trick.

::: example Example 4.9.{#example-4-9}
Prove that $x^3 − x = y^2 + 1$ has no integer solutions.
:::

::: definition Definition 4.8.{#definition-4-8}
For $a, b, m ∈ ℤ$ with $m ≥ 1$, we say that $a$ *is congruent to* $b$ *modulo* $m$ if $m$ divides $a − b$. We write $a ≡ b\ (\operatorname{mod} m)$ or simply $a ≡_m b$, i.e.,

<center>

$a ≡_m b\quad\stackrel{\mathrm{def} }{\Longleftrightarrow}\quad m\mid(a − b)$.
</center>
:::

::: example Example 4.10.{#example-4-10}
We have $23 ≡_7 44$ and $54321 ≡_{10} 1$.  
Note that $a ≡_2 b$ means that $a$ and $b$ are either both even or both odd.
:::

::: example Example 4.11.{#example-4-11}
If $a ≡_2 b$ and $a ≡_3 b$, then $a ≡_6 b$. The general principle underlying this example will be discussed later.
:::

The above [examples 4.8](#example-4-8) and [4.9](#example-4-9) make use of the fact that if an equality holds over the integers, then it must also hold modulo $2$ or, more generally, modulo any modulus $m$. In other words, for any $a$ and $b$,

<center>

$a=b\ \Longrightarrow\ a\equiv_{m}b$ <span class="right" id="implication-4-1">(4.1)</span>
</center>

for all $m$, i.e., the relation $≡_m$ is reflexive ($a ≡_m a$ for all $a$). It is easy to verify that this relation is also symmetric and transitive, which was already stated in [Chapter 3](/3-sets-relations-functions):

::: proposition Lemma 4.13.{#lemma-4-13}
*For any* $m ≥ 1$, $≡_m$ *is an equivalence relation on* $ℤ$.
:::

The [implication (4.1)](#implication-4-1) can be turned around and can be used to prove the inequality of two numbers $a$ and $b$:

<center>

$a\neq_{m}b\ \implies\ a\neq b$.
</center>

The following lemma shows that modular congruences are compatible with the arithmetic operations on $ℤ$.

::: proposition Lemma 4.14.{#lemma-4-14}
*If* &ensp;$a ≡_m b$ &ensp;*and*&ensp; $c ≡_m d$,&ensp; *then* 

<center>

$a + c ≡_m b + d$ &emsp;&emsp;*and*&emsp;&emsp; $ac ≡_m bd$.
</center>

**Proof:** We only prove the first statement and leave the other proof as an exercise. We have $m \operatorname | (a − b)$ and $m \operatorname | (c − d)$. Hence $m$ also divides $(a − b) + (c − d) = (a + c) − (b + d)$, which is the definition of $a + c ≡_m b + d$. <span class="right">$\Box$</span>
:::

::: proposition Corollary 4.15.{#corollary-4-15}
*Let* $f(x_1, …, x_k)$ *be a multi-variate polynomial in* $k$ *variables with integer coefficients, and let* $m ≥ 1$. *If* $a_i ≡_m b_i$ *for* $1 ≤ i ≤ k$, *then*

<center>

$f(a_{1},\ldots,a_{k})\ \equiv_{m}\ f(b_{1},\ldots,b_{k})$.
</center>

**Proof:** Evaluating a polynomial can be achieved by a sequence of additions and multiplications. In each such step the congruence modulo $m$ is maintained, according to [Lemma 4.14](#lemma-4-14). <span class="right">$\Box$</span>
:::

### 4.5.2. Modular Arithmetic

There are $m$ equivalence classes of the equivalence relation $≡_m$, namely $[0], [1], \ldots, [m − 1]$. Each equivalence class $[a]$ has a natural representative $R_m(a) ∈ [a]$ in the set

$$ℤ_m := \{0, . . . , m − 1\}$$

of remainders modulo $m$. [^17]

In the following we are often interested only in the remainder of an integer (e.g. the result of a computation) modulo some modulus $m$. Addition and multiplication modulo $m$ can be considered as operations on the set $ℤ_m$. We will be interested in this structure in [Chapter 5](/5-algebra) where we will see that it is an important example of a so-called ring.

[^17]:Recall that $R_m(a)$ denotes the remainder when $a$ is divided by $m$.

::: example Example 4.12.{#example-4-12}
Is $n = 84877 · 79683 − 28674 · 43879$ even or odd? The answer is trivial and does not require the computation of $n$. The product of two odd numbers is odd, the product of an even and an odd numbers is even, and the difference of an odd and an even number is odd. Thus $n$ is odd.
:::

The following lemma establishes the simple connection between congruence modulo $m$ and remainders modulo $m$. The proof is easy and left as an exercise.

::: proposition Lemma 4.16.{#lemma-4-16}
*For any* $a, b, m ∈ ℤ$ *with* $m ≥ 1$,

1. $a ≡_m R_m(a)$. 
2. $a ≡_m b \iff R_m(a) = R_m(b)$.

{.lower-roman}
:::

The above lemma together with [Lemma 4.14](#lemma-4-14) implies that if in a computation involving addition and multiplication one is interested only in the remainder of the result modulo $m$, then one can compute remainders modulo $m$ at any intermediate step (thus keeping the numbers small), without changing the result. This is referred to as *modular arithmetic*.

::: proposition Corollary 4.17.{#corollary-4-17}
*Let* $f(x_1, …, x_k)$ *be a multi-variate polynomial in* $k$ *variables with integer coefficients, and let* $m ≥ 1$. *Then*

<center>

$R_{m}\left(f(a_{1},\ldots,a_{k})\right)=R_{m}\left(f(R_{m}(a_{1}),\ldots,R_{m}(a_{k}))\right)$.
</center>

**Proof:** By [Lemma 4.16](#lemma-4-16) we have $a_i ≡_m R_m(a_i)$ for all $i$. Therefore, using [Corollary 4.15](#corollary-4-15) we have $f(a_1, . . . , a_k) ≡_m f(R_m(a_1), \ldots, R_m(a_k))$. Thus, using [Lemma 4.16 (ii)](#lemma-4-16) we obtain the statement to be proved. <span class="right">$\Box$</span>
:::

::: example Example 4.13.{#example-4-13}
Compute $7^{100}$ modulo $24$. We make use of the fact that $7^2 = 49 ≡_{24} 1$.  
Thus $R_{24}(7^{100}) = R_{24}((7^2)^{50}) = R_{24}(R_{24}(7^2)^{50}) = R_{24}(1^{50}) = R_{24}(1) = 1$.
:::

::: example Example 4.14.{#example-4-14}
Remainders can be used to check the correctness of calculations (which were, for instance, carried out by hand). If an error occurred during the computation, it is likely that this error also occurs when the computation is considered modulo some $m$. To check the result $n$ of a computation one can compare $R_m(n)$ with the remainder modulo $m$ obtained by continuously reducing intermediate results of the computation. The modulus $m = 9$ is especially suited because $R_9(n)$ can be easily computed by adding the decimal digits of $n$ (prove this!), and computing the remainder modulo $9$ of this sum. For instance, to check whether $247 · 3158 = 780026$ is correct one can compute $R_9(247) = R_9(2 + 4 + 7) = 4$ and $R_9(3158) = R_9(3 + 1 + 5 + 8) = 8$ to obtain $R_9(247 · 3158) = R_9(4 · 8) = 5$. On the other hand we have $R_9(780026) = R_9(7 + 8 + 2 + 6) = 5$. Hence the result can be correct.
:::

::: example Example 4.15.{#example-4-15}
A similar test can be performed for $m = 11$. $R_{11}(n)$ can be computed by adding the decimal digits of $n$ with alternating sign modulo $11$. This test, unlike that for $m = 9$, detects the swapping of digits.
:::

::: example Example 4.16.{#example-4-16}
The larger $m$, the more likely it is that a calculation error is detected. How could one implement a similar test for $m = 99$, how for $m = 101$?
:::

### 4.5.3. Multiplicative Inverses

Consider the problem of finding the solutions $x$ for the congruence equation

<center>

$ax ≡_m b$.
</center>

Obviously, if $x$ is a solution, then so is $x + km$ for any $k ∈ ℤ$. Hence we can restrict the consideration to solutions in $ℤ_m$. Of special interest is the case where $\operatorname{gcd}(a, m) = 1$ and $b = 1$.

::: proposition Lemma 4.18.{#lemma-4-18}
*The congruence equation*

<center>

$a x\equiv_{m}1$
</center>

*has a solution* $x ∈ ℤ_m$ *if and only if* $\operatorname{gcd}(a, m) = 1$. *The solution is unique.*

**Proof:**  
($\implies$) If $x$ satisfies $ax ≡_m 1$, then $ax = km + 1$ for some $k$. Note that $\operatorname{gcd}(a, m)$ divides both $a$ and $m$, hence also $ax − km$, which is $1$. Thus $\operatorname{gcd}(a, m) = 1$.

($\impliedby$) Assume now that $\operatorname{gcd}(a, m) = 1$. According to [Corollary 4.5](#corollary-4-5) there exist integers $u$ and $v$ such that $ua + vm = \operatorname{gcd}(a, m) = 1$. Since $vm ≡_m 0$ we have $ua ≡_m 1$. Hence $x = u$ is a solution in $ℤ$, and thus $x = R_m(u)$ is a solution in $ℤ_m$.

To prove uniqueness of $x$ in $ℤ_m$, suppose there is another solution $x' ∈ ℤ_m$. Then $ax − ax' ≡_m 0$, thus $a(x − x') ≡_m 0$ and hence $m$ divides $a(x − x')$. Since $\operatorname{gcd}(a, m) = 1$, $m$ must divide $(x − x')$. [^18] Therefore $R_m(x) = R_m(x')$ and hence $R_m(x)$ is the unique solution in $ℤ_m$. <span class="right">$\Box$</span>
:::

::: definition Definition 4.9.{#definition-4-9}
If $\operatorname{gcd}(a, m) = 1$, the unique solution $x ∈ ℤ_m$ to the congruence equation $ax ≡_m 1$ is called the *multiplicative inverse of* $a$ *modulo* $m$. One also uses the notation $x ≡_m a^{−1}$ or $x ≡_m 1/a$.
:::

::: example Example 4.17.{#example-4-17}
The multiplicative inverse of $5$ modulo $13$ is $8$ since $5 · 8 = 40 ≡_{13} 1$.
:::

[^18]:If $k$ divides $mn$ and $gcd(k, n) = 1$, then $k$ divides $m$. (Prove this!)

The multiplicative inverse of $a$ modulo $m$ can efficiently be computed using the so-called *extended Euclidean algorithm*. Note that if $\operatorname{gcd}(a, m) ≠ 1$, then $a$ has no multiplicative inverse modulo $m$.

### 4.5.4. The Chinese Remainder Theorem

We now consider a system of congruences for an integer $x$.

::: example Example 4.18.{#example-4-18}
Find an integer $x$ for which $x ≡_3 1$, $x ≡_4 2$, and $x ≡_5 4$. A solution is $x = 34$ as one can easily verify. This is the only solution in $ℤ_{60}$, but by adding multiples of $60$ to $x$ one obtains further solutions.
:::

The following theorem, known as the *Chinese Remainder Theorem (CRT)*, states this for general systems of congruences. The proof of the theorem is constructive: it shows how a solution $x$ can be constructed efficiently.

::: proposition Theorem 4.19. Chinese Remainder Theorem {#theorem-4-19}
*Let* $m_1, m_2, \ldots, m_r$ *be pairwise relatively prime integers and let* $M = \prod^r_{i=1} m_i$. *For every list* $a_1, \ldots, a_r$ *with* $0 ≤ a_i < m_i$ *for* $1 ≤ i ≤ r$, *the system of congruence equations*

$$
\begin{gather*}
x \equiv_{m_1} a_1\\[4pt]
x \equiv_{m_2} a_2\\
\vdots\\
x \equiv_{m_r} a_r
\end{gather*}
$$

*for* $x$ *has a unique solution* $x$ *satisfying* $0 ≤ x < M$.

**Proof:**
Let $M_i = M/m_i$. Hence $\operatorname{gcd}(M_i, m_i) = 1$ because every factor $m_k$ (where $k ≠ i$) of $M_i$ is relatively prime to $m_i$, and thus so is $M_i$. Thus there exists an $N_i$ satisfying

<center>

$M_i N_i\equiv_{m_i}1$.
</center>

Note that for all $k ≠ i$ we have $M_i ≡_{m_k} 0$ and thus

<center>

$M_{i}N_{i}\equiv_{m_{k} }0$.
</center>

Therefore

$$\sum_{i=1}^{r}a_{i}M_{i}N_{i}\ \equiv_{m_{k} }\ a_{k}$$

for all $k$. Hence the integer $x$ defined by

$$x=R_{M}\left(\sum_{i=1}^{r}a_{i}M_{i}N_{i}\right)$$

satisfies all the congruences. In order to prove uniqueness, observe that for two solutions $x'$ and $x''$, $x' − x'' ≡_{m_i} 0$ for all $i$, i.e., $x' − x''$ is a multiple of all the $m_i$ and hence of $\operatorname{lcm}(m_1, \ldots, m_r) = M$. Thus $x' ≡_M x''$. <span class="right">$\Box$</span>
:::

The Chinese Remainder Theorem has several applications. When one is interested in a computation modulo $M$, then the moduli $m_i$ can be viewed as a coordinate system. One can project the numbers of interest modulo the $m_i$, and perform the computation in the $r$ projections (which may be more efficient than computing directly modulo $M$). If needed at the end, one can reconstruct the result from the projections.

::: details Lecture Example of $ℤ_{5}$ and $ℤ_{3}$
$$
\begin{array}{c|c|c|c|}
\hline
4 & 9 & 4 & 14 \\
\hline
3 & 3 & 13 & 8 \\
\hline
2 & 12 & 7 & 2 \\
\hline
1 & 6 & 1 & 11 \\
\hline
0 & 0 & 10 & 5 \\
\hline
\!\!{\cancel{\!\!\;^{^{\displaystyle{ℤ_5}}} \;_{_{\displaystyle{ℤ_3}}}}\!\!\!} & 0 & 1 & 2 \\
\end{array}
$$
:::

::: example Example 4.19.{#example-4-19}
Compute $R_{35}(2^{1000})$. We can do this computation modulo $5$ and modulo $7$ separately. Since $2^4 ≡_5 1$ we have $2^{1000} ≡_5 1$. Since $2^3 ≡_7 1$ we have $2^{1000} ≡_7 2$. This yields $2^{1000} ≡_{35} 16$ since $16$ is the (unique) integer $x ∈ [0, 34]$ with $x ≡_5 1$ and $x ≡_7 2$.
:::

## 4.6. Application: Diffie-Hellman Key-Agreement

Until the 1970's, number theory was considered one of the purest of all mathematical disciplines in the sense of being furthest away from any useful applications. However, this has changed dramatically in the 1970's when crucial applications of number theory in cryptography were discovered.

In a seminal 1976 paper[^19], Diffie and Hellman proposed the revolutionary concept of *public-key cryptography*. Most security protocols, and essentially all those used on the Internet, are based on public-key cryptography. Without this amazing and paradoxical invention, security on the Internet would be unthinkable.

Consider the *key distribution* problem. In order to encrypt the communication between two parties, say Alice and Bob, they need a secret key known only to them. How can they obtain such a key in a setting, like the Internet, where they initially share no secret information and where they are connected only by an insecure communication channel to which a potential adversary has access? We describe the famous Diffie-Hellman protocol which allows to solve this seemingly paradoxical problem.

The Diffie-Hellman protocol (see Figure 4.2), as originally proposed[^20], makes use of exponentiation modulo a large prime $p$, for instance with $2048$ bits. While $y = R_p(g^x)$ can be computed efficiently (how?), even if $p$, $g$ and $x$ are numbers of several hundred or thousands of digits, computing $x$ when given $p$, $g$ and $y$ is generally (believed to be) computationally infeasible. This problem is known as (a version of) the *discrete logarithm problem*. The security of the Diffie-Hellman protocol is based on this asymmetry in computational difficulty. Such a function, like $x \mapsto R_p(g^x)$, is called a one-way function: it is easy to compute in one direction but computationally very hard to invert.[^21]

[^19]:W. Diffie and M.E. Hellman, New directions in cryptography, *IEEE Transactions on Information Theory*, vol. 22, no. 6, pp. 644-654, 1976.

[^20]:Since then, other versions, for instance based on elliptic curves, have been proposed.

The prime $p$ and the basis $g$ (e.g. $g = 2$) are public parameters, possibly generated once and for all users of the system. The protocol is symmetric, i.e., Alice and Bob perform the same operations. The exchange of the so-called *public keys* $y_A$ and $y_B$ must be authenticated, but not secret.[^22] It is easy to see that Alice and Bob end up with the same value $k_{AB} = k_{BA}$ which they can use as a secret key for encrypting subsequent communication.[^23] In order to compute $k_{AB}$ from $y_A$ and $y_B$, an adversary would have to compute either $x_A$ or $x_B$, which is believed to be infeasible.

<figure id="figure-4-1">

$$
\begin{array}{|c|}
\hline
\\
\begin{array}{m c m}
\text{\bf Alice} & \text{\bf insecure channel} & \text{\bf Bob} \\
 \text{select } x_A \text{ at random }  & &  \text{select } x_B \text{ at random }  \\
\text{from } \{0, \ldots, p-2\} & & \text{from } \{0, \ldots, p-2\} \\ \\
y_A := R_p(g^{x_A}) & \underrightarrow{   y_A   } & y_B := R_p(g^{x_B}) \\
k_{AB} := R_p(y^{x_A}_B) & \overleftarrow{   y_B   } & k_{BA} := R_p(y^{x_B}_A) \\
\\ \\
\end{array}\\
k_{AB}\ \equiv_p\ y^{x_A}_B\ \equiv_p\ (g^{x_B})^{x_A}\ \equiv_p\ g^{x_A x_B}\ \equiv_p\ k_{BA} \\
\\
\hline
\end{array}
$$

<figcaption>
Figure 4.1: The Diffie-Hellman key agreement protocol.
</figcaption>
</figure>

A mechanical analogue of a one-way function is a padlock without a key.[^24] The mechanical analog of the Diffie-Hellman protocol is shown in [Figure 4.2](#figure-4-2). Alice and Bob can exchange their locks (closed) and keep a copy in the open state. Then they can both generate the same configuration, namely the two locks interlocked. For the adversary, this is impossible without breaking open one of the locks.

[^21]:It is not known whether one-way functions actually exist, but it is conjectured that exponentiation modulo a prime $p$ is a one-way function for most $p$.

[^22]:This can be achieved by recognizing the other party's voice in a phone call or, indirectly, by the use of public-key certificates.

[^23]:More precisely, they can derive a common secret key, for example by applying a hash function to $K_{AB}$.

[^24]:A padlock with a key corresponds to a so-called *trapdoor one-way function* which is not considered here.

<figure id="figure-4-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 612 369"><path fill="currentColor" opacity=".1" d="M250 49h120v169H250z"/><path fill="currentColor" d="M157.4 181h-3.63l5.52-16h4.36l5.52 16h-3.63l-4-12.34h-.13L157.4 181Zm-.23-6.29h8.56v2.64h-8.56v-2.64Zm17.19-9.71v16h-3.33v-16h3.33Zm2.67 16v-12h3.32v12h-3.32Zm1.67-13.55c-.5 0-.92-.16-1.27-.49a1.6 1.6 0 0 1 0-2.37c.35-.34.77-.5 1.27-.5s.92.16 1.26.5c.36.32.53.72.53 1.18 0 .46-.17.86-.53 1.2-.34.32-.77.48-1.26.48Zm9.74 13.78a6.14 6.14 0 0 1-3.17-.78 5.28 5.28 0 0 1-2.03-2.18 7.1 7.1 0 0 1-.7-3.22c0-1.23.23-2.31.7-3.24a5.28 5.28 0 0 1 2.05-2.18 6.01 6.01 0 0 1 3.14-.79c1.04 0 1.96.2 2.75.57a4.6 4.6 0 0 1 2.62 4.03h-3.14a2.43 2.43 0 0 0-.7-1.45 2.01 2.01 0 0 0-1.48-.55c-.51 0-.97.14-1.35.42a2.7 2.7 0 0 0-.9 1.21 5.2 5.2 0 0 0-.31 1.93c0 .77.1 1.42.31 1.95.22.54.51.95.9 1.23.38.28.84.42 1.35.42.38 0 .72-.08 1.03-.23.3-.16.56-.39.75-.68.2-.3.34-.67.4-1.09h3.14c-.05.92-.3 1.73-.75 2.42a4.53 4.53 0 0 1-1.83 1.63c-.78.39-1.71.58-2.78.58Zm12.96 0a6.4 6.4 0 0 1-3.19-.75 5.13 5.13 0 0 1-2.04-2.14 7.08 7.08 0 0 1-.72-3.28c0-1.24.24-2.32.72-3.25a5.31 5.31 0 0 1 2.02-2.19 5.9 5.9 0 0 1 3.08-.78c.79 0 1.53.13 2.2.39a4.9 4.9 0 0 1 3 3.04c.3.76.44 1.65.44 2.67v.91h-10.13v-2.06h7a2.42 2.42 0 0 0-1.18-2.14 2.48 2.48 0 0 0-1.28-.32 2.47 2.47 0 0 0-2.25 1.28c-.22.38-.33.81-.33 1.29v1.96c0 .6.1 1.1.32 1.54.23.43.54.76.95 1 .4.23.89.35 1.45.35.37 0 .7-.05 1.01-.16a2.05 2.05 0 0 0 1.29-1.23l3.08.2a4.2 4.2 0 0 1-.96 1.94c-.48.55-1.1.97-1.86 1.28-.76.3-1.63.45-2.62.45ZM263 68v-6.55h1V68h-1Zm.5-7.64a.71.71 0 0 1-.5-.2.64.64 0 0 1-.2-.48c0-.19.06-.35.2-.48s.31-.2.5-.2c.2 0 .37.07.51.2s.21.3.21.48c0 .19-.07.35-.2.48a.7.7 0 0 1-.51.2Zm3.35 3.7V68h-1v-6.55h.97v1.03h.08c.16-.34.39-.6.7-.8.31-.2.72-.31 1.21-.31.44 0 .83.09 1.16.27.34.18.6.45.78.82.18.36.28.82.28 1.38V68h-1.01v-4.1c0-.5-.13-.9-.4-1.2a1.42 1.42 0 0 0-1.1-.43c-.32 0-.6.07-.86.21a1.5 1.5 0 0 0-.6.61c-.14.27-.21.6-.21.97Zm10.65-1.14-.9.26c-.06-.15-.14-.3-.25-.44a1.16 1.16 0 0 0-.45-.36 1.6 1.6 0 0 0-.72-.14c-.4 0-.73.1-1 .28-.26.18-.4.4-.4.69 0 .25.1.45.28.6.18.14.46.26.85.35l.97.24a2.6 2.6 0 0 1 1.3.66c.3.29.44.66.44 1.12 0 .37-.1.7-.32 1-.22.3-.52.53-.9.7-.38.17-.83.26-1.34.26-.67 0-1.22-.15-1.66-.44a1.93 1.93 0 0 1-.83-1.27l.96-.24c.09.36.26.62.51.8.26.17.6.26 1 .26.47 0 .85-.1 1.12-.3.28-.2.42-.44.42-.72a.76.76 0 0 0-.24-.57c-.16-.16-.4-.28-.73-.35l-1.1-.26a2.6 2.6 0 0 1-1.31-.66 1.6 1.6 0 0 1-.42-1.13c0-.37.1-.7.31-.98s.5-.5.86-.67a3 3 0 0 1 1.23-.24c.65 0 1.16.14 1.53.43.37.28.63.65.79 1.12Zm4.38 5.22a2.8 2.8 0 0 1-2.69-1.6c-.24-.5-.36-1.1-.36-1.76 0-.67.12-1.26.36-1.77a2.77 2.77 0 0 1 2.58-1.64c.35 0 .68.06 1.01.17a2.5 2.5 0 0 1 1.57 1.56c.16.42.24.93.24 1.54v.43h-5.05v-.87h4.02c0-.37-.07-.7-.22-.99a1.67 1.67 0 0 0-1.56-.94 1.85 1.85 0 0 0-1.71 1.07c-.16.31-.24.65-.24 1.01v.58c0 .5.09.92.26 1.26.17.34.41.6.72.78.3.17.66.26 1.07.26.26 0 .5-.03.71-.1.22-.08.4-.2.56-.35.16-.15.28-.34.36-.57l.98.27c-.1.33-.28.62-.52.87s-.54.44-.9.58c-.35.14-.75.2-1.2.2Zm6.9 0c-.62 0-1.14-.15-1.59-.44a2.82 2.82 0 0 1-1.02-1.2 4.05 4.05 0 0 1-.36-1.74c0-.66.12-1.25.37-1.76s.59-.9 1.03-1.2c.44-.29.96-.43 1.55-.43.46 0 .88.08 1.24.26a2.23 2.23 0 0 1 1.35 1.79h-1c-.08-.3-.25-.57-.52-.8a1.53 1.53 0 0 0-1.05-.35c-.4 0-.74.1-1.03.3a2 2 0 0 0-.7.87c-.15.36-.23.8-.23 1.29 0 .5.08.94.24 1.32.16.37.38.66.68.87.3.2.64.31 1.04.31.26 0 .5-.04.7-.13a1.47 1.47 0 0 0 .87-1h1a2.34 2.34 0 0 1-1.3 1.77c-.37.18-.79.27-1.27.27Zm8.17-2.82v-3.87h1V68h-1v-1.1h-.07a2.06 2.06 0 0 1-1.95 1.19c-.4 0-.77-.1-1.09-.27a1.87 1.87 0 0 1-.75-.82 3.1 3.1 0 0 1-.27-1.39v-4.16h1v4.1c0 .47.14.85.4 1.14.28.28.62.42 1.04.42a1.71 1.71 0 0 0 1.69-1.79Zm2.84 2.68v-6.55h.97v1h.07c.12-.33.34-.6.65-.8.31-.2.67-.3 1.06-.3a11.31 11.31 0 0 1 .53.02v1.02a2.97 2.97 0 0 0-.62-.07c-.32 0-.6.07-.85.2s-.44.32-.59.55c-.14.23-.21.5-.21.79V68h-1Zm7.01.14a2.8 2.8 0 0 1-2.68-1.6 4 4 0 0 1-.37-1.76c0-.67.12-1.26.37-1.77a2.77 2.77 0 0 1 2.58-1.64c.34 0 .68.06 1.01.17a2.5 2.5 0 0 1 1.56 1.56c.16.42.24.93.24 1.54v.43h-5.04v-.87h4.02c0-.37-.07-.7-.22-.99a1.67 1.67 0 0 0-1.57-.94c-.4 0-.75.1-1.04.3a2 2 0 0 0-.67.77 2.3 2.3 0 0 0-.23 1.01v.58c0 .5.08.92.25 1.26.18.34.42.6.72.78.31.17.67.26 1.07.26.27 0 .5-.03.72-.1a1.5 1.5 0 0 0 .92-.92l.97.27c-.1.33-.27.62-.51.87-.25.25-.54.44-.9.58-.35.14-.75.2-1.2.2Zm10.28 0c-.62 0-1.14-.15-1.59-.44a2.83 2.83 0 0 1-1.02-1.2 4.05 4.05 0 0 1-.36-1.74c0-.66.12-1.25.37-1.76s.59-.9 1.03-1.2c.44-.29.96-.43 1.55-.43.46 0 .88.08 1.25.26a2.23 2.23 0 0 1 1.35 1.79h-1.01a1.56 1.56 0 0 0-1.57-1.15c-.4 0-.74.1-1.03.3a2 2 0 0 0-.69.87c-.16.36-.24.8-.24 1.29 0 .5.08.94.24 1.32.16.37.38.66.68.87.3.2.64.31 1.04.31.26 0 .5-.04.7-.13a1.46 1.46 0 0 0 .87-1h1a2.32 2.32 0 0 1-1.3 1.77c-.37.18-.79.27-1.27.27Zm5.05-4.08V68h-1v-8.73h1v3.2h.08c.16-.33.39-.6.7-.8.3-.2.71-.3 1.23-.3.44 0 .84.09 1.17.27.34.17.6.45.78.81.19.37.28.83.28 1.4V68h-1v-4.1c0-.51-.14-.91-.4-1.2a1.44 1.44 0 0 0-1.12-.43c-.33 0-.63.07-.89.21a1.5 1.5 0 0 0-.61.61c-.15.27-.22.6-.22.97Zm8 4.1c-.4 0-.78-.08-1.12-.24-.34-.16-.6-.39-.8-.69-.2-.3-.3-.66-.3-1.09 0-.37.07-.68.22-.91.14-.24.34-.42.59-.55.25-.14.52-.24.82-.3a15.63 15.63 0 0 1 1.87-.28c.25-.03.43-.07.55-.14.11-.07.17-.18.17-.34v-.03c0-.43-.11-.75-.34-.98-.23-.24-.58-.35-1.04-.35-.48 0-.86.1-1.13.31-.27.21-.46.44-.57.67l-.96-.34a2.3 2.3 0 0 1 1.62-1.4 3.9 3.9 0 0 1 1.73-.05c.28.04.54.15.8.3s.47.38.64.7c.17.3.26.72.26 1.24V68h-1v-.89h-.06c-.07.15-.18.3-.34.46-.16.16-.37.3-.63.41-.27.12-.6.17-.97.17Zm.16-.91a2 2 0 0 0 1-.23 1.6 1.6 0 0 0 .84-1.39v-.92c-.04.05-.13.1-.28.14a4.76 4.76 0 0 1-1.04.18l-.42.06c-.26.03-.5.08-.73.16-.22.08-.4.19-.55.34a.86.86 0 0 0-.2.6c0 .35.13.62.39.8.26.17.59.26 1 .26Zm5.69-3.19V68h-1v-6.55h.96v1.03h.09c.15-.34.39-.6.7-.8.31-.2.71-.31 1.2-.31.45 0 .84.09 1.17.27.33.18.6.45.78.82.18.36.27.82.27 1.38V68h-1v-4.1c0-.5-.13-.9-.4-1.2a1.42 1.42 0 0 0-1.1-.43c-.32 0-.6.07-.86.21a1.5 1.5 0 0 0-.6.61c-.14.27-.21.6-.21.97Zm7.02 0V68h-1v-6.55h.96v1.03h.09c.15-.34.39-.6.7-.8.31-.2.71-.31 1.2-.31.45 0 .84.09 1.17.27.33.18.6.45.78.82.18.36.28.82.28 1.38V68h-1.01v-4.1c0-.5-.13-.9-.4-1.2a1.42 1.42 0 0 0-1.1-.43c-.32 0-.6.07-.86.21a1.5 1.5 0 0 0-.6.61c-.14.27-.21.6-.21.97Zm8.76 4.08a2.8 2.8 0 0 1-2.69-1.6c-.24-.5-.37-1.1-.37-1.76 0-.67.13-1.26.37-1.77a2.77 2.77 0 0 1 2.58-1.64c.34 0 .68.06 1.01.17a2.5 2.5 0 0 1 1.56 1.56c.17.42.25.93.25 1.54v.43h-5.05v-.87h4.02c0-.37-.07-.7-.22-.99a1.66 1.66 0 0 0-1.57-.94c-.4 0-.74.1-1.03.3-.3.2-.52.45-.68.77a2.3 2.3 0 0 0-.23 1.01v.58c0 .5.09.92.26 1.26.17.34.41.6.72.78.3.17.66.26 1.07.26.26 0 .5-.03.71-.1.22-.08.4-.2.56-.35.16-.15.28-.34.36-.57l.98.27c-.1.33-.28.62-.52.87s-.54.44-.9.58c-.35.14-.75.2-1.2.2Zm5.24-8.87V68h-1v-8.73h1ZM419.88 181v-16h6.4c1.18 0 2.16.17 2.95.52s1.38.84 1.77 1.46c.4.61.6 1.32.6 2.12a3.23 3.23 0 0 1-1.4 2.8c-.44.3-.94.51-1.5.64v.16a3.66 3.66 0 0 1 3.02 1.85c.34.56.5 1.24.5 2.03 0 .85-.2 1.6-.63 2.27a4.27 4.27 0 0 1-1.85 1.57c-.82.39-1.83.58-3.03.58h-6.83Zm3.38-2.77h2.76c.94 0 1.63-.17 2.06-.53.43-.37.65-.85.65-1.46a2.1 2.1 0 0 0-1.23-1.97 3.2 3.2 0 0 0-1.4-.29h-2.84v4.25Zm0-6.53h2.51c.46 0 .88-.08 1.23-.25a2 2 0 0 0 .86-.7c.22-.3.32-.66.32-1.09 0-.57-.2-1.04-.61-1.4a2.6 2.6 0 0 0-1.74-.53h-2.57v3.97Zm16.52 9.53a6.14 6.14 0 0 1-3.14-.77 5.3 5.3 0 0 1-2.04-2.17 7 7 0 0 1-.72-3.24c0-1.24.24-2.33.72-3.25a5.23 5.23 0 0 1 2.03-2.18 6.1 6.1 0 0 1 3.15-.78c1.22 0 2.26.26 3.14.78a5.22 5.22 0 0 1 2.05 2.18c.48.92.72 2 .72 3.25a7 7 0 0 1-.72 3.24 5.28 5.28 0 0 1-2.05 2.17 6.1 6.1 0 0 1-3.14.77Zm.02-2.57c.55 0 1.01-.16 1.38-.47.37-.32.65-.75.84-1.3a5.7 5.7 0 0 0 .29-1.87c0-.7-.1-1.32-.3-1.86a2.92 2.92 0 0 0-.83-1.3 2.05 2.05 0 0 0-1.38-.48c-.56 0-1.03.16-1.4.48-.38.32-.67.75-.86 1.3a5.76 5.76 0 0 0-.28 1.86c0 .7.1 1.32.28 1.87.2.55.48.98.85 1.3.38.31.85.47 1.4.47Zm8.12 2.34v-16h3.32v6.02h.1c.15-.33.36-.66.64-.99.28-.34.64-.62 1.1-.84a4.51 4.51 0 0 1 5.88 2.4c.44.9.66 2.05.66 3.43 0 1.33-.22 2.46-.65 3.39a4.5 4.5 0 0 1-4.22 2.79c-.64 0-1.2-.11-1.65-.33a3.41 3.41 0 0 1-1.1-.8c-.29-.33-.5-.66-.65-1h-.15V181h-3.28Zm3.25-6c0 .71.1 1.34.3 1.87.2.53.48.94.86 1.24.38.3.83.44 1.37.44.54 0 1-.15 1.37-.45.38-.3.66-.72.85-1.25.2-.53.3-1.15.3-1.85 0-.7-.1-1.3-.29-1.83a2.8 2.8 0 0 0-.85-1.23c-.38-.3-.84-.45-1.38-.45-.54 0-1 .14-1.38.43-.37.29-.65.7-.85 1.22-.2.53-.3 1.15-.3 1.86Z"/><path fill="red" d="m579.41 105 2.2 4.2 2.26-4.2h3.41l-3.47 6 3.57 6h-3.4l-2.37-4.15-2.33 4.15h-3.43l3.56-6-3.44-6h3.44Zm9.25 16v-9.6h4c.72 0 1.32.1 1.8.3a2.21 2.21 0 0 1 1.47 2.12c0 .37-.07.7-.22.99-.16.28-.37.52-.64.7-.27.2-.58.32-.93.4v.1c.39.01.75.12 1.07.3.33.2.6.46.8.8.2.34.3.74.3 1.2a2.49 2.49 0 0 1-1.53 2.34c-.5.23-1.1.35-1.81.35h-4.31Zm2.32-1.87h1.43c.5 0 .88-.1 1.12-.29a.95.95 0 0 0 .36-.8 1.11 1.11 0 0 0-.67-1.05c-.21-.1-.47-.15-.76-.15h-1.48v2.29Zm0-3.78h1.28c.26 0 .48-.04.68-.13a.97.97 0 0 0 .63-.94.92.92 0 0 0-.34-.76 1.42 1.42 0 0 0-.93-.28h-1.32v2.1Zm-82.96-53.51 1.5 2.85 1.53-2.85h2.32l-2.36 4.08 2.43 4.08h-2.31l-1.61-2.82-1.59 2.82h-2.33l2.42-4.08-2.34-4.08h2.34ZM514.3 73v-6.53h2.72c.49 0 .9.07 1.23.2.33.15.58.34.74.59.17.25.26.54.26.86a1.37 1.37 0 0 1-.59 1.15c-.18.13-.4.22-.64.27v.06a1.6 1.6 0 0 1 1.28.76c.13.23.2.5.2.81a1.7 1.7 0 0 1-1.04 1.6 2.9 2.9 0 0 1-1.23.23h-2.93Zm1.58-1.27h.97c.34 0 .6-.07.76-.2a.65.65 0 0 0 .24-.54.78.78 0 0 0-.12-.43.76.76 0 0 0-.33-.29 1.2 1.2 0 0 0-.52-.1h-1v1.56Zm0-2.57h.87c.17 0 .33-.03.46-.09a.7.7 0 0 0 .31-.25c.08-.1.12-.24.12-.4a.6.6 0 0 0-.24-.5.97.97 0 0 0-.62-.2h-.9v1.44ZM185.02 291.84l1.5 2.85 1.53-2.85h2.32l-2.36 4.08 2.43 4.08h-2.31l-1.61-2.82-1.59 2.82h-2.33l2.42-4.08-2.34-4.08h2.34ZM191.3 303v-6.53h2.72c.49 0 .9.07 1.23.2a1.5 1.5 0 0 1 1 1.44 1.37 1.37 0 0 1-.59 1.15c-.18.14-.4.23-.63.28v.06c.26.01.5.09.72.22.23.13.41.3.55.54.13.23.2.5.2.81a1.7 1.7 0 0 1-1.04 1.6 2.9 2.9 0 0 1-1.23.23h-2.93Zm1.58-1.27h.97c.34 0 .6-.07.76-.2a.66.66 0 0 0 .24-.54.78.78 0 0 0-.12-.43.76.76 0 0 0-.33-.29 1.2 1.2 0 0 0-.52-.1h-1v1.56Zm0-2.57h.87c.17 0 .33-.03.46-.09a.7.7 0 0 0 .31-.25c.08-.1.12-.24.12-.4a.6.6 0 0 0-.24-.5.97.97 0 0 0-.62-.2h-.9v1.44Zm316.14-8.32 1.5 2.85 1.53-2.85h2.32l-2.36 4.08 2.43 4.08h-2.31l-1.61-2.82-1.59 2.82h-2.33l2.42-4.08-2.34-4.08h2.34ZM515.3 302v-6.53h2.72c.49 0 .9.07 1.23.2a1.5 1.5 0 0 1 1 1.44 1.37 1.37 0 0 1-.59 1.15c-.18.14-.4.23-.64.28v.06a1.5 1.5 0 0 1 1.48 1.57 1.7 1.7 0 0 1-1.04 1.6 2.9 2.9 0 0 1-1.23.23h-2.93Zm1.58-1.27h.97c.34 0 .6-.07.76-.2a.65.65 0 0 0 .24-.54.78.78 0 0 0-.12-.43.76.76 0 0 0-.33-.29 1.2 1.2 0 0 0-.52-.1h-1v1.56Zm0-2.58h.87c.17 0 .33-.02.46-.08a.7.7 0 0 0 .31-.25c.08-.1.12-.24.12-.4a.6.6 0 0 0-.24-.5.97.97 0 0 0-.62-.2h-.9v1.43Z"/><path fill="#0049DB" d="M461.56 121.5a6.57 6.57 0 0 1-2.1-.34l.75-2.49c.4.12.74.19 1.06.2.31 0 .59-.06.82-.22.23-.16.42-.42.57-.8l.2-.5-4.31-12.35h3.5l2.48 8.81h.13l2.5-8.81h3.53l-4.67 13.3c-.22.64-.52 1.2-.91 1.68-.38.49-.86.86-1.45 1.12-.58.27-1.28.4-2.1.4Zm10.23-.5v-9.6h4c.72 0 1.32.1 1.8.3a2.21 2.21 0 0 1 1.47 2.12c0 .37-.07.7-.23.99-.15.28-.36.52-.63.7-.27.2-.58.32-.93.4v.1a2.17 2.17 0 0 1 1.87 1.11c.2.33.3.73.3 1.2a2.49 2.49 0 0 1-1.53 2.33c-.5.23-1.1.35-1.81.35h-4.31Zm2.32-1.87h1.43c.5 0 .88-.1 1.11-.29a.93.93 0 0 0 .37-.8 1.11 1.11 0 0 0-.67-1.05c-.21-.1-.47-.15-.76-.15h-1.48v2.29Zm0-3.78h1.28c.26 0 .48-.04.68-.13a.97.97 0 0 0 .63-.94.92.92 0 0 0-.34-.76 1.42 1.42 0 0 0-.93-.28h-1.32v2.1Z"/><path fill="currentColor" d="M496.77 86.75c-1.07 0-2-.15-2.77-.45a4.6 4.6 0 0 1-1.83-1.2 3.67 3.67 0 0 1-.88-1.7l3.08-.4a2 2 0 0 0 .44.66c.2.21.47.38.8.5.35.13.76.2 1.24.2.73 0 1.32-.18 1.8-.53.47-.35.7-.94.7-1.76v-2.2h-.14a3.18 3.18 0 0 1-1.78 1.68 4.93 4.93 0 0 1-4.1-.34 4.49 4.49 0 0 1-1.76-1.94 7.4 7.4 0 0 1-.65-3.3c0-1.35.22-2.49.67-3.4a4.77 4.77 0 0 1 1.76-2.05 4.56 4.56 0 0 1 4.12-.33c.45.22.82.5 1.1.84.27.33.49.66.64.99h.13V70h3.3v12.12c0 1.02-.25 1.87-.75 2.56s-1.2 1.2-2.08 1.55a8.2 8.2 0 0 1-3.04.52Zm.07-7.42c.54 0 1-.13 1.36-.4.38-.27.67-.66.86-1.16.2-.5.3-1.1.3-1.8 0-.71-.1-1.32-.29-1.84-.2-.52-.48-.92-.86-1.2a2.19 2.19 0 0 0-1.37-.44c-.54 0-1 .15-1.38.45-.37.29-.66.7-.85 1.22a5.2 5.2 0 0 0-.29 1.8c0 .7.1 1.3.29 1.8.2.5.48.89.85 1.16.38.27.84.4 1.38.4Zm-381.07 7.42c-1.08 0-2-.15-2.77-.45a4.6 4.6 0 0 1-1.83-1.2 3.67 3.67 0 0 1-.88-1.7l3.08-.4a2 2 0 0 0 .44.66c.2.21.47.38.8.5.35.13.76.2 1.24.2.73 0 1.32-.18 1.8-.53.46-.35.7-.94.7-1.76v-2.2h-.14a3.18 3.18 0 0 1-1.78 1.68 4.93 4.93 0 0 1-4.1-.34 4.49 4.49 0 0 1-1.76-1.94 7.4 7.4 0 0 1-.65-3.3c0-1.35.22-2.49.67-3.4a4.77 4.77 0 0 1 1.76-2.05 4.56 4.56 0 0 1 4.12-.33c.45.22.82.5 1.1.84.27.33.49.66.64.99h.13V70h3.3v12.12c0 1.02-.25 1.87-.75 2.56s-1.2 1.2-2.08 1.55a8.2 8.2 0 0 1-3.04.52Zm.07-7.42c.54 0 1-.13 1.36-.4.38-.27.66-.66.86-1.16.2-.5.3-1.1.3-1.8 0-.71-.1-1.32-.29-1.84-.2-.52-.48-.92-.86-1.2a2.19 2.19 0 0 0-1.37-.44c-.54 0-1 .15-1.38.45-.37.29-.66.7-.85 1.22a5.2 5.2 0 0 0-.29 1.8c0 .7.1 1.3.29 1.8.2.5.48.89.85 1.16.38.27.84.4 1.38.4Z"/><path fill="#0049DB" d="M151.85 120.5a6.57 6.57 0 0 1-2.1-.34l.75-2.49c.4.12.74.19 1.06.2.31 0 .59-.06.82-.22.23-.16.42-.42.57-.8l.2-.5-4.31-12.35h3.5l2.48 8.81h.13l2.5-8.81h3.53l-4.67 13.3c-.22.64-.52 1.2-.91 1.68a3.7 3.7 0 0 1-1.44 1.12c-.59.27-1.3.4-2.11.4Zm12.3-.5h-2.49l3.24-9.6h3.1l3.23 9.6h-2.5l-2.25-7.18h-.07l-2.25 7.18Zm-.33-3.78h5.22v1.76h-5.22v-1.76Z"/><path fill="red" d="m29.2 105 2.2 4.2 2.26-4.2h3.42l-3.48 6 3.57 6h-3.4l-2.37-4.15-2.32 4.15h-3.44l3.56-6-3.44-6h3.44Zm11.33 16h-2.5l3.24-9.6h3.1l3.23 9.6h-2.5l-2.25-7.18h-.07L40.53 121Zm-.34-3.78h5.22v1.76h-5.22v-1.76Z"/><path fill="#E6500F" d="M108.77 307.55v-4h.5l3.84-4.55h3.81l-5.16 6.03h-.79l-2.2 2.52Zm-3.02 3.45v-16h3.33v16h-3.33Zm7.5 0-3.53-5.23 2.22-2.35 5.21 7.58h-3.9Zm6.78 4h-2.5l3.25-9.6h3.09l3.24 9.6h-2.5l-2.25-7.18h-.08l-2.25 7.18Zm-.33-3.78h5.21v1.76h-5.21v-1.76Zm8.84 3.78v-9.6h4c.72 0 1.32.1 1.8.3a2.22 2.22 0 0 1 1.47 2.12c0 .37-.08.7-.23.99-.15.28-.36.52-.63.7-.27.2-.58.32-.93.4v.1a2.17 2.17 0 0 1 1.87 1.11c.2.33.3.73.3 1.2a2.49 2.49 0 0 1-1.54 2.33c-.5.23-1.1.35-1.8.35h-4.31Zm2.32-1.87h1.43c.5 0 .87-.1 1.11-.29a.95.95 0 0 0 .36-.8c0-.24-.05-.45-.17-.63a1.12 1.12 0 0 0-.5-.42c-.2-.1-.46-.15-.76-.15h-1.47v2.29Zm0-3.78h1.28c.25 0 .48-.05.68-.13.2-.08.35-.2.46-.37a.98.98 0 0 0 .16-.57.92.92 0 0 0-.34-.76 1.43 1.43 0 0 0-.92-.28h-1.32v2.1Z"/><path fill="currentColor" d="M150.1 303.4v-2.78h10.78v2.77H150.1Zm0 5.18v-2.77h10.78v2.77H150.1Zm24.7 7.17c-1.08 0-2-.15-2.78-.44a4.6 4.6 0 0 1-1.83-1.2 3.67 3.67 0 0 1-.88-1.7l3.08-.42a2 2 0 0 0 .45.67c.2.21.47.38.8.5.34.13.75.2 1.23.2.73 0 1.32-.18 1.8-.53.47-.35.7-.94.7-1.76v-2.2h-.14a3.14 3.14 0 0 1-1.78 1.68 4.92 4.92 0 0 1-4.1-.34 4.47 4.47 0 0 1-1.76-1.94 7.37 7.37 0 0 1-.65-3.3c0-1.35.23-2.49.67-3.4a4.78 4.78 0 0 1 1.76-2.05 4.57 4.57 0 0 1 4.12-.33c.45.22.82.5 1.1.84.28.34.5.66.64.99h.13V299h3.3v12.12c0 1.02-.25 1.87-.75 2.56s-1.19 1.2-2.07 1.55a8.2 8.2 0 0 1-3.04.52Zm.07-7.42c.53 0 .99-.13 1.36-.4.37-.27.66-.66.86-1.16.2-.5.3-1.1.3-1.8 0-.71-.1-1.32-.3-1.84-.2-.52-.48-.92-.86-1.2a2.18 2.18 0 0 0-1.36-.44c-.55 0-1.01.15-1.39.45-.37.29-.66.7-.85 1.22a5 5 0 0 0-.29 1.8c0 .7.1 1.3.3 1.8.19.5.47.89.84 1.16.38.27.84.4 1.39.4Zm284.23-5.94v-2.77h10.78v2.77H459.1Zm0 5.19v-2.78h10.78v2.78H459.1Zm24.7 7.17c-1.08 0-2-.15-2.78-.45a4.6 4.6 0 0 1-1.83-1.2 3.67 3.67 0 0 1-.88-1.7l3.08-.4a2 2 0 0 0 .44.66c.2.21.48.38.81.5.34.13.75.2 1.23.2.73 0 1.32-.18 1.8-.53.47-.35.7-.94.7-1.76v-2.2h-.14a3.14 3.14 0 0 1-1.78 1.68 4.92 4.92 0 0 1-4.1-.34 4.47 4.47 0 0 1-1.76-1.94 7.37 7.37 0 0 1-.65-3.3c0-1.35.23-2.49.67-3.4a4.78 4.78 0 0 1 1.76-2.05 4.57 4.57 0 0 1 4.12-.33c.45.22.82.5 1.1.84.28.33.5.66.64.99h.13V298h3.3v12.12c0 1.02-.25 1.87-.75 2.56s-1.19 1.2-2.08 1.55a8.2 8.2 0 0 1-3.03.52Zm.07-7.42c.53 0 .99-.14 1.36-.4.37-.27.66-.66.85-1.16.2-.5.31-1.1.31-1.81 0-.7-.1-1.31-.3-1.83-.2-.52-.48-.92-.86-1.2a2.18 2.18 0 0 0-1.36-.44c-.55 0-1.01.15-1.39.45-.37.29-.66.7-.85 1.21a5.1 5.1 0 0 0-.29 1.81c0 .7.1 1.3.3 1.8.19.5.47.88.84 1.16.38.27.84.4 1.39.4Z"/><path fill="#E6500F" d="M425.77 306.55v-4h.5l3.84-4.55h3.81l-5.16 6.03h-.79l-2.2 2.52Zm-3.02 3.45v-16h3.33v16h-3.33Zm7.5 0-3.53-5.23 2.22-2.35 5.21 7.58h-3.9Zm4.7 4v-9.6h4c.73 0 1.33.1 1.81.3a2.21 2.21 0 0 1 1.47 2.12c0 .37-.08.7-.23.99-.15.28-.36.52-.63.7-.27.2-.58.32-.93.4v.1c.38.01.74.12 1.07.3.33.2.6.46.8.8.2.34.3.74.3 1.2a2.5 2.5 0 0 1-1.54 2.34c-.5.23-1.1.35-1.8.35h-4.31Zm2.33-1.87h1.43c.5 0 .87-.1 1.11-.29a.95.95 0 0 0 .36-.8c0-.24-.06-.45-.17-.63a1.11 1.11 0 0 0-.5-.42c-.2-.1-.46-.15-.76-.15h-1.47v2.29Zm0-3.78h1.28c.25 0 .48-.05.68-.13.2-.09.35-.2.45-.37a.97.97 0 0 0 .17-.57.92.92 0 0 0-.34-.76 1.42 1.42 0 0 0-.92-.28h-1.32v2.1Zm8.91 5.65h-2.49l3.24-9.6h3.09l3.24 9.6h-2.5l-2.25-7.18h-.08L446.2 314Zm-.33-3.78h5.21v1.76h-5.2v-1.76Z"/><path fill="red" d="m126.9 61.44 1.4 2.65 1.41-2.65h2.15l-2.19 3.78 2.25 3.78h-2.14l-1.49-2.61-1.46 2.61h-2.17l2.24-3.78-2.16-3.78h2.16Zm7.14 9.56h-1.57l2.03-6.04h1.95l2.04 6.04h-1.57l-1.42-4.52h-.05L134.04 71Zm-.21-2.38h3.28v1.11h-3.28v-1.1Zm66.07 223.82 1.4 2.65 1.41-2.65h2.15l-2.19 3.78 2.25 3.78h-2.14l-1.49-2.61-1.46 2.61h-2.17l2.24-3.78-2.16-3.78h2.16Zm7.14 9.56h-1.57l2.03-6.04h1.95l2.04 6.04h-1.57l-1.42-4.52h-.05l-1.41 4.52Zm-.21-2.38h3.28v1.11h-3.28v-1.1Zm287.07-8.18 1.4 2.64 1.41-2.64h2.15l-2.19 3.78 2.25 3.78h-2.14l-1.49-2.61-1.46 2.6h-2.17l2.24-3.77-2.16-3.78h2.16Zm7.14 9.56h-1.57l2.03-6.05h1.95l2.04 6.05h-1.57l-1.42-4.52h-.05l-1.41 4.52Zm-.21-2.38h3.28v1.11h-3.28v-1.11Z"/><path fill="#0049DB" fill-rule="evenodd" d="M427 71a11.99 11.99 0 1 1 24 0v5h4c1.7 0 3 1.3 3 3v24c0 1.7-1.3 3-3 3h-32c-1.7 0-3-1.3-3-3V79c0-1.7 1.3-3 3-3h4v-5Zm22 0c0-5.57-4.43-10-10-10s-10 4.43-10 10v5h20v-5Zm-14 15v10.07h4.3c.76 0 1.4-.12 1.9-.36a2.6 2.6 0 0 0 1.57-2.42c0-.5-.1-.92-.31-1.28a2.3 2.3 0 0 0-1.9-1.16v-.1c.35-.08.66-.21.93-.4a2.03 2.03 0 0 0 .89-1.77c0-.5-.13-.95-.38-1.34a2.4 2.4 0 0 0-1.11-.91 4.58 4.58 0 0 0-1.86-.33H435Zm3.87 8.33h-1.74v-2.67h1.79a2 2 0 0 1 .88.18 1.33 1.33 0 0 1 .77 1.24c0 .38-.13.68-.4.91-.28.23-.71.34-1.3.34Zm-.16-4.11h-1.58v-2.5h1.62c.47 0 .83.11 1.09.34.26.22.39.51.39.88a1.19 1.19 0 0 1-.74 1.12c-.23.1-.49.16-.78.16Z" clip-rule="evenodd"/><path fill="#E6500F" fill-rule="evenodd" d="M152.22 245.46a12.05 12.05 0 0 0-.04 11.78c.54-.6 1.06-1.53 1.26-1.92a10 10 0 0 1 .06-7.94 9.94 9.94 0 0 1 11.75-5.65l4.83 1.3-5.18 19.32-4.83-1.3a10.02 10.02 0 0 1-4.65-2.73 8.96 8.96 0 0 1-1.18 1.63 11.96 11.96 0 0 0 5.31 3.03l4.83 1.3-1.03 3.86a2.95 2.95 0 0 0 2.12 3.68l23.18 6.2a2.95 2.95 0 0 0 3.67-2.11l8.29-30.91a2.95 2.95 0 0 0-2.12-3.68l-23.19-6.2a2.95 2.95 0 0 0-3.67 2.11l-1.04 3.87-4.83-1.3a11.99 11.99 0 0 0-13.53 5.66Zm1.53 10.54a9.93 9.93 0 0 1-5.65 5.3l-4.68 1.76-7.02-18.73 4.68-1.76a9.94 9.94 0 0 1 10.76 2.46c.35-.72.96-1.37 1.2-1.62a11.99 11.99 0 0 0-12.66-2.7l-4.68 1.75-1.4-3.75a2.95 2.95 0 0 0-3.87-1.76l-22.47 8.43a2.95 2.95 0 0 0-1.76 3.86l11.23 29.96a2.95 2.95 0 0 0 3.86 1.76l22.48-8.42a2.95 2.95 0 0 0 1.75-3.87l-1.4-3.74 4.68-1.76a11.96 11.96 0 0 0 7.03-15.45c-.25-.65-.54-1.26-.88-1.84a6.47 6.47 0 0 0-1.19 2.06l.2.49a9.97 9.97 0 0 1-.2 7.57Zm32.84 4.5-9.59-3.1 1.24-3.84c.23-.7.52-1.26.88-1.66.37-.4.77-.67 1.22-.79.44-.11.9-.1 1.39.06a2.03 2.03 0 0 1 1.4 1.39c.1.31.13.65.1 1l.09.04a2.3 2.3 0 0 1 1.7-1.45c.4-.1.83-.06 1.3.1.52.16.93.43 1.25.81.31.38.5.85.58 1.41.07.57 0 1.21-.24 1.93l-1.32 4.1Zm-1-2.57.53-1.65c.18-.56.2-1.01.07-1.34a1.14 1.14 0 0 0-.74-.67c-.27-.09-.52-.1-.76-.03-.25.06-.47.19-.66.39-.19.2-.34.46-.44.78l-.55 1.7 2.54.82Zm-3.92-1.26.48-1.5c.1-.28.12-.55.1-.8a1.3 1.3 0 0 0-.26-.64 1.16 1.16 0 0 0-.59-.4 1.1 1.1 0 0 0-.96.1c-.29.17-.5.48-.65.93l-.5 1.54 2.38.77Zm-62.67-.2.78 2.14 2.42-.09 1.25 3.42-1.9 1.49.78 2.14 8.27-6.73-.94-2.57-10.66.2Zm5.83 4.39 3.15-2.48-.03-.07-4 .15.88 2.4Zm342.4-15.4a12.05 12.05 0 0 0-.05 11.78c.54-.6 1.06-1.53 1.26-1.92a10 10 0 0 1 .06-7.94 9.94 9.94 0 0 1 11.75-5.65l4.83 1.3-5.18 19.32-4.83-1.3a10.02 10.02 0 0 1-4.65-2.73 8.96 8.96 0 0 1-1.18 1.63 11.96 11.96 0 0 0 5.31 3.03l4.83 1.3-1.03 3.86a2.95 2.95 0 0 0 2.12 3.68l23.18 6.2a2.95 2.95 0 0 0 3.68-2.11L515.6 245a2.95 2.95 0 0 0-2.12-3.68l-23.19-6.2a2.95 2.95 0 0 0-3.67 2.11l-1.04 3.87-4.83-1.3a11.99 11.99 0 0 0-13.53 5.66Zm1.52 10.54a9.93 9.93 0 0 1-5.65 5.3l-4.68 1.76-7.02-18.73 4.68-1.76a9.94 9.94 0 0 1 10.76 2.46c.35-.72.96-1.37 1.2-1.62a11.99 11.99 0 0 0-12.66-2.7l-4.68 1.75-1.4-3.75a2.95 2.95 0 0 0-3.87-1.76l-22.47 8.43a2.95 2.95 0 0 0-1.76 3.86l11.23 29.96a2.95 2.95 0 0 0 3.87 1.76l22.47-8.42a2.95 2.95 0 0 0 1.75-3.87l-1.4-3.74 4.68-1.76a11.96 11.96 0 0 0 7.03-15.45c-.25-.65-.54-1.26-.88-1.84a6.47 6.47 0 0 0-1.19 2.06l.2.49a9.97 9.97 0 0 1-.2 7.57Zm32.84 4.5-9.59-3.1 1.24-3.84c.23-.7.52-1.26.88-1.66.37-.4.77-.67 1.22-.79.44-.11.9-.1 1.39.06a2.03 2.03 0 0 1 1.4 1.39c.1.31.13.65.1 1l.09.04a2.3 2.3 0 0 1 1.7-1.45c.4-.1.84-.06 1.3.1.51.16.93.43 1.25.81.31.38.5.85.58 1.41.07.57 0 1.21-.24 1.93l-1.32 4.1Zm-1-2.57.53-1.65c.18-.56.2-1.01.07-1.34a1.14 1.14 0 0 0-.74-.67c-.27-.09-.52-.1-.76-.03-.25.06-.47.19-.66.39-.19.2-.34.46-.44.78l-.55 1.7 2.54.82Zm-3.92-1.26.48-1.5c.1-.28.12-.55.1-.8a1.3 1.3 0 0 0-.26-.64 1.16 1.16 0 0 0-.59-.4 1.1 1.1 0 0 0-.95.1c-.3.17-.51.48-.66.93l-.5 1.54 2.38.77Zm-62.67-.2.79 2.14 2.4-.09 1.26 3.42-1.9 1.49.78 2.14 8.27-6.73-.94-2.57-10.66.2Zm5.83 4.39 3.15-2.48-.03-.07-4 .15.88 2.4Z" clip-rule="evenodd"/><path fill="#0049DB" fill-rule="evenodd" d="M174 71a11.99 11.99 0 1 1 24 0v5h4c1.7 0 3 1.3 3 3v24c0 1.7-1.3 3-3 3h-32c-1.7 0-3-1.3-3-3V79c0-1.7 1.3-3 3-3h4v-5Zm22 0c0-5.57-4.43-10-10-10s-10 4.43-10 10v5h20v-5Zm-15 26.07h2.28l.75-2.3h3.64l.74 2.3h2.28L187.22 87h-2.74L181 97.07Zm6.13-3.96-1.24-3.8h-.08l-1.24 3.8h2.56Z" clip-rule="evenodd"/><path fill="red" fill-rule="evenodd" d="M550.22 56.53a11.9 11.9 0 0 1 4.72-.47c4.66.48 8.84 3.7 10.31 8.44v.03c.18.64 1.31 4.28 1.31 4.28a.99.99 0 0 1-.18 1.02 1 1 0 0 1-1.72-.42l-.8-2.59-.52-1.73v-.03A10.04 10.04 0 0 0 544.15 71h-.02c.38 1.07 1.31 4 1.62 5H572c1.7 0 3 1.3 3 3v24c0 1.7-1.3 3-3 3h-32c-1.7 0-3-1.3-3-3V79c0-1.7 1.3-3 3-3h3.63c-.43-1.38-1.12-3.63-1.38-4.34v-.07a12.1 12.1 0 0 1 7.97-15.06ZM552 87v10.07h4.3c.76 0 1.4-.12 1.9-.36.52-.24.91-.57 1.17-.99a2.88 2.88 0 0 0 .3-2.17 2.3 2.3 0 0 0-2.12-1.7v-.1c.36-.08.67-.21.94-.4a2.05 2.05 0 0 0 .89-1.77c0-.24-.03-.46-.09-.67a2.32 2.32 0 0 0-1.4-1.58 4.58 4.58 0 0 0-1.86-.33H552Zm3.87 8.33h-1.74v-2.67h1.78c.35 0 .64.06.89.18a1.33 1.33 0 0 1 .77 1.24c0 .21-.04.4-.13.57a1.1 1.1 0 0 1-.28.34c-.27.23-.7.34-1.3.34Zm-.16-4.11h-1.58v-2.5h1.62c.47 0 .84.11 1.09.34.26.22.39.51.39.88 0 .26-.07.49-.2.68a1.3 1.3 0 0 1-.54.44c-.23.1-.49.16-.78.16ZM57.22 55.53a11.9 11.9 0 0 1 4.72-.47c4.66.48 8.84 3.7 10.31 8.44v.03c.18.64 1.31 4.28 1.31 4.28a1 1 0 0 1-1.17 1.33 1.01 1.01 0 0 1-.73-.73s-1.09-3.52-1.32-4.32v-.03A10.03 10.03 0 0 0 51.15 70h-.02c.38 1.07 1.31 4 1.62 5H79c1.7 0 3 1.3 3 3v24c0 1.7-1.3 3-3 3H47c-1.7 0-3-1.3-3-3V78c0-1.7 1.3-3 3-3h3.63l-.05-.14c-.43-1.39-1.08-3.52-1.33-4.2v-.07a12.1 12.1 0 0 1 7.97-15.06ZM58 95.07h2.28l.75-2.3h3.64l.74 2.3h2.29L64.22 85h-2.74L58 95.07Zm6.13-3.96-1.24-3.8h-.08l-1.24 3.8h2.56Z" clip-rule="evenodd"/><path fill="currentColor" d="M467.3 91.3a1 1 0 0 0 0 1.4l6.36 6.37a1 1 0 1 0 1.41-1.41L469.41 92l5.66-5.66a1 1 0 1 0-1.41-1.41l-6.37 6.36ZM529 91h-1.9v2h1.9v-2Zm-5.72 0h-3.81v2h3.81v-2Zm-7.62 0h-3.82v2h3.82v-2Zm-7.63 0h-3.81v2h3.81v-2Zm-7.62 0h-3.82v2h3.82v-2Zm-7.63 0h-3.81v2h3.81v-2Zm-7.62 0h-3.82v2h3.82v-2Zm-7.63 0h-3.81v2h3.81v-2Zm-7.62 0H468v2h1.9v-2Zm-2.62.3a1 1 0 0 0 0 1.4l6.37 6.37a1 1 0 1 0 1.41-1.41L469.41 92l5.66-5.66a1 1 0 1 0-1.41-1.41l-6.37 6.36ZM529 91h-1.9v2h1.9v-2Zm-5.72 0h-3.81v2h3.81v-2Zm-7.62 0h-3.82v2h3.82v-2Zm-7.63 0h-3.81v2h3.81v-2Zm-7.62 0h-3.82v2h3.82v-2Zm-7.63 0h-3.81v2h3.81v-2Zm-7.62 0h-3.82v2h3.82v-2Zm-7.63 0h-3.81v2h3.81v-2Zm-7.62 0H468v2h1.9v-2Zm-314.21.3a1 1 0 0 1 0 1.4l-6.36 6.37a1 1 0 1 1-1.41-1.41l5.66-5.66-5.66-5.66a1 1 0 1 1 1.41-1.41l6.37 6.36ZM94 91h1.9v2H94v-2Zm5.72 0h3.81v2h-3.81v-2Zm7.62 0h3.82v2h-3.82v-2Zm7.63 0h3.81v2h-3.81v-2Zm7.62 0h3.82v2h-3.82v-2Zm7.63 0h3.81v2h-3.81v-2Zm7.62 0h3.82v2h-3.82v-2Zm7.63 0h3.81v2h-3.81v-2Zm7.62 0H155v2h-1.9v-2Zm2.62.3a1 1 0 0 1 0 1.4l-6.37 6.37a1 1 0 1 1-1.41-1.41l5.66-5.66-5.66-5.66a1 1 0 1 1 1.41-1.41l6.37 6.36ZM94 91h1.9v2H94v-2Zm5.72 0h3.81v2h-3.81v-2Zm7.62 0h3.82v2h-3.82v-2Zm7.63 0h3.81v2h-3.81v-2Zm7.62 0h3.82v2h-3.82v-2Zm7.63 0h3.81v2h-3.81v-2Zm7.62 0h3.82v2h-3.82v-2Zm7.63 0h3.81v2h-3.81v-2Zm7.62 0H155v2h-1.9v-2Zm331.46 135.3a1 1 0 0 0 1.26.65l8.57-2.75a1 1 0 1 0-.62-1.9l-7.61 2.44-2.45-7.61a1 1 0 0 0-1.9.61l2.75 8.57ZM553 129.5c0 .63-.03 1.27-.08 1.9l2 .18c.05-.7.08-1.39.08-2.08h-2Zm-.7 5.7a32.9 32.9 0 0 1-1.11 3.7l1.88.7c.48-1.32.88-2.63 1.18-3.94l-1.94-.46Zm-2.63 7.31a55 55 0 0 1-1.8 3.47l1.74.99c.68-1.2 1.3-2.4 1.87-3.6l-1.8-.86Zm-3.84 6.84a88.73 88.73 0 0 1-2.2 3.28l1.63 1.16a104.1 104.1 0 0 0 2.26-3.36l-1.69-1.08Zm-4.55 6.48c-.79 1.04-1.6 2.08-2.45 3.13l1.56 1.25a131.4 131.4 0 0 0 2.48-3.17l-1.6-1.2Zm-4.97 6.2c-.84 1-1.7 2-2.58 3.02l1.5 1.31a240.6 240.6 0 0 0 2.61-3.05l-1.53-1.28Zm-5.21 6.01-2.67 2.96 1.48 1.35 2.68-2.98-1.5-1.33Zm-5.36 5.9-2.71 2.94 1.47 1.36 2.71-2.94-1.47-1.35Zm-5.43 5.87-2.71 2.93 1.46 1.36 2.72-2.93-1.47-1.36Zm-5.43 5.87-2.7 2.95 1.48 1.35 2.7-2.95-1.48-1.35Zm-5.38 5.92-2.65 3 1.5 1.32 2.64-2.98-1.49-1.34Zm-5.28 6.03a255.7 255.7 0 0 0-2.58 3.07l1.54 1.28 2.56-3.05-1.52-1.3Zm-5.11 6.19c-.84 1.04-1.67 2.1-2.48 3.16l1.59 1.21c.8-1.04 1.62-2.09 2.45-3.13l-1.56-1.25Zm-4.88 6.38c-.8 1.09-1.58 2.18-2.33 3.28l1.65 1.13c.74-1.08 1.5-2.16 2.3-3.24l-1.63-1.17Zm-4.56 6.63a114.1 114.1 0 0 0-2.12 3.43l1.71 1.02a133.5 133.5 0 0 1 2.09-3.37l-1.68-1.08Zm-4.12 6.94-.94 1.78 1.78.9c.3-.57.6-1.15.92-1.73l-1.76-.95Zm-1 2.54a1 1 0 0 0 1.26.64l8.57-2.75a1 1 0 1 0-.62-1.9l-7.61 2.44-2.45-7.61a1 1 0 0 0-1.9.61l2.75 8.57ZM553 129.5c0 .63-.03 1.27-.08 1.9l2 .18c.05-.7.08-1.39.08-2.08h-2Zm-.7 5.7a32.9 32.9 0 0 1-1.11 3.7l1.88.7c.48-1.32.88-2.63 1.18-3.94l-1.94-.46Zm-2.63 7.31a55 55 0 0 1-1.8 3.47l1.74.99c.68-1.2 1.3-2.4 1.87-3.6l-1.8-.86Zm-3.84 6.84a88.73 88.73 0 0 1-2.2 3.28l1.63 1.16a104.1 104.1 0 0 0 2.26-3.36l-1.69-1.08Zm-4.55 6.48c-.79 1.04-1.6 2.08-2.45 3.13l1.56 1.25a131.4 131.4 0 0 0 2.48-3.17l-1.6-1.2Zm-4.97 6.2c-.84 1-1.7 2-2.58 3.02l1.5 1.31a240.6 240.6 0 0 0 2.61-3.05l-1.53-1.28Zm-5.21 6.01-2.67 2.96 1.48 1.35 2.68-2.98-1.5-1.33Zm-5.36 5.9-2.71 2.94 1.47 1.36 2.71-2.94-1.47-1.35Zm-5.43 5.87-2.71 2.93 1.46 1.36 2.72-2.93-1.47-1.36Zm-5.43 5.87-2.7 2.95 1.48 1.35 2.7-2.95-1.48-1.35Zm-5.38 5.92-2.65 3 1.5 1.32 2.64-2.98-1.49-1.34Zm-5.28 6.03a255.7 255.7 0 0 0-2.58 3.07l1.54 1.28 2.56-3.05-1.52-1.3Zm-5.11 6.19c-.84 1.04-1.67 2.1-2.48 3.16l1.59 1.21c.8-1.04 1.62-2.09 2.45-3.13l-1.56-1.25Zm-4.88 6.38c-.8 1.09-1.58 2.18-2.33 3.28l1.65 1.13c.74-1.08 1.5-2.16 2.3-3.24l-1.63-1.17Zm-4.56 6.63a114.1 114.1 0 0 0-2.12 3.43l1.71 1.02a133.5 133.5 0 0 1 2.09-3.37l-1.68-1.08Zm-4.12 6.94-.94 1.78 1.78.9c.3-.57.6-1.15.92-1.73l-1.76-.95Zm-29.25 2.27a1 1 0 0 1-1.05.95l-8.99-.43a1 1 0 0 1 .1-2l7.99.39.38-8a1 1 0 0 1 2 .1l-.43 9ZM437 186c0 .63.02 1.25.04 1.86l-2 .08c-.02-.64-.03-1.29-.03-1.94h2Zm.35 5.55c.15 1.24.36 2.46.62 3.66l-1.95.42c-.27-1.25-.5-2.53-.65-3.83l1.98-.25Zm1.57 7.24c.37 1.18.79 2.34 1.25 3.5l-1.85.75c-.49-1.2-.93-2.42-1.31-3.65l1.91-.6Zm2.79 6.88c.54 1.1 1.14 2.2 1.77 3.28l-1.72 1a57.25 57.25 0 0 1-1.84-3.39l1.79-.89Zm3.76 6.45a78.3 78.3 0 0 0 2.15 3.06l-1.61 1.2c-.77-1.06-1.5-2.1-2.2-3.16l1.66-1.1Zm4.44 6.05c.77.96 1.56 1.93 2.39 2.9l-1.53 1.3a125.7 125.7 0 0 1-2.43-2.96l1.57-1.24Zm4.87 5.75 1.26 1.4-1.48 1.35-1.28-1.42 1.5-1.33Zm1.52 2.12a1 1 0 0 1-1.05.95l-8.99-.43a1 1 0 0 1 .1-2l7.99.39.38-8a1 1 0 0 1 2 .1l-.43 9ZM437 186c0 .63.02 1.25.04 1.86l-2 .08c-.02-.64-.03-1.29-.03-1.94h2Zm.35 5.55c.15 1.24.36 2.46.62 3.66l-1.95.42c-.27-1.25-.5-2.53-.65-3.83l1.98-.25Zm1.57 7.24c.37 1.18.79 2.34 1.25 3.5l-1.85.75c-.49-1.2-.93-2.42-1.31-3.65l1.91-.6Zm2.79 6.88c.54 1.1 1.14 2.2 1.77 3.28l-1.72 1a57.25 57.25 0 0 1-1.84-3.39l1.79-.89Zm3.76 6.45a78.3 78.3 0 0 0 2.15 3.06l-1.61 1.2c-.77-1.06-1.5-2.1-2.2-3.16l1.66-1.1Zm4.44 6.05c.77.96 1.56 1.93 2.39 2.9l-1.53 1.3a125.7 125.7 0 0 1-2.43-2.96l1.57-1.24Zm4.87 5.75 1.26 1.4-1.48 1.35-1.28-1.42 1.5-1.33ZM166 226.04a1 1 0 0 0 1.05.95l8.99-.43a1 1 0 1 0-.1-2l-7.99.39-.38-8a1 1 0 0 0-2 .1l.43 9ZM185.3 186c0 .63-.02 1.25-.04 1.86l2 .08c.02-.64.03-1.29.03-1.94h-2Zm-.35 5.55a42.25 42.25 0 0 1-.62 3.66l1.95.42c.27-1.25.5-2.53.66-3.83l-1.99-.25Zm-1.57 7.24a44.45 44.45 0 0 1-1.25 3.5l1.85.75c.49-1.2.93-2.42 1.31-3.65l-1.9-.6Zm-2.78 6.88c-.55 1.1-1.15 2.2-1.78 3.28l1.72 1a57.84 57.84 0 0 0 1.84-3.39l-1.78-.89Zm-3.77 6.45a78.33 78.33 0 0 1-2.15 3.06l1.61 1.2c.77-1.06 1.5-2.1 2.2-3.16l-1.66-1.1Zm-4.44 6.05c-.76.96-1.56 1.93-2.39 2.9l1.53 1.3c.83-1 1.65-1.97 2.43-2.96l-1.57-1.24Zm-4.87 5.75-1.26 1.4 1.48 1.35 1.28-1.42-1.5-1.33Zm-1.52 2.12a1 1 0 0 0 1.05.95l8.99-.43a1 1 0 1 0-.1-2l-7.99.39-.38-8a1 1 0 0 0-2 .1l.43 9ZM185.3 186c0 .63-.02 1.25-.04 1.86l2 .08c.02-.64.03-1.29.03-1.94h-2Zm-.35 5.55a42.25 42.25 0 0 1-.62 3.66l1.95.42c.27-1.25.5-2.53.66-3.83l-1.99-.25Zm-1.57 7.24a44.45 44.45 0 0 1-1.25 3.5l1.85.75c.49-1.2.93-2.42 1.31-3.65l-1.9-.6Zm-2.78 6.88c-.55 1.1-1.15 2.2-1.78 3.28l1.72 1a57.84 57.84 0 0 0 1.84-3.39l-1.78-.89Zm-3.77 6.45a78.33 78.33 0 0 1-2.15 3.06l1.61 1.2c.77-1.06 1.5-2.1 2.2-3.16l-1.66-1.1Zm-4.44 6.05c-.76.96-1.56 1.93-2.39 2.9l1.53 1.3c.83-1 1.65-1.97 2.43-2.96l-1.57-1.24Zm-4.87 5.75-1.26 1.4 1.48 1.35 1.28-1.42-1.5-1.33Zm-24.25 1.82a1 1 0 0 1-1.2.75l-8.77-2.03a1 1 0 0 1 .45-1.95l7.8 1.8 1.8-7.8a1 1 0 1 1 1.95.46l-2.03 8.77ZM62.5 119.5c0 .6.03 1.23.1 1.86l-2 .2c-.06-.7-.1-1.38-.1-2.06h2Zm.8 5.6c.3 1.19.71 2.4 1.2 3.66l-1.87.72c-.5-1.31-.93-2.6-1.27-3.86l1.94-.51Zm2.75 7.22a64.54 64.54 0 0 0 1.81 3.46l-1.74.98c-.68-1.2-1.3-2.4-1.87-3.57l1.8-.87Zm3.81 6.84c.68 1.08 1.4 2.18 2.14 3.29l-1.65 1.12c-.77-1.13-1.5-2.25-2.19-3.35l1.7-1.06Zm4.4 6.52c.75 1.04 1.53 2.1 2.34 3.16l-1.6 1.21a161 161 0 0 1-2.37-3.2l1.63-1.17Zm4.76 6.28c.8 1.02 1.63 2.04 2.48 3.07l-1.55 1.27a231 231 0 0 1-2.5-3.1l1.57-1.24Zm5.01 6.11c.85 1 1.7 2 2.58 3l-1.52 1.32c-.87-1.01-1.74-2.02-2.59-3.03l1.53-1.29Zm5.18 5.98 2.64 2.95-1.49 1.34c-.9-.99-1.77-1.98-2.65-2.96l1.5-1.33Zm5.3 5.88 2.68 2.92-1.47 1.36-2.69-2.93 1.48-1.35Zm5.38 5.82 2.7 2.9-1.45 1.36-2.72-2.9 1.47-1.36Zm5.42 5.78 2.73 2.88-1.45 1.37-2.73-2.88 1.45-1.37Zm5.46 5.75 2.73 2.88-1.45 1.38-2.73-2.88 1.45-1.38Zm5.45 5.76 2.73 2.9-1.46 1.37-2.72-2.9 1.45-1.37Zm5.44 5.8 2.7 2.93-1.48 1.35c-.88-.97-1.78-1.94-2.69-2.91l1.47-1.37Zm5.36 5.87c.9 1 1.79 1.99 2.65 2.97l-1.5 1.32-2.63-2.96 1.48-1.33Zm5.25 5.97a160.7 160.7 0 0 1 2.57 3.05l-1.55 1.27c-.81-1-1.66-2-2.53-3.02l1.51-1.3Zm5.07 6.16a99.75 99.75 0 0 1 2.42 3.19l-1.61 1.18c-.75-1.03-1.55-2.07-2.38-3.14l1.57-1.23Zm4.73 6.48c.38.56.73 1.11 1.08 1.66l-1.7 1.06c-.33-.53-.68-1.07-1.04-1.61l1.66-1.11Zm1.2 2.42a1 1 0 0 1-1.2.75l-8.77-2.03a1 1 0 0 1 .45-1.95l7.8 1.8 1.8-7.8a1 1 0 1 1 1.95.46l-2.03 8.77ZM62.5 119.5c0 .6.03 1.23.1 1.86l-2 .2c-.06-.7-.1-1.38-.1-2.06h2Zm.8 5.6c.3 1.19.71 2.4 1.2 3.66l-1.87.72c-.5-1.31-.93-2.6-1.27-3.86l1.94-.51Zm2.75 7.22a64.54 64.54 0 0 0 1.81 3.46l-1.74.98c-.68-1.2-1.3-2.4-1.87-3.57l1.8-.87Zm3.81 6.84c.68 1.08 1.4 2.18 2.14 3.29l-1.65 1.12c-.77-1.13-1.5-2.25-2.19-3.35l1.7-1.06Zm4.4 6.52c.75 1.04 1.53 2.1 2.34 3.16l-1.6 1.21a161 161 0 0 1-2.37-3.2l1.63-1.17Zm4.76 6.28c.8 1.02 1.63 2.04 2.48 3.07l-1.55 1.27a231 231 0 0 1-2.5-3.1l1.57-1.24Zm5.01 6.11c.85 1 1.7 2 2.58 3l-1.52 1.32c-.87-1.01-1.74-2.02-2.59-3.03l1.53-1.29Zm5.18 5.98 2.64 2.95-1.49 1.34c-.9-.99-1.77-1.98-2.65-2.96l1.5-1.33Zm5.3 5.88 2.68 2.92-1.47 1.36-2.69-2.93 1.48-1.35Zm5.38 5.82 2.7 2.9-1.45 1.36-2.72-2.9 1.47-1.36Zm5.42 5.78 2.73 2.88-1.45 1.37-2.73-2.88 1.45-1.37Zm5.46 5.75 2.73 2.88-1.45 1.38-2.73-2.88 1.45-1.38Zm5.45 5.76 2.73 2.9-1.46 1.37-2.72-2.9 1.45-1.37Zm5.44 5.8 2.7 2.93-1.48 1.35c-.88-.97-1.78-1.94-2.69-2.91l1.47-1.37Zm5.36 5.87c.9 1 1.79 1.99 2.65 2.97l-1.5 1.32-2.63-2.96 1.48-1.33Zm5.25 5.97a160.7 160.7 0 0 1 2.57 3.05l-1.55 1.27c-.81-1-1.66-2-2.53-3.02l1.51-1.3Zm5.07 6.16a99.75 99.75 0 0 1 2.42 3.19l-1.61 1.18c-.75-1.03-1.55-2.07-2.38-3.14l1.57-1.23Zm4.73 6.48c.38.56.73 1.11 1.08 1.66l-1.7 1.06c-.33-.53-.68-1.07-1.04-1.61l1.66-1.11Zm75.91-48.46a1 1 0 0 1-.34-1.37l4.6-7.73a1 1 0 1 1 1.72 1.02l-4.1 6.87 6.88 4.1a1 1 0 0 1-1.03 1.72l-7.73-4.61ZM408.01 90c-40.26.54-67.18 16.53-94.25 35.05-27.06 18.51-54.3 39.62-95.02 49.92l-.49-1.94c40.3-10.2 67.22-31.05 94.38-49.63C339.78 104.82 367.11 88.55 408 88l.02 2Z"/><path fill="currentColor" d="M405.37 174.86a1 1 0 0 0 .35-1.37l-4.6-7.73a1 1 0 1 0-1.73 1.02l4.1 6.87-6.87 4.1a1 1 0 0 0 1.02 1.72l7.73-4.61ZM215.35 90c40.26.54 67.18 16.53 94.25 35.05 27.05 18.51 54.3 39.62 95.02 49.92l.49-1.94c-40.3-10.2-67.23-31.05-94.38-49.63-27.15-18.58-54.48-34.85-95.36-35.4l-.02 2Z"/></svg>

<figcaption style="text-align: center">Figure 4.2: Mechanical analog of the Diffie-Hellman protocol.</figcaption>
</figure>

Another famous (and more widely used) public-key crypto system, the so called RSA-system invented in 1977 and named after **R**ivest, **S**hamir and **A**dleman[^25], will be discussed later. Its security is based on the (conjectured) computational difficulty of factoring large integers.

[^25]:They received the Turing award in 2003.

</div>
