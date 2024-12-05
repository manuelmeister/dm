# **Chapter 4**: Number Theory 

**4.1 Introduction**

Number theory is one of the most intriguing branches of mathematics. For a long time, number theory was considered one of the purest areas of mathematics, in the sense of being most remote from having applications. However, since the 1970's number theory has turned out to have intriguing and unexpected applications, primarily in cryptography.

In this course we discuss only some basic number-theoretic topics that have applications in Computer Science. In addition to the rich applications, a second reason for discussing the basics of number theory in a course in Computer Science is as a preparation for the chapter on algebra (Chapter 5).

#### **4.1.1 Number Theory as a Mathematical Discipline**

Number theory (in a strict sense1 ) is the mathematical theory of the natural numbers N = {0, 1, 2, . . .} or, more generally, of the integers, Z. The laws of the integers are so natural, simple, and well-known to us that it is amazing how apparently simple questions about the integers turn out to be extremely difficult and have resisted all attacks by the brightest mathematicians.

**Example 4.1.** A simple conjecture unproven to date is that there are infinitely many prime pairs, i.e., primes p such that p + 2 is also prime. The first prime pairs are (3, 5), (5, 7), (11, 13), and (17, 19).

**Example 4.2.** Can one find a triangle with a 90◦ angle whose three sides a, b, and c have integer lengths? An equivalent question is whether there exist positive

[^1]: In a more comprehensive understanding, number theory refers to a richer mathematical theory which also includes topics like, for instance, algebraic extensions of the rational numbers.

integers a, b, and c such that a 2 + b 2 = c 2 . The answer is yes. Examples are 3 2 + 42 = 52 and 122 + 52 = 132 . A straight-forward generalization of this question is whether there exist positive integers a, b, c, and n ≥ 3 such that a n + b n = c n. The answer (no such integers exist) is known as *Fermat's last theorem*, which remained one of the most famous open conjectures until Andrew Wiles settled the question some years ago, using highly sophisticated mathematics.

**Example 4.3.** The recent proof of the *Catalan conjecture* by Preda Mihailescu, who worked at ETH Zürich, is another break-through in number theory. This theorem states that the equation a m − b n = 1 has no other integer solutions but 3 2 − 2 3 = 1 (for m, n ≥ 2).

#### **4.1.2 What are the Integers?**

In this course we are trying to present a rigorous mathematical treatment of the material. Consequently, in order to present number theory, it appears that we would first have to define the integers, so we know what we are talking about, in contrast to the intuitive understanding of numbers acquired since the early years at school. However, such a formal, axiomatic treatment of the integers is beyond the scope of the course.

In this chapter we take the usual approach where we assume that we know what numbers and operations on numbers are and that we also know the basic facts about numbers (e.g. the commutative, associative and distributive laws, etc.) which we can use to prove statements. But we should point out that in such an informal approach it is difficult (if not impossible) to draw the dividing line between facts that are well-known and facts that require a proof. For example, why is there no integer between 0 and 1, why is −0 = 0, and why is a 2 ≥ 0 for all a ∈ Z? What is the complete list of facts we consider known, and which facts require a proof? The answer is not clear unless one states a list of axioms. For example, we will show an interesting proof of the fact that every number can be factored uniquely into primes. This is definitely a theorem that requires a proof, even though, after many years of mathematical education, the reader may consider it a well-known basic fact.

The integers are a special case of a mathematical structure called a *ring*, which will be discussed in Chapter 5. In this chapter we mention in a few places that concepts like divisors, greatest common divisors, ideals, etc. can be defined for any ring, not just for the integers.

### **4.2 Divisors and Division**

#### **4.2.1 Divisors**

**Definition 4.1.** For integers a and b we say that a *divides* b, denoted a | b, if there exists an integer c such that b = ac. In this case, a is called a *divisor*2 of b, and b is called a *multiple*3 of a. If a 6= 0 and a divisor c exists it is called the4 *quotient* when b is divided by a, and we write c = b a or c = b/a. We write a6 | b if a does not divide b.

Note that every non-zero integer is a divisor of 0. Moreover, 1 and −1 are divisors of every integer.

#### **4.2.2 Division with Remainders**

In the previous section we defined division of a by d for any divisor d of a. In this section we generalize division to the case where d is not a divisor of a and hence division yields a remainder5 . The following theorem was proved by Euclid around 300 B.C.

**Theorem 4.1** (Euclid). *For all integers* a and d 6= 0 *there exist unique integers* q and r *satisfying*

$$a=d q+r\qquad a n d\qquad0\leq r<|d|.$$

Here a is called the *dividend*, d is called the *divisor*, q is called the *quotient*, and r is called the *remainder*. The remainder r is often denoted as Rd(a) or sometimes as a mod d.

*Proof.* We carry out this proof in a detailed manner, also to serve as an example of a systematic proof.

We define S to be the set of possible nonnegative remainders:

$S\ \stackrel{{\rm def}}{{=}}\ \{s|\ s\geq0\ \ \mbox{and}\ \ a=dt+s\ \ \mbox{for some}\ t\in\mathbb{Z}\}$.

We prove the following three claims by first proving 1), then proving that 1) implies 2), and then proving that 2) implies 3).

1) S is not empty.

2) S contains an r < |d|.

3) The r of claim 2) is unique.

[^2]:German: Teiler

[^3]:German: Vielfaches

[^4]:One can prove that it is unique.

[^5]:German: Rest

*Proof of 1):* We use case distinction and prove the statement for three cases (one of which is always satisfied):

Case 1: a ≥ 0. Then a = d0 + a and hence a ∈ S.

Case 2: a < 0 and d > 0. Then a = da + (1 − d)a and thus (1 − d)a ∈ S since (1 − d)a ≥ 0 because both (1 − d) and a are ≤ 0.

Case 3: a < 0 and d < 0. Then a = d(−a) + (1 + d)a and thus (1 + d)a ∈ S since (1 + d)a ≥ 0 because both (1 + d) and a are ≤ 0.

*Proof that 1) implies 2):* Because S is not empty, it has a smallest element (due to the well-ordering principle), which we denote by r. We now prove that r < |d|, by contradiction, i.e., assuming r ≥ |d|. By definition of S we have a = dq + r for some q. We make a case distinction: d > 0 and d < 0. If d > 0, then

$$a=d(q+1)+(r-|d|),$$

hence r−|d| ≥ 0 and therefore r−|d| ∈ S, which means that r is not the smallest element of S, a contradiction. If d < 0, then a = d(q −1)+ (r−|d|), and the same argument as above shows that r − |d| ∈ S, a contradiction.

*Proof that 2) implies 3):* It remains to prove that r is unique. We give a proof only for d > 0; the case d < 0 is analogous and is left as an exercise. The proof is by contradiction. Suppose that there also exist r ′ 6= r with 0 ≤ r ′ < |d| and such that a = dq′ + r ′ for some q ′ . We distinguish the three cases q ′ = q, q ′ < q, and q ′ > q. If q ′ = q, then r ′ = a − dq′ = a − dq = r, a contradiction since we assumed r ′ 6= r. If q ′ < q, then q − q ′ ≥ 1, so

$$r^{\prime}=a-d q^{\prime}=(a-d q)+d(q-q^{\prime})\;\geq\;r+d.$$

Since r ′ ≥ r + d ≥ d, the condition 0 ≤ r ′ < |d| is violated, which is a contradiction. A symmetric argument shows that q ′ > q also results in a contradiction,

#### **4.2.3 Greatest Common Divisors**

**Definition 4.2.** For integers a and b (not both 0), an integer d is called a *greatest common divisor*6 of a and b if d divides both a and b and if every common divisor of a and b divides d, i.e., if

$d\mid a\ \wedge\ d\mid b\ \wedge\ \forall c\ ((c\mid a\ \wedge\ c\mid b)\ \rightarrow\ c\mid d)$.

The concept of a greatest common divisor applies not only to Z, but to more general structures (e.g. polynomial rings). If d and d ′ are both greatest common divisors of a and b, then d | d ′ and d ′ | d. For the integers Z, this means that d ′ = ±d, i.e., there are two greatest common divisors. (But for more general structures there can be more than two greatest common divisors.)

[^6]:Note that the term "greatest" does not refer to the order relation ≤ but to the divisibility relation.

**Definition 4.3.** For a, b ∈ Z (not both 0) one denotes the unique positive greatest common divisor by gcd(a, b) and usually calls it the greatest common divisor. If gcd(a, b) = 1, then a and b are called *relatively prime*7 .

**Lemma 4.2.** *For any integers* m, n and q*, we have*

$$\operatorname*{gcd}(m,n-q m)=\operatorname*{gcd}(m,n).$$

*Proof.* It is easy to prove (as an exercise) that every common divisor of m and n − qm (and therefore also the greatest) is also a common divisor of m and n, and vice versa.

This lemma implies in particular that

$$\operatorname*{gcd}(m,R_{m}(n))=\operatorname*{gcd}(m,n),$$

which is the basis for Euclid's well-known gcd-algorithm: Start with m < n and repeatedly replace the pair (m, n) by the pair (Rm(n), m) until the remainder is 0, at which point the last non-zero number is equal to gcd(m, n).

**Definition 4.4.** For a, b ∈ Z, the *ideal generated by* a and b 8 , denoted (a, b), is the set

$$(a,b)\ {\stackrel{\mathrm{def}}{=}}\ \{u a+v b\mid u,v\in\mathbb{Z}\}.$$

Similarly, the ideal generated by a single integer a is

$(a)\;\stackrel{\text{def}}{=}\;\{ua\mid u\in\mathbb{Z}\}$.

The following lemma implies that every ideal in Z can be generated by a single integer.

**Lemma 4.3.** For a, b ∈ Z *there exists* d ∈ Z *such that* (a, b) = (d).

*Proof.* If a = b = 0, then d = 0. Assume now that at least one of the numbers is non-zero. Then (a, b) contains some positive numbers, so (by the well-ordering principle) let d be the smallest positive element in (a, b). Clearly (d) ⊆ (a, b) since every multiple of d is also in (a, b). It remains to prove (a, b) ⊆ (d). For any c ∈ (a, b) there exist q and r with 0 ≤ r < d such that c = qd + r. Since both c and d are in (a, b), so is r = c − qd. Since 0 ≤ r < d and d is (by assumption) the smallest positive element in (a, b), we must have r = 0. Thus c = qd ∈ (d).

**Lemma 4.4.** Let a, b ∈ Z *(not both* 0*). If* (a, b) = (d)*, then* d *is a greatest common divisor of* a and b.

[^7]:German: teilerfremd

[^8]:German: durch a und b erzeugtes Ideal

*Proof.* d is a common divisor of a and b since a ∈ (d) and b ∈ (d). To show that d is a greatest common divisor, i.e., that every common divisor c of a and b divides d, note that c divides every integer of the form ua + vb, in particular d.

The following corollary follows from Lemmas 4.3 and 4.4.

**Corollary 4.5.** For a, b ∈ Z *(not both* 0*), there exist* u, v ∈ Z *such that*

gcd(a, b) = ua + vb.

**Example 4.4.** For a = 26 and b = 18 we have

gcd(26, 18) = 2 = (−2) · 26 + 3 · 18.

Also, for a = 17 and b = 13 we have

gcd(17, 13) = 1 = (−3) · 17 + 4 · 13.

An extension of Euclid's well-known gcd-algorithm allows to efficiently compute not only gcd(a, b), but also u and v such that gcd(a, b) = ua + vb.

#### **4.2.4 Least Common Multiples**

The least common multiple is a dual concept of the greatest common divisor.

**Definition 4.5.** The *least common multiple* l of two positive integers a and b, denoted l = lcm(a, b), is the common multiple of a and b which divides every common multiple of a and b, i.e.,

> a | l ∧ b | l ∧ ∀m (a | m ∧ b | m) → l | m .

### **4.3 Factorization into Primes**

#### **4.3.1 Primes and the Fundamental Theorem of Arithmetic**

In this section we prove the well-known fact that prime factorization of integers is unique. This statement is true more generally for certain types of rings (see Chapter 5), for example for the ring of polynomials over a field. Even though rings were not introduced so far, we give hints as to how a formulation can be generalized from the integers to more general rings.

**Definition 4.6.** A positive integer p > 1 is called *prime* if the only positive divisors of p are 1 and p. An integer greater than 1 that is not a prime is called *composite*9 . 10

[^9]:German: zusammengesetzt

[^10]:Note that 1 is neither prime nor composite.

This notion of having only trivial divisors extends to other rings, for example the ring of polynomials over R. In such a general context, the property is called *irreducible* rather than *prime*. The term *prime* is in general used for the property that if p divides a product of elements, then it divides at least one of them (see Lemma 4.7 below). For the integers, these two concepts are equivalent. The next lemma states one direction of this equivalence.

The following theorem is called the fundamental theorem of arithmetic.

**Theorem 4.6.** *Every positive integer can be written uniquely (up to the order in which factors are listed) as the product of primes.*11

#### **4.3.2 Proof of the Fundamental Theorem of Arithmetic**

**Lemma 4.7.** If p *is a prime which divides the product* x1x2 · · · xn *of some integers* x1, . . . , xn, *then* p *divides one of them, i.e.,* p | xi *for some* i ∈ {1, . . . , n}.

*Proof.* The proof is by induction on n. The claim is trivially true for n = 1 (induction basis). Suppose it is true for some general n (induction hypothesis). To prove the claim for n + 1 (induction step), suppose that p | x1 · · · xn+1. We let y := x1 · · · xn (and hence p | yxn+1) and look at the two cases p | y and p6 | y separately. If p | y, then p | xi for some 1 ≤ i ≤ n, due to the induction hypothesis, and we are done. If p6 | y, then, since p has no positive divisor except 1 and p, we have gcd(p, y) = 1. By Corollary 4.5 there are integers u and v such that up + vy = 1. Hence we have

$x_{n+1}=(up+vy)x_{n+1}=(ux_{n+1})p+v(yx_{n+1})$.

Because p divides both terms (uxn+1)p and v(yxn+1) in the sum on the right side, it follows that it also divides the sum, i.e., p | xn+1, which concludes the proof.

We now prove Theorem 4.6:

*Proof.* We first need to prove that a factorization into primes exists and then that it is unique.

The existence is proved by contradiction. Every prime can obviously be factored into primes. Let n be the smallest positive integer which has no prime factorization. Since it can not be a prime, we have n = km with 1 < k, m < n. Since both k and m can be factored into primes, so can km = n, a contradiction. Hence there is no smallest n that cannot be factored into primes, and therefore every n ≥ 1 can be factored into primes.

To prove the uniqueness of the prime factorization, suppose towards a contradiction that an integer n can be factored in two (possibly different) ways as a product of primes,

$$n=p_{1}^{a_{1}}p_{2}^{a_{2}}\cdot\cdot\cdot p_{r}^{a_{r}}=q_{1}^{b_{1}}q_{2}^{b_{2}}\cdot\cdot\cdot q_{s}^{b_{s}},$$

where the primes p1, . . . , pr and also the primes q1, . . . , qs are put in an increasing order and where we have written products of identical primes as powers (here ai > 0 and

[^11]:Note that 1 has zero prime factors, which is allowed.

bi > 0). Then for every i, pi | n and thus pi | q b1 1 q b2 2 · · · q bs s . Hence, by Lemma 4.7, pi | qj for some j and, because qj is a prime and pi > 1, we have pi = qj . Similarly for every j, qj = pi for some i. Thus the set of primes are identical, i.e., r = s and pi = qi for 1 ≤ i ≤ r. To show that the corresponding exponents ai and bi are also identical, suppose that ai < bi for some i. We can divide both expressions by p ai i , which results in two numbers that are equal, yet one is divisible by pi while the other is not. This is impossible since if two numbers are equal, then they have the same divisors.

#### **4.3.3 Expressing** gcd and lcm

The fundamental theorem of arithmetic assures that integers a and b can be written as

$$a=\prod_{i}p_{i}^{e_{i}}\qquad\quad\mathrm{and}\qquad\quad b=\prod_{i}p_{i}^{f_{i}}\,.$$

This product can be understood in two different ways. Either it is over all primes, where all but finitely many of the ei are 0, or it is over a fixed agreed set of primes. Either view is correct. Now we have

$$\operatorname*{gcd}(a,b)=\prod_{i}p_{i}^{\operatorname*{min}(e_{i},f_{i})}$$

and

$$\operatorname{lcm}(a,b)=\prod_{i}p_{i}^{\operatorname*{max}(e_{i},f_{i})}.$$

It is easy to see that

gcd(a, b) · lcm(a, b) = ab

because for all i we have

min(ei , fi) + max(ei , fi) = ei + fi .

#### **4.3.4 Non-triviality of Unique Factorization**

It is worth-while pointing out that this theorem is not self-evident, as it may appear to the reader completely familiar with it. There are in fact examples of rings in which the unique factorization into irreducible elements does not hold. We give two examples, one with unique factorization into irreducible elements, and one without.

**Example 4.5.** Let i = √ −1 denote the complex imaginary unit. The Gaussian integers

$$\mathbb{Z}[i]=\mathbb{Z}[{\sqrt{-1}}]=\{a+b i\mid a,b\in\mathbb{Z}\}$$

are the complex numbers whose real and imaginary parts are both integers. Since the norm (as complex numbers) is multiplied when two elements of Z[i] are multiplied, the units (actually four) are the elements with norm 1, namely 1, i, −1, and −i. Units are elements that divide every other element. An irreducible element p in Z[i] is an element whose only divisors are units and associates of p (i.e., elements up where u is a unit). By a generalization of the arguments given for Z one can show that factorization into irreducible elements is unique in Z[i]. (This is not obvious.)

**Example 4.6.** Consider now a slightly twisted version of the Gaussian integers:

$$\mathbb{Z}[{\sqrt{-5}}]=\{a+b{\sqrt{5}}i\mid a,b\in\mathbb{Z}\}.$$

Like the Gaussian integers, this set is closed with respect to addition and multiplication (of complex numbers). For example,

$(a+b\sqrt{5}i)(c+d\sqrt{5}i)=ac-5bd+(bc+ad)\sqrt{5}i$.

The only units in Z[ √ −5] are 1 and −1. One can check easily, by ruling out all possible divisors with smaller norm, that the elements 2, 3, 1 + √ 5i, and 1 − √ 5i are irreducible. The element 6 can be factored in two different ways into irreducible elements:

$$6=2\cdot3=(1+{\sqrt{5}}i)(1-{\sqrt{5}}i).$$

#### **4.3.5 Irrationality of Roots**

As a consequence of the unique prime factorization we can prove:

**Theorem 4.8.** √ n *is irrational unless* n *is a square (*n = c 2 *for some* c ∈ Z).

*Proof.* Suppose √ n = a/b for two integers a and b. Then a 2 = nb2 . If n is not a square, it contains at least one prime factor p with an odd power. Since the number of prime factors p in any square is even, we have a contradiction: a 2 contains an even number of factors p while nb2 contains an odd number of factors p. This is impossible according to Theorem 4.6.

Note that this proof is simpler and more general than the proof given in Example 2.28 because there we have not made use of the unique prime factorization of the integers.

#### **4.3.6 A Digression to Music Theory**

An octave in music corresponds to the doubling of the frequency of a tone. Similarly, a fifth12 corresponds to a ratio 3 : 2, a musical fourth13 corresponds to a ratio 4 : 3, and a major and minor third14 correspond to the ratios 5 : 4 and 6 : 5, respectively.

No multiple of fifths (or fourths) yields a multiple of octaves, since otherwise we would have ( 3 2 ) n = 2m for some n and m, which is equivalent to 3 n = 2m+n . This implies that one cannot tune a piano so that all intervals are correct since on the piano (considered to be extended to many octaves), one hits a higher octave after a certain number (namely 12) of fifths. It can be viewed as a number-theoretic miracle that tuning a piano is nevertheless possible with only very small inaccuracies. If one divides the octave into 12 equal (half-tone) intervals, a half-tone corresponds to a frequency ratio of 12√ 2 ≈ 1.05946. Three, four, five, and seven half-tones yield frequency ratios of

> 2 1/4 = 1.1892 ≈ 6/5,

[^12]:German: Quinte

[^13]:German: Quarte

[^14]:German: Terz

2 1/3 = 1.2599 ≈ 5/4, 2 5/12 = 1.33482 ≈ 4/3, and 2 7/12 = 1.49828 ≈ 3/2,

approximating the minor third, major third, fourth, and fifth astonishingly well.

One can view these relations also as integer approximations. For example, we have 531′ 441 = 312 ≈ 2 19 = 524′ 288, which implies that ( 3 2 ) 12 ≈ 2 7 , i.e., 12 fifths are approximately seven octaves.

A piano for which every half-tone has the same frequency ratio, namely 12√ 2, is called a *well-tempered*15 piano. The reason why music is a pleasure, despite its theoretically unavoidable inaccuracy, is that our ear is trained to "round tones up or down" as needed.

### **4.4 Some Basic Facts About Primes**

#### **4.4.1 The Density of Primes**

The following fact was known already to Euclid.

**Theorem 4.9.** *There are infinitely many primes.*

*Proof.* To arrive at a contradiction, suppose that the set of primes is finite, say P = {p1, . . . , pm}. Then the number n = Qm i=1 pi + 1 is not divisible by any of the primes p1, . . . , pm and hence n is either itself a prime, or divisible by a prime not in {p1, . . . , pm}. In either case, this contradicts the assumption that p1, . . . , pm are the only primes.

This is a non-constructive existence proof. We now give a constructive existence proof for another number-theoretic fact.

**Theorem 4.10.** *Gaps between primes can be arbitrarily large, i.e., for every* k ∈ N *there exists* n ∈ N *such that the set* {n, n + 1, · · · , n + k − 1} *contains no prime.*

*Proof.* Let n = (k + 1)! + 2. Then for any l with 2 ≤ l ≤ k + 1, l divides (k + 1)! = n − 2 and hence l also divides (k + 1)! + l = n − 2 + l, ruling out n, n + 1, . . . , n + k − 1 as possible primes.

**Example 4.7.** The largest gap between two primes below 100 is 8. Which are these primes?

There exists a huge body of literature on the density and distribution of primes. We only state the most important one of them.

**Definition 4.7.** The *prime counting function* π : R → N is defined as follows: For any real x, π(x) is the number of primes ≤ x.

[^15]:German: wohltemperiert

The following theorem proved by Hadamard and de la Vall´ee Poussin in the 19th century states that the density of primes ≤ x is approximately 1/ ln(x). This shows that if one tries to find a large (say 1024 bit) prime, for instance for cryptographic purposes, then a randomly selected odd integer has reasonable chances of being prime. Much more precise estimates for π(x) are known today.

#### **Theorem 4.11.** limx→∞ π(x) ln(x) x = 1.

Two of the main open conjectures on prime numbers are the following:

**Conjecture 4.1.** There exist infinitely many twin primes, i.e., primes p for which also p + 2 is prime.

**Conjecture 4.2** (Goldbach). Every even number greater than 2 is the sum of two primes.

#### **4.4.2 Remarks on Primality Testing**

How can we test whether a given integer n is a prime? We can test whether any smaller prime is a divisor of n. The following lemma provides a well-known short-cut. In a practical implementation, one might not have a list of primes up to √ n and can instead simply try all odd numbers as possible divisors.

**Lemma 4.12.** *Every composite integer* n *has a prime divisor* ≤ √ n.

*Proof.* If n is composite, it has a divisor a with 1 < a < n. Hence n = ab for b > 1. Either a ≤ √ n or b ≤ √ n since otherwise ab > √ n · √ n = n. Hence n has a divisor c with 1 < c ≤ √ n. Either c is prime or, by Theorem 4.6, has a prime divisor d < c ≤ √ n.

For large integers, trial-division up to the square root is hopelessly inefficient. Let us briefly discuss the algorithmic problem of testing primality.

Primes are of great importance in cryptography. In many applications, one needs to generate very large primes, with 1024 or even 2048 bits. In many cases, the primes must remain secret and it must be infeasible to guess them. They should therefore be selected uniformly at random from the set of primes in a certain interval, possibly satisfying some further restrictions for security or operational reasons.

Such primes can be generated in three different ways. The first approach is to select a random (odd) integer from the given interval (e.g. [101023 , 101024 − 1]) and to apply a general primality test. Primality testing is a very active research area. The record in general primality testing is around 8.000 decimal digits and required sophisticated techniques and very massive computing power. As a celebrated theoretical breakthrough (with probably little practical relevance), it was proved in 2002 that primality testing is in P, i.e., there is a worst-case polynomial-time algorithm for deciding primality of an integer.16

The second approach is like the first, but instead of a primality test one performs a probabilistic compositeness test. Such a test has two outcomes, "composite" and "possibly prime". In the first case, one is certain that the number is composite, while in the

[^16]:M. Agrawal, N. Kayal, and N. Saxena, PRIMES is in P, *Annals of Mathematics* vol. 160, pp. 781– 793.

other case one has good chances that the number is a prime, without being certain. More precisely, one can fix a (very small) probability ǫ (e.g. ǫ = 10−100) and then perform a test such that for any composite integer, the probability that the test does not output "composite" is bounded by ǫ.

A third approach is to construct a prime together with a proof of primality. As we might see later, the primality of an integer n can be proved if one knows part of the factorization of n − 1.

### **4.5 Congruences and Modular Arithmetic**

#### **4.5.1 Modular Congruences**

We consider the following motivating example:

**Example 4.8.** Fermat's famous "last theorem", proved recently by Wiles, states that the equation x n + y n = z n has no solution in positive integers x, y, z for n ≥ 3. Here we consider a similar question. Does x 3 + x 2 = y 4 + y + 1 have a solution in integers x and y?

The answer is "no", and the proof is surprisingly simple: Obviously, x must be either even or odd. In both cases, x 3 + x 2 is even. On the other hand, y 4 + y + 1 is odd no matter whether y is even or odd. But an even number cannot be equal to an odd number.

Here is another example whose solution requires a generalization of the above trick.

**Example 4.9.** Prove that x 3 − x = y 2 + 1 has no integer solutions.

**Definition 4.8.** For a, b, m ∈ Z with m ≥ 1, we say that a *is congruent to* b *modulo* m if m divides a − b. We write a ≡ b (mod m) or simply a ≡m b, i.e.,

$$a\equiv_{m}b\quad\stackrel{\mathrm{def}}{\Longleftrightarrow}\quad m\mid(a-b).$$

**Example 4.10.** We have 23 ≡7 44 and 54321 ≡10 1. Note that a ≡2 b means that a and b are either both even or both odd.

**Example 4.11.** If a ≡2 b and a ≡3 b, then a ≡6 b. The general principle underlying this example will be discussed later.

The above examples 4.8 and 4.9 make use of the fact that if an equality holds over the integers, then it must also hold modulo 2 or, more generally, modulo any modulus m. In other words, for any a and b,

$a=b\ \Longrightarrow\ a\equiv_{m}b$ (4.1)

for all m, i.e., the relation ≡m is reflexive (a ≡m a for all a). It is easy to verify that this relation is also symmetric and transitive, which was already stated in Chapter 3:

**Lemma 4.13.** *For any* m ≥ 1, ≡m *is an equivalence relation on* Z.

The implication (4.1) can be turned around and can be used to prove the inequality of two numbers a and b:

$$a\neq_{m}b\ \implies\ a\neq b.$$

The following lemma shows that modular congruences are compatible with the arithmetic operations on Z.

**Lemma 4.14.** If a ≡m b and c ≡m d*, then*

a + c ≡m b + d and ac ≡m bd.

*Proof.* We only prove the first statement and leave the other proof as an exercise. We have m | (a − b) and m | (c − d). Hence m also divides (a − b) + (c − d) = (a + c) − (b + d), which is the definition of a + c ≡m b + d.

**Corollary 4.15.** Let f(x1, . . . , xk) *be a multi-variate polynomial in* k *variables with integer coefficients, and let* m ≥ 1*. If* ai ≡m bi for 1 ≤ i ≤ k*, then*

$$f(a_{1},\ldots,a_{k})\ \equiv_{m}\ f(b_{1},\ldots,b_{k}).$$

*Proof.* Evaluating a polynomial can be achieved by a sequence of additions and multiplications. In each such step the congruence modulo m is maintained, according to Lemma 4.14.

#### **4.5.2 Modular Arithmetic**

There are m equivalence classes of the equivalence relation ≡m, namely [0], [1], . . . , [m − 1]. Each equivalence class [a] has a natural representative Rm(a) ∈ [a] in the set

Zm := {0, . . . , m − 1}

of remainders modulo m. 17

In the following we are often interested only in the remainder of an integer (e.g. the result of a computation) modulo some modulus m. Addition and multiplication modulo m can be considered as operations on the set Zm. We will be interested in this structure in Chapter 5 where we will see that it is an important example of a so-called ring.

[^17]:Recall that Rm(a) denotes the remainder when a is divided by m.

**Example 4.12.** Is n = 84877 · 79683 − 28674 · 43879 even or odd? The answer is trivial and does not require the computation of n. The product of two odd numbers is odd, the product of an even and an odd numbers is even, and the difference of an odd and an even number is odd. Thus n is odd.

The following lemma establishes the simple connection between congruence modulo m and remainders modulo m. The proof is easy and left as an exercise.

## **Lemma 4.16.** *For any* a, b, m ∈ Z *with* m ≥ 1,

- (i) a ≡m Rm(a). **(ii)** a ≡m b ⇐⇒ Rm(a) = Rm(b).
  The above lemma together with Lemma 4.14 implies that if in a computation involving addition and multiplication one is interested only in the remainder of the result modulo m, then one can compute remainders modulo m at any intermediate step (thus keeping the numbers small), without changing the result. This is referred to as *modular arithmetic*.

**Corollary 4.17.** Let f(x1, . . . , xk) *be a multi-variate polynomial in* k *variables with integer coefficients, and let* m ≥ 1*. Then*

$R_{m}\left(f(a_{1},...,a_{k})\right)=R_{m}\left(f(R_{m}(a_{1}),...,R_{m}(a_{k}))\right)$.

*Proof.* By Lemma 4.16 (i) we have ai ≡m Rm(ai) for all i. Therefore, using Corollary 4.15 we have f(a1, . . . , ak) ≡m f(Rm(a1), . . . , Rm(ak)). Thus, using Lemma 4.16 (ii) we obtain the statement to be proved.

**Example 4.13.** Compute 7 100 modulo 24. We make use of the fact that 7 2 = 49 ≡24 1. Thus R24(7100) = R24((72 ) 50) = R24(R24(72 ) 50) = R24(150) = R24(1) = 1.

**Example 4.14.** Remainders can be used to check the correctness of calculations (which were, for instance, carried out by hand). If an error occurred during the computation, it is likely that this error also occurs when the computation is considered modulo some m. To check the result n of a computation one can compare Rm(n) with the remainder modulo m obtained by continuously reducing intermediate results of the computation. The modulus m = 9 is especially suited because R9(n) can be easily computed by adding the decimal digits of n (prove this!), and computing the remainder modulo 9 of this sum. For instance, to check whether 247 · 3158 = 780026 is correct one can compute R9(247) = R9(2 + 4 + 7) = 4 and R9(3158) = R9(3 + 1 + 5 + 8) = 8 to obtain R9(247 · 3158) = R9(4 · 8) = 5. On the other hand we have R9(780026) = R9(7 + 8 + 2 + 6) = 5. Hence the result can be correct.

**Example 4.15.** A similar test can be performed for m = 11. R11(n) can be computed by adding the decimal digits of n with alternating sign modulo 11. This test, unlike that for m = 9, detects the swapping of digits.

**Example 4.16.** The larger m, the more likely it is that a calculation error is detected. How could one implement a similar test for m = 99, how for m = 101?

#### **4.5.3 Multiplicative Inverses**

Consider the problem of finding the solutions x for the congruence equation

ax ≡m b.

Obviously, if x is a solution, then so is x + km for any k ∈ Z. Hence we can restrict the consideration to solutions in Zm. Of special interest is the case where gcd(a, m) = 1 and b = 1.

**Lemma 4.18.** *The congruence equation*

$$a x\equiv_{m}1$$

*has a solution* x ∈ Zm *if and only if* gcd(a, m) = 1*. The solution is unique.*

*Proof.* (=⇒) If x satisfies ax ≡m 1, then ax = km + 1 for some k. Note that gcd(a, m) divides both a and m, hence also ax − km, which is 1. Thus gcd(a, m) = 1.

(⇐=) Assume now that gcd(a, m) = 1. According to Corollary 4.5 there exist integers u and v such that ua + vm = gcd(a, m) = 1. Since vm ≡m 0 we have ua ≡m 1. Hence x = u is a solution in Z, and thus x = Rm(u) is a solution in Zm.

To prove uniqueness of x in Zm, suppose there is another solution x ′ ∈ Zm. Then ax − ax′ ≡m 0, thus a(x − x ′ ) ≡m 0 and hence m divides a(x − x ′ ). Since gcd(a, m) = 1, m must divide (x − x ′ ). 18 Therefore Rm(x) = Rm(x ′ ) and hence Rm(x) is the unique solution in Zm.

**Definition 4.9.** If gcd(a, m) = 1, the unique solution x ∈ Zm to the congruence equation ax ≡m 1 is called the *multiplicative inverse of* a *modulo* m. One also uses the notation x ≡m a −1 or x ≡m 1/a.

**Example 4.17.** The multiplicative inverse of 5 modulo 13 is 8 since 5 · 8 = 40 ≡13 1.

[^18]:If k divides mn and gcd(k, n) = 1, then k divides m. (Prove this!)

The multiplicative inverse of a modulo m can efficiently be computed using the so-called extended Euclidean algorithm. Note that if gcd(a, m) 6= 1, then a has no multiplicative inverse modulo m.

#### **4.5.4 The Chinese Remainder Theorem**

We now consider a system of congruences for an integer x.

**Example 4.18.** Find an integer x for which x ≡3 1, x ≡4 2, and x ≡5 4. A solution is x = 34 as one can easily verify. This is the only solution in Z60, but by adding multiples of 60 to x one obtains further solutions.

The following theorem, known as the *Chinese Remainder Theorem (CRT)*, states this for general systems of congruences. The proof of the theorem is constructive: it shows how a solution x can be constructed efficiently.

Q **Theorem 4.19.** Let m1, m2, . . . , mr *be pairwise relatively prime integers and let* M = r i=1 mi *. For every list* a1, . . . , ar *with* 0 ≤ ai < mi for 1 ≤ i ≤ r*, the system of congruence equations*

$$x\equiv_{m_{1}}a_{1}$$
$$x\equiv_{m_{2}}a_{2}$$
$$\ldots$$
$$x\equiv_{m_{r}}a_{r}$$

for x *has a unique solution* x *satisfying* 0 ≤ x < M.

*Proof.* Let Mi = M/mi . Hence gcd(Mi , mi) = 1 because every factor mk (where k 6= i) of Mi is relatively prime to mi , and thus so is Mi . Thus there exists an Ni satisfying

$M_i N_i\equiv_{m_i}1$.

Note that for all k 6= i we have Mi ≡mk 0 and thus

$$M_{i}N_{i}\equiv_{m_{k}}0.$$

Therefore

$$\sum_{i=1}^{r}a_{i}M_{i}N_{i}\ \equiv_{m_{k}}\ a_{k}$$

for all k. Hence the integer x defined by

$$x=R_{M}\left(\sum_{i=1}^{r}a_{i}M_{i}N_{i}\right)$$

satisfies all the congruences. In order to prove uniqueness, observe that for two solutions x ′ and x ′′ , x ′ − x ′′ ≡mi 0 for all i, i.e., x ′ − x ′′ is a multiple of all the mi and hence of lcm(m1, . . . , mr) = M. Thus x ′ ≡M x ′′ .

The Chinese Remainder Theorem has several applications. When one is interested in a computation modulo M, then the moduli mi can be viewed as a coordinate system. One can project the numbers of interest modulo the mi , and perform the computation in the r projections (which may be more efficient than computing directly modulo M). If needed at the end, one can reconstruct the result from the projections.

**Example 4.19.** Compute R35(21000). We can do this computation modulo 5 and modulo 7 separately. Since 2 4 ≡5 1 we have 2 1000 ≡5 1. Since 2 3 ≡7 1 we have 2 1000 ≡7 2. This yields 2 1000 ≡35 16 since 16 is the (unique) integer x ∈ [0, 34] with x ≡5 1 and x ≡7 2.

### **4.6 Application: Diffie-Hellman Key-Agreement**

Until the 1970's, number theory was considered one of the purest of all mathematical disciplines in the sense of being furthest away from any useful applications. However, this has changed dramatically in the 1970's when crucial applications of number theory in cryptography were discovered.

In a seminal 1976 paper19, Diffie and Hellman proposed the revolutionary concept of *public-key cryptography*. Most security protocols, and essentially all those used on the Internet, are based on public-key cryptography. Without this amazing and paradoxical invention, security on the Internet would be unthinkable.

Consider the *key distribution* problem. In order to encrypt the communication between two parties, say Alice and Bob, they need a secret key known only to them. How can they obtain such a key in a setting, like the Internet, where they initially share no secret information and where they are connected only by an insecure communication channel to which a potential adversary has access? We describe the famous Diffie-Hellman protocol which allows to solve this seemingly paradoxical problem.

The Diffie-Hellman protocol (see Figure 4.2), as originally proposed20, makes use of exponentiation modulo a large prime p, for instance with 2048 bits. While y = Rp(g x ) can be computed efficiently (how?), even if p, g and x are numbers of several hundred or thousands of digits, computing x when given p, g and y is generally (believed to be) computationally infeasible. This problem is known

[^19]:W. Diffie and M.E. Hellman, New directions in cryptography, *IEEE Transactions on Information Theory*, vol. 22, no. 6, pp. 644-654, 1976.

[^20]:Since then, other versions, for instance based on elliptic curves, have been proposed.

as (a version of) the *discrete logarithm problem*. The security of the Diffie-Hellman protocol is based on this asymmetry in computational difficulty. Such a function, like x 7→ Rp(g x ), is called a one-way function: it is easy to compute in one direction but computationally very hard to invert.21

The prime p and the basis g (e.g. g = 2) are public parameters, possibly generated once and for all for all users of the system. The protocol is symmetric, i.e., Alice and Bob perform the same operations. The exchange of the so-called *public keys* yA and yB must be authenticated, but not secret.22 It is easy to see that Alice and Bob end up with the same value kAB = kBA which they can use as a secret key for encrypting subsequent communication.23 In order to compute kAB from yA and yB, an adversary would have to compute either xA or xB, which is believed to be infeasible.

**Alice insecure channel Bob** select xA at random from {0, . . . , p−2} yA := Rp(g xA ) select xB at random from {0, . . . , p−2} yB := Rp(g xB ) ✲ yA ✛ yB kAB := Rp(y xA B ) kBA := Rp(y xB A ) kAB ≡p y xA B ≡p (g xB ) xA ≡p g xAxB ≡p kBA

Figure 4.1: The Diffie-Hellman key agreement protocol.

A mechanical analogue of a one-way function is a padlock without a key.24 The mechanical analog of the Diffie-Hellman protocol is shown in Figure 4.2. Alice and Bob can exchange their locks (closed) and keep a copy in the open state. Then they can both generate the same configuration, namely the two locks

[^21]:It is not known whether one-way functions actually exist, but it is conjectured that exponentiation modulo a prime p is a one-way function for most p.

[^22]:This can be achieved by recognizing the other party's voice in a phone call or, indirectly, by the use of public-key certificates.

[^23]:More precisely, they can derive a common secret key, for example by applying a hash function to KAB.

[^24]:A padlock with a key corresponds to a so-called *trapdoor one-way function* which is not considered here.

![](_page_101_Figure_1.png)

Figure 4.2: Mechanical analog of the Diffie-Hellman protocol.

interlocked. For the adversary, this is impossible without breaking open one of the locks.

Another famous (and more widely used) public-key cryptosystem, the socalled RSA-system invented in 1977 and named after Rivest, Shamir and Adleman25, will be discussed later. Its security is based on the (conjectured) computational difficulty of factoring large integers.

[^25]:They received the Turing award in 2003.

