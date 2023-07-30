from fastapi import FastAPI, Body
from helpers import searchFromPinecone
from pydantic import BaseModel
import json

app = FastAPI() #uvicorn main:app --reload

class Search(BaseModel):
    query: str

@app.get("/")
async def root():
    return {"message": "hello world"}

@app.post("/api/search")
async def searchCourses(search: Search):
    try:
        resp = searchFromPinecone(search.query, 20)
    except:
        return {"message": "oops something went wrong"}
    return resp

    
   