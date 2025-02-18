---
layout: post
title: 'Quantum Mechanics 101: Demystifying Its Postulates'
date: 2025-02-17 05:30
description: "An introductory look at the core principles of quantum mechanics."
tags: 
  - physics
categories: 
  - education
featured: true
---


> *"If quantum mechanics hasn't profoundly shocked you, you haven't understood it yet."*  
> -- Niels Bohr


Quantum mechanics is often described as one of the most mind-bending fields of physics, not just because of its abstract nature but because of the very real, fundamental concepts it reveals about our universe. As someone who first encountered quantum mechanics in my sophomore physics course, I can attest to the confusion and awe that come with it. From the strange notion of particles existing as a probability until observed, to the idea of wavefunctions that govern everything, the journey through quantum mechanics is both intellectually thrilling and deeply perplexing.

Over the years, whether through my undergraduate or master's courses, I repeatedly encountered concepts that initially seemed bizarre and not very application-oriented. Among these were ideas such as the unitarity of operators, time evolution, time-dependent versus time-independent states, and the Hermiticity of operators. At first, these principles felt abstract and difficult to apply outside the classroom. However, as I progressed into more advanced courses like Quantum Field Theory, these concepts became essential to understanding the subject. Often, it takes multiple reviews, months of rethinking, and even fresh perspectives to truly make the connections.

While quantum mechanics is an immensely powerful framework for understanding the microscopic world, it can be frustratingly abstract, requiring a solid understanding of both its mathematical structure and the physical intuition behind it. In this article, I aim to offer an accessible explanation of these foundational ideas for undergraduates or graduate students, with a focus on understanding quantum mechanics from a more tangible, relatable viewpoint.

## Classical vs Quantum: The Idea of the Qubit

In classical mechanics, the most basic unit of information is the **bit**, which represents a binary value—either 0 or 1. Imagine these bits as simple "on" or "off" states, much like flipping a light switch.

Quantum mechanics, however, introduces a new and strange concept: the **quantum bit** or **qubit**. Unlike a classical bit, a qubit can exist in a state that is both 0 and 1 simultaneously, a phenomenon known as **superposition**.

A qubit is described mathematically as:

$$
|\psi\rangle = \alpha |0\rangle + \beta |1\rangle
$$

where $ \alpha $ and $ \beta $ are complex numbers that satisfy the normalization condition:

$$
|\alpha|^2 + |\beta|^2 = 1
$$

Here, $ |0\rangle $ and $ |1\rangle $ represent the classical bit states, but now, the qubit can exist in a linear combination of these states. The coefficients $ \alpha $ and $ \beta $ determine the probability amplitudes for the system being observed in either of these two states.

But what exactly is a qubit physically? To dive deeper into this, we turn to the **postulates of quantum mechanics**, which govern the behavior of quantum systems.

## Postulates of Quantum Mechanics

The postulates of quantum mechanics provide the foundational principles that govern the behavior of quantum systems. These postulates are the rules that form the structure of quantum mechanics, and they help explain phenomena such as wave-particle duality, superposition, and entanglement. Here is a summary of the key postulates:

### Postulate 1: State Representation and Quantum Space

In quantum mechanics, the state of a quantum system is represented by a **vector** in a **complex vector space** (specifically, a **Hilbert space**). We represent the state of a system as a **ket** $ |\psi\rangle $, a unit vector in this space. In the language of **bra-ket notation** developed by Paul M. Dirac, the corresponding **bra** $ \langle \psi| $ is the *dual* of the ket.

In a more familiar notion that's in matrix form, the state $ |\psi\rangle $ is represented as a *column vector*, while the corresponding dual $ \langle \psi| $ is the complex conjugate transpose (*row vector*) of that vector. For example, if we have a quantum system in a $d-$dimensional space, the state vector can be written as:

$$
|\psi\rangle = \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \vdots \\ \alpha_d \end{pmatrix}
$$

The corresponding dual (bra) would be the complex conjugate transpose of the ket:

$$
\langle \psi| = (\alpha_1^*, \alpha_2^*, \dots, \alpha_d^*)
$$

The **inner product** between two vectors $ |\psi\rangle $ and $ |\phi\rangle $ is defined as:

$$
\langle \psi | \phi \rangle = \sum_i \alpha_i^* \beta_i
$$

This gives a scalar quantity.

And the **outer product** (ket-bra) results in a matrix:

$$
|\psi\rangle \langle \phi|
$$

This is the *basis for constructing linear operators* on the state space. The outer product (ket-bra) produces a matrix, and these matrices can be interpreted as linear operators acting on vectors within a vector space.

### The Normalization Condition

Quantum states are **normalized**, meaning the total probability of finding the system in any of its possible states must be 1. This normalization condition is written as:

$$
\langle \psi | \psi \rangle = 1
$$

This condition is referred to as the **normalization condition**. It is not a purely mathematical constraint, but rather arises from a physical consideration, namely, the **conservation of probabilities**. The components of this vector are probability amplitudes, and thus the square of these amplitudes must sum to 1.

> If $ |\psi\rangle \in \mathcal{H} $, then any scalar multiple $ \lambda |\psi\rangle $ is also an element of $ \mathcal{H} $, where $ \lambda $ is a scalar. Physically, $ \psi $ and $ \lambda |\psi\rangle $ represent the same quantum state, as $ \lambda $ does not produce any observable distinction. Therefore, quantum states are defined up to an overall scale, which is often referred to as the "overall phase." This freedom allows us to normalize the vector, which does not alter the state itself.

### Two-Level Quantum Systems: The Qubit

The simplest example of a quantum system is a **two-level system**, which is the quantum analog of a classical bit. The state space of such a system is described by two orthogonal states, $ |0\rangle $ and $ |1\rangle $. These states are often called the **computational basis**.


**Physical examples of two-level systems** include:

- The **polarization of light**, with horizontal $ |H\rangle $ and vertical $ |V\rangle $ polarization states. A general polarization state is:
  
  $$
  |P\rangle = \alpha |H\rangle + \beta |V\rangle \in \mathbb{C}^2
  $$

  We can also identify these states as:
  
  $$
  |H\rangle = |0\rangle, \quad |V\rangle = |1\rangle
  $$
  
  The polarization states of light can be described as quantum superpositions, where the light can exist in a state that is simultaneously horizontal and vertical polarization. This concept is fundamental to quantum optics and quantum information theory.

- The **spin of particles**: The spin of a particle (such as an electron or proton) can be probed by an external magnetic field. In the presence of a magnetic field, the particle’s spin states are described as spin-up and spin-down states. These correspond to the two-level system with states $ |0\rangle $ and $ |1\rangle $:

  $$
  |\Psi\rangle = \alpha |\uparrow\rangle + \beta |\downarrow\rangle \in \mathbb{C}^2
  $$

  The spin of these particles is a crucial quantum property, and when measured along any axis (typically the $ z $-axis), the spin is quantized into two distinct eigenstates—up and down—resulting in a binary state space. This concept forms the basis for many quantum technologies, including quantum computing and quantum cryptography.

- **Two-level atoms (Superconducting Qubits)**: In a system with a two-level atom, there are two distinct energy levels: the ground state $ |G\rangle $ and the excited state $ |E\rangle $. The state is described as:

  $$
  |\Psi\rangle = \alpha |G\rangle + \beta |E\rangle \in \mathbb{C}^2
  $$

  In atoms, quantum mechanics allows for the existence of discrete energy levels, and a two-level atom can exist in a superposition of these energy states. This phenomenon is crucial in many areas, such as quantum optics, laser physics, and the study of atomic transitions. The ability of an atom to exist in a superposition of ground and excited states is also the foundation of quantum information processing.

The state of a qubit can always be written as a linear combination of these two basis states:

$$
|\psi\rangle = \alpha |0\rangle + \beta |1\rangle
$$

### The Bloch Sphere

Because the state of a qubit is represented by two complex numbers (i.e., $ \alpha $ and $ \beta $), we can parameterize these states in terms of **two real angles**—$ \theta $ and $ \phi $:

$$
\alpha = \cos\left(\frac{\theta}{2}\right) e^{i \phi_{\alpha}}, \quad \beta = \sin\left(\frac{\theta}{2}\right) e^{i \phi_{\beta}}
$$

where $$\theta \in [0, \pi]$$ and $$\phi_{\alpha}, \phi_{\beta} \in [0, 2\pi]$$, due to the overall phase freedom of the state.

Thus, the qubit state can be expressed as:

$$
|\Psi\rangle = \cos\left(\frac{\theta}{2}\right) e^{i \phi_{\alpha}} |0\rangle + \sin\left(\frac{\theta}{2}\right) e^{i \phi_{\beta}} |1\rangle
$$

or equivalently,

$$
|\Psi\rangle = e^{i \phi_{\alpha}} \left[\cos\left(\frac{\theta}{2}\right) |0\rangle + \sin\left(\frac{\theta}{2}\right) e^{i (\phi_{\beta} - \phi_{\alpha})} |1\rangle \right]
$$

This representation describes the state as a point on the surface of a sphere in 3D space, known as the **Bloch sphere**.


### Basis States and Transformations

A vector space can have **infinitely many basis states**. In addition to the standard computational basis $$\{|0\rangle, |1\rangle\}$$, the qubit space can also have other valid basis sets. Two alternative orthonormal basis states for $$\mathbb{C}^2$$ are:

$$
|+\rangle = \frac{1}{\sqrt{2}} (|0\rangle + |1\rangle), \quad |-\rangle = \frac{1}{\sqrt{2}} (|0\rangle - |1\rangle)
$$

These states form a new orthonormal basis, and we can verify the orthogonality:
$$
\langle + | - \rangle = \langle - | + \rangle = 0, \quad \langle + | + \rangle = \langle - | - \rangle = 1
$$

Thus, $$\{|+\rangle, |-\rangle\}$$ also forms an orthonormal basis for the qubit state space.

We can also define another set of basis states:

$$
|i\rangle = \frac{1}{\sqrt{2}} (|0\rangle + i |1\rangle), \quad |-i\rangle = \frac{1}{\sqrt{2}} (|0\rangle - i |1\rangle)
$$

The set $$\{|i\rangle, |-i\rangle\}$$ forms another orthonormal basis for the qubit state space $$\mathbb{C}^2$$.

These new basis states are related to the computational basis via a **unitary transformation**, which is a linear transformation that preserves the inner product of vectors.

These different basis sets are related through a linear transformation. For example, the transformation between the computational basis $$\{|0\rangle, |1\rangle\}$$ and the $$\{|+\rangle, |-\rangle\}$$ basis can be represented by a linear operator, such as the Hadamard operator $$H$$:

$$
H |0\rangle = |+\rangle = \frac{1}{\sqrt{2}} (|0\rangle + |1\rangle), \quad H |1\rangle = |-\rangle = \frac{1}{\sqrt{2}} (|0\rangle - |1\rangle)
$$


This transformation can be written in terms of outer products:

$$
\mathcal{H} = \frac{1}{\sqrt{2}} \left( |+\rangle \langle 0| + |-\rangle \langle 1| \right)
$$

Alternatively, it can be expressed as:

$$
\mathcal{H} = \frac{1}{\sqrt{2}} \left( |0\rangle \langle 0| + |1\rangle \langle 0| + |0\rangle \langle 1| - |1\rangle \langle 1| \right)
$$


###  Matrix Representation

The state vectors $$|0\rangle$$ and $$|1\rangle$$ are represented as column vectors:

$$
|0\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad |1\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}
$$

The alternative basis states $$|+\rangle$$ and $$|-\rangle$$ are represented as:

$$
|+\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \quad |-\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix}
$$


Using these, we can express the Hadamard operator $H$ as:

$$H = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

The Hadamard gate is an important quantum operation that transforms the computational basis states into the $$\{|+\rangle, |-\rangle\}$$ basis.

## Postulate 2. Observables and Operators

Quantum mechanics also provides a framework for understanding **observables**, which are quantities we can measure in a quantum system. In classical mechanics, observables are just real numbers (like position or momentum), but in quantum mechanics, observables are represented by **Hermitian operators**. As we mentioned, states in quantum systems are represented as vectors, and they transform according to linear transformations. There are two important classes of linear operators we are concerned with:

### 1. Hermitian Matrices/Operators

A matrix or operator $$H$$ is called **Hermitian** if it satisfies the following condition:

$$
H = (H^*)^T = H^{\dagger}
$$

where $$H^{\dagger}$$ is the **adjoint** of the linear operator, which refers to the complex conjugate transpose of $$H$$. Hermitian operators are also often referred to as *self-adjoint* operators. 

### Properties of Hermitian Matrices:

- **Real Eigenvalues:** Hermitian matrices have real eigenvalues.
- **Diagonalizability:** Hermitian matrices are diagonalizable, meaning they can be expressed in diagonal form in some orthonormal basis.


### Example: Hermitian Operator for a Two-Level System

Consider the spin operator $$S_z$$ for a spin-1/2 particle. Its matrix representation is:

$$
S_z = \frac{\hbar}{2} \begin{pmatrix}
    1 & 0 \\
    0 & -1
\end{pmatrix}
$$

Other spin operators such as $$S_x$$ and $$S_y$$ are also Hermitian.

### Why are Hermitian operators important in quantum mechanics?

Postulate 2 in quantum mechanics states that *physical quantities* or observables are associated with Hermitian operators} on the system's Hilbert space. The eigenvalues of these Hermitian operators correspond to the possible values that the physical quantity can take.

For example, in the case of a spin-1/2 system:

-  The states $$|0\rangle = |1/2\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$$ and $$|1\rangle = |-1/2\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$ are used to represent spin states.
-  For $$S_z$$, we have the eigenvalue equations:
    
    $$
   S_z|0\rangle = \frac{\hbar}{2} |0\rangle
   $$
    
    $$
   S_z |1\rangle = -\frac{\hbar}{2} |1\rangle
   $$
    
    These are eigenvalue equations, implying that $$S_z$$ is the observable associated with the spin along the z-axis. In contrast, for $$S_x$$, we get:
    
    $$
   S_x |0\rangle = \frac{\hbar}{2} |1\rangle
   $$
    
    $$
   S_x |1\rangle = \frac{\hbar}{2} |0\rangle
   $$
    
    These are not eigenvalue equations, so $$S_x$$ cannot be directly associated with a single value in this basis. However, when we express $$S_x$$ in the $$\{|+\rangle, |-\rangle\}$$ basis (the eigenstates of $$S_x$$), we find:
    
    $$
   S_x |+\rangle = \frac{\hbar}{2} |+\rangle
   $$
    
    
   $$S_x |-\rangle = \frac{\hbar}{2} |-\rangle
   $$
    
This makes $$S_x$$ an observable associated with the spin component along the x-axis.


The matrix representations of these operators in the $$\{|0\rangle, |1\rangle\}$$ basis are:

$$
S_z = \frac{\hbar}{2} \left( |0\rangle \langle 0| - |1\rangle \langle 1| \right)
$$
and

$$
S_x = \frac{\hbar}{2} \left( |0\rangle \langle 1| + |1\rangle \langle 0| \right)
$$
These can also be written in the $\{|+\rangle, |-\rangle\}$ basis:

$$
S_x = \frac{\hbar}{2} \left( |+\rangle \langle -| + |-\rangle \langle +| \right)
$$

### 2. Unitary Operators

A matrix or operator $$U$$ is *unitary* if it satisfies the following condition:

$$
U^{\dagger} U = U U^{\dagger} = I
$$

where $$I$$ is the identity matrix. An example of a unitary operator is the *Hadamard operator* $$H$$, which is given by:

$$
H = \frac{1}{\sqrt{2}} \begin{pmatrix}
    1 & 1 \\
    1 & -1
\end{pmatrix}
$$

The Hadamard operator acts on the computational basis states as follows:

$$
H |0\rangle = |+\rangle, \quad H |1\rangle = |-\rangle
$$

The Hadamard operator is both *Hermitian* and *unitary*, meaning:

$$
H^{\dagger} = H \quad \text{and} \quad H H^{\dagger} = I
$$

### Why are unitary operators important?

Unitary operators are crucial in quantum mechanics, particularly for describing *time evolution* of quantum systems.

## Postulate 3: Time Evolution (How do Quantum Systems Evolve with Time?)
One of the most fundamental questions in quantum mechanics is how quantum systems evolve over time. This evolution is governed by the **Schrödinger equation**, which describes how the state of a quantum system changes with time.

The evolution of quantum systems over time is governed by *unitary transformations*. If $$|\psi(t_0)\rangle$$ represents the state of the system at time $t_0$, the state at time $$t$$ is given by:

$$
|\psi(t)\rangle = U(t, t_0) |\psi(t_0)\rangle
$$

where $$U(t, t_0)$$ is the *unitary time evolution operator*. This operator governs how quantum states evolve over time.

The time evolution is driven by a *Hermitian operator* called the *Hamiltonian* $$H$$, which is associated with the energy of the system. The Schrödinger equation describes the time evolution of the system:

$$
i \hbar \frac{\partial}{\partial t} |\psi(t)\rangle = H |\psi(t)\rangle
$$

For time-independent Hamiltonians, the solution to the Schrödinger equation is:

$$
|\psi(t)\rangle = \textcolor{blue}{e^{i H(t - t_0)/\hbar}} |\psi(t_0)\rangle
$$

The term $$\textcolor{blue}{e^{i H(t - t_0)/\hbar}}$$ is the unitary time evolution operator $$\textcolor{blue}{U(t, t_0)}$$.

### Why must time evolution be unitary?

To preserve the *norm* of the quantum state (since probabilities must sum to 1), the time evolution operator must be unitary. That is, for the initial state $$|\psi(t_0)\rangle$$ with norm 1:

$$
\langle \psi(t_0) | \psi(t_0) \rangle = 1
$$

The final state $|\psi(t)\rangle$ will also have norm 1:

$$
\langle \psi(t) | \psi(t) \rangle = \langle \psi(t_0) | U^{\dagger} U | \psi(t_0) \rangle = \langle \psi(t_0) | \psi(t_0) \rangle = 1
$$

Thus, unitary transformations preserve the norm of the state vector, making them essential for quantum mechanics.

Unitary time evolution operators form the *quantum gates* used in quantum computation, where single qubit gates are represented by $$2\times2$$ unitary matrices such as the Hadamard gate $$H$$.

### Properties of the Time Evolution Operator $$U(t, t_0)$$:

-  **Composition:** The time evolution operator satisfies:
    
   $$
   U(t_2, t_0) = U(t_2, t_1) U(t_1, t_0) \quad \text{for} \quad t_0 \leq t_1 \leq t_2
   $$
    This property allows us to compose quantum gates in sequences.
    
- **Inverses:** The inverse of the time evolution operator is:
    
    $$
  U^{\dagger}(t, t_0) = U(t_0, t)
    $$
    This implies that quantum gates are **reversible**, a fundamental characteristic of quantum mechanics.



## Postulate 4: Measurement and Probability

So far, we have seen that a quantum system or state must be represented by a unitary matrix, and it evolves over time through unitary transformations. Physical quantities are associated with Hermitian operators. But how do we know what physical values correspond to these quantities, and what is the process of measurement?

The process of **measurement** in quantum mechanics is not as straightforward as in classical mechanics. In classical mechanics, measurements can give us a definite value, but quantum mechanics introduces an element of uncertainty. When measuring physical quantities, the set of eigenvalues of the corresponding Hermitian operator gives the possible values that can be obtained from the measurement. Naturally, there is a probabilistic element to the quantum measurement process.


- Let $$A$$ be a Hermitian operator (observable) with eigenvalues $$\{a_i\}$$ and eigenstates $$|a_i\rangle$$, where $$i = 1, \dots, d$$. Then, the postulate says that measuring the observable $$A$$ on the state $$|\psi\rangle$$ gives the outcome $$a_i$$ with probability:
    
    $$
  P_i = |\langle \psi | a_i \rangle|^2.
    $$
    
 - If you know the state of the system, you can predict the possible outcomes and their respective probabilities. However, each time you measure the system, you cannot predict which specific outcome will occur. By repeating the experiment many times, you can extract statistical data about the measurement outcomes.
    
- **Post-measurement state**: After obtaining the outcome $$a_i$$, the state $$|\psi\rangle$$ collapses to the corresponding eigenstate $$|a_i\rangle$$. More precisely, the state projects onto the eigenstate $$|a_i\rangle$$ associated with the measured value.

<figure> style="text-align: center;">
  <img src="data:image/png;base64,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" alt="Quantum Image" width="400"/>
  <figcaption>The <strong>act of measurement<strong> on quantum state $$\psi\rangle$$ by apparatus $$A$$.</figcaption>
</figure>


##  Basic Quantum Mechanics on Qiskit

Here’s some rendered Jupyter notebook on Quantum Mechanics.

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/Basic_Quantum_Mechanics_with_Qiskit.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Basic_Quantum_Mechanics_with_Qiskit.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}


