const insert = require('./insert')

insert('aggregate with options', [{
  name: 'Squirtle', type: 'water'
}, {
  name: 'Starmie', type: 'water'
}, {
  name: 'Charmander', type: 'fire'
}, {
  name: 'Lapras', type: 'water'
}], (db, t) => {
  db.a.aggregate([{ $group: { _id: '$type' } }], { explain: true }, (err, explained) => {
    t.error(err)
    t.equal(explained[0].ok, 1)
    t.ok(explained[0].stages)
    t.end()
  })
})
