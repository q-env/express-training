const fs = require('fs');
const Repository = require('./repository');

class FileRepository extends Repository {
  constructor(filePath) {
    super();
    this.filePath = filePath;
  }

  save(data) {
    fs.appendFile(this.filePath, JSON.stringify(data) + '\n', (err) => {
      if (err) {
        console.error('Failed to save data:', err);
      }
    });
  }

  getAll(callback) {
    fs.readFile(this.filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Failed to read data:', err);
        callback([]);
        return;
      }

      if (!data.trim()) {
        callback([]);
        return;
      }

      try {
        const jsonDataList = data.trim().split('\n').map(line => JSON.parse(line));
        callback(jsonDataList);
      } catch (parseError) {
        console.error('Failed to parse data:', parseError);
        callback([]);
      }
    });
  }
}

module.exports = FileRepository;