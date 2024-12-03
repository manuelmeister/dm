# **Chapter 1**: Introduction and Motivation

## **1.1 Discrete Mathematics and Computer Science**

Discrete mathematics is concerned with finite and countably infinite mathematical structures. Most areas within Computer Science make heavy use of concepts from discrete mathematics. The applications range from algorithms (design and analysis) to databases, from security to graphics, and from operating systems to program verification.1

There are (at least) three major reasons why discrete mathematics is of central importance in Computer Science:

- 1. **Discrete structures.** Many objects studied in Computer Science are discrete mathematical objects, for example a graph modeling a computer network or an algebraic group used in cryptography or coding theory. Many applications exploit sophisticated properties of the involved structures.
- 2. **Abstraction.** Abstraction is of paramount importance in Computer Science. A computer system can only be understood by considering a number of layers of abstraction, from application programs via the operating system layer down to the physical hardware. Discrete mathematics, especially the way we present it, can teach us the art of abstraction. We refer to Section 1.3 for a discussion.
- 3. **Mathematical derivations.** Mathematical reasoning is essential in any engineering discipline, and especially in Computer Science. In many disciplines (e.g.2 mechanical engineering), mathematical reasoning happens in

<sup>1</sup>We also refer to the preface to these lecture notes where the special role of mathematics for Computer Science is mentioned.

<sup>2&</sup>quot;e.g.", the abbreviation of the Latin "exempli gratia" should be read as "for example".

the form of *calculations* (e.g. calculating the wing profile for an airplane). In contrast, in Computer Science, mathematical reasoning often happens in the form of a *derivation* (or, more mathematically stated, a *proof*). For example, understanding a computer program means to understand it as a well-defined discrete mathematical object, and making a desirable statement about the program (e.g. that it terminates within a certain number of steps) means to prove (or derive) this statement. Similarly, the statement that a system (e.g. a block-chain system) is secure is a mathematical statement that requires a proof.

## **1.2 Discrete Mathematics: A Selection of Teasers**

We present a number of examples as teasers for this course. Each example is representative for one or several of the topics treated in this course.3

**Example 1.1.** Consider a k × k chess board (ignoring the black/white coloring). Prove or disprove the following statement: No matter which of the squares is marked, the remaining area of the board (consisting of k 2 − 1 squares) can be covered completely with (non-overlapping) L-shaped pieces of paper each consisting of three squares.

This example allows us to informally introduce a few mathematical concepts that will be discussed in detail later in this course. The above statement depends on k. For certain k it is true and for certain k it is false. Let us therefore introduce a so-called *logical predicate* P, a function from the natural numbers to {0, 1}, where 1 stands for true and 0 stands for false. Then P(k) = 1 means that the statement is true for k, and P(k) = 0 means that the statement is false for k.

The case k = 2 is trivial: If any square (which is a corner square) is removed from a 2 × 2 chess board, the remaining three squares form the given L-shape. Hence we have P(2) = 1.

For k = 3, a simple counting argument shows that P(3) = 0. Since k 2 −1 = 8 squares should be covered three at a time (by L-shapes), two squares remain at the end. More generally, a solution can exist only if k 2 − 1 is divisible by 3. For which k is this the case? In our notation we will (in Chapter 4) write

$$k^{2}\ \equiv_{3}\ 1$$

for this condition, read as "k 2 is congruent to 1 modulo 3." This condition is equivalent to

$$k\equiv_{3}1\;\;\;\mathrm{or}\;\;\;k\equiv_{3}2.$$

<sup>3</sup>The reader should not worry too much if he or she is not familiar with some of the concepts discussed in this section, for example the interpolation of a polynomial, computation modulo a number n, Euclid's algorithm for computing greatest common divisors, or matrices.

Hence we have P(k) = 0 for all k with k ≡3 0 (i.e.,4 the k divisible by 3).5

The case k = 4 can be solved easily by finding a solution for each of the three types of squares (corner, edge, interior of board) that could be marked. Hence we have proved P(4) = 1. This proof type will later be called a *proof by case distinction*.

For the case k = 5 one can prove that P(5) = 0 by showing that there is (at least) a square which, when marked, leaves an area not coverable by L-shapes. Namely, if one marks a square next to the center square, then it is impossible to cover the remaining area by L-shapes. This proof type will later be called a *proof by counterexample*.

We have P(6) = 0 because 6 is divisible by 3, and hence the next interesting case is k = 7. The reader can prove as an exercise that P(7) = 1. (How many cases do you have to check?)

The question of interest is, for a general k, whether P(k) = 1 or P(k) = 0. But one can prove (explained in the lecture) that

$$P(k)=1~\implies~P(2k)=1,$$

i.e., that if the statement is true for some k, then it is also true for two times k. This implies that P(2i ) = 1 for any i and also that P(7 · 2 i ) = 1 for any i. Hence we have P(8) = 1, and P(9) = 0, leaving P(10) and P(11) as the next open cases. One can also prove the following generalization of the above-stated fact:

$P(k)=1$ and $P(\ell)=1$$\Longrightarrow$$P(k\ell)=1$.

We point out that, already in this first example, we understand the reasoning leading to the conclusion P(k) = 0 or P(k) = 1 as a *proof*.

**Example 1.2.** Consider the following simple method for testing primality. Prove or disprove that an odd number n is a prime if and only if 2 n−1 divided by n yields remainder 1, i.e., if

$$2^{n-1}\equiv_{n}1.$$

One can easily check that 2 n−1 ≡n 1 holds for the primes n = 3, 5, 7, 11, 13 (and many more). Moreover, one can also easily check that 2 n−1 6≡n 1 for the first odd composite numbers n = 9, 15, 21, 25, etc. But is the formula a general primality test? The solution to this problem will be given in Chapter 4.

**Example 1.3.** The well-known cancellation law for real numbers states that if ab = ac and a 6= 0, then b = c. In other words, one can divide both sides by a. How general is this law? Does it hold for the polynomials over R, i.e., does

<sup>4&</sup>quot;i.e.", the abbreviation of the Latin "id est", should be read as "that is" (German: "das heisst").

<sup>5</sup>The fact that the equation k 2 ≡p 1 has two solutions modulo p, for any prime p, not just for p = 3, will be obvious once we understand that computing modulo p is a *field* (see Chapter 5) and that every element of a field has either two square roots or none.

a(x)b(x) = a(x)c(x) imply b(x) = c(x) if a(x) 6= 0? Does it hold for the integers modulo m, i.e., does ab ≡m ac imply b ≡m c if a 6= 0? Does it hold for the permutations, when multiplication is defined as composition of permutations? What does the condition a 6= 0 mean in this case? Which abstraction lies behind the cancellation law? This is a typical algebraic question (see Chapter 5).

**Example 1.4.** It is well-known that one can interpolate a polynomial a(x) = adx d + ad−1x d−1 + · · · a1x + a0 of degree d with real coefficients from any d + 1 values a(αi), for distinct α1, . . . , αd+1. Can we also construct polynomials over a finite domain (which is of more interest and use in Computer Science), keeping this interpolation property?

For example, consider computation modulo 5. There are 5 3 = 125 polynomials a2x 2 +a1x+a0 of degree 2 because we can freely choose three coefficients from {0, 1, 2, 3, 4}. It is straight-forward (though cumbersome) to verify that if we fix any three evaluation points (for example 0, 2, and 3), then the polynomial is determined by the values at these points. In other words, two different polynomials p and q result in distinct lists (p(0), p(2), p(3)) and (q(0), q(2), q(3)) of polynomial values. What is the general principle explaining this? For the answer and applications, see Chapter 5.

## **1.3 Abstraction: Simplicity and Generality**

A main theme of this course is *abstraction*. In everyday life, the term "abstract" has a negative meaning. It stands for non-intuitive and difficult-to-understand. For us, abstraction will have precisely the opposite meaning. It will stand for simplicity and generality. I hope to be able to convey the joy and importance of simplification and generalization by abstraction.

Indeed, abstraction is probably the most important principle in programming and the design of information systems. Computers and computer programs are highly (perhaps unimaginably) complex systems. For a computer system with only 1000 bits of storage, the number 2 1000 of system states is greater than the number of atoms in the known universe. The immense complexity of software systems is usually grossly underestimated, resulting in potentially catastrophic software failures. For typical commercial software, failures are the rule rather than the exception.

In order to manage the complexity, software systems are divided into components (called modules, layers, objects, or abstract data types) that interact with each other and with the environment in a well-defined manner. For example, the Internet communication software is divided into a number of layers, each with a dedicated set of tasks. The IP layer transports packets between computers, and the TCP layer manages reliable connections. The potential complexity of the interaction between subsystems is channeled into clearly specified interfaces. The behavior of a subsystem is described by a manageable number of rules. This is abstraction. Without abstraction, writing good software is impossible.

Abstraction means *simplification*. By an abstraction one ignores all aspects of a system that are not relevant for the problem at hand, concentrating on the properties that matter.

Abstraction also means *generalization*. If one proves a property of a system described at an abstract level, then this property holds for any system with the same abstraction, independently of any details.

**Example 1.5.** A standard Swiss chocolate consists of 6 rows of 4 pieces each. We would like to break it into its 24 pieces using the minimal number of breaking operations. The first breaking operation can break the chocolate in any of the 5 ways parallel to the short side, or in any of the 3 ways parallel to the long side. Afterwards, a breaking operation consists of taking an arbitrary piece of chocolate and breaking it along one of the marked lines. Stacking pieces is not allowed. What is the minimal number of breaking operations needed to break the chocolate into its 24 pieces? Is it better to first break the chocolate into two equal pieces or to break off one row? Is it better to first break along a short or a long line? Which abstraction explains the answer? Find a similar problem with the same abstraction.

**Example 1.6.** Can the shape in Figure 1.1 be cut into 9 identical pieces? If not, why? If yes, what is the abstraction that explains this? What would more general examples with the same abstraction look like? Why would it be easier to see the answer in such generalized examples?

![](_page_16_Figure_6.png)

Figure 1.1: A shape to be cut into identical pieces.

**Example 1.7.** Extend the following sequence of numbers: 0, 1, 1, 3, 5, 11, 21, 43, 85, . . .. It is a natural human behavior to find a simple explanation consistent with a given observation, i.e., to abstract.6 Which is the simplest rule that defines the sequence? There may be several answers that make sense.

**Example 1.8.** Euclid's well-known algorithm for computing the greatest common divisor of two positive integers a and b works as follows: In each step,

<sup>6</sup>Unfortunately, this also leads to over-simplifications and inappropriate generalizations.

the larger integer is divided by the smaller integer, and the pair of integers is replaced by the pair consisting of the smaller integer and the remainder of the division. This step is repeated until the remainder is 0. The greatest common divisor is the last non-zero remainder.

Essentially the same algorithm works for two polynomials a(x) and b(x), say with integer (or real) coefficients, where the size of a polynomial is defined to be its degree. In which sense are integer numbers and polynomials similar? At which level of abstraction can they be seen as instantiations of the same abstract concept? As we will see in Chapter 5, the answer is that they are both so-called *Euclidean domains*, which is a special type of a so-called *integral domain*, which in turn is a special case of a *ring*.

