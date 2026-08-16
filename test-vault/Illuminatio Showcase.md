---
scribe: Brother Ælfric
scriptorium: Northumbria
completed: 802-03-21
tags: [showcase, illuminatio]
---

In the scriptorium every book began as a beast of the field. The parchmenter took the skin, limed and scraped and stretched it, and what had grazed a Northumbrian hillside became a surface fit to [[carry the word]] for a thousand years. The scribe ruled his leaf with a dry point of lead, pricked the margins, and only then dipped his quill in [[iron-gall ink]].

What follows in this note is ordinary work: lists and tables, quotations and asides, the whole furniture of knowledge — set down as the masters of ==Kells and Lindisfarne== would have kept them, were their desks fitted with backlinks. An unfinished thought is marked [[like a missing quire]], and outside authorities [live beyond the walls](https://obsidian.md).

## Of pigments and where they are got

The painter's colours were mineral, vegetable and animal at once. Orpiment came from the mountain, woad from the field, kermes from the bodies of insects gathered on Mediterranean oaks. Ultramarine crossed two continents before it touched a page, ground from lapis lazuli mined in Badakhshan, and cost more than the gold it lay beside.

- Minium, the red lead that gave the *miniature* its name
- Orpiment, arsenic's golden sister, never to be licked from the brush
- Verdigris, scraped green from vinegared copper
- Woad and imported indigo, the workaday blues
- Folium, the turnsole purple that shifts with the weather

### The day's tasks

- [x] Rule the quire for the Psalter
- [x] Grind vermilion for the rubricator
- [ ] Gild the opening initial of John
- [ ] Beg the cellarer for better candles #scriptorium #pigments

> The book is finished. Let the scribe play. Three fingers write, but the whole body labours. — a colophon left by a tired Irish hand, ninth century

> [!note] Nota bene
> Where a medieval reader wanted attention drawn, he inked a small pointing hand in the margin. The manicule on this panel is doing exactly its ancestral job.

> [!warning]
> Orpiment and verdigris quarrel. Lay them side by side and both will blacken within the year.

> [!tip] Of the burnisher
> A dog's tooth set in a handle gives gold its mirror. Agate serves as well, and quarrels less with the gesso.

# Liber Secundus

Every art has its ranks and offices. Below the great incipit stand the lesser dignities of the page, each with its own dress.

#### Of the fourth rank
##### Of the fifth rank
###### Of the sixth rank, the least of all

## A canon of colours

| Pigment | Source | Hue | Cost |
| --- | --- | --- | --- |
| Ultramarine | Lapis lazuli, Badakhshan | Deep blue | Ruinous |
| Vermilion | Cinnabar, or alchemy | Scarlet | Dear |
| Orpiment | Arsenic sulphide | Gold-yellow | Moderate |
| Verdigris | Copper and vinegar | Blue-green | Cheap |
| Iron gall | Oak galls and vitriol | Brown-black | Everyday |

### A recipe, as the workshop kept it

```python
# De clarea - of glair, for laying gold
def lay_gold(leaf, coats=3):
    glair = beat("egg white").rest("one night")  # until it runs clear
    ground = temper(glair, "armenian bole")
    for coat in range(coats):
        leaf.apply(ground)
    leaf.breathe_warm()
    return burnish(leaf, tool="dog's tooth")
```

Inline terms such as `minium` and `lapis` sit in small schema panels, and the rule below closes the section with a line-filler, as a scribe would fill the last of a ruled line.[^1]

---

1. First gather the skins
2. Then rule the leaves
3. Only then cut the quills
	1. Goose for text
	2. Crow for fine work

[^1]: Quire marks and catchwords kept the binder from shuffling a year's work into nonsense.
