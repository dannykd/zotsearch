import pandas as pd
import numpy as np
import os
import openai
from openai.embeddings_utils import get_embedding, cosine_similarity
import pickle
from dotenv import load_dotenv
import time
import pyarrow
import pyarrow.parquet as pq
import dask.dataframe as dd
import json
import pinecone


load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


def searchFromPinecone(query, n):
  startTime = time.time()
  load_dotenv()
  pinecone.init(api_key=os.getenv("PINECONE_API_KEY"), environment=os.getenv("PINECONE_ENVIRONMENT"))
  index = pinecone.Index("zotsearch")
  res = index.query(
    vector=get_embedding(
        query,
        engine="text-embedding-ada-002"),
    top_k=n,
    include_metadata=True
  )
  endTime = time.time() - startTime
  courses = []
  for match in res["matches"]:
     courseMatch = {"id": match["id"],
                    "title": match["metadata"]["title"],
                    "desc": match["metadata"]["description"],
                    "dept": match["metadata"]["department"]}
     courses.append(courseMatch)
     
  return courses
  

if __name__ == "__main__":
    print(searchFromPinecone("Front end development or database management or networking stuff", 20))
