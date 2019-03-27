
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Web01'},
        {name: 'Web17'},
        {name: 'WebEU01'},
        {name: 'IOS03'},
        {name: 'IOS05'},
        {name: 'IOS06'},
        {name: 'UX02'},
        {name: 'UX03'},
        {name: 'BAR01'}
      ]);
    });
};
