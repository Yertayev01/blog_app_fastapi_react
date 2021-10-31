from fastapi import FastAPI, Path, Query, HTTPException, status
from typing import Optional
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder

app = FastAPI()

# Run Api with `uvicorn main:app --reload`

class Item(BaseModel):
    name: str
    price: float
    brand: Optional[str] = None

class UpdateItem(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None
    brand: Optional[str] = None

inventory = {}


path = Path(
    None, # Default Parameter
    description="The ID of the item you would like to view", # Will be on /docs for the endpoint
    gt=0 # gt = greater than. you can use lt, le, ge for less, less or equal, greater or equal
    )

@app.get("/get-item/{item_id}")
def get_item(item_id: int = path):
    if item_id not in inventory:
        return HTTPException(status_code=404, detail="Item ID does not exist.")
    return inventory[item_id]

@app.get("/get-by-name")
def get_item(name: str = Query(..., title="Name", description="Name of Item")): # (...) as 1st param makes query required
    for item_id in inventory:
        item = inventory[item_id]
        if item["name"].lower() == name.lower():
            return item
    return HTTPException(status_code=404, detail="Item name not found.") # Or (status_code=status.HTTP_404_NOT_FOUND) Optional

@app.post("/create-item/{item_id}")
def create_item(item_id: int, item: Item):
    if item_id in inventory:
        return {"Error": "Item ID already exists."}
        return HTTPException(status_code=400, detail="Item ID already exists.")

    inventory[item_id] = jsonable_encoder(item)
    
    return inventory[item_id]

@app.patch("/update-item/{item_id}")
def update_item(item_id: int, item: UpdateItem):
    if item_id not in inventory:
        return HTTPException(status_code=404, detail="Item ID does not exist.")

    stored_item_data = inventory[item_id]
    stored_item_model = Item(**stored_item_data)
    update_data = item.dict(exclude_unset=True)
    updated_item = stored_item_model.copy(update=update_data)
    inventory[item_id] = jsonable_encoder(updated_item)

    return updated_item

@app.delete("/delete-item/{item_id}")
def delete_item(item_id: int):
    if item_id not in inventory:
        return {"Error": "Item ID does not exist."}

    del inventory[item_id]

    return {"Success": "Item Deleted"}