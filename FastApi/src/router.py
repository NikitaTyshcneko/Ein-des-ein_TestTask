import functools
import os
from fastapi import Query
from fastapi import APIRouter
from fastapi.responses import JSONResponse
from typing import List
from src.init import DIRECTORY, folders
from src.utils import read_images_with_labels, combine_images_with_labels


router_images = APIRouter(
    prefix='/images'
)


@router_images.get("/filter")
def filter_images_by_classname(classnames: List[str] = Query(...)):
    images = functools.reduce(combine_images_with_labels,
                              map(lambda folder: read_images_with_labels(os.path.join(DIRECTORY, folder)), folders))
    filtered_images = [image for image in images if any(classname in image["classes"] for classname in classnames)]
    response_body = {"images": filtered_images}
    return response_body


@router_images.get("/{tab}")
def get_images(tab: str):
    if tab.lower() in folders:
        images = read_images_with_labels(os.path.join(DIRECTORY, tab))
    else:
        return JSONResponse(status_code=404, content={"error": "Invalid tab name"})

    response_body = {
        "images": [{"filename": image} for image in images]
    }
    return response_body
