---
layout: post
title: 'Stern-Gerlach Experiment'
date: 2025-02-20 05:30
description: "Measuring Spin (Stern-Gerlach Experiment) in Quantum Computer"
tags: 
  - physics
  - quntum mechanics
  - qiskit
categories: 
  - education
featured: true

jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.4
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---
{% assign jupyter_path = "assets/jupyter/Stern_Gerlach.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/Stern_Gerlach.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

<p>Sorry, the notebook you are looking for does not exist.</p>
{% endif %}


