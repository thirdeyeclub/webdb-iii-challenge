//what changes are made
exports.up = function(knex, Promise) {
return knex.schema.createTable('cohorts',function(tbl){
    tbl.increments();
    tbl.string('name', 188).notNullable();
})
};
//how to undo
exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('cohorts');
};
