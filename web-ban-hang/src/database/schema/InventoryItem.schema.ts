export let InventoryItemSchema = {
    $jsonSchema: {
       bsonType: "string",
       required: [ "InventoryItemID", "InventoryItemName", "UnitName", "UnitID" ],
       properties: {
        InventoryItemID: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          InventoryItemName: {
             bsonType: "string",
             description: "must be a string and is required"
          },
          UnitName: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          UnitID: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          DiscountLevel1: {
             bsonType: "double",
             description: "must be a double if the field exists"
          },
          DiscountLevel2: {
            bsonType: "double",
            description: "must be a double if the field exists"
         },
         DiscountLevel3: {
            bsonType: "double",
            description: "must be a double if the field exists"
         },
         IsOutOfStock: {
            bsonType: "bool",
            description: "must be a bool if the field exists"
         },
         InventoryItemCategoryID: {
            bsonType: "string",
            description: "must be a string if the field exists"
         },
         PromotionValue: {
            bsonType: "double",
            description: "must be a double if the field exists"
         },
         ImageUrl: {
            bsonType: ["array"],
            items: {
                bsonType: "string",
                description: "item must be a string"
            }
         },
         Description: {
            bsonType: ["string"],
            description: "item must be a string if the field exists"
         },
         TradeMarkID: {
            bsonType: ["string"],
            description: "item must be a string if the field exists"
         },
         ListPriceByType: {
            bsonType: ["object"],
            required: ["Price"],
            properties: {
                Price: {
                    bsonType: "double",
                    description: "must be a double and is required"
                 },
                 Type: {
                    enum: [1,2,3],
                    description: "Type is one of the value listed"
                 },
                 Weight: {
                    bsonType: "double",
                    description: "item must be a double if the field exists"
                 },
            }
         }
       }
    }
 }