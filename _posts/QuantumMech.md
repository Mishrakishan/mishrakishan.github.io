---
layout: post
title: "Quantum Mechanics 101: Demystifying Its Postulates"
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


Quantum mechanics is often described as one of the most mind-bending fields of physics, not just because of its abstract nature but because of the very real, fundamental concepts it reveals about our universe. As someone who first encountered quantum mechanics in my sophomore physics course, I can attest to the confusion and awe that come with it. From the strange notion of particles existing as a probability until observed, to the perplexing wavefunctions that govern everything, the journey through quantum mechanics is both intellectually thrilling and deeply perplexing.

Over the years, whether through my undergraduate or master's courses, I continuously encountered concepts that seemed illogical or even counterintuitive. Among these were ideas like the unitarity of operators, time evolution, time-dependent versus time-independent states, and the Hermiticity of operators. These principles often felt like abstract concepts, difficult to apply outside the classroom, especially when delving into more advanced courses like Quantum Field Theory. Often, it took multiple reviews, months of rethinking, and even fresh perspectives to make the connections.

While quantum mechanics is an immensely powerful framework for understanding the microscopic world, it can be frustratingly abstract, requiring a solid understanding of both its mathematical structure and the physical intuition behind it. In this article, I aim to offer an accessible explanation of these foundational ideas for undergraduates or graduate students, with a focus on understanding quantum mechanics from a more tangible, relatable viewpoint.

## Classical vs Quantum: The idea of the Qubit

In classical mechanics, the most basic unit of information is the **bit**, which represents a binary value—either 0 or 1. Imagine these bits as simple "on" or "off" states, much like flipping a light switch.

Quantum mechanics, however, introduces a new and strange concept: the **quantum bit} or **qubit**. Unlike a classical bit, a qubit can exist in a state that is both 0 and 1 simultaneously, a phenomenon known as **superposition**.

A qubit is described mathematically as:


$$|\psi\rangle = \alpha |0\rangle + \beta |1\rangle
$$

where $ \alpha $ and $ \beta $ are complex numbers that satisfy the normalization condition:


$$|\alpha|^2 + |\beta|^2 = 1
$$

Here, $ |0\rangle $ and $ |1\rangle $ represent the classical bit states, but now, the qubit can exist in a linear combination of these states. The coefficients $ \alpha $ and $ \beta $ determine the probability amplitudes for the system being observed in either of these two states.

But what exactly is a qubit physically? To dive deeper into this, we turn to the **postulates of quantum mechanics**
, which govern the behavior of quantum systems.

## Postulates of Quantum Mechanics

The postulates of quantum mechanics provide the foundational principles that govern the behavior of quantum systems. These postulates are the rules that form the structure of quantum mechanics, and they help explain phenomena such as wave-particle duality, superposition, and entanglement. Here is a summary of the key postulates:

## Postulate 1. State Representation and Quantum Space

In quantum mechanics, the state of a quantum system is represented by a **vector** in a **complex vector space** (specifically, a **Hilbert space**). We represent the state of a system as a **ket** $ |\psi\rangle $, a unit vector in this space. In the language of **bra-ket notation** developed by Paul Dirac, the corresponding **bra** $ \langle \psi| $ is the dual of the ket.

In matrix form, the state 
$ |\psi\rangle $ is represented as a column vector, while the corresponding dual 
$ \langle \psi| $ is the conjugate transpose of that vector. For example, if we have a quantum system in a d-dimensional space, the state vector can be written as:


$$|\psi\rangle = \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \vdots \\ \alpha_d \end{pmatrix}
$$
The corresponding dual (bra) would be the complex conjugate transpose of the ket:


$$\langle \psi| = (\alpha_1^*, \alpha_2^*, \dots, \alpha_d^*)$$


The **inner product** between two vectors $ |\psi\rangle $ and $ |\phi\rangle $ is defined as:


$$\langle \psi | \phi \rangle = \sum_i \alpha_i^* \beta_i
$$

This gives a scalar quantity, and the **outer product** (ket-bra) results in a matrix:


$$|\psi\rangle \langle \phi|
$$

This is the basis for constructing linear operators on the state space. The outer product (ket-bra) produces a matrix, and these matrices can be interpreted as linear operators acting on vectors within a vector space.

###  The Normalization Condition

Quantum states are **normalized**, meaning the total probability of finding the system in any of its possible states must be 1. This normalization condition is written as:


$$\langle \psi | \psi \rangle = 1
$$

This condition is referred to as the **normalization condition}. It is not a purely mathematical constraint, but rather arises from a physical consideration, namely, the **conservation of probabilities**. The components of this vector are probability amplitudes, and thus the square of these amplitudes must sum to 1.

 > If $ |\psi\rangle \in \mathcal{H} $, then any scalar multiple $ \lambda |\psi\rangle $ is also an element of $ \mathcal{H} $, where $ \lambda $ is a scalar. Physically, $ \psi $ and $ \lambda |\psi\rangle $ represent the same quantum state, as $ \lambda $ does not produce any observable distinction. Therefore, quantum states are defined up to an overall scale, which is often referred to as the "overall phase." This freedom allows us to normalize the vector, which does not alter the state itself.


### Two-Level Quantum Systems: The Qubit}
The simplest example of a quantum system is a **two-level system**, which is the quantum analog of a classical bit. The state space of such a system is described by two orthogonal states, $ |0\rangle $ and $ |1\rangle $. These states are often called the **computational basis}.
 

**Physical examples of two-level systems** include:

 - The **polarization of light**, with horizontal $ |H\rangle $ and vertical $ |V\rangle $ polarization states. 
    A general polarization state is:
    $$
    |P\rangle = \alpha |H\rangle + \beta |V\rangle \in \mathbb{C}^2
    $$
    We can also identify these states as:
    
    $$|H\rangle = |0\rangle, \quad |V\rangle = |1\rangle
    $$
    The polarization states of light can be described as quantum superpositions, where the light can exist in a state that is simultaneously horizontal and vertical polarization. This concept is fundamental to quantum optics and quantum information theory.
  - The **spin of particles** The spin of a particle (such as an electron or proton) can be probed by an external magnetic field. In the presence of a magnetic field, the particle’s spin states are described as spin-up and spin-down states. These correspond to the two-level system with states $ |0\rangle $ and $ |1\rangle $:
    
    
    
    $$|\Psi\rangle = \alpha |\uparrow\rangle + \beta |\downarrow\rangle \in \mathbb{C}^2
    $$
    
    The spin of these particles is a crucial quantum property, and when measured along any axis (typically the $z-$axis), the spin is quantized into two distinct eigenstates—up and down—resulting in a binary state space. This concept forms the basis for many quantum technologies, including quantum computing and quantum cryptography.
  - **Two-level atoms (Superconducting Qubits)** In a system with a two-level atom, there are two distinct energy levels: the ground state $ |G\rangle $ and the excited state $ |E\rangle $. The state is described as:
    
        
    $$|\Psi\rangle = \alpha |G\rangle + \beta |E\rangle \in \mathbb{C}^2
    $$
    
    
    In atoms, quantum mechanics allows for the existence of discrete energy levels, and a two-level atom can exist in a superposition of these energy states. This phenomenon is crucial in many areas, such as quantum optics, laser physics, and the study of atomic transitions. The ability of an atom to exist in a superposition of ground and excited states is also the foundation of quantum information processing.


The state of a qubit can always be written as a linear combination of these two basis states:


$$|\psi\rangle = \alpha |0\rangle + \beta |1\rangle$$


This is the essence of **quantum superposition**—the ability for a qubit to exist in both states at once.

### The Bloch Sphere

Because the state of a qubit is represented by two complex numbers (i.e., $ \alpha $ and $ \beta $), we can parameterize these states in terms of **two real angles}—$\theta$ and $\phi$:

$$\alpha = \cos\left(\frac{\theta}{2}\right) e^{i \phi_{\alpha}}, \quad \beta = \sin\left(\frac{\theta}{2}\right) e^{i \phi_{\beta}}$$

where $ \theta \in [0, \pi] $ and $ \phi_{\alpha}, \phi_{\beta} \in [0, 2\pi] $, due to the overall phase freedom of the state.

Thus, the qubit state can be expressed as:

$$|\Psi\rangle = \cos\left(\frac{\theta}{2}\right) e^{i \phi_{\alpha}} |0\rangle + \sin\left(\frac{\theta}{2}\right) e^{i \phi_{\beta}} |1\rangle
$$
or equivalently,

$$|\Psi\rangle = e^{i \phi_{\alpha}} \left[\cos\left(\frac{\theta}{2}\right) |0\rangle + \sin\left(\frac{\theta}{2}\right) e^{i (\phi_{\beta} - \phi_{\alpha})} |1\rangle \right]
$$
This representation describes the state as a point on the surface of a sphere in 3D space, known as the **Bloch sphere**.


### Basis States and Transformations

A vector space can have **infinitely many basis states**. In addition to the standard computational basis $ \{|0\rangle, |1\rangle\} $, the qubit space can also have other valid basis sets. Two alternative orthonormal basis states for $ \mathbb{C}^2 $ are:

$$
|+\rangle = \frac{1}{\sqrt{2}} (|0\rangle + |1\rangle), \quad |-\rangle = \frac{1}{\sqrt{2}} (|0\rangle - |1\rangle)
$$

These states form a new orthonormal basis, and we can verify the orthogonality:
$$
\langle + | - \rangle = \langle - | + \rangle = 0, \quad \langle + | + \rangle = \langle - | - \rangle = 1
$$

Thus, $ \{|+\rangle, |-\rangle\} $ also forms an orthonormal basis for the qubit state space.

We can also define another set of basis states:

$$|i\rangle = \frac{1}{\sqrt{2}} (|0\rangle + i |1\rangle), \quad |-i\rangle = \frac{1}{\sqrt{2}} (|0\rangle - i |1\rangle)$$

The set $ \{|i\rangle, |-i\rangle\} $ forms another orthonormal basis for the qubit state space $ \mathbb{C}^2 $.

These new basis states are related to the computational basis via a **unitary transformation**, which is a linear transformation that preserves the inner product of vectors.

These different basis sets are related through a linear transformation. For example, the transformation between the computational basis $ \{|0\rangle, |1\rangle\} $ and the $ \{|+\rangle, |-\rangle\} $ basis can be represented by a linear operator, such as the Hadamard operator $ H $:

$$H |0\rangle = |+\rangle = \frac{1}{\sqrt{2}} (|0\rangle + |1\rangle), \quad H |1\rangle = |-\rangle = \frac{1}{\sqrt{2}} (|0\rangle - |1\rangle)$$


This transformation can be written in terms of outer products:

$$\mathcal{H} = \frac{1}{\sqrt{2}} \left( |+\rangle \langle 0| + |-\rangle \langle 1| \right)$$

Alternatively, it can be expressed as:

$$\mathcal{H} = \frac{1}{\sqrt{2}} \left( |0\rangle \langle 0| + |1\rangle \langle 0| + |0\rangle \langle 1| - |1\rangle \langle 1| \right)$$


###  Matrix Representation

The state vectors $ |0\rangle $ and $ |1\rangle $ are represented as column vectors:
$$
|0\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad |1\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}
$$
The alternative basis states $ |+\rangle $ and $ |-\rangle $ are represented as:
$$
|+\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \quad |-\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$


Using these, we can express the Hadamard operator $ H $ as:

$$H = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}
$$
The Hadamard gate is an important quantum operation that transforms the computational basis states into the $ \{|+\rangle, |-\rangle\} $ basis.

## Postulate 2. Observables and Operators

Quantum mechanics also provides a framework for understanding **observables**, which are quantities we can measure in a quantum system. In classical mechanics, observables are just real numbers (like position or momentum), but in quantum mechanics, observables are represented by **Hermitian operators**. As we mentioned, states in quantum systems are represented as vectors, and they transform according to linear transformations. There are two important classes of linear operators we are concerned with:

### 1. Hermitian Matrices/Operators

A matrix or operator $ H $ is called **Hermitian** if it satisfies the following condition:


$$H = (H^*)^T = H^{\dagger}$$


where $ H^{\dagger} $ is the **adjoint** of the linear operator, which refers to the complex conjugate transpose of $ H $. Hermitian operators are also often referred to as *self-adjoint* operators. 

### Properties of Hermitian Matrices:

- **Real Eigenvalues:** Hermitian matrices have real eigenvalues.
- **Diagonalizability:** Hermitian matrices are diagonalizable, meaning they can be expressed in diagonal form in some orthonormal basis.


### Example: Hermitian Operator for a Two-Level System

Consider the spin operator $ S_z $ for a spin-1/2 particle. Its matrix representation is:

$$S_z = \frac{\hbar}{2} \begin{pmatrix}
    1 & 0 \\
    0 & -1
\end{pmatrix}
$$
Other spin operators such as $ S_x $ and $ S_y $ are also Hermitian.

### Why are Hermitian operators important in quantum mechanics?

Postulate 2 in quantum mechanics states that *physical quantities* or observables are associated with Hermitian operators} on the system's Hilbert space. The eigenvalues of these Hermitian operators correspond to the possible values that the physical quantity can take.

For example, in the case of a spin-1/2 system:

-  The states $ |0\rangle = |1/2\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix} $ and $ |1\rangle = |-1/2\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix} $ are used to represent spin states.
-  For $ S_z $, we have the eigenvalue equations:
    
    $$ S_z |0\rangle = \frac{\hbar}{2} |0\rangle $$
    
    $$S_z |1\rangle = -\frac{\hbar}{2} |1\rangle$$
    
    These are eigenvalue equations, implying that $ S_z $ is the observable associated with the spin along the z-axis. In contrast, for $ S_x $, we get:
    
    $$S_x |0\rangle = \frac{\hbar}{2} |1\rangle$$
    
    
    $$S_x |1\rangle = \frac{\hbar}{2} |0\rangle$$
    
    These are not eigenvalue equations, so $ S_x $ cannot be directly associated with a single value in this basis. However, when we express $ S_x $ in the $ \{|+\rangle, |-\rangle\} $ basis (the eigenstates of $ S_x $), we find:
    
    $$S_x |+\rangle = \frac{\hbar}{2} |+\rangle$$
    
    
 $$   S_x |-\rangle = \frac{\hbar}{2} |-\rangle$$
    
This makes $ S_x $ an observable associated with the spin component along the x-axis.


The matrix representations of these operators in the $ \{|0\rangle, |1\rangle\} $ basis are:

$$S_z = \frac{\hbar}{2} \left( |0\rangle \langle 0| - |1\rangle \langle 1| \right)
$$
and

$$S_x = \frac{\hbar}{2} \left( |0\rangle \langle 1| + |1\rangle \langle 0| \right)
$$
These can also be written in the $ \{|+\rangle, |-\rangle\} $ basis:

$$S_x = \frac{\hbar}{2} \left( |+\rangle \langle -| + |-\rangle \langle +| \right)
$$

### 2. Unitary Operators

A matrix or operator $ U $ is *unitary* if it satisfies the following condition:

$$U^{\dagger} U = U U^{\dagger} = I
$$
where $ I $ is the identity matrix. An example of a unitary operator is the *Hadamard operator* $ H $, which is given by:

$$H = \frac{1}{\sqrt{2}} \begin{pmatrix}
    1 & 1 \\
    1 & -1
\end{pmatrix}
$$
The Hadamard operator acts on the computational basis states as follows:

$$H |0\rangle = |+\rangle, \quad H |1\rangle = |-\rangle
$$
The Hadamard operator is both *Hermitian* and *unitary*, meaning:

$$H^{\dagger} = H \quad \text{and} \quad H H^{\dagger} = I
$$

### Why are unitary operators important?

Unitary operators are crucial in quantum mechanics, particularly for describing *time evolution* of quantum systems.

## Postulate 3: Time Evolution (How do Quantum Systems Evolve with Time?)
One of the most fundamental questions in quantum mechanics is how quantum systems evolve over time. This evolution is governed by the **Schrödinger equation**, which describes how the state of a quantum system changes with time.

The evolution of quantum systems over time is governed by *unitary transformations*. If $ |\psi(t_0)\rangle $ represents the state of the system at time $ t_0 $, the state at time $ t $ is given by:

$$|\psi(t)\rangle = U(t, t_0) |\psi(t_0)\rangle
$$
where $ U(t, t_0) $ is the *unitary time evolution operator*. This operator governs how quantum states evolve over time.

The time evolution is driven by a *Hermitian operator* called the *Hamiltonian* $ H $, which is associated with the energy of the system. The Schrödinger equation describes the time evolution of the system:

$$i \hbar \frac{\partial}{\partial t} |\psi(t)\rangle = H |\psi(t)\rangle
$$
For time-independent Hamiltonians, the solution to the Schrödinger equation is:

$$|\psi(t)\rangle = \textcolor{red}{e^{i H(t - t_0)/\hbar}} |\psi(t_0)\rangle
$$
The term $ \textcolor{red}{e^{i H(t - t_0)/\hbar}} $ is the unitary time evolution operator $ \textcolor{red}{U(t, t_0)} $.

### Why must time evolution be unitary?

To preserve the *norm* of the quantum state (since probabilities must sum to 1), the time evolution operator must be unitary. That is, for the initial state $ |\psi(t_0)\rangle $ with norm 1:
$$
\langle \psi(t_0) | \psi(t_0) \rangle = 1
$$
The final state $ |\psi(t)\rangle $ will also have norm 1:

$$\langle \psi(t) | \psi(t) \rangle = \langle \psi(t_0) | U^{\dagger} U | \psi(t_0) \rangle = \langle \psi(t_0) | \psi(t_0) \rangle = 1
$$
Thus, unitary transformations preserve the norm of the state vector, making them essential for quantum mechanics.

Unitary time evolution operators form the *quantum gates* used in quantum computation, where single qubit gates are represented by 2x2 unitary matrices such as the Hadamard gate $ H $.

### Properties of the Time Evolution Operator $ U(t, t_0) $:

-  **Composition:** The time evolution operator satisfies:
    
   $$ U(t_2, t_0) = U(t_2, t_1) U(t_1, t_0) \quad \text{for} \quad t_0 \leq t_1 \leq t_2
    $$
    This property allows us to compose quantum gates in sequences.
    
- **Inverses:** The inverse of the time evolution operator is:
    
    $$U^{\dagger}(t, t_0) = U(t_0, t)
    $$
    This implies that quantum gates are **reversible**, a fundamental characteristic of quantum mechanics.



## Postulate 4: Measurement and Probability

So far, we have seen that a quantum system or state must be represented by a unitary matrix, and it evolves over time through unitary transformations. Physical quantities are associated with Hermitian operators. But how do we know what physical values correspond to these quantities, and what is the process of measurement?

The process of **measurement** in quantum mechanics is not as straightforward as in classical mechanics. In classical mechanics, measurements can give us a definite value, but quantum mechanics introduces an element of uncertainty. When measuring physical quantities, the set of eigenvalues of the corresponding Hermitian operator gives the possible values that can be obtained from the measurement. Naturally, there is a probabilistic element to the quantum measurement process.


- Let $ A $ be a Hermitian operator (observable) with eigenvalues $ \{a_i\} $ and eigenstates $ |a_i\rangle $, where $ i = 1, \dots, d $. Then, the postulate says that measuring the observable $ A $ on the state $ |\psi\rangle $ gives the outcome $ a_i $ with probability:
    
    $$P_i = |\langle \psi | a_i \rangle|^2.
    $$
    
 - If you know the state of the system, you can predict the possible outcomes and their respective probabilities. However, each time you measure the system, you cannot predict which specific outcome will occur. By repeating the experiment many times, you can extract statistical data about the measurement outcomes.
    
- **Post-measurement state**: After obtaining the outcome $ a_i $, the state $ |\psi\rangle $ collapses to the corresponding eigenstate $ |a_i\rangle $. More precisely, the state projects onto the eigenstate $ |a_i\rangle $ associated with the measured value.


<script type="text/tikz">
\begin{tikzpicture}[scale=1.0]
    \tikzstyle myBG=[line width=3pt,opacity=1.0]

    \newcommand{\drawLatticeLine}[2]
    {
        \draw[gray!60, thick] (#1) -- (#2);
    }

    \newcommand{\drawDashedLine}[2]
    {
        \draw[red,line width = 2pt, opacity = 0.7] (#1) -- (#2);
    }

    \drawDashedLine{1,1}{1,4};
    \drawDashedLine{1,1}{4,1};
    \drawDashedLine{4,1}{4,4};
    \drawDashedLine{4,4}{1,4};

    \draw[violet,myBG] (-0.5,2.5) -- (1,2.5);
    \draw[violet,myBG] (4,1.5) -- (6,1.5);
    \draw[violet,myBG] (4,2) -- (6,2);
    \draw[violet,myBG, opacity = 1] (4,2.5) -- (6,2.5);
    \draw[violet,myBG, opacity = 1] (4,3) -- (6,3);
    \draw[violet,myBG, opacity = 1] (4,3.5) -- (6,3.5);

    \draw[violet, thick,fill=violet] (-0.5,2.5) circle (0.5cm);
    \node[anchor=center,scale=2.0] at (-0.5,2.5) {\scriptsize \textcolor{white}{$|\Psi\rangle$}};

    \node[anchor=center,scale=2.0] at (2.5,2.5) { \textcolor{red}{$A$}};
    \node[anchor=center,scale=1.0] at (2.5,2.0) { \textcolor{red}{(Apparatus)}};

    \draw[violet, thick,fill=violet] (5,3.5) circle (0.23cm);
    \node[anchor=center,scale=0.9] at (5,3.5) {\scriptsize \textcolor{white}{$|a_1\rangle$}};
    \draw[violet, thick,fill=violet] (5,3) circle (0.23cm);
    \node[anchor=center,scale=0.9] at (5,3) {\scriptsize \textcolor{white}{$|a_2\rangle$}};
    \draw[violet, thick,fill=violet] (5,2.5) circle (0.23cm);
    \node[anchor=center,scale=0.9] at (5,2.6) {\scriptsize \textcolor{white}{$\vdots$}};
    \draw[violet, thick,fill=violet] (5,2) circle (0.23cm);
    \node[anchor=center,scale=0.9] at (5,2.1) {\scriptsize \textcolor{white}{$\vdots$}};
    \draw[violet, thick,fill=violet] (5,1.5) circle (0.23cm);
    \node[anchor=center,scale=0.9] at (5,1.5) {\scriptsize \textcolor{white}{$|a_d\rangle$}};

    \draw[gray!60, thick,fill=blue] (6,3.3) rectangle +(0.6cm, 0.5cm);
    \node[anchor=center,scale=0.9] at (6.8,3.5) {\scriptsize \textcolor{white}{$P(1)$} with $a_1$};
    \draw[gray!60, thick,fill=blue] (6,2.8) rectangle +(0.6cm, 0.5cm);
    \node[anchor=center,scale=0.9] at (6.8,3) {\scriptsize \textcolor{white}{$P(2)$} with $a_2$};
    \draw[gray!60, thick,fill=blue] (6,2.3) rectangle +(0.6cm, 0.5cm);
    \node[anchor=center,scale=0.9] at (6.65,2.63) {\scriptsize \textcolor{white}{$\vdots$}~~~~ \Large\vdots};

    \draw[gray!60, thick,fill=blue] (6,1.8) rectangle +(0.6cm, 0.5cm);
    \node[anchor=center,scale=0.9] at (6.65,2.15) {\scriptsize \textcolor{white}{$\vdots$}~~~~ \Large\vdots};
    \draw[gray!60, thick, fill=blue] (6,1.3) rectangle +(0.6cm, 0.5cm);
    \node[anchor=center, scale=0.9] at (6.8,1.5) {\scriptsize \textcolor{white}{$P(d)$} with $a_d$};

\end{tikzpicture}
</script>


##  Basic Quantum Mechanics on Qiskit

{% raw %}

```liquid
{::nomarkdown}
{% assign jupyter_path = 'assets/jupyter/Basic_Quantum_Mechanics_with_Qiskit.ipynb' | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Basic_Quantum_Mechanics_with_Qiskit.ipynb %}{% endcapture %}
{% if notebook_exists == 'true' %}
  {% jupyter_notebook jupyter_path %}
{% else %}
  <p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}
{:/nomarkdown}
```
{% endraw %}
