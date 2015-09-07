(function() {
  var demoData = {
    dinos: [
      {
        '_id': 'dino-bruhathkayosaurus',
        'name': 'Bruhathkayosaurus',
        'appeared': -70000000,
        'height': 25,
        'length': 44,
        'order': 'saurischia',
        'vanished': -70000000,
        'weight': 135000
      },
      {
        '_id': 'dino-lambeosaurus',
        'name': 'Lambeosaurus',
        'appeared': -76000000,
        'height': 2.1,
        'length': 12.5,
        'order': 'ornithischia',
        'vanished': -75000000,
        'weight': 5000
      },
      {
        '_id': 'dino-linhenykus',
        'name': 'Linhenykus',
        'appeared': -85000000,
        'height': 0.6,
        'length': 1,
        'order': 'theropoda',
        'vanished': -75000000,
        'weight': 3
      },
      {
        '_id': 'dino-pterodactyl',
        'name': 'Pterodactyl',
        'appeared': -150000000,
        'height': 0.6,
        'length': 0.8,
        'order': 'pterosauria',
        'vanished': -148500000,
        'weight': 2
      },
      {
        '_id': 'dino-stegosaurus',
        'name': 'Stegosaurus',
        'appeared': -155000000,
        'height': 4,
        'length': 9,
        'order': 'ornithischia',
        'vanished': -150000000,
        'weight': 2500
      },
      {
        '_id': 'dino-triceratops',
        'name': 'Triceratops',
        'appeared': -68000000,
        'height': 3,
        'length': 8,
        'order': 'ornithischia',
        'vanished': -66000000,
        'weight': 11000
      }
    ],

    scores: {
      '_id': 'scores',
      'bruhathkayosaurus': 55,
      'lambeosaurus': 21,
      'linhenykus': 80,
      'pterodactyl': 93,
      'stegosaurus': 5,
      'triceratops': 22
    }
  };

  var logError = console.error.bind(console);

  var db = new PouchDB('dinosaur-facts');

  db.info().then(function(info) {
    if (info.update_seq === 0) {
      return db.bulkDocs(demoData.dinos).then(function() {
        db.put(demoData.scores);
      });
    }
  }).catch(logError);
})();
