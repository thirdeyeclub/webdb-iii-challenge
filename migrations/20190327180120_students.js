
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(tbl) {
        tbl
        .increments();
    
        tbl
        .string('name', 188)
        .notNullable();
    
        tbl
        .integer('cohort_id')
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
    };
