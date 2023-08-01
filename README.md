# zotsearch

A course discovery platform allowing UCI students to search for classes using natural language.

## Tech Stack

**Client:** Next.js, React, TailwindCSS

**Server:** FastAPI, AWS Lambda, PineconeDB

**External APIs:** PeterPortal, OpenAI, Pinecone


## Embeddings
It's magic but basically if you have a string of text, you can get an embedding from it using some ML model (in our case text-embedding-ada-002 from OpenAI). An embedding is a vector of floating point numbers which (somehow) represents the semantic meaning of the text. So if you have a database of embeddings, you can see which strings are semantically similar to each other by comparing the distance of their embeddings, the closer being more semantically similar. Embeddings are the core concept that allows zotsearch to function
