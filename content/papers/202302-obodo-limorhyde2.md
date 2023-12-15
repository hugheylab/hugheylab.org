---
date: 2023-12-14
slug: 2023-obodo-limorhyde2
image: 2023-obodo-limorhyde2.png
title: "LimoRhyde2: genomic analysis of biological rhythms based on effect sizes"
authors: Dora Obodo*, Elliot H. Outland*, and Jacob J. Hughey (*equal contribution)
preprint_journal: bioRxiv
preprint_doi: 10.1101/2023.02.02.526897
short_ref: Obodo / Outland and Hughey, PLOS One 2023
peer_reviewed: true
journal: PLOS One
year: 2023
doi: 10.1371/journal.pone.0292089
pdf: 2023-obodo-limorhyde2.pdf
supp: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0292089#sec013
pmid: 38096249
reviews: https://journals.plos.org/plosone/article/peerReview?id=10.1371/journal.pone.0292089
results: https://doi.org/10.6084/m9.figshare.22001519
software: /software/limorhyde2
member_ids: [obodod, outlandeh, hugheyjj]
software_ids: [limorhyde2]
---

# Abstract

Genome-scale data have revealed daily rhythms in various species and tissues. However, current methods to assess rhythmicity largely restrict their focus to quantifying statistical significance, which may not reflect biological relevance. To address this limitation, we developed a method called LimoRhyde2 (the successor to our method LimoRhyde), which focuses instead on rhythm-related effect sizes and their uncertainty. For each genomic feature, LimoRhyde2 fits a curve using a series of linear models based on periodic splines, moderates the fits using an Empirical Bayes approach called multivariate adaptive shrinkage (Mash), then uses the moderated fits to calculate rhythm statistics such as peak-to-trough amplitude. The periodic splines capture non-sinusoidal rhythmicity, while Mash uses patterns in the data to account for different fits having different levels of noise. To demonstrate LimoRhyde2's utility, we applied it to multiple circadian transcriptome datasets. Overall, LimoRhyde2 prioritized genes having high-amplitude rhythms in expression, whereas a prior method (BooteJTK) prioritized "statistically significant" genes whose amplitudes could be relatively small. Thus, quantifying effect sizes using approaches such as LimoRhyde2 has the potential to transform interpretation of genomic data related to biological rhythms.
