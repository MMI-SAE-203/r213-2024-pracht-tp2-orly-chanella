/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kppejofyh74z92v",
    "created": "2024-04-12 12:00:39.321Z",
    "updated": "2024-04-12 12:00:39.321Z",
    "name": "Agence_Immobiliere",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ubttwxur",
        "name": "maison",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kppejofyh74z92v");

  return dao.deleteCollection(collection);
})
