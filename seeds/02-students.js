
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {cohort_id: 1, name: 'subem remmin'},
        {cohort_id: 1, name: 'sirur shistei'},
        {cohort_id: 1, name: 'rirstig Amberglow'},
        {cohort_id: 1, name: 'grukrug Lionstalker'},
        {cohort_id: 1, name: 'mavam glask'},
        {cohort_id: 1, name: 'kavoy Rockwood'},
        {cohort_id: 1, name: 'chizrozos sechuuldruek'},
        {cohort_id: 1, name: 'luchuth leprahr'},
        {cohort_id: 1, name: 'zundrelve tovrudoldya'},
        {cohort_id: 1, name: 'mirli himaka'},
        {cohort_id: 2, name: 'mue teing'},
        {cohort_id: 2, name: 'xia na'},
        {cohort_id: 2, name: 'dein azavas'},
        {cohort_id: 2, name: 'feimehmeh jakhan'},
        {cohort_id: 2, name: 'turvuldreh Leafsun'},
        {cohort_id: 2, name: 'colrothoy Ashreaper'},
        {cohort_id: 2, name: 'nezuphos muekdopvek'},
        {cohort_id: 2, name: 'ave gubovzi'},
        {cohort_id: 2, name: 'rheser jeme'},
        {cohort_id: 3, name: 'Gian-Luca Auker'},
        {cohort_id: 3, name: 'Didier Leason'},
        {cohort_id: 3, name: 'Sherwood Duford'},
        {cohort_id: 3, name: 'Hurlbert Benedict'},
        {cohort_id: 3, name: 'Julissa Lover'},
        {cohort_id: 4, name: 'Journey Ottaway'},
        {cohort_id: 4, name: 'Brettany Athey'},
        {cohort_id: 5, name: 'Danielle Denmark'},
        {cohort_id: 5, name: 'Natassja Crowe'},
        {cohort_id: 5, name: 'Samy Buntin'},
        {cohort_id: 6, name: 'Soren Waller'},
        {cohort_id: 6, name: 'Christopher Pond'},
        {cohort_id: 6, name: 'Edgar Ellin'},
        {cohort_id: 6, name: 'Euphrasia Womack'},
        {cohort_id: 6, name: 'Robyn Karson'},
        {cohort_id: 7, name: 'Lacee Bugg'},
        {cohort_id: 7, name: 'Jasmeen Guyer'},
        {cohort_id: 8, name: 'Dr.Acula'},
        {cohort_id: 9, name: 'Markey Chatman'},
        {cohort_id: 9, name: 'Lowell Harrow'}
      ]);
    });
};
