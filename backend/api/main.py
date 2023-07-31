from fastapi import FastAPI, HTTPException
from helpers import searchFromPinecone
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI() #uvicorn main:app --reload

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost:3001",
    "http://localhost",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

    
   