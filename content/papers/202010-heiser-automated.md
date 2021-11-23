---
date: 2021-04-09
slug: 2021-heiser-automated
image: 2021-heiser-automated.png
title: "Automated quality control and filtering of droplet-based single-cell data using dropkick"
authors: Cody N. Heiser, Victoria M. Wang, Bob Chen, Jacob J. Hughey, and Ken S. Lau
preprint_journal: bioRxiv
preprint_doi: 10.1101/2020.10.08.332288
short_ref: Heiser et al., Genome Res 2021
peer_reviewed: true
journal: Genome Research
year: 2021
doi: 10.1101/gr.271908.120
pdf: 2021-heiser-automated.pdf
supp: https://genome.cshlp.org/content/31/10/1742/suppl/DC1
pmid: 33837131
reviews:
results: https://github.com/codyheiser/dropkick-manuscript
software: /software/dropkick
member_ids: [hugheyjj]
software_ids: [dropkick]
---

# Abstract

A major challenge for droplet-based single-cell sequencing technologies is distinguishing true cells from uninformative barcodes in datasets with disparate library sizes confounded by high technical noise (i.e. batch-specific ambient RNA). We present dropkick, a fully automated software tool for quality control and filtering of single-cell RNA sequencing (scRNA-seq) data with a focus on excluding ambient barcodes and recovering real cells bordering the quality threshold. By automatically determining dataset-specific training labels based on predictive global heuristics, dropkick learns a gene-based representation of real cells and ambient noise, calculating a cell probability score for each barcode. Using simulated and real-world scRNA-seq data, we benchmarked dropkick against conventional thresholding approaches and EmptyDrops, a popular computational method, demonstrating greater recovery of rare cell types and exclusion of empty droplets and noisy, uninformative barcodes. We show for both low and high-background datasets that dropkick's weakly supervised model reliably learns which genes are enriched in ambient barcodes and draws a multidimensional boundary that is more robust to dataset-specific variation than existing filtering approaches. dropkick provides a fast, automated tool for reproducible cell identification from scRNA-seq data that is critical to downstream analysis and compatible with popular single-cell Python packages.
