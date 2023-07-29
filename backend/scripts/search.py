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



# start_time = time.time()
# basePath = os.path.dirname(os.path.abspath(__file__))
# df = pd.read_parquet(basePath +'/courseListWithEmbeddings.parquet', engine="pyarrow")

# df['embedding'] = df.embedding.apply(eval).apply(np.array)
# print("beginning took", time.time() - start_time)

def searchCourses(df, query, n=3, pprint=True):
   start_time = time.time()
   course_embedding = get_embedding(
        query,
        engine="text-embedding-ada-002")
   df["similarity"] = df.embedding.apply(lambda x: cosine_similarity(x, course_embedding))

   results = df.sort_values("similarity", ascending=False).head(n)
   print("searchCourse took", time.time() - start_time)
   res = results.to_dict('list')
   print("QUERY: " + query)
   for i in range(n):
    print(res["id"][i])
    print(res["description"][i])
   

   return results

def searchPinecone(query, n):
  start_time = time.time()
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
  print('QUERY: ', query)
  print(res)
  
  print("searchPinecone took:", time.time() - start_time)
  

       
def pklToCSV():
   with open("courseListWithEmbeddings.pkl", "rb") as f:
    object = pickle.load(f)
    df = pd.DataFrame(object)
    df.to_csv(r'courseListWithEmbeddings.csv')

def csvToParquet(df):
    df.to_parquet('courseListWithEmbeddings.parquet')
  
def dfToJson(df):
  jsondf = df.to_json(orient = 'records')
  with open("createCourseListWithEmbeddings.json", "w") as outfile:
    json.dump(jsondf, outfile)

searchPinecone("Marginalized communities", 5)
#dfToJson(df)