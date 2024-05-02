/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kppejofyh74z92v")

  collection.name = "Events"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kppejofyh74z92v")

  collection.name = "Agence_Immobiliere"

  return dao.saveCollection(collection)
})
