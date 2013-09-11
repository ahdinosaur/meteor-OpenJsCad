Package.describe({
  summary: "programmable 2D and 3D modeling tool in javascript"
});

Package.on_use(function (api) {
  api.add_files('lib/OpenJsCad/lightgl.js', 'client');
  api.export('GL', 'client');
  api.add_files('lib/OpenJsCad/csg.js', 'client');
  api.export('CSG', 'client');
  api.add_files('lib/OpenJsCad/openjscad.js', 'client');
  api.export('OpenJsCad', 'client');
});
