const e=JSON.parse(`{"key":"v-a6614676","path":"/dl4mt/2021/imigit/","title":"Can Visual Imagination Help Machine Translation?","lang":"en-US","frontmatter":{"title":"Can Visual Imagination Help Machine Translation?","author":"Yujie Lu","date":"2021-11-21T00:00:00.000Z","tag":["Imagination","Visual Machine Translation","ImagiT"],"category":["MT","DL4MT"],"summary":"Machine translation has helped people daily life, and is also an important research topic especially in computer science community.\\nIt expands from one language translate to another language, speech translate to text, etc.\\nToday, I'm going to talk about a paper &quot;Generative Imagination Elevates Machine Translation&quot;. I'll cover the background, challenge and motivation behind this paper. Then I'll go through some technical details of this paper as well as some in-depth analysis of their experimental settings and results. Finally, we will discuss about the potential extension of this work. Hopefully, this would give you a better understanding of this area, and point out to a promising research direction.\\n","head":[["meta",{"property":"og:url","content":"https://sanjana-moudgalya.github.io/blog/dl4mt/2021/imigit/"}],["meta",{"property":"og:site_name","content":"Evaluation of Machine Translations with Large Language Models"}],["meta",{"property":"og:title","content":"Can Visual Imagination Help Machine Translation?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://sanjana-moudgalya.github.io/blog/"}],["meta",{"property":"og:updated_time","content":"2022-09-13T03:45:15.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Can Visual Imagination Help Machine Translation?"}],["meta",{"property":"article:author","content":"Yujie Lu"}],["meta",{"property":"article:tag","content":"Imagination"}],["meta",{"property":"article:tag","content":"Visual Machine Translation"}],["meta",{"property":"article:tag","content":"ImagiT"}],["meta",{"property":"article:published_time","content":"2021-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-13T03:45:15.000Z"}]]},"excerpt":"<p>Machine translation has helped people daily life, and is also an important research topic especially in computer science community.\\nIt expands from one language translate to another language, speech translate to text, etc.\\nToday, I'm going to talk about a paper &quot;Generative Imagination Elevates Machine Translation&quot;. I'll cover the background, challenge and motivation behind this paper. Then I'll go through some technical details of this paper as well as some in-depth analysis of their experimental settings and results. Finally, we will discuss about the potential extension of this work. Hopefully, this would give you a better understanding of this area, and point out to a promising research direction.</p>\\n","headers":[{"level":2,"title":"1. Background","slug":"_1-background","link":"#_1-background","children":[{"level":3,"title":"1.1 Challenge","slug":"_1-1-challenge","link":"#_1-1-challenge","children":[]},{"level":3,"title":"1.2 Motivation","slug":"_1-2-motivation","link":"#_1-2-motivation","children":[]}]},{"level":2,"title":"2. Methodology","slug":"_2-methodology","link":"#_2-methodology","children":[{"level":3,"title":"2.1 Problem Definition","slug":"_2-1-problem-definition","link":"#_2-1-problem-definition","children":[]},{"level":3,"title":"2.2 Overview","slug":"_2-2-overview","link":"#_2-2-overview","children":[]},{"level":3,"title":"Components","slug":"components","link":"#components","children":[]}]},{"level":2,"title":"3. Experiments","slug":"_3-experiments","link":"#_3-experiments","children":[{"level":3,"title":"3.1 Datasets","slug":"_3-1-datasets","link":"#_3-1-datasets","children":[]},{"level":3,"title":"3.2 Configuration","slug":"_3-2-configuration","link":"#_3-2-configuration","children":[]},{"level":3,"title":"3.1 Results","slug":"_3-1-results","link":"#_3-1-results","children":[]}]},{"level":2,"title":"4. Conclusion and Discussin","slug":"_4-conclusion-and-discussin","link":"#_4-conclusion-and-discussin","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1663040715000,"updatedTime":1663040715000,"contributors":[{"name":"Lei Li","email":"lileicc@gmail.com","commits":1}]},"readingTime":{"minutes":4.07,"words":1222},"filePathRelative":"dl4mt/2021/imigit/README.md","localizedDate":"November 21, 2021"}`);export{e as data};
