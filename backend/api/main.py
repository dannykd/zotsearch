from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from helpers import searchFromPinecone
from pydantic import BaseModel
from mangum import Mangum

app = FastAPI() #uvicorn main:app --reload

origins = [
    "https://www.zotsearch.com",
    "http://www.zotsearch.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

handler = Mangum(app)

class Search(BaseModel):
    query: str


@app.get("/")
async def root():
    return {"message": "yo"}

@app.post("/api/search")
async def searchCourses(search: Search):
    try:
        resp = searchFromPinecone(search.query, 20)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    return resp

    
   