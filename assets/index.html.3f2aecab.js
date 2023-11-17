const e=JSON.parse(`{"key":"v-e648c9de","path":"/dl4mt/2021/self-training/","title":"Revisiting Self-training for Neural Sequence Generation","lang":"en-US","frontmatter":{"title":"Revisiting Self-training for Neural Sequence Generation","author":"Zekun Li","date":"2021-12-05T00:00:00.000Z","tag":["Self-training"],"category":["MT","DL4MT"],"summary":"Self-training is a very prevalent semi-supervised method. Its key idea is to augment the original labeled dataset with unlabeled data paired with the model's prediction (i.e. the pseudo-parallel data). Self-training has been widely used in classification tasks. However, will it work on sequence generation tasks (e.g. machine translation)? If so, how does it work? This blog introduces a work [1] which investigates these questions and gives the answers.\\n","head":[["meta",{"property":"og:url","content":"https://lileicc.github.io/blog/dl4mt/2021/self-training/"}],["meta",{"property":"og:site_name","content":"Evaluation of Machine Translations with Large Language Models"}],["meta",{"property":"og:title","content":"Revisiting Self-training for Neural Sequence Generation"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://lileicc.github.io/blog/"}],["meta",{"property":"og:updated_time","content":"2022-09-13T03:45:15.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Revisiting Self-training for Neural Sequence Generation"}],["meta",{"property":"article:author","content":"Zekun Li"}],["meta",{"property":"article:tag","content":"Self-training"}],["meta",{"property":"article:published_time","content":"2021-12-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-13T03:45:15.000Z"}]]},"excerpt":"<p>Self-training is a very prevalent semi-supervised method. Its key idea is to augment the original labeled dataset with unlabeled data paired with the model's prediction (i.e. the <em>pseudo-parallel</em> data). Self-training has been widely used in classification tasks. However, will it work on sequence generation tasks (e.g. machine translation)? If so, how does it work? This blog introduces a work [1] which investigates these questions and gives the answers.</p>\\n","headers":[{"level":2,"title":"1. Introduction","slug":"_1-introduction","link":"#_1-introduction","children":[]},{"level":2,"title":"2. Case Study on Machine Translation","slug":"_2-case-study-on-machine-translation","link":"#_2-case-study-on-machine-translation","children":[]},{"level":2,"title":"3. The Secret Behind Self-training","slug":"_3-the-secret-behind-self-training","link":"#_3-the-secret-behind-self-training","children":[]},{"level":2,"title":"4. The Proposed Method: Noisy Self-training","slug":"_4-the-proposed-method-noisy-self-training","link":"#_4-the-proposed-method-noisy-self-training","children":[]},{"level":2,"title":"5. Experiments","slug":"_5-experiments","link":"#_5-experiments","children":[{"level":3,"title":"Machine Translation","slug":"machine-translation","link":"#machine-translation","children":[]},{"level":3,"title":"Analysis","slug":"analysis","link":"#analysis","children":[]}]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"createdTime":1663040715000,"updatedTime":1663040715000,"contributors":[{"name":"Lei Li","email":"lileicc@gmail.com","commits":1}]},"readingTime":{"minutes":4.74,"words":1423},"filePathRelative":"dl4mt/2021/self-training/README.md","localizedDate":"December 5, 2021"}`);export{e as data};
