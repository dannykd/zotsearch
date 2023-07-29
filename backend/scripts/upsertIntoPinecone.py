import pinecone
import json
import os
from dotenv import load_dotenv

def upsert():
    with open("../data/courseListWithEmbeddingsForPinecone.json", "r") as read_file:
        print("Converting JSON encoded data into Python dictionary")
        courseDict = json.load(read_file)
        courseList = courseDict["vectors"]
        vectors = []
        for i, course in enumerate(courseList):
            print(i)
            id = course["id"]
            values = course["values"]
            metadata = course["metadata"]
            vectors.append((id, values, metadata))
            if (i % 100 == 0 and i !=0):
                print('UPSERTING...')
                index.upsert(vectors)
                vectors.clear()
        print('UPSERTING...')
        if vectors: index.upsert(vectors)

if __name__ == "__main__":
    load_dotenv()
    pinecone.init(api_key=os.getenv("PINECONE_API_KEY"), environment=os.getenv("PINECONE_ENVIRONMENT"))
    index = pinecone.Index("zotsearch")
    upsert()
       


