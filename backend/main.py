from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from youtube import search_youtube

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search")
def search(q: str):
    return search_youtube(q)