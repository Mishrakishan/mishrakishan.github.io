---
layout: about
title: about
permalink: /
subtitle: Researcher · Theoretical Condensed Matter Physics · Spintronics (AI/ML)

profile:
  #image_alt: "Profile picture of Kishan Mishra"
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  address: <p>University of Delhi, India</p>
  more_info: >
    <p>University of Delhi, India</p>
  #more_info: >
    #<p>555 your office number</p>
    #<p>123 your address street</p>
    #<p>Your City, State 12345</p>

blog: true # includes a list of news items
blog_title: Writing # Title for the blog section
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

Hi, I'm Kishan, a theoretical physicist (in-progress) with a passion for ML/AI and an insatiable curiosity about almost everything —from science and philosophy to history religion, technology, literature and sometimes politics.
I primarly work in theoretical condensed matter physics, particularly on topological Supercondcutors and Magnetic system: magnetic solitons such as skyrmions and domain walls. As a result, much of my research also revolves around spintronics and its applications. I have an active interest in Neuromorphic computing. Recently, I have been increasingly drawn to the foundations of topological quantum computing, especially through the use of non-Abelian anyons such as Majorana zero modes (MZMs), their braiding statistics and topological qubit architecture. 

### Research Interests

To highlight, my research interests are:

1. Topological Quantum Matter and associated phase transitions in hybrid systems, with a focus on Majorana Zero Mode physics.
2. Proximity-coupled hybrid heterostructures of semiconductors, superconductors, metals, and insulators, with emphasis on the interplay of spin–orbit coupling, symmetry, and chiral magnetic textures (such as domain walls and skyrmions) with superconductivity, and a strong interest in quantum coherence and spin-based transport in engineered materials.
3. Magnetic soliton–based neuromorphic computing and spiking neural network (SNN) architectures and algorithms.

At the end of the day, I do write [my blog](/blog/). I'd be happy to hear from you!

{% raw %}
<!-- ——— enable Abs / Bib toggle on this page ——— -->
<script>
document.addEventListener('DOMContentLoaded', () => {

  /* Abs button */
  document.querySelectorAll('.links .abstract').forEach(btn =>
    btn.addEventListener('click', () => {
      const blk = btn.closest('.entry-body').querySelector('div.abstract');  // <-- NB: div!
      blk.classList.toggle('open');
      blk.classList.toggle('hidden');
    })
  );

  /* Bib button */
  document.querySelectorAll('.links .bibtex').forEach(btn =>
    btn.addEventListener('click', () => {
      const blk = btn.closest('.entry-body').querySelector('div.bibtex');    // <-- NB: div!
      blk.classList.toggle('open');
      blk.classList.toggle('hidden');
    })
  );

});
</script>
{% endraw %}