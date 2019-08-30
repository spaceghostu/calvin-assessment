module.exports = {
  name: 'calvin-assessment',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/calvin-assessment',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
